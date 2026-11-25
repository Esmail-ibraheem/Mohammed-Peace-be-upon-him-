import test from 'node:test';
import assert from 'node:assert/strict';
import { SEERAH_EVENTS } from '../data/timeline';
import { PROPHECIES } from '../data/miraclesAndProphecies';
import {
  buildGroundedContext,
  calculateQuizScore,
  filterEvents,
  filterProphecies,
  getArchiveStats,
  getEvidenceCounts,
  getLocationDossier,
  getPersonDossier,
  searchKnowledgeBase,
} from './seerahEngine';

test('archive stats include all 9 chronological eras and core collections', () => {
  const stats = getArchiveStats();
  assert.equal(stats.eras, 9);
  assert.ok(stats.events >= 20, 'should contain rich chronological events');
  assert.ok(stats.miracles >= 12, 'should contain 12 miracles');
  assert.ok(stats.prophecies >= 14, 'should contain 14 prophecies');
  assert.ok(stats.people >= 20, 'should contain interconnected biographies');
  assert.ok(stats.locations >= 15, 'should contain historical locations');
  assert.equal(stats.shamail, 12, 'should contain all 12 Shamail categories');
});

test('filterEvents filters by era, evidence grade, and bilingual search query', () => {
  const hijrahEvents = filterEvents(SEERAH_EVENTS, { eraId: 'the-hijrah' });
  assert.ok(hijrahEvents.length >= 2);
  assert.ok(hijrahEvents.every((e) => e.eraId === 'the-hijrah'));

  const disputedEvents = filterEvents(SEERAH_EVENTS, { grade: 'disputed' });
  assert.ok(disputedEvents.some((e) => e.id === 'bahira-syria-journey'));

  const arabicMatch = filterEvents(SEERAH_EVENTS, { query: 'غار حراء' });
  assert.ok(arabicMatch.some((e) => e.id === 'first-revelation-hira'));
});

test('getPersonDossier cross-links Khadijah to events, locations, and family', () => {
  const dossier = getPersonDossier('khadijah');
  assert.ok(dossier);
  assert.equal(dossier.person.id, 'khadijah');
  assert.ok(dossier.events.some((e) => e.id === 'marriage-khadijah'));
  assert.ok(dossier.events.some((e) => e.id === 'first-revelation-hira'));
  assert.ok(dossier.events.some((e) => e.id === 'boycott-year-of-sorrow'));
  assert.ok(dossier.locations.some((l) => l.id === 'makkah-kaaba'));
  assert.ok(dossier.relatedPeople.some((p) => p.id === 'fatimah'));
});

test('getLocationDossier returns linked events and revelations for Cave of Hira', () => {
  const hira = getLocationDossier('cave-of-hira');
  assert.ok(hira);
  assert.ok(hira.events.some((e) => e.id === 'first-revelation-hira'));
  assert.ok(hira.revelations.some((r) => r.id === 'rev-alaq'));
});

test('searchKnowledgeBase ranks relevant multi-entity matches and builds grounded context', () => {
  const hits = searchKnowledgeBase('Hudaybiyyah water');
  assert.ok(hits.length > 0);
  assert.ok(
    hits.some((h) => h.id === 'treaty-hudaybiyyah' || h.id === 'multiplication-of-water')
  );

  const grounded = buildGroundedContext('Cave of Thawr spider');
  assert.ok(grounded.hits.some((h) => h.id === 'cave-of-thawr'));
  assert.ok(grounded.contextText.includes('Cave of Thawr'));
});

test('filterProphecies separates categories cleanly', () => {
  const future = filterProphecies(PROPHECIES, 'future');
  assert.ok(future.length >= 4);
  assert.ok(future.every((p) => p.category === 'future'));

  const disputed = filterProphecies(PROPHECIES, 'disputed');
  assert.ok(disputed.some((p) => p.id === 'tall-buildings-competition'));
});

test('evidence counts and quiz scoring compute accurately', () => {
  const counts = getEvidenceCounts();
  assert.ok(counts.quran > 0);
  assert.ok(counts.sahih > 0);

  const score = calculateQuizScore(
    { q1: 1, q2: 0, q3: 0 },
    { q1: 1, q2: 2, q3: 0, q4: 1 }
  );
  assert.equal(score.answered, 3);
  assert.equal(score.correct, 2);
  assert.equal(score.total, 4);
  assert.equal(score.percentage, 50);
});
