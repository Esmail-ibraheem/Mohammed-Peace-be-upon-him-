import { MIRACLES, PROPHECIES } from '../data/miraclesAndProphecies';
import { HISTORICAL_LOCATIONS, PEOPLE } from '../data/peopleAndLocations';
import { REVELATIONS, SHAMAIL_CATEGORIES } from '../data/revelationsAndShamail';
import { SEERAH_EVENTS, TIMELINE_ERAS } from '../data/timeline';
import type {
  EvidenceGrade,
  HistoricalLocation,
  MiracleEntry,
  PersonEntry,
  ProphecyCategory,
  ProphecyEntry,
  RevelationEntry,
  SeerahEvent,
} from '../types/seerah';

export interface KnowledgeSearchHit {
  id: string;
  kind: 'event' | 'miracle' | 'prophecy' | 'person' | 'revelation' | 'location';
  titleEn: string;
  titleAr: string;
  snippetEn: string;
  snippetAr: string;
  grade?: EvidenceGrade;
  citation?: string;
  score: number;
}

export interface PersonDossier {
  person: PersonEntry;
  events: SeerahEvent[];
  locations: HistoricalLocation[];
  relatedPeople: PersonEntry[];
}

export interface LocationDossier {
  location: HistoricalLocation;
  events: SeerahEvent[];
  revelations: RevelationEntry[];
  people: PersonEntry[];
}

export function filterEvents(
  events: SeerahEvent[],
  options: {
    eraId?: string;
    grade?: EvidenceGrade | 'all';
    query?: string;
  }
): SeerahEvent[] {
  const normalizedQuery = (options.query ?? '').trim().toLowerCase();

  return events.filter((ev) => {
    if (options.eraId && options.eraId !== 'all' && ev.eraId !== options.eraId) {
      return false;
    }
    if (options.grade && options.grade !== 'all' && ev.evidenceGrade !== options.grade) {
      return false;
    }
    if (!normalizedQuery) return true;

    const haystack = [
      ev.title.en,
      ev.title.ar,
      ev.summary.en,
      ev.summary.ar,
      ev.narrative.en,
      ev.dateDisplay.en,
      ev.dateDisplay.ar,
      ...ev.sources.map((s) => `${s.book} ${s.citation}`),
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function filterProphecies(
  prophecies: ProphecyEntry[],
  category: ProphecyCategory | 'all'
): ProphecyEntry[] {
  if (category === 'all') return prophecies;
  return prophecies.filter((p) => p.category === category);
}

export function getPersonDossier(personId: string): PersonDossier | null {
  const person = PEOPLE.find((p) => p.id === personId);
  if (!person) return null;

  const events = SEERAH_EVENTS.filter((e) => e.personIds.includes(personId));
  const locations = HISTORICAL_LOCATIONS.filter((loc) =>
    person.locationIds.includes(loc.id)
  );
  const relatedPeople = PEOPLE.filter((p) =>
    person.relatedPersonIds.includes(p.id)
  );

  return { person, events, locations, relatedPeople };
}

export function getLocationDossier(locationId: string): LocationDossier | null {
  const location = HISTORICAL_LOCATIONS.find((l) => l.id === locationId);
  if (!location) return null;

  const events = SEERAH_EVENTS.filter((e) => e.locationId === locationId);
  const revelations = REVELATIONS.filter((r) => r.locationId === locationId);
  const people = PEOPLE.filter((p) => p.locationIds.includes(locationId));

  return { location, events, revelations, people };
}

export function getEvidenceCounts(): Record<EvidenceGrade, number> {
  const counts: Record<EvidenceGrade, number> = {
    quran: 0,
    sahih: 0,
    hasan: 0,
    disputed: 0,
    daif: 0,
    historical: 0,
  };

  for (const ev of SEERAH_EVENTS) {
    counts[ev.evidenceGrade] += 1;
  }
  for (const m of MIRACLES) {
    counts[m.evidenceGrade] += 1;
  }
  for (const p of PROPHECIES) {
    counts[p.evidenceGrade] += 1;
  }
  return counts;
}

export function searchKnowledgeBase(
  rawQuery: string,
  limit = 12
): KnowledgeSearchHit[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter((tok) => tok.length >= 2);
  if (tokens.length === 0) return [];

  const scoreText = (primary: string, secondary: string): number => {
    const p = primary.toLowerCase();
    const s = secondary.toLowerCase();
    let score = 0;
    if (p.includes(q)) score += 12;
    if (s.includes(q)) score += 5;
    for (const tok of tokens) {
      if (p.includes(tok)) score += 4;
      if (s.includes(tok)) score += 1.5;
    }
    return score;
  };

  const hits: KnowledgeSearchHit[] = [];

  for (const ev of SEERAH_EVENTS) {
    const primary = `${ev.title.en} ${ev.title.ar} ${ev.dateDisplay.en}`;
    const secondary = `${ev.summary.en} ${ev.summary.ar} ${ev.narrative.en} ${ev.scholarlyNotes?.en ?? ''} ${ev.sources
      .map((s) => `${s.book} ${s.citation}`)
      .join(' ')}`;
    const score = scoreText(primary, secondary);
    if (score > 0) {
      hits.push({
        id: ev.id,
        kind: 'event',
        titleEn: ev.title.en,
        titleAr: ev.title.ar,
        snippetEn: ev.summary.en,
        snippetAr: ev.summary.ar,
        grade: ev.evidenceGrade,
        citation: ev.sources[0]
          ? `${ev.sources[0].book} (${ev.sources[0].citation})`
          : undefined,
        score,
      });
    }
  }

  for (const m of MIRACLES) {
    const primary = `${m.title.en} ${m.title.ar}`;
    const secondary = `${m.summary.en} ${m.summary.ar} ${m.context.en} ${m.scholarlyCommentary.en}`;
    const score = scoreText(primary, secondary);
    if (score > 0) {
      hits.push({
        id: m.id,
        kind: 'miracle',
        titleEn: m.title.en,
        titleAr: m.title.ar,
        snippetEn: m.summary.en,
        snippetAr: m.summary.ar,
        grade: m.evidenceGrade,
        citation: m.sources[0]
          ? `${m.sources[0].book} (${m.sources[0].citation})`
          : undefined,
        score,
      });
    }
  }

  for (const pr of PROPHECIES) {
    const primary = `${pr.title.en} ${pr.title.ar}`;
    const secondary = `${pr.originalNarration.en} ${pr.historicalFulfillmentOrInterpretation.en} ${pr.scholarlyDistinction.en}`;
    const score = scoreText(primary, secondary);
    if (score > 0) {
      hits.push({
        id: pr.id,
        kind: 'prophecy',
        titleEn: pr.title.en,
        titleAr: pr.title.ar,
        snippetEn: pr.originalNarration.en,
        snippetAr: pr.originalNarration.ar,
        grade: pr.evidenceGrade,
        citation: pr.sources[0]
          ? `${pr.sources[0].book} (${pr.sources[0].citation})`
          : undefined,
        score,
      });
    }
  }

  for (const person of PEOPLE) {
    const primary = `${person.name.en} ${person.name.ar} ${person.relationToProphet.en}`;
    const secondary = `${person.biography.en} ${person.biography.ar} ${person.keyVirtueOrRole.en}`;
    const score = scoreText(primary, secondary);
    if (score > 0) {
      hits.push({
        id: person.id,
        kind: 'person',
        titleEn: person.name.en,
        titleAr: person.name.ar,
        snippetEn: person.biography.en,
        snippetAr: person.biography.ar,
        grade: person.sources[0]?.grade,
        citation: person.sources[0]
          ? `${person.sources[0].book} (${person.sources[0].citation})`
          : undefined,
        score,
      });
    }
  }

  for (const rev of REVELATIONS) {
    const primary = `${rev.surahName.en} ${rev.surahName.ar} ${rev.title.en} ${rev.ayahRange}`;
    const secondary = `${rev.translation} ${rev.occasionOfRevelation.en} ${rev.tafsirSummary.en}`;
    const score = scoreText(primary, secondary);
    if (score > 0) {
      hits.push({
        id: rev.id,
        kind: 'revelation',
        titleEn: `${rev.surahName.en} (${rev.ayahRange}) — ${rev.title.en}`,
        titleAr: `${rev.surahName.ar} (${rev.ayahRange}) — ${rev.title.ar}`,
        snippetEn: rev.occasionOfRevelation.en,
        snippetAr: rev.occasionOfRevelation.ar,
        grade: rev.evidenceGrade,
        citation: `${rev.hadithReference.book} (${rev.hadithReference.citation})`,
        score,
      });
    }
  }

  for (const loc of HISTORICAL_LOCATIONS) {
    const primary = `${loc.name.en} ${loc.name.ar} ${loc.region.en}`;
    const secondary = `${loc.summary.en} ${loc.historicalSignificance.en}`;
    const score = scoreText(primary, secondary);
    if (score > 0) {
      hits.push({
        id: loc.id,
        kind: 'location',
        titleEn: loc.name.en,
        titleAr: loc.name.ar,
        snippetEn: loc.summary.en,
        snippetAr: loc.summary.ar,
        score,
      });
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

export function buildGroundedContext(query: string): {
  hits: KnowledgeSearchHit[];
  contextText: string;
} {
  const hits = searchKnowledgeBase(query, 6);
  const lines = hits.map((h, i) => {
    const gradeStr = h.grade ? ` [Grade: ${h.grade.toUpperCase()}]` : '';
    const citeStr = h.citation ? ` [Source: ${h.citation}]` : '';
    return `${i + 1}. (${h.kind.toUpperCase()}) ${h.titleEn}${gradeStr}${citeStr}\n   Summary: ${h.snippetEn}`;
  });

  // Also check Shamail if query matches character/daily life terms
  const qLower = query.toLowerCase();
  const shamailMatches = SHAMAIL_CATEGORIES.filter(
    (s) =>
      s.title.en.toLowerCase().includes(qLower) ||
      s.summary.en.toLowerCase().includes(qLower) ||
      qLower.includes('character') ||
      qLower.includes('food') ||
      qLower.includes('cloth') ||
      qLower.includes('children') ||
      qLower.includes('animal')
  ).slice(0, 2);

  for (const s of shamailMatches) {
    lines.push(
      `SHAMAIL: ${s.title.en} — ${s.summary.en} (${s.narrations[0]?.source ?? 'Al-Shama’il'})`
    );
  }

  return {
    hits,
    contextText:
      lines.length > 0
        ? lines.join('\n')
        : 'No direct matching entries were found in the local archive for this specific query.',
  };
}

export function calculateQuizScore(
  answers: Record<string, number>,
  correctMap: Record<string, number>
): { answered: number; correct: number; total: number; percentage: number } {
  const total = Object.keys(correctMap).length;
  let answered = 0;
  let correct = 0;

  for (const [id, correctIdx] of Object.entries(correctMap)) {
    if (typeof answers[id] === 'number') {
      answered += 1;
      if (answers[id] === correctIdx) {
        correct += 1;
      }
    }
  }

  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  return { answered, correct, total, percentage };
}

export function getArchiveStats() {
  return {
    eras: TIMELINE_ERAS.length,
    events: SEERAH_EVENTS.length,
    miracles: MIRACLES.length,
    prophecies: PROPHECIES.length,
    people: PEOPLE.length,
    locations: HISTORICAL_LOCATIONS.length,
    revelations: REVELATIONS.length,
    shamail: SHAMAIL_CATEGORIES.length,
  };
}

export function getMiracleById(id: string): MiracleEntry | undefined {
  return MIRACLES.find((m) => m.id === id);
}
