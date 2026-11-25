import { useMemo, useState } from 'react';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import { EVIDENCE_META, UI_TEXT, t } from '../data/i18n';
import { PEOPLE } from '../data/peopleAndLocations';
import type { Language, PersonGroup, SeerahEvent } from '../types/seerah';
import { getPersonDossier } from '../utils/seerahEngine';
import { EvidenceStamp } from './EvidenceStamp';

interface PeopleViewProps {
  lang: Language;
  initialPersonId?: string | null;
  onSelectEvent: (event: SeerahEvent) => void;
  onSelectLocation: (locationId: string) => void;
}

const GROUP_FILTERS: { id: PersonGroup | 'all'; label: { en: string; ar: string } }[] = [
  { id: 'all', label: { en: 'All Figures', ar: 'جميع الشخصيات' } },
  { id: 'ancestor', label: { en: 'Ancestors', ar: 'الأجداد' } },
  { id: 'parent', label: { en: 'Parents', ar: 'الوالدان' } },
  { id: 'foster', label: { en: 'Foster Family', ar: 'الرضاعة' } },
  { id: 'wife', label: { en: 'Wives', ar: 'أمهات المؤمنين' } },
  { id: 'child', label: { en: 'Children', ar: 'الأبناء والبنات' } },
  { id: 'grandchild', label: { en: 'Grandchildren', ar: 'الأسباط' } },
  { id: 'uncle', label: { en: 'Uncles', ar: 'الأعمام' } },
  { id: 'companion', label: { en: 'Companions', ar: 'الصحابة' } },
  { id: 'opponent', label: { en: 'Opponents', ar: 'المعارضون' } },
];

export function PeopleView({
  lang,
  initialPersonId,
  onSelectEvent,
  onSelectLocation,
}: PeopleViewProps) {
  const [mode, setMode] = useState<'tree' | 'directory'>('tree');
  const [groupFilter, setGroupFilter] = useState<PersonGroup | 'all'>('all');
  const [selectedPersonId, setSelectedPersonId] = useState<string>(
    initialPersonId ?? 'khadijah'
  );

  const dossier = useMemo(
    () => getPersonDossier(selectedPersonId) ?? getPersonDossier('khadijah')!,
    [selectedPersonId]
  );

  const filteredPeople = useMemo(() => {
    if (groupFilter === 'all') return PEOPLE;
    return PEOPLE.filter((p) => p.group === groupFilter);
  }, [groupFilter]);

  const TreeNode = ({
    id,
    subtitle,
  }: {
    id: string;
    subtitle?: { en: string; ar: string };
  }) => {
    const person = PEOPLE.find((p) => p.id === id);
    if (!person) return null;
    const active = dossier.person.id === id;
    return (
      <button
        type="button"
        onClick={() => setSelectedPersonId(id)}
        className={`border px-3.5 py-2.5 text-start transition-colors ${
          active
            ? 'border-[#C5A46D] bg-[#101B17] text-[#F9F6EF]'
            : 'border-[#272521]/15 bg-[#F9F6EF] text-[#101B17] hover:border-[#C5A46D]'
        }`}
      >
        <div
          className={`text-[11px] ${
            active ? 'text-[#C5A46D]' : 'text-[#5E594F]'
          }`}
        >
          {t(subtitle ?? person.relationToProphet, lang)}
        </div>
        <div className="mt-0.5 font-editorial text-lg font-semibold leading-snug">
          {t(person.name, lang)}
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header & Mode Switch */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#272521]/15 pb-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-medium tracking-widest text-[#9E7E49]">
            {lang === 'ar'
              ? 'شجرة النسب الشريف وموسوعة الصحابة والأعلام'
              : 'GENEALOGY & PROSOPOGRAPHY · INTERCONNECTED BIOGRAPHIES'}
          </p>
          <h1 className="mt-1 font-editorial text-3xl font-semibold text-[#101B17] sm:text-5xl">
            {lang === 'ar' ? 'أهل البيت والصحابة والأعلام' : 'Family Lineage & Companions'}
          </h1>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setMode('tree')}
            className={`px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
              mode === 'tree'
                ? 'bg-[#101B17] text-[#F9F6EF]'
                : 'border border-[#272521]/20 bg-[#F9F6EF] text-[#5E594F] hover:text-[#101B17]'
            }`}
          >
            {lang === 'ar' ? 'شجرة العائلة التفاعلية' : 'Interactive Family Tree'}
          </button>
          <button
            type="button"
            onClick={() => setMode('directory')}
            className={`px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
              mode === 'directory'
                ? 'bg-[#101B17] text-[#F9F6EF]'
                : 'border border-[#272521]/20 bg-[#F9F6EF] text-[#5E594F] hover:text-[#101B17]'
            }`}
          >
            {lang === 'ar'
              ? `دليل الشخصيات (${PEOPLE.length})`
              : `People Directory (${PEOPLE.length})`}
          </button>
        </div>
      </div>

      {/* Main Split: Family Tree or Directory + Selected Biography Dossier */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {mode === 'tree' ? (
            <div className="space-y-6 border border-[#272521]/12 bg-[#F2E8D5]/40 p-6">
              <div className="border-b border-[#272521]/10 pb-3">
                <h2 className="font-editorial text-2xl font-semibold text-[#101B17]">
                  {lang === 'ar'
                    ? 'شجرة النسب الشريف والأسرة النبوية'
                    : 'Sacred Lineage & Household Diagram'}
                </h2>
                <p className="mt-1 text-xs text-[#5E594F]">
                  {lang === 'ar'
                    ? 'انقر على أي فرد لعرض سيرته الكاملة وارتباطه بالأحداث والمواقع.'
                    : 'Select any relative to inspect their complete biography, linked Seerah events, and historical locations.'}
                </p>
              </div>

              {/* Tier 1: Patriarchal Ancestors */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold tracking-wider text-[#9E7E49]">
                  {lang === 'ar' ? 'الأجداد الكرام' : 'NOBLE ANCESTRY'}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <TreeNode id="ibrahim" />
                  <TreeNode id="ismail" />
                  <TreeNode id="abdul-muttalib" />
                </div>
              </div>

              {/* Vertical Connector */}
              <div className="flex justify-center" aria-hidden="true">
                <div className="h-6 w-px bg-[#C5A46D]" />
              </div>

              {/* Tier 2: Parents, Foster Mother & Uncles */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold tracking-wider text-[#9E7E49]">
                  {lang === 'ar' ? 'الوالدان والرضاعة والأعمام' : 'PARENTS, FOSTER MOTHER & UNCLES'}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <TreeNode id="abdullah" />
                  <TreeNode id="aminah" />
                  <TreeNode id="halimah" />
                  <TreeNode id="abu-talib" />
                  <TreeNode id="hamzah" />
                  <TreeNode id="abbas" />
                </div>
              </div>

              <div className="flex justify-center" aria-hidden="true">
                <div className="h-6 w-px bg-[#C5A46D]" />
              </div>

              {/* Central Calligraphic Seal — No Visual Depiction */}
              <div className="border border-[#C5A46D] bg-[#101B17] p-5 text-center text-[#F9F6EF]">
                <p dir="rtl" className="font-arabic text-3xl text-[#C5A46D]">
                  مُحَمَّدٌ رَسُولُ اللَّهِ ﷺ
                </p>
                <p className="mt-1 text-xs text-[#F2E8D5]/75">
                  {lang === 'ar'
                    ? 'خاتم النبيين · ٥٧٠–٦٣٢ م (١١ هـ)'
                    : 'Prophet Muhammad ﷺ · The Final Messenger (c. 570–632 CE)'}
                </p>
              </div>

              <div className="flex justify-center" aria-hidden="true">
                <div className="h-6 w-px bg-[#C5A46D]" />
              </div>

              {/* Tier 3: Mothers of the Believers */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold tracking-wider text-[#9E7E49]">
                  {lang === 'ar' ? 'أمهات المؤمنين (مختارات موثّقة)' : 'MOTHERS OF THE BELIEVERS (SELECTED)'}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <TreeNode id="khadijah" />
                  <TreeNode id="aishah" />
                  <TreeNode id="umm-salamah" />
                </div>
              </div>

              {/* Tier 4: Children & Grandchildren */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold tracking-wider text-[#9E7E49]">
                  {lang === 'ar' ? 'الذرية والأسباط' : 'DAUGHTERS & GRANDCHILDREN'}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <TreeNode id="zaynab-daughter" />
                  <TreeNode id="fatimah" />
                  <TreeNode id="hasan" />
                  <TreeNode id="husayn" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Group Filter Strip */}
              <div className="flex flex-wrap gap-1.5">
                {GROUP_FILTERS.map((gf) => (
                  <button
                    key={gf.id}
                    type="button"
                    onClick={() => setGroupFilter(gf.id)}
                    className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                      groupFilter === gf.id
                        ? 'bg-[#101B17] text-[#F9F6EF]'
                        : 'border border-[#272521]/15 bg-[#F9F6EF] text-[#5E594F] hover:text-[#101B17]'
                    }`}
                  >
                    {t(gf.label, lang)}
                  </button>
                ))}
              </div>

              {/* Directory Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredPeople.map((person) => {
                  const active = person.id === dossier.person.id;
                  return (
                    <button
                      key={person.id}
                      type="button"
                      onClick={() => setSelectedPersonId(person.id)}
                      className={`border p-4 text-start transition-colors ${
                        active
                          ? 'border-[#C5A46D] bg-[#101B17] text-[#F9F6EF]'
                          : 'border-[#272521]/12 bg-[#F9F6EF] text-[#101B17] hover:border-[#C5A46D]'
                      }`}
                    >
                      <div
                        className={`text-xs ${
                          active ? 'text-[#C5A46D]' : 'text-[#5E594F]'
                        }`}
                      >
                        {t(person.relationToProphet, lang)} ·{' '}
                        <span className="tabular-nums">{t(person.lifespan, lang)}</span>
                      </div>
                      <div className="mt-1 font-editorial text-xl font-semibold">
                        {t(person.name, lang)}{' '}
                        {person.honorific ? (
                          <span className="font-arabic text-base font-normal opacity-80">
                            {t(person.honorific, lang)}
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={`mt-1.5 line-clamp-2 text-xs leading-relaxed ${
                          active ? 'text-[#F2E8D5]/80' : 'text-[#5E594F]'
                        }`}
                      >
                        {t(person.keyVirtueOrRole, lang)}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Interconnected Biographical Dossier */}
        <aside className="border border-[#272521]/12 bg-[#F9F6EF] p-6 sm:p-8 lg:col-span-5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9E7E49]">
            <span>{t(dossier.person.relationToProphet, lang)}</span>
            <span className="tabular-nums text-[#5E594F]">
              {t(dossier.person.lifespan, lang)}
            </span>
          </div>

          <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#101B17]">
            {t(dossier.person.name, lang)}{' '}
            {dossier.person.honorific && (
              <span className="font-arabic text-xl font-normal text-[#9E7E49]">
                {t(dossier.person.honorific, lang)}
              </span>
            )}
          </h2>

          <p className="mt-2 text-xs font-medium text-[#5E594F]">
            {t(dossier.person.keyVirtueOrRole, lang)}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#272521]">
            {t(dossier.person.biography, lang)}
          </p>

          {/* Primary Sources */}
          <div className="mt-5 border-t border-[#272521]/10 pt-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#5E594F]">
              {t(UI_TEXT.workspace.primarySources, lang)}
            </h3>
            <ul className="mt-2 space-y-1 text-xs text-[#272521]">
              {dossier.person.sources.map((src, i) => (
                <li key={i}>
                  <span className="font-medium">
                    {lang === 'ar' ? src.bookAr : src.book}
                  </span>{' '}
                  <span className="text-[#5E594F]">
                    · {src.citation} · {t(EVIDENCE_META[src.grade].label, lang)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connected Chronological Events */}
          <div className="mt-6 border-t border-[#272521]/10 pt-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#5E594F]">
              {t(UI_TEXT.workspace.connectedEvents, lang)} ({dossier.events.length})
            </h3>
            {dossier.events.length === 0 ? (
              <p className="mt-2 text-xs text-[#5E594F]">
                {lang === 'ar'
                  ? 'لا توجد أحداث مباشرة مسجلة.'
                  : 'No direct timeline entries linked.'}
              </p>
            ) : (
              <ul className="mt-2 divide-y divide-[#272521]/10">
                {dossier.events.map((ev) => (
                  <li key={ev.id} className="py-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectEvent(ev)}
                      className="group flex w-full items-start justify-between gap-2 text-start"
                    >
                      <div>
                        <EvidenceStamp
                          grade={ev.evidenceGrade}
                          dateText={t(ev.dateDisplay, lang)}
                          lang={lang}
                        />
                        <div className="mt-0.5 font-editorial text-lg font-semibold text-[#101B17] group-hover:text-[#9E7E49]">
                          {t(ev.title, lang)}
                        </div>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#C5A46D] rtl:rotate-180" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Connected Historical Locations */}
          {dossier.locations.length > 0 && (
            <div className="mt-5 border-t border-[#272521]/10 pt-4">
              <h3 className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#5E594F]">
                <MapPin className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
                <span>{t(UI_TEXT.workspace.connectedLocation, lang)}</span>
              </h3>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {dossier.locations.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => onSelectLocation(loc.id)}
                    className="text-xs font-medium text-[#101B17] underline decoration-[#C5A46D] underline-offset-4 hover:text-[#9E7E49]"
                  >
                    {t(loc.name, lang)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Related Family & Companions */}
          {dossier.relatedPeople.length > 0 && (
            <div className="mt-5 border-t border-[#272521]/10 pt-4">
              <h3 className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#5E594F]">
                <Users className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
                <span>{t(UI_TEXT.workspace.connectedPeople, lang)}</span>
              </h3>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {dossier.relatedPeople.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => setSelectedPersonId(rel.id)}
                    className="text-xs font-medium text-[#101B17] underline decoration-[#C5A46D]/70 underline-offset-4 hover:text-[#9E7E49]"
                  >
                    {t(rel.name, lang)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
