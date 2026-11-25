import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { EVIDENCE_META, UI_TEXT, t } from '../data/i18n';
import { MIRACLES, PROPHECIES } from '../data/miraclesAndProphecies';
import {
  CLASSICAL_SOURCES,
  QUIZ_QUESTIONS,
  SHAMAIL_CATEGORIES,
} from '../data/revelationsAndShamail';
import { SEERAH_EVENTS } from '../data/timeline';
import type {
  EncyclopediaTab,
  EvidenceGrade,
  Language,
  MiracleEntry,
  ProphecyCategory,
  SeerahEvent,
} from '../types/seerah';
import {
  calculateQuizScore,
  filterProphecies,
  getEvidenceCounts,
} from '../utils/seerahEngine';
import { ArchivalImage } from './ArchivalImage';
import { EvidenceStamp } from './EvidenceStamp';

interface EncyclopediaViewProps {
  lang: Language;
  activeTab: EncyclopediaTab;
  onSelectTab: (tab: EncyclopediaTab) => void;
  bookmarkedIds: string[];
  onSelectEvent: (event: SeerahEvent) => void;
}

const PROPHECY_CATEGORIES: { id: ProphecyCategory | 'all'; label: { en: string; ar: string } }[] = [
  { id: 'all', label: { en: 'All Prophecies (14)', ar: 'جميع الدلائل (١٤)' } },
  { id: 'lifetime', label: { en: 'Fulfilled in Lifetime', ar: 'تحققت في حياته ﷺ' } },
  { id: 'historical', label: { en: 'Historical Fulfillments', ar: 'تحققت تاريخياً' } },
  { id: 'disputed', label: { en: 'Disputed Interpretations', ar: 'تفسيرات مختلف فيها' } },
  { id: 'future', label: { en: 'Future Signs of the Hour', ar: 'أشراط الساعة المستقبلية' } },
];

export function EncyclopediaView({
  lang,
  activeTab,
  onSelectTab,
  bookmarkedIds,
  onSelectEvent,
}: EncyclopediaViewProps) {
  const [selectedMiracle, setSelectedMiracle] = useState<MiracleEntry>(MIRACLES[0]);
  const [prophecyFilter, setProphecyFilter] = useState<ProphecyCategory | 'all'>('all');
  const [activeShamailId, setActiveShamailId] = useState<string>(SHAMAIL_CATEGORIES[0].id);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const visibleProphecies = useMemo(
    () => filterProphecies(PROPHECIES, prophecyFilter),
    [prophecyFilter]
  );

  const evidenceCounts = useMemo(() => getEvidenceCounts(), []);

  const quizStats = useMemo(() => {
    const correctMap: Record<string, number> = {};
    for (const q of QUIZ_QUESTIONS) {
      correctMap[q.id] = q.correctIndex;
    }
    return calculateQuizScore(quizAnswers, correctMap);
  }, [quizAnswers]);

  const activeShamail =
    SHAMAIL_CATEGORIES.find((c) => c.id === activeShamailId) ?? SHAMAIL_CATEGORIES[0];

  const bookmarkedEvents = useMemo(
    () => SEERAH_EVENTS.filter((e) => bookmarkedIds.includes(e.id)),
    [bookmarkedIds]
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Encyclopedia Header & Sub-Navigation */}
      <div className="border-b border-[#272521]/15 pb-6">
        <p className="text-xs font-medium ltr:tracking-widest rtl:tracking-normal text-[#9E7E49]">
          {lang === 'ar'
            ? 'الموسوعة العلمية الموثّقة'
            : 'THEMATIC ARCHIVE · SOURCE-VERIFIED COLLECTIONS'}
        </p>
        <h1 className="mt-2 font-editorial text-3xl font-semibold text-[#101B17] sm:text-5xl">
          {lang === 'ar' ? 'موسوعة السيرة النبوية' : 'The Seerah Encyclopedia'}
        </h1>

        <div
          role="tablist"
          aria-label="Encyclopedia collections"
          className="mt-6 flex items-center gap-2 overflow-x-auto pb-1"
        >
          {(
            ['miracles', 'prophecies', 'shamail', 'sources', 'learning'] as EncyclopediaTab[]
          ).map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSelectTab(tab)}
                className={`px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors sm:text-sm ${
                  active
                    ? 'bg-[#101B17] text-[#F9F6EF]'
                    : 'border border-[#272521]/15 bg-[#F9F6EF] text-[#5E594F] hover:border-[#C5A46D] hover:text-[#101B17]'
                }`}
              >
                {t(UI_TEXT.encyclopediaTabs[tab], lang)}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: MIRACLES */}
      {activeTab === 'miracles' && (
        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left List of 12 Documented Miracles */}
            <div className="space-y-2 lg:col-span-5">
              <div className="mb-3 flex items-baseline justify-between border-b border-[#272521]/10 pb-2">
                <h2 className="font-editorial text-2xl font-semibold text-[#101B17]">
                  {lang === 'ar' ? 'معجزات الرسول ﷺ' : 'Documented Miracles'}
                </h2>
                <span className="text-xs text-[#5E594F] tabular-nums">
                  {MIRACLES.length} {lang === 'ar' ? 'مدخلات' : 'entries'}
                </span>
              </div>
              <div className="divide-y divide-[#272521]/10 border border-[#272521]/12 bg-[#F9F6EF]">
                {MIRACLES.map((miracle, idx) => {
                  const active = selectedMiracle.id === miracle.id;
                  return (
                    <button
                      key={miracle.id}
                      type="button"
                      onClick={() => setSelectedMiracle(miracle)}
                      className={`flex w-full items-start justify-between gap-3 p-4 text-start transition-colors ${
                        active
                          ? 'bg-[#101B17] text-[#F9F6EF]'
                          : 'hover:bg-[#F2E8D5]/50'
                      }`}
                    >
                      <div>
                        <div
                          className={`text-[11px] tabular-nums ${
                            active ? 'text-[#C5A46D]' : 'text-[#5E594F]'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')} ·{' '}
                          {t(EVIDENCE_META[miracle.evidenceGrade].label, lang)} ·{' '}
                          {t(miracle.category, lang)}
                        </div>
                        <div className="mt-1 font-editorial text-xl font-semibold">
                          {t(miracle.title, lang)}
                        </div>
                      </div>
                      <ArrowRight
                        className={`mt-1 h-4 w-4 shrink-0 rtl:rotate-180 ${
                          active ? 'text-[#C5A46D]' : 'text-[#5E594F]/50'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Active Miracle Dossier */}
            <article className="border border-[#272521]/12 bg-[#F9F6EF] p-6 sm:p-8 lg:col-span-7">
              <EvidenceStamp grade={selectedMiracle.evidenceGrade} lang={lang} />
              <h3 className="mt-2 font-editorial text-3xl font-semibold text-[#101B17] sm:text-4xl">
                {t(selectedMiracle.title, lang)}
              </h3>
              <p className="mt-1 text-xs text-[#9E7E49]">
                {t(selectedMiracle.category, lang)}
              </p>

              {selectedMiracle.imageUrl && (
                <div className="mt-6">
                  <ArchivalImage
                    src={selectedMiracle.imageUrl}
                    alt={t(selectedMiracle.title, lang)}
                    aspectClass="aspect-[16/9]"
                  />
                </div>
              )}

              <p className="mt-6 text-base leading-relaxed text-[#272521]">
                {t(selectedMiracle.context, lang)}
              </p>

              <div className="mt-6 border-y border-[#C5A46D]/40 bg-[#F2E8D5]/55 p-6 text-center">
                <p dir="rtl" className="font-arabic text-2xl leading-loose text-[#101B17]">
                  {selectedMiracle.arabicText}
                </p>
                <p
                  dir="ltr"
                  className="mt-3 font-editorial text-base italic text-[#5E594F]"
                >
                  “{selectedMiracle.translation}”
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-editorial text-lg font-semibold text-[#101B17]">
                    {lang === 'ar' ? 'شرح وتحقيق العلماء' : 'Scholarly Commentary'}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5E594F]">
                    {t(selectedMiracle.scholarlyCommentary, lang)}
                  </p>
                </div>

                <div className="border-t border-[#272521]/10 pt-4">
                  <h4 className="text-xs font-semibold tracking-wider text-[#5E594F]">
                    {t(UI_TEXT.workspace.primarySources, lang)}
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-[#101B17]">
                    {selectedMiracle.sources.map((s, i) => (
                      <li key={i}>
                        <span className="font-medium">
                          {lang === 'ar' ? s.bookAr : s.book}
                        </span>
                        <span className="mx-2 text-[#5E594F]">·</span>
                        <span className="text-[#5E594F] tabular-nums">{s.citation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedMiracle.eventId && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        const ev = SEERAH_EVENTS.find(
                          (e) => e.id === selectedMiracle.eventId
                        );
                        if (ev) onSelectEvent(ev);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 hover:text-[#9E7E49]"
                    >
                      <span>
                        {lang === 'ar'
                          ? 'عرض الحدث التاريخي المرتبط'
                          : 'Inspect Connected Timeline Event'}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      )}

      {/* TAB 2: PROPHECIES */}
      {activeTab === 'prophecies' && (
        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-4 border-b border-[#272521]/10 pb-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-editorial text-2xl font-semibold text-[#101B17] sm:text-3xl">
                {lang === 'ar'
                  ? 'دلائل النبوة والإخبار بالمغيبات'
                  : 'Encyclopedia of Prophecies (Dala’il al-Nubuwwah)'}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-[#5E594F]">
                {lang === 'ar'
                  ? 'نميّز في كل مدخل بدقة بين نص الحديث الأصلي وبين التحقق التاريخي أو التفسيرات اللاحقة.'
                  : 'Every entry explicitly separates the original verified narration from historical fulfillments and later scholarly interpretations.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PROPHECY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setProphecyFilter(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                    prophecyFilter === cat.id
                      ? 'bg-[#101B17] text-[#F9F6EF]'
                      : 'border border-[#272521]/15 text-[#5E594F] hover:text-[#101B17]'
                  }`}
                >
                  {t(cat.label, lang)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visibleProphecies.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between border border-[#272521]/12 bg-[#F9F6EF] p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <EvidenceStamp grade={item.evidenceGrade} lang={lang} />
                    <span className="text-xs text-[#9E7E49]">{t(item.eraLabel, lang)}</span>
                  </div>
                  <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#101B17]">
                    {t(item.title, lang)}
                  </h3>
                  <p dir="rtl" className="mt-3 border-y border-[#C5A46D]/30 bg-[#F2E8D5]/40 px-4 py-3 font-arabic text-lg text-[#101B17]">
                    {item.arabicText}
                  </p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[#101B17]">
                        {lang === 'ar' ? 'النص الأصلي:' : 'Original Narration:'}{' '}
                      </span>
                      <span className="text-[#5E594F]">
                        {t(item.originalNarration, lang)}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#101B17]">
                        {lang === 'ar'
                          ? 'التحقق التاريخي أو التفسير:'
                          : 'Fulfillment / Interpretation:'}{' '}
                      </span>
                      <span className="text-[#5E594F]">
                        {t(item.historicalFulfillmentOrInterpretation, lang)}
                      </span>
                    </div>
                    <div className="bg-[#F2E8D5]/55 p-3 text-xs leading-relaxed text-[#272521]">
                      <span className="font-semibold text-[#8C5E1A]">
                        {lang === 'ar' ? 'تمييز علمي:' : 'Scholarly Distinction:'}{' '}
                      </span>
                      {t(item.scholarlyDistinction, lang)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 border-t border-[#272521]/10 pt-3 text-xs text-[#5E594F]">
                  {item.sources
                    .map((s) => `${lang === 'ar' ? s.bookAr : s.book} (${s.citation})`)
                    .join(' · ')}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CHARACTER & EVERYDAY LIFE (SHAMA'IL) */}
      {activeTab === 'shamail' && (
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-editorial text-2xl font-semibold text-[#101B17]">
              {lang === 'ar' ? 'الشمائل المحمدية (١٢ باباً)' : 'Al-Shama’il (12 Aspects)'}
            </h2>
            <p className="mt-1 text-xs text-[#5E594F]">
              {lang === 'ar'
                ? 'من هديه ﷺ في حياته اليومية، مستقاة من الشمائل المحمدية والصحيحين.'
                : 'Authentic portrait of his everyday conduct, grounded in Al-Shama’il al-Muhammadiyyah and the Sahihayn.'}
            </p>
            <div className="mt-4 divide-y divide-[#272521]/10 border border-[#272521]/12">
              {SHAMAIL_CATEGORIES.map((cat, idx) => {
                const active = cat.id === activeShamail.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveShamailId(cat.id)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-start text-sm transition-colors ${
                      active
                        ? 'bg-[#101B17] font-medium text-[#F9F6EF]'
                        : 'bg-[#F9F6EF] text-[#272521] hover:bg-[#F2E8D5]/60'
                    }`}
                  >
                    <span>
                      <span className="mr-2 text-xs opacity-60 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {t(cat.title, lang)}
                    </span>
                    {active && <span className="h-1.5 w-4 bg-[#C5A46D]" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border border-[#272521]/12 bg-[#F9F6EF] p-6 sm:p-8 lg:col-span-8">
            <p className="text-xs font-medium tracking-wider text-[#9E7E49]">
              {t(activeShamail.subtitle, lang)}
            </p>
            <h3 className="mt-2 font-editorial text-3xl font-semibold text-[#101B17] sm:text-4xl">
              {t(activeShamail.title, lang)}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-[#272521]">
              {t(activeShamail.summary, lang)}
            </p>

            <div className="mt-8 space-y-6">
              {activeShamail.narrations.map((nar, idx) => (
                <div
                  key={idx}
                  className="border border-[#C5A46D]/35 bg-[#F2E8D5]/45 p-6"
                >
                  <EvidenceStamp grade={nar.grade} lang={lang} />
                  <p
                    dir="rtl"
                    className="mt-4 font-arabic text-2xl leading-loose text-[#101B17]"
                  >
                    {nar.arabic}
                  </p>
                  <p
                    dir="ltr"
                    className="mt-3 font-editorial text-lg italic text-[#272521]"
                  >
                    “{nar.english}”
                  </p>
                  <p className="mt-3 text-xs text-[#5E594F] tabular-nums">{nar.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SOURCES & AUTHENTICITY METHODOLOGY */}
      {activeTab === 'sources' && (
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="font-editorial text-2xl font-semibold text-[#101B17] sm:text-3xl">
              {lang === 'ar'
                ? 'نظام تصنيف درجات التوثيق العلمي'
                : 'Evidence Classification System'}
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#5E594F]">
              {lang === 'ar'
                ? 'لا نعرض الروايات الشعبية كقصة العنكبوت في غار ثور أو بعض أخبار بحيرا أو خوارق المولد كحقائق مقطوع بها، بل يُوسَم كل مدخل بدرجته الحديثية والتاريخية بشفافية.'
                : 'Popular reports—such as unusual legends at birth, the spider web at Cave Thawr, or disputed details of Bahira—are never presented as undisputed facts. Every entry carries an explicit evidence classification.'}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(Object.keys(EVIDENCE_META) as EvidenceGrade[]).map((grade) => {
                const info = EVIDENCE_META[grade];
                return (
                  <div
                    key={grade}
                    className="border border-[#272521]/12 bg-[#F9F6EF] p-5"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className={`font-editorial text-2xl font-semibold ${info.accentClass}`}>
                        {t(info.label, lang)}
                      </span>
                      <span className="text-xs text-[#5E594F] tabular-nums">
                        {evidenceCounts[grade]} {lang === 'ar' ? 'مدخل' : 'entries'}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#5E594F]">
                      {t(info.description, lang)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-editorial text-2xl font-semibold text-[#101B17] sm:text-3xl">
              {lang === 'ar'
                ? 'المصادر الإسلامية الكلاسيكية المعتمدة (١٢ مصدراً)'
                : 'Primary Islamic & Historical Sources (12 Works)'}
            </h2>
            <div className="overflow-x-auto border border-[#272521]/12 bg-[#F9F6EF]">
              <table className="w-full text-start text-sm">
                <thead className="border-b border-[#272521]/15 bg-[#F2E8D5]/60 text-xs text-[#5E594F]">
                  <tr>
                    <th className="px-4 py-3 text-start font-semibold">
                      {lang === 'ar' ? 'المصدر' : 'Source'}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {lang === 'ar' ? 'المؤلف والعصر' : 'Author & Era'}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {lang === 'ar' ? 'الغاية والمنهج' : 'Scope & Verification Note'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#272521]/10">
                  {CLASSICAL_SOURCES.map((src) => (
                    <tr key={src.id} className="align-top">
                      <td className="px-4 py-3.5 font-medium text-[#101B17]">
                        {t(src.name, lang)}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-[#5E594F]">
                        <div className="text-sm text-[#272521]">{t(src.author, lang)}</div>
                        <div className="mt-0.5 tabular-nums">{t(src.era, lang)}</div>
                      </td>
                      <td className="px-4 py-3.5 text-xs leading-relaxed text-[#5E594F]">
                        <div className="text-sm text-[#272521]">{t(src.purpose, lang)}</div>
                        <div className="mt-1 italic">{t(src.methodologyNote, lang)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: LEARNING MODE & BOOKMARKS */}
      {activeTab === 'learning' && (
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#272521]/15 pb-4">
              <div>
                <h2 className="font-editorial text-2xl font-semibold text-[#101B17] sm:text-3xl">
                  {lang === 'ar'
                    ? 'اختبار معرفة السيرة والتوثيق'
                    : 'Source-Verified Seerah Study Quiz'}
                </h2>
                <p className="mt-1 text-xs text-[#5E594F] tabular-nums">
                  {lang === 'ar'
                    ? `الإجابات الصحيحة: ${quizStats.correct} من ${quizStats.total} (${quizStats.percentage}%)`
                    : `Score: ${quizStats.correct} / ${quizStats.total} (${quizStats.percentage}%) · ${quizStats.answered} answered`}
                </p>
              </div>
              {quizStats.answered > 0 && (
                <button
                  type="button"
                  onClick={() => setQuizAnswers({})}
                  className="inline-flex items-center gap-1.5 border border-[#272521]/20 px-3 py-1.5 text-xs font-medium text-[#101B17] hover:bg-[#F2E8D5]"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>{lang === 'ar' ? 'إعادة الاختبار' : 'Reset Quiz'}</span>
                </button>
              )}
            </div>

            <div className="space-y-5">
              {QUIZ_QUESTIONS.map((q, qIdx) => {
                const chosen = quizAnswers[q.id];
                const isAnswered = typeof chosen === 'number';
                const isCorrect = chosen === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="border border-[#272521]/12 bg-[#F9F6EF] p-6"
                  >
                    <p className="text-xs text-[#9E7E49] tabular-nums">
                      {lang === 'ar' ? `سؤال ${qIdx + 1}` : `Question ${qIdx + 1}`} ·{' '}
                      {t(EVIDENCE_META[q.evidenceGrade].label, lang)}
                    </p>
                    <h3 className="mt-2 font-editorial text-xl font-semibold text-[#101B17]">
                      {t(q.question, lang)}
                    </h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {q.options.map((opt, optIdx) => {
                        const selected = chosen === optIdx;
                        const showCorrect = isAnswered && optIdx === q.correctIndex;
                        const showWrong = isAnswered && selected && !isCorrect;
                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() =>
                              setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                            }
                            className={`flex items-center justify-between border px-4 py-3 text-start text-sm transition-colors ${
                              showCorrect
                                ? 'border-[#1B4D3E] bg-[#1B4D3E]/10 font-medium text-[#101B17]'
                                : showWrong
                                  ? 'border-[#8B3A2B] bg-[#8B3A2B]/10 text-[#8B3A2B]'
                                  : selected
                                    ? 'border-[#101B17] bg-[#F2E8D5]'
                                    : 'border-[#272521]/15 hover:border-[#C5A46D]'
                            }`}
                          >
                            <span>{t(opt, lang)}</span>
                            {showCorrect && (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1B4D3E]" />
                            )}
                            {showWrong && (
                              <XCircle className="h-4 w-4 shrink-0 text-[#8B3A2B]" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="mt-4 border-t border-[#272521]/10 pt-3 text-xs leading-relaxed text-[#5E594F]">
                        <span className="font-semibold text-[#101B17]">
                          {isCorrect
                            ? lang === 'ar'
                              ? 'إجابة صحيحة — '
                              : 'Correct — '
                            : lang === 'ar'
                              ? 'التوضيح الموثّق — '
                              : 'Verified Explanation — '}
                        </span>
                        {t(q.explanation, lang)}{' '}
                        <span className="font-medium text-[#9E7E49]">
                          ({q.sourceCitation})
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Saved Bookmarks & Progress Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="border border-[#272521]/12 bg-[#F2E8D5]/45 p-6">
              <h3 className="font-editorial text-2xl font-semibold text-[#101B17]">
                {lang === 'ar' ? 'الأحداث المحفوظة للدراسة' : 'Saved Study Bookmarks'}
              </h3>
              <p className="mt-1 text-xs text-[#5E594F] tabular-nums">
                {bookmarkedEvents.length} / {SEERAH_EVENTS.length}{' '}
                {lang === 'ar' ? 'محفوظة' : 'saved'}
              </p>

              {bookmarkedEvents.length === 0 ? (
                <p className="mt-4 text-xs leading-relaxed text-[#5E594F]">
                  {lang === 'ar'
                    ? 'لم تحفظ أي حدث بعد. انقر على أيقونة الحفظ في الخط الزمني لتكوين قائمة دراستك.'
                    : 'No events bookmarked yet. Use the bookmark action on any timeline entry to build your personal study dossier.'}
                </p>
              ) : (
                <ul className="mt-4 divide-y divide-[#272521]/10">
                  {bookmarkedEvents.map((ev) => (
                    <li key={ev.id} className="py-3">
                      <button
                        type="button"
                        onClick={() => onSelectEvent(ev)}
                        className="text-start transition-colors hover:text-[#9E7E49]"
                      >
                        <div className="text-xs text-[#5E594F] tabular-nums">
                          {t(ev.dateDisplay, lang)}
                        </div>
                        <div className="font-editorial text-lg font-semibold text-[#101B17]">
                          {t(ev.title, lang)}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
