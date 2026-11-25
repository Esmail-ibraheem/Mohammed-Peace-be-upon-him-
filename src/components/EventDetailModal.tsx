import { useEffect } from 'react';
import { Bookmark, BookmarkCheck, MapPin, Users, BookOpen, X } from 'lucide-react';
import { EVIDENCE_META, UI_TEXT, t } from '../data/i18n';
import { HISTORICAL_LOCATIONS, PEOPLE } from '../data/peopleAndLocations';
import { REVELATIONS } from '../data/revelationsAndShamail';
import { TIMELINE_ERAS } from '../data/timeline';
import type { Language, SeerahEvent } from '../types/seerah';
import { ArchivalImage } from './ArchivalImage';
import { EvidenceStamp } from './EvidenceStamp';

interface EventDetailModalProps {
  event: SeerahEvent | null;
  lang: Language;
  isBookmarked: boolean;
  onToggleBookmark: (eventId: string) => void;
  onClose: () => void;
  onSelectPerson: (personId: string) => void;
  onSelectLocation: (locationId: string) => void;
  onSelectRevelation: (revelationId: string) => void;
}

export function EventDetailModal({
  event,
  lang,
  isBookmarked,
  onToggleBookmark,
  onClose,
  onSelectPerson,
  onSelectLocation,
  onSelectRevelation,
}: EventDetailModalProps) {
  useEffect(() => {
    if (!event) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [event, onClose]);

  if (!event) return null;

  const era = TIMELINE_ERAS.find((e) => e.id === event.eraId);
  const location = HISTORICAL_LOCATIONS.find((l) => l.id === event.locationId);
  const linkedPeople = PEOPLE.filter((p) => event.personIds.includes(p.id));
  const linkedRevelations = REVELATIONS.filter((r) =>
    event.revelationIds?.includes(r.id)
  );
  const evidenceInfo = EVIDENCE_META[event.evidenceGrade];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-dossier-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101B17]/75 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-[#C5A46D]/30 bg-[#F9F6EF] text-[#272521] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Archival Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[#272521]/10 bg-[#F9F6EF]/95 px-6 py-4 backdrop-blur-xs">
          <div className="text-xs text-[#5E594F]">
            {era && (
              <span>
                {era.number}. {t(era.title, lang)}
              </span>
            )}
            <span aria-hidden="true" className="mx-2">·</span>
            <span className="tabular-nums">{t(event.dateDisplay, lang)}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onToggleBookmark(event.id)}
              className="inline-flex items-center gap-1.5 border border-[#272521]/15 px-3 py-1.5 text-xs font-medium text-[#101B17] transition-colors hover:bg-[#F2E8D5]"
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-3.5 w-3.5 text-[#9E7E49]" />
              ) : (
                <Bookmark className="h-3.5 w-3.5" />
              )}
              <span>
                {isBookmarked
                  ? t(UI_TEXT.workspace.savedBookmark, lang)
                  : t(UI_TEXT.workspace.saveBookmark, lang)}
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={t(UI_TEXT.workspace.close, lang)}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#272521]/15 text-[#272521] transition-colors hover:bg-[#101B17] hover:text-[#F9F6EF]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <EvidenceStamp
            grade={event.evidenceGrade}
            datePrecision={event.datePrecision}
            dateText={t(event.dateDisplay, lang)}
            lang={lang}
          />

          <h2
            id="event-dossier-title"
            className="mt-3 font-editorial text-3xl font-semibold leading-tight text-[#101B17] sm:text-4xl"
          >
            {t(event.title, lang)}
          </h2>

          {event.imageUrl && (
            <div className="mt-6">
              <ArchivalImage
                src={event.imageUrl}
                alt={t(event.title, lang)}
                caption={
                  location
                    ? `${t(location.name, lang)} — ${t(location.region, lang)}`
                    : undefined
                }
                aspectClass="aspect-[21/9]"
              />
            </div>
          )}

          {/* Narrative Prose */}
          <div className="mt-7 max-w-prose space-y-4 text-base leading-relaxed text-[#272521]">
            <p className="font-medium text-[#101B17]">{t(event.summary, lang)}</p>
            <p className="text-[#272521]/90">{t(event.narrative, lang)}</p>
          </div>

          {/* Primary Arabic Quotation */}
          {event.arabicQuote && (
            <div className="mt-8 border-y border-[#C5A46D]/40 bg-[#F2E8D5]/55 px-6 py-6 text-center">
              <p
                dir="rtl"
                className="font-arabic text-2xl leading-loose text-[#101B17] sm:text-3xl"
              >
                {event.arabicQuote}
              </p>
              {event.arabicQuoteTranslation && (
                <p
                  dir="ltr"
                  className="mx-auto mt-3 max-w-2xl font-editorial text-base italic text-[#5E594F]"
                >
                  “{event.arabicQuoteTranslation}”
                </p>
              )}
            </div>
          )}

          {/* Scholarly Differences & Authenticity Assessment */}
          {event.scholarlyNotes && (
            <div className="mt-8 border border-[#C5A46D]/40 bg-[#F2E8D5]/40 p-5">
              <h3 className="font-editorial text-lg font-semibold text-[#101B17]">
                {t(UI_TEXT.workspace.scholarlyNotes, lang)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#272521]/90">
                {t(event.scholarlyNotes, lang)}
              </p>
            </div>
          )}

          {/* Primary Sources Table */}
          <div className="mt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#272521]/15 pb-2">
              <h3 className="font-editorial text-xl font-semibold text-[#101B17]">
                {t(UI_TEXT.workspace.primarySources, lang)}
              </h3>
              <span className="text-xs text-[#5E594F]">
                {t(evidenceInfo.label, lang)} — {t(evidenceInfo.description, lang)}
              </span>
            </div>
            <dl className="divide-y divide-[#272521]/10">
              {event.sources.map((src, idx) => (
                <div
                  key={`${src.book}-${idx}`}
                  className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4"
                >
                  <dt className="text-sm font-medium text-[#101B17]">
                    {lang === 'ar' ? src.bookAr : src.book}
                  </dt>
                  <dd className="text-sm text-[#5E594F] sm:col-span-2">
                    <span className="tabular-nums">{src.citation}</span>
                    <span aria-hidden="true" className="mx-2">·</span>
                    <span className={`font-medium ${EVIDENCE_META[src.grade].accentClass}`}>
                      {t(EVIDENCE_META[src.grade].label, lang)}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Interconnected Knowledge Graph Links */}
          <div className="mt-8 grid gap-6 border-t border-[#272521]/15 pt-6 sm:grid-cols-2">
            {location && (
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#5E594F]">
                  <MapPin className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
                  <span>{t(UI_TEXT.workspace.connectedLocation, lang)}</span>
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectLocation(location.id);
                  }}
                  className="mt-2 block text-start text-sm font-medium text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 transition-colors hover:text-[#9E7E49]"
                >
                  {t(location.name, lang)} ({t(location.region, lang)})
                </button>
              </div>
            )}

            {linkedPeople.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#5E594F]">
                  <Users className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
                  <span>{t(UI_TEXT.workspace.connectedPeople, lang)}</span>
                </h4>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {linkedPeople.map((person) => (
                    <button
                      key={person.id}
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectPerson(person.id);
                      }}
                      className="text-sm font-medium text-[#101B17] underline decoration-[#C5A46D]/70 underline-offset-4 transition-colors hover:text-[#9E7E49]"
                    >
                      {t(person.name, lang)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {linkedRevelations.length > 0 && (
              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#5E594F]">
                  <BookOpen className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
                  <span>{t(UI_TEXT.workspace.connectedRevelations, lang)}</span>
                </h4>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                  {linkedRevelations.map((rev) => (
                    <button
                      key={rev.id}
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectRevelation(rev.id);
                      }}
                      className="text-sm font-medium text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 transition-colors hover:text-[#9E7E49]"
                    >
                      {t(rev.surahName, lang)} ({rev.ayahRange}) — {t(rev.title, lang)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
