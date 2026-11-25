export type Language = 'en' | 'ar';

export interface BilingualText {
  en: string;
  ar: string;
}

export type EvidenceGrade =
  | 'quran'
  | 'sahih'
  | 'hasan'
  | 'disputed'
  | 'daif'
  | 'historical';

export type DatePrecision = 'exact' | 'approximate' | 'disputed';

export interface SourceReference {
  book: string;
  bookAr: string;
  citation: string;
  grade: EvidenceGrade;
  note?: BilingualText;
}

export interface TimelineEra {
  id: string;
  number: string;
  title: BilingualText;
  dateRange: BilingualText;
  summary: BilingualText;
  imageUrl: string;
}

export interface SeerahEvent {
  id: string;
  eraId: string;
  yearCE: number;
  dateDisplay: BilingualText;
  hijriDate?: BilingualText;
  datePrecision: DatePrecision;
  title: BilingualText;
  summary: BilingualText;
  narrative: BilingualText;
  evidenceGrade: EvidenceGrade;
  sources: SourceReference[];
  arabicQuote?: string;
  arabicQuoteTranslation?: string;
  scholarlyNotes?: BilingualText;
  locationId: string;
  personIds: string[];
  revelationIds?: string[];
  miracleIds?: string[];
  prophecyIds?: string[];
  imageUrl?: string;
}

export interface MiracleEntry {
  id: string;
  title: BilingualText;
  category: BilingualText;
  summary: BilingualText;
  context: BilingualText;
  arabicText: string;
  translation: string;
  evidenceGrade: EvidenceGrade;
  sources: SourceReference[];
  scholarlyCommentary: BilingualText;
  eventId?: string;
  locationId?: string;
  featured?: boolean;
  imageUrl?: string;
}

export type ProphecyCategory =
  | 'lifetime'
  | 'historical'
  | 'disputed'
  | 'future';

export interface ProphecyEntry {
  id: string;
  title: BilingualText;
  category: ProphecyCategory;
  eraLabel: BilingualText;
  originalNarration: BilingualText;
  arabicText: string;
  historicalFulfillmentOrInterpretation: BilingualText;
  scholarlyDistinction: BilingualText;
  evidenceGrade: EvidenceGrade;
  sources: SourceReference[];
  eventId?: string;
}

export type PersonGroup =
  | 'ancestor'
  | 'parent'
  | 'foster'
  | 'wife'
  | 'child'
  | 'grandchild'
  | 'companion'
  | 'uncle'
  | 'opponent';

export interface PersonEntry {
  id: string;
  name: BilingualText;
  honorific?: BilingualText;
  lifespan: BilingualText;
  group: PersonGroup;
  relationToProphet: BilingualText;
  biography: BilingualText;
  keyVirtueOrRole: BilingualText;
  sources: SourceReference[];
  locationIds: string[];
  relatedPersonIds: string[];
}

export interface HistoricalLocation {
  id: string;
  name: BilingualText;
  region: BilingualText;
  type: 'sanctuary' | 'mountain' | 'city' | 'battlefield' | 'route_stop';
  x: number; // SVG map coordinate 0-1000
  y: number; // SVG map coordinate 0-620
  summary: BilingualText;
  historicalSignificance: BilingualText;
  coordinatesNote: BilingualText;
}

export interface HistoricalRoute {
  id: string;
  name: BilingualText;
  period: BilingualText;
  description: BilingualText;
  approximateNotice: BilingualText;
  color: string;
  pathD: string;
  stopLocationIds: string[];
}

export interface RevelationEntry {
  id: string;
  surahName: BilingualText;
  surahNumber: number;
  ayahRange: string;
  period: 'makkan' | 'madinan';
  yearDisplay: BilingualText;
  title: BilingualText;
  arabicAyah: string;
  translation: string;
  occasionOfRevelation: BilingualText;
  tafsirSummary: BilingualText;
  evidenceGrade: EvidenceGrade;
  hadithReference: SourceReference;
  locationId: string;
  eventId: string;
  imageUrl?: string;
}

export interface ShamailCategory {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  summary: BilingualText;
  narrations: {
    arabic: string;
    english: string;
    source: string;
    grade: EvidenceGrade;
  }[];
}

export interface ClassicalSourceGuide {
  id: string;
  name: BilingualText;
  author: BilingualText;
  era: BilingualText;
  purpose: BilingualText;
  methodologyNote: BilingualText;
  url?: string;
}

export interface QuizQuestion {
  id: string;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
  sourceCitation: string;
  evidenceGrade: EvidenceGrade;
}

export interface HijriDayEntry {
  id: string;
  hijriDay: string;
  hijriMonth: BilingualText;
  eventId: string;
  title: BilingualText;
  summary: BilingualText;
  evidenceGrade: EvidenceGrade;
}

export type ActiveSection =
  | 'timeline'
  | 'encyclopedia'
  | 'atlas'
  | 'people'
  | 'revelations';

export type EncyclopediaTab =
  | 'miracles'
  | 'prophecies'
  | 'shamail'
  | 'sources'
  | 'learning';
