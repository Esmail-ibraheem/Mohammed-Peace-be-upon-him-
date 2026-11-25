import { useMemo, useState } from 'react';
import { ArrowRight, Bookmark, BookmarkCheck, Calendar, Play } from 'lucide-react';
import { MUSEUM_IMAGES } from '../data/assets';
import { EVIDENCE_META, UI_TEXT, t } from '../data/i18n';
import { HIJRI_HIGHLIGHTS } from '../data/revelationsAndShamail';
import { SEERAH_EVENTS, TIMELINE_ERAS } from '../data/timeline';
import type { EvidenceGrade, Language, SeerahEvent } from '../types/seerah';
import { filterEvents, getArchiveStats } from '../utils/seerahEngine';
import { EvidenceStamp } from './EvidenceStamp';

interface TimelineViewProps {
  lang: Language;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectEvent: (event: SeerahEvent) => void;
  onOpenImmersive: (eventId?: string) => void;
}

const GRADE_FILTERS: (EvidenceGrade | 'all')[] = [
  'all',
  'quran',
  'sahih',
  'hasan',
  'disputed',
  'historical',
];

export function TimelineView({
  lang,
  bookmarkedIds,
  onToggleBookmark,
  onSelectEvent,
  onOpenImmersive,
}: TimelineViewProps) {
  const [selectedEraId, setSelectedEraId] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<EvidenceGrade | 'all'>('all');
  const [localSearch, setLocalSearch] = useState('');

  const stats = useMemo(() => getArchiveStats(), []);

  const filteredEvents = useMemo(
    () =>
      filterEvents(SEERAH_EVENTS, {
        eraId: selectedEraId,
        grade: selectedGrade,
        query: localSearch,
      }),
    [selectedEraId, selectedGrade, localSearch]
  );

  const groupedByEra = useMemo(() => {
    const erasToShow =
      selectedEraId === 'all'
        ? TIMELINE_ERAS
        : TIMELINE_ERAS.filter((e) => e.id === selectedEraId);

    return erasToShow
      .map((era) => ({
        era,
        events: filteredEvents.filter((ev) => ev.eraId === era.id),
      }))
      .filter((group) => group.events.length > 0);
  }, [filteredEvents, selectedEraId]);

  return (
    <div className="space-y-12 pb-16">
      {/* Exhibition Marquee Hero */}
      <section className="overflow-hidden border border-[#272521]/10 bg-[#101B17] text-[#F9F6EF]">
        <div className="grid items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:p-12">
            <div>
              <p className="text-xs font-medium ltr:tracking-widest rtl:tracking-normal text-[#C5A46D]">
                {t(UI_TEXT.hero.kicker, lang)}
              </p>
              <h1 className="mt-4 font-editorial text-4xl font-semibold leading-[1.12] text-[#F9F6EF] sm:text-5xl lg:text-[3.5rem]">
                {lang === 'ar' ? (
                  t(UI_TEXT.hero.title, lang)
                ) : (
                  <>
                    The Life &amp; Legacy of Prophet Muhammad{' '}
                    <span className="font-arabic text-[0.78em] font-normal text-[#C5A46D]">
                      ﷺ
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F2E8D5]/85">
                {t(UI_TEXT.hero.subtitle, lang)}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#chronological-ledger"
                  className="inline-flex items-center gap-2 bg-[#C5A46D] px-5 py-3 text-sm font-semibold text-[#101B17] transition-colors hover:bg-[#D4B784]"
                >
                  <span>{t(UI_TEXT.hero.exploreTimeline, lang)}</span>
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => onOpenImmersive(SEERAH_EVENTS[0]?.id)}
                  className="inline-flex items-center gap-2 border border-[#C5A46D]/50 px-5 py-3 text-sm font-medium text-[#F9F6EF] transition-colors hover:bg-[#C5A46D]/15"
                >
                  <Play className="h-4 w-4 text-[#C5A46D]" aria-hidden="true" />
                  <span>{t(UI_TEXT.hero.immersiveMode, lang)}</span>
                </button>
              </div>

              <p className="border-t border-[#C5A46D]/20 pt-4 text-xs leading-relaxed text-[#F2E8D5]/65">
                {t(UI_TEXT.hero.noDepictionNote, lang)}
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] lg:col-span-5 lg:min-h-full">
            <img
              src={MUSEUM_IMAGES.hijazHero}
              alt={
                lang === 'ar'
                  ? 'جبال الحجاز التاريخية حول مكة المكرمة عند الغروب'
                  : 'Volcanic mountains of the Hijaz around Makkah at golden hour'
              }
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101B17]/92 via-[#101B17]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p dir="rtl" className="font-arabic text-2xl text-[#C5A46D]">
                وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ
              </p>
              <p className="mt-1 font-editorial text-xs italic text-[#F2E8D5]/90">
                {lang === 'ar'
                  ? 'سورة الأنبياء · ٢١:١٠٧'
                  : '“And We have not sent you, [O Muhammad], except as a mercy to the worlds.” · Surah Al-Anbiya 21:107'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curatorial Archive Metrics Row (Full-Width Strip Below Hero) */}
      <section
        aria-label={lang === 'ar' ? 'إحصائيات الأرشيف الموثق' : 'Archive coverage summary'}
        className="grid grid-cols-2 gap-px border border-[#272521]/10 bg-[#272521]/10 sm:grid-cols-4"
      >
        {[
          {
            value: String(stats.eras),
            label: { en: 'Chronological Eras', ar: 'مراحل زمنية كاملة' },
            sub: { en: 'Pre-570 CE to 11 AH', ar: 'قبل ٥٧٠ م حتى ١١ هـ' },
          },
          {
            value: `${stats.events}+`,
            label: { en: 'Verified Events', ar: 'أحداث موثّقة' },
            sub: { en: 'Graded Qur’an to Disputed', ar: 'مصنّفة الدرجة والمصدر' },
          },
          {
            value: String(stats.miracles + stats.prophecies),
            label: { en: 'Miracles & Prophecies', ar: 'معجزات ودلائل نبوة' },
            sub: { en: 'With scholarly commentary', ar: 'مع تحقيق العلماء' },
          },
          {
            value: String(stats.people + stats.locations),
            label: { en: 'Figures & Historic Sites', ar: 'شخصيات ومعالم تاريخية' },
            sub: { en: 'Cross-linked knowledge graph', ar: 'شبكة معرفية مترابطة' },
          },
        ].map((metric, idx) => (
          <div key={idx} className="bg-[#F9F6EF] p-5 sm:p-6">
            <div className="font-editorial text-3xl font-semibold text-[#101B17] tabular-nums">
              {metric.value}
            </div>
            <div className="mt-1 text-sm font-medium text-[#272521]">
              {t(metric.label, lang)}
            </div>
            <div className="mt-0.5 text-xs text-[#5E594F]">
              {t(metric.sub, lang)}
            </div>
          </div>
        ))}
      </section>

      {/* Hijri "On This Day" Curatorial Strip */}
      <section className="border border-[#272521]/10 bg-[#F2E8D5]/45 p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#272521]/10 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#9E7E49]" aria-hidden="true" />
            <h2 className="font-editorial text-xl font-semibold text-[#101B17]">
              {t(UI_TEXT.workspace.onThisDay, lang)}
            </h2>
          </div>
          <span className="text-xs text-[#5E594F]">
            {lang === 'ar'
              ? 'مناسبات هجرية موثقة التواريخ'
              : 'Reliably documented Hijri calendar milestones'}
          </span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIJRI_HIGHLIGHTS.map((item) => {
            const matchedEvent = SEERAH_EVENTS.find((e) => e.id === item.eventId);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => matchedEvent && onSelectEvent(matchedEvent)}
                className="group border border-[#272521]/10 bg-[#F9F6EF] p-4 text-start transition-colors hover:border-[#C5A46D]"
              >
                <div className="flex items-baseline gap-2 text-xs text-[#9E7E49]">
                  <span className="font-editorial text-2xl font-bold text-[#101B17] tabular-nums">
                    {item.hijriDay}
                  </span>
                  <span>{t(item.hijriMonth, lang)}</span>
                </div>
                <h3 className="mt-2 font-editorial text-lg font-semibold text-[#101B17] group-hover:text-[#9E7E49]">
                  {t(item.title, lang)}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#5E594F]">
                  {t(item.summary, lang)}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Complete Chronological Timeline Ledger */}
      <section id="chronological-ledger" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col justify-between gap-4 border-b border-[#272521]/15 pb-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium ltr:tracking-widest rtl:tracking-normal text-[#9E7E49]">
              {lang === 'ar' ? 'التسلسل التاريخي الكامل' : 'COMPLETE CHRONOLOGY · 9 ERAS'}
            </p>
            <h2 className="mt-1 font-editorial text-3xl font-semibold text-[#101B17] sm:text-4xl">
              {lang === 'ar'
                ? 'الخط الزمني للسيرة النبوية'
                : 'The Chronological Seerah Timeline'}
            </h2>
          </div>

          <div className="w-full max-w-xs">
            <label htmlFor="timeline-filter-input" className="sr-only">
              {lang === 'ar' ? 'تصفية الأحداث' : 'Filter timeline events'}
            </label>
            <input
              id="timeline-filter-input"
              type="search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث بسنة أو حدث أو مصدر...'
                  : 'Filter by year, event, or source...'
              }
              className="w-full border border-[#272521]/20 bg-[#F9F6EF] px-3.5 py-2 text-sm text-[#272521] placeholder:text-[#5E594F]/70 focus:border-[#C5A46D] focus:outline-none"
            />
          </div>
        </div>

        {/* 9-Era Horizontal Selector Rail */}
        <div
          role="tablist"
          aria-label={lang === 'ar' ? 'مراحل السيرة' : 'Seerah chronological eras'}
          className="flex items-center gap-1.5 overflow-x-auto border-b border-[#272521]/10 pb-3"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedEraId === 'all'}
            onClick={() => setSelectedEraId('all')}
            className={`px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              selectedEraId === 'all'
                ? 'bg-[#101B17] text-[#F9F6EF]'
                : 'border border-[#272521]/15 bg-[#F9F6EF] text-[#5E594F] hover:text-[#101B17]'
            }`}
          >
            {t(UI_TEXT.workspace.allEras, lang)}
          </button>
          {TIMELINE_ERAS.map((era) => {
            const active = selectedEraId === era.id;
            return (
              <button
                key={era.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedEraId(era.id)}
                className={`px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'bg-[#101B17] text-[#F9F6EF]'
                    : 'border border-[#272521]/15 bg-[#F9F6EF] text-[#5E594F] hover:border-[#C5A46D] hover:text-[#101B17]'
                }`}
              >
                <span className="tabular-nums opacity-70">{era.number}.</span>{' '}
                {t(era.title, lang)}
              </button>
            );
          })}
        </div>

        {/* Evidence Grade Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {GRADE_FILTERS.map((grade) => {
              const active = selectedGrade === grade;
              const label =
                grade === 'all'
                  ? t(UI_TEXT.workspace.allGrades, lang)
                  : t(EVIDENCE_META[grade].label, lang);
              return (
                <button
                  key={grade}
                  type="button"
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-[#F2E8D5] text-[#101B17] underline decoration-[#C5A46D] decoration-2 underline-offset-4'
                      : 'text-[#5E594F] hover:text-[#101B17]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-[#5E594F] tabular-nums">
            {lang === 'ar'
              ? `عرض ${filteredEvents.length} حدثاً موثقاً`
              : `Showing ${filteredEvents.length} documented entries`}
          </span>
        </div>

        {/* Grouped Chronological Chapters */}
        {groupedByEra.length === 0 ? (
          <div className="border border-[#272521]/10 bg-[#F2E8D5]/35 p-10 text-center">
            <p className="text-sm text-[#5E594F]">{t(UI_TEXT.workspace.noResults, lang)}</p>
            <button
              type="button"
              onClick={() => {
                setSelectedEraId('all');
                setSelectedGrade('all');
                setLocalSearch('');
              }}
              className="mt-4 border border-[#101B17] px-4 py-2 text-xs font-medium text-[#101B17] transition-colors hover:bg-[#101B17] hover:text-[#F9F6EF]"
            >
              {t(UI_TEXT.workspace.resetFilters, lang)}
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {groupedByEra.map(({ era, events }) => (
              <div key={era.id} className="space-y-6">
                {/* Era Chapter Banner */}
                <div className="grid gap-4 border-b border-[#C5A46D]/40 pb-4 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-7">
                    <span className="text-xs font-medium ltr:tracking-widest rtl:tracking-normal text-[#9E7E49] tabular-nums">
                      {lang === 'ar' ? `المرحلة ${era.number}` : `ERA ${era.number}`} ·{' '}
                      {t(era.dateRange, lang)}
                    </span>
                    <h3 className="mt-1 font-editorial text-2xl font-semibold text-[#101B17] sm:text-3xl">
                      {t(era.title, lang)}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#5E594F] lg:col-span-5">
                    {t(era.summary, lang)}
                  </p>
                </div>

                {/* Era Events Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                  {events.map((ev) => {
                    const saved = bookmarkedIds.includes(ev.id);
                    return (
                      <article
                        key={ev.id}
                        className="flex flex-col justify-between border border-[#272521]/12 bg-[#F9F6EF] p-6 transition-colors hover:border-[#C5A46D]"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <EvidenceStamp
                              grade={ev.evidenceGrade}
                              datePrecision={ev.datePrecision}
                              dateText={t(ev.dateDisplay, lang)}
                              lang={lang}
                            />
                            <button
                              type="button"
                              onClick={() => onToggleBookmark(ev.id)}
                              aria-label={
                                saved
                                  ? `Remove bookmark for ${t(ev.title, lang)}`
                                  : `Bookmark ${t(ev.title, lang)}`
                              }
                              className="shrink-0 p-1.5 text-[#5E594F] transition-colors hover:text-[#101B17]"
                            >
                              {saved ? (
                                <BookmarkCheck className="h-4 w-4 text-[#9E7E49]" />
                              ) : (
                                <Bookmark className="h-4 w-4" />
                              )}
                            </button>
                          </div>

                          <h4 className="mt-3 font-editorial text-2xl font-semibold leading-snug text-[#101B17]">
                            {t(ev.title, lang)}
                          </h4>

                          <p className="mt-2.5 text-sm leading-relaxed text-[#5E594F]">
                            {t(ev.summary, lang)}
                          </p>

                          {ev.scholarlyNotes && (
                            <p className="mt-3 border-t border-[#272521]/10 pt-2.5 text-xs italic text-[#8C5E1A]">
                              {lang === 'ar'
                                ? 'يتضمن تنبيهاً حديثياً وتحقيقاً علمياً'
                                : 'Includes scholarly verification & narration comparison'}
                            </p>
                          )}
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#272521]/10 pt-4">
                          <span className="truncate text-xs text-[#5E594F]">
                            {ev.sources[0]
                              ? `${lang === 'ar' ? ev.sources[0].bookAr : ev.sources[0].book} · ${ev.sources[0].citation}`
                              : ''}
                          </span>
                          <button
                            type="button"
                            onClick={() => onSelectEvent(ev)}
                            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 transition-colors hover:text-[#9E7E49]"
                          >
                            <span>{t(UI_TEXT.workspace.readDossier, lang)}</span>
                            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
