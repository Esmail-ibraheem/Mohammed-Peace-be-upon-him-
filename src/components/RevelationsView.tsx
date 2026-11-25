import { useMemo, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { MUSEUM_IMAGES } from '../data/assets';
import { t } from '../data/i18n';
import { HISTORICAL_LOCATIONS } from '../data/peopleAndLocations';
import { REVELATIONS } from '../data/revelationsAndShamail';
import { SEERAH_EVENTS } from '../data/timeline';
import type { Language, SeerahEvent } from '../types/seerah';
import { ArchivalImage } from './ArchivalImage';
import { EvidenceStamp } from './EvidenceStamp';

interface RevelationsViewProps {
  lang: Language;
  initialRevelationId?: string | null;
  onSelectEvent: (event: SeerahEvent) => void;
  onSelectLocation: (locationId: string) => void;
}

export function RevelationsView({
  lang,
  initialRevelationId,
  onSelectEvent,
  onSelectLocation,
}: RevelationsViewProps) {
  const [periodFilter, setPeriodFilter] = useState<'all' | 'makkan' | 'madinan'>('all');
  const [selectedId, setSelectedId] = useState<string>(
    initialRevelationId ?? REVELATIONS[0].id
  );

  const visibleRevelations = useMemo(() => {
    if (periodFilter === 'all') return REVELATIONS;
    return REVELATIONS.filter((r) => r.period === periodFilter);
  }, [periodFilter]);

  const activeRev =
    REVELATIONS.find((r) => r.id === selectedId) ??
    visibleRevelations[0] ??
    REVELATIONS[0];

  const linkedLocation = HISTORICAL_LOCATIONS.find(
    (l) => l.id === activeRev.locationId
  );
  const linkedEvent = SEERAH_EVENTS.find((e) => e.id === activeRev.eventId);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#272521]/15 pb-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-medium ltr:tracking-widest rtl:tracking-normal text-[#9E7E49]">
            {lang === 'ar'
              ? 'الوحي في سياق السيرة وأسباب النزول'
              : 'CHRONOLOGICAL QUR’AN REVELATION TIMELINE · ASBAB AL-NUZUL'}
          </p>
          <h1 className="mt-1 font-editorial text-3xl font-semibold text-[#101B17] sm:text-5xl">
            {lang === 'ar' ? 'تاريخ نزول الوحي الكريم' : 'Revelations Alongside History'}
          </h1>
        </div>

        <div className="flex items-center gap-1.5">
          {(
            [
              { id: 'all', label: { en: 'All Revelations', ar: 'جميع الآيات' } },
              { id: 'makkan', label: { en: 'Makkan Period', ar: 'العهد المكي' } },
              { id: 'madinan', label: { en: 'Madinan Period', ar: 'العهد المدني' } },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setPeriodFilter(tab.id)}
              className={`px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                periodFilter === tab.id
                  ? 'bg-[#101B17] text-[#F9F6EF]'
                  : 'border border-[#272521]/15 bg-[#F9F6EF] text-[#5E594F] hover:text-[#101B17]'
              }`}
            >
              {t(tab.label, lang)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Exhibition Split: Chronological List + Manuscript Specimen Card */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="divide-y divide-[#272521]/10 border border-[#272521]/12 bg-[#F9F6EF] lg:col-span-4">
          {visibleRevelations.map((rev, idx) => {
            const active = rev.id === activeRev.id;
            return (
              <button
                key={rev.id}
                type="button"
                onClick={() => setSelectedId(rev.id)}
                className={`flex w-full items-start justify-between gap-3 p-4 text-start transition-colors ${
                  active
                    ? 'bg-[#101B17] text-[#F9F6EF]'
                    : 'hover:bg-[#F2E8D5]/55'
                }`}
              >
                <div>
                  <div
                    className={`text-[11px] tabular-nums ${
                      active ? 'text-[#C5A46D]' : 'text-[#5E594F]'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')} ·{' '}
                    {rev.period === 'makkan'
                      ? lang === 'ar'
                        ? 'مكي'
                        : 'Makkan'
                      : lang === 'ar'
                        ? 'مدني'
                        : 'Madinan'}{' '}
                    · {t(rev.yearDisplay, lang)}
                  </div>
                  <div className="mt-1 font-editorial text-xl font-semibold">
                    {t(rev.surahName, lang)}{' '}
                    <span dir="ltr" className="inline-block text-sm font-normal opacity-75 tabular-nums">
                      {rev.ayahRange}
                    </span>
                  </div>
                  <div
                    className={`mt-0.5 text-xs ${
                      active ? 'text-[#F2E8D5]/80' : 'text-[#5E594F]'
                    }`}
                  >
                    {t(rev.title, lang)}
                  </div>
                </div>
                <ArrowRight
                  className={`mt-1 h-4 w-4 shrink-0 rtl:rotate-180 ${
                    active ? 'text-[#C5A46D]' : 'text-[#5E594F]/40'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* Specimen Reading Canvas */}
        <article className="border border-[#272521]/12 bg-[#F9F6EF] lg:col-span-8">
          <div className="border-b border-[#272521]/10 bg-[#101B17] p-6 text-[#F9F6EF] sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#C5A46D]">
              <span>
                {activeRev.period === 'makkan'
                  ? lang === 'ar'
                    ? 'العهد المكي'
                    : 'MAKKAN PERIOD'
                  : lang === 'ar'
                    ? 'العهد المدني'
                    : 'MADINAN PERIOD'}{' '}
                · {t(activeRev.yearDisplay, lang)}
              </span>
              <span className="tabular-nums">
                {t(activeRev.surahName, lang)} ·{' '}
                <span dir="ltr" className="inline-block">
                  {activeRev.ayahRange}
                </span>
              </span>
            </div>

            <h2 className="mt-3 font-editorial text-3xl font-semibold text-[#F9F6EF] sm:text-4xl">
              {t(activeRev.title, lang)}
            </h2>

            {/* Illuminated Arabic Verse Block */}
            <div className="mt-7 border-y border-[#C5A46D]/35 py-7 text-center">
              <p
                dir="rtl"
                className="font-arabic text-3xl leading-[2.1] text-[#C5A46D] sm:text-4xl"
              >
                {activeRev.arabicAyah}
              </p>
              <p
                dir="ltr"
                className="mx-auto mt-4 max-w-2xl font-editorial text-lg italic text-[#F2E8D5]/90"
              >
                “{activeRev.translation}”
              </p>
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-10">
            {activeRev.imageUrl && (
              <ArchivalImage
                src={activeRev.imageUrl ?? MUSEUM_IMAGES.manuscript}
                alt={t(activeRev.title, lang)}
                caption={
                  linkedLocation
                    ? `${t(linkedLocation.name, lang)} — ${t(activeRev.yearDisplay, lang)}`
                    : undefined
                }
                aspectClass="aspect-[21/9]"
              />
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-editorial text-xl font-semibold text-[#101B17]">
                  {lang === 'ar'
                    ? 'سبب النزول والسياق التاريخي'
                    : 'Occasion of Revelation (Asbab al-Nuzul)'}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#272521]">
                  {t(activeRev.occasionOfRevelation, lang)}
                </p>
              </div>
              <div>
                <h3 className="font-editorial text-xl font-semibold text-[#101B17]">
                  {lang === 'ar' ? 'الدلالة والتفسير' : 'Tafsir & Historical Significance'}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5E594F]">
                  {t(activeRev.tafsirSummary, lang)}
                </p>
              </div>
            </div>

            {/* Related Information Metadata Grid */}
            <div className="grid gap-4 border-t border-[#272521]/15 pt-5 sm:grid-cols-3">
              <div>
                <div className="text-xs text-[#5E594F]">
                  {lang === 'ar' ? 'الموضع التاريخي' : 'Location'}
                </div>
                {linkedLocation && (
                  <button
                    type="button"
                    onClick={() => onSelectLocation(linkedLocation.id)}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 hover:text-[#9E7E49]"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
                    <span>{t(linkedLocation.name, lang)}</span>
                  </button>
                )}
              </div>

              <div>
                <div className="text-xs text-[#5E594F]">
                  {lang === 'ar' ? 'المصدر الحديثي' : 'Hadith Verification'}
                </div>
                <div className="mt-1 text-sm font-medium text-[#101B17]">
                  {lang === 'ar'
                    ? activeRev.hadithReference.bookAr
                    : activeRev.hadithReference.book}
                </div>
                <div className="text-xs text-[#5E594F] tabular-nums">
                  {activeRev.hadithReference.citation}
                </div>
                <div className="mt-1">
                  <EvidenceStamp grade={activeRev.evidenceGrade} lang={lang} />
                </div>
              </div>

              <div>
                <div className="text-xs text-[#5E594F]">
                  {lang === 'ar' ? 'الحدث المرتبط في السيرة' : 'Connected Seerah Event'}
                </div>
                {linkedEvent && (
                  <button
                    type="button"
                    onClick={() => onSelectEvent(linkedEvent)}
                    className="mt-1 inline-flex items-center gap-1.5 text-start text-sm font-medium text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 hover:text-[#9E7E49]"
                  >
                    <span>{t(linkedEvent.title, lang)}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 rtl:rotate-180" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
