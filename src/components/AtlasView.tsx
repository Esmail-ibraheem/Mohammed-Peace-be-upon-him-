import { useMemo, useState } from 'react';
import { ArrowRight, Compass, Minus, Plus, RotateCcw } from 'lucide-react';
import { UI_TEXT, t } from '../data/i18n';
import {
  HISTORICAL_LOCATIONS,
  HISTORICAL_ROUTES,
} from '../data/peopleAndLocations';
import type { Language, SeerahEvent } from '../types/seerah';
import { getLocationDossier } from '../utils/seerahEngine';
import { EvidenceStamp } from './EvidenceStamp';

interface AtlasViewProps {
  lang: Language;
  initialLocationId?: string | null;
  onSelectEvent: (event: SeerahEvent) => void;
  onSelectPerson: (personId: string) => void;
}

export function AtlasView({
  lang,
  initialLocationId,
  onSelectEvent,
  onSelectPerson,
}: AtlasViewProps) {
  const [selectedLocId, setSelectedLocId] = useState<string>(
    initialLocationId ?? 'makkah-kaaba'
  );
  const [activeRouteIds, setActiveRouteIds] = useState<string[]>([
    'route-hijrah',
    'route-isra',
  ]);
  const [zoom, setZoom] = useState<number>(1);

  const dossier = useMemo(
    () => getLocationDossier(selectedLocId) ?? getLocationDossier('makkah-kaaba')!,
    [selectedLocId]
  );

  const toggleRoute = (routeId: string) => {
    setActiveRouteIds((prev) =>
      prev.includes(routeId)
        ? prev.filter((id) => id !== routeId)
        : [...prev, routeId]
    );
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Atlas Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#272521]/15 pb-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-medium ltr:tracking-widest rtl:tracking-normal text-[#9E7E49]">
            {lang === 'ar'
              ? 'الأطلس الجغرافي التاريخي للحجاز والجزيرة'
              : 'INTERACTIVE HISTORICAL ATLAS · AL-HIJAZ & SURROUNDING LANDS'}
          </p>
          <h1 className="mt-1 font-editorial text-3xl font-semibold text-[#101B17] sm:text-5xl">
            {lang === 'ar' ? 'خريطة المواقع والرحلات النبوية' : 'Sacred Sites & Prophetic Journeys'}
          </h1>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-[#5E594F]">
          {lang === 'ar'
            ? 'انقر على أي موقع لاستعراض الأحداث والآيات المرتبطة به. جميع المسارات المرسومة تمثل إعادة بناء تاريخية تقريبية.'
            : 'Select any historical location pin to inspect connected events, revelations, and figures. Reconstructed route arcs are explicitly marked as approximate.'}
        </p>
      </div>

      {/* Route Layer Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border border-[#272521]/12 bg-[#F2E8D5]/45 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#101B17]">
            {lang === 'ar' ? 'المسارات التاريخية (تقريبية):' : 'Reconstructed Routes (Approximate):'}
          </span>
          {HISTORICAL_ROUTES.map((route) => {
            const active = activeRouteIds.includes(route.id);
            return (
              <button
                key={route.id}
                type="button"
                aria-pressed={active}
                onClick={() => toggleRoute(route.id)}
                className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? 'border-[#101B17] bg-[#101B17] text-[#F9F6EF]'
                    : 'border-[#272521]/20 bg-[#F9F6EF] text-[#5E594F] hover:text-[#101B17]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2"
                  style={{ backgroundColor: route.color }}
                />
                <span>{t(route.name, lang)}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Zoom out map"
            onClick={() => setZoom((z) => Math.max(0.85, Number((z - 0.15).toFixed(2))))}
            className="inline-flex h-8 w-8 items-center justify-center border border-[#272521]/20 bg-[#F9F6EF] text-[#101B17] hover:bg-[#101B17] hover:text-[#F9F6EF]"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            aria-label="Zoom in map"
            onClick={() => setZoom((z) => Math.min(1.6, Number((z + 0.15).toFixed(2))))}
            className="inline-flex h-8 w-8 items-center justify-center border border-[#272521]/20 bg-[#F9F6EF] text-[#101B17] hover:bg-[#101B17] hover:text-[#F9F6EF]"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            aria-label="Reset map zoom"
            onClick={() => setZoom(1)}
            className="inline-flex h-8 w-8 items-center justify-center border border-[#272521]/20 bg-[#F9F6EF] text-[#101B17] hover:bg-[#101B17] hover:text-[#F9F6EF]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Main Split: Interactive Historical Map + Site Dossier */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="relative overflow-hidden border border-[#272521]/15 bg-[#101B17] lg:col-span-7">
          <div className="overflow-auto">
            <svg
              viewBox="0 0 820 600"
              direction="ltr"
              role="img"
              aria-label={
                lang === 'ar'
                  ? 'خريطة تفاعلية لمواقع السيرة النبوية في الحجاز والشام والحبشة'
                  : 'Interactive historical map of Seerah locations across the Hijaz, Levant, and Abyssinia'
              }
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              className="h-[520px] w-full transition-transform duration-200 sm:h-[580px]"
            >
              {/* Archival Sea Backdrop */}
              <rect width="820" height="600" fill="#101B17" />

              {/* Subtle Coordinate Graticule */}
              {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                <line
                  key={`v-${x}`}
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={600}
                  stroke="#C5A46D"
                  strokeOpacity={0.08}
                  strokeWidth={1}
                />
              ))}
              {[100, 200, 300, 400, 500].map((y) => (
                <line
                  key={`h-${y}`}
                  x1={0}
                  y1={y}
                  x2={820}
                  y2={y}
                  stroke="#C5A46D"
                  strokeOpacity={0.08}
                  strokeWidth={1}
                />
              ))}

              {/* Simplified Stylized Landmasses: Arabian Peninsula + Levant */}
              <path
                d="M 240 0 L 820 0 L 820 600 L 580 600 L 520 530 L 440 460 L 380 350 L 330 220 L 290 120 L 235 60 Z"
                fill="#182822"
                stroke="#C5A46D"
                strokeOpacity={0.3}
                strokeWidth={1.5}
              />

              {/* African Coast & Abyssinia */}
              <path
                d="M 0 110 L 185 220 L 235 330 L 295 450 L 340 570 L 320 600 L 0 600 Z"
                fill="#16241F"
                stroke="#C5A46D"
                strokeOpacity={0.25}
                strokeWidth={1.5}
              />

              {/* Red Sea Label */}
              <text
                x={275}
                y={375}
                transform="rotate(56 275 375)"
                fill="#C5A46D"
                fillOpacity={0.35}
                fontSize={13}
                letterSpacing={lang === 'ar' ? 0 : 6}
              >
                {lang === 'ar' ? 'البحر الأحمر' : 'RED SEA'}
              </text>

              {/* Region Labels */}
              <text
                x={575}
                y={305}
                fill="#F2E8D5"
                fillOpacity={0.22}
                fontSize={16}
                letterSpacing={lang === 'ar' ? 0 : 5}
              >
                {lang === 'ar' ? 'شبه الجزيرة العربية' : 'ARABIAN PENINSULA'}
              </text>
              <text
                x={415}
                y={82}
                fill="#F2E8D5"
                fillOpacity={0.28}
                fontSize={12}
                letterSpacing={lang === 'ar' ? 0 : 4}
              >
                {lang === 'ar' ? 'بلاد الشام' : 'AL-SHAM (LEVANT)'}
              </text>
              <text
                x={70}
                y={478}
                fill="#F2E8D5"
                fillOpacity={0.28}
                fontSize={12}
                letterSpacing={lang === 'ar' ? 0 : 4}
              >
                {lang === 'ar' ? 'الحبشة' : 'ABYSSINIA'}
              </text>

              {/* Reconstructed Historical Routes */}
              {HISTORICAL_ROUTES.filter((r) => activeRouteIds.includes(r.id)).map(
                (route) => (
                  <g key={route.id}>
                    <path
                      d={route.pathD}
                      fill="none"
                      stroke={route.color}
                      strokeWidth={2.5}
                      strokeDasharray="6 5"
                      strokeLinecap="round"
                      opacity={0.9}
                    />
                  </g>
                )
              )}

              {/* Interactive Location Markers */}
              {HISTORICAL_LOCATIONS.map((loc) => {
                const isSelected = loc.id === dossier.location.id;
                const radius = isSelected ? 9 : loc.type === 'sanctuary' ? 7 : 5.5;
                const labelPlacement: Record<
                  string,
                  { dx: number; dy: number; anchor: 'start' | 'end' }
                > = {
                  'jerusalem-aqsa': { dx: -13, dy: 4, anchor: 'end' },
                  'busra-sham': { dx: 12, dy: 4, anchor: 'start' },
                  tabuk: { dx: -12, dy: 4, anchor: 'end' },
                  khaybar: { dx: -12, dy: 4, anchor: 'end' },
                  uhud: { dx: 12, dy: -2, anchor: 'start' },
                  'madinah-mosque': { dx: 14, dy: 4, anchor: 'start' },
                  quba: { dx: 12, dy: 7, anchor: 'start' },
                  badr: { dx: -12, dy: 4, anchor: 'end' },
                  'al-abwa': { dx: -12, dy: 4, anchor: 'end' },
                  'cave-of-hira': { dx: 12, dy: -4, anchor: 'start' },
                  hudaybiyyah: { dx: -12, dy: 4, anchor: 'end' },
                  'makkah-kaaba': { dx: 13, dy: -6, anchor: 'start' },
                  arafat: { dx: 12, dy: 6, anchor: 'start' },
                  'cave-of-thawr': { dx: -12, dy: 10, anchor: 'end' },
                  taif: { dx: 12, dy: 4, anchor: 'start' },
                  'banu-sad': { dx: 12, dy: 4, anchor: 'start' },
                  abyssinia: { dx: -12, dy: 4, anchor: 'end' },
                };
                const placement = labelPlacement[loc.id] ?? {
                  dx: 12,
                  dy: 4,
                  anchor: 'start',
                };
                return (
                  <g
                    key={loc.id}
                    role="button"
                    tabIndex={0}
                    aria-label={t(loc.name, lang)}
                    onClick={() => setSelectedLocId(loc.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedLocId(loc.id);
                      }
                    }}
                    className="cursor-pointer focus:outline-none"
                  >
                    {isSelected && (
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r={16}
                        fill="#C5A46D"
                        fillOpacity={0.22}
                        stroke="#C5A46D"
                        strokeWidth={1.2}
                      />
                    )}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={radius}
                      fill={isSelected ? '#C5A46D' : '#F9F6EF'}
                      stroke="#101B17"
                      strokeWidth={2}
                    />
                    <text
                      x={loc.x + placement.dx}
                      y={loc.y + placement.dy}
                      textAnchor={placement.anchor}
                      fill={isSelected ? '#C5A46D' : '#F2E8D5'}
                      stroke="#101B17"
                      strokeWidth={3.5}
                      strokeLinejoin="round"
                      style={{ paintOrder: 'stroke' }}
                      fontSize={isSelected ? 12.5 : 10.5}
                      fontWeight={isSelected ? 600 : 400}
                    >
                      {t(loc.name, lang).split(' (')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Map Legend Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#C5A46D]/20 bg-[#0B1310] px-4 py-2.5 text-[11px] text-[#F2E8D5]/70">
            <span className="inline-flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-[#C5A46D]" aria-hidden="true" />
              <span>
                {lang === 'ar'
                  ? 'خريطة توضيحية تقريبية للمعالم التاريخية'
                  : 'Stylized archival cartography · Dashed routes indicate approximate reconstructions'}
              </span>
            </span>
            <span className="tabular-nums">
              {HISTORICAL_LOCATIONS.length} {lang === 'ar' ? 'موقعاً' : 'sites'}
            </span>
          </div>
        </div>

        {/* Right Location Dossier Panel */}
        <aside className="flex flex-col justify-between border border-[#272521]/12 bg-[#F9F6EF] p-6 lg:col-span-5">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9E7E49]">
              <span>{t(dossier.location.region, lang)}</span>
              <span className="tabular-nums text-[#5E594F]">
                {t(dossier.location.coordinatesNote, lang)}
              </span>
            </div>

            <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#101B17]">
              {t(dossier.location.name, lang)}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#272521]">
              {t(dossier.location.summary, lang)}
            </p>
            <p className="mt-2 text-xs italic text-[#5E594F]">
              {t(dossier.location.historicalSignificance, lang)}
            </p>

            {/* Quick Location Switcher List for Accessibility */}
            <div className="mt-5 border-t border-[#272521]/10 pt-4">
              <label
                htmlFor="atlas-site-select"
                className="block text-xs font-semibold text-[#5E594F]"
              >
                {lang === 'ar' ? 'الانتقال المباشر إلى موقع:' : 'Jump directly to location:'}
              </label>
              <select
                id="atlas-site-select"
                value={dossier.location.id}
                onChange={(e) => setSelectedLocId(e.target.value)}
                className="mt-1.5 w-full border border-[#272521]/20 bg-[#F9F6EF] px-3 py-2 text-sm text-[#101B17] focus:border-[#C5A46D] focus:outline-none"
              >
                {HISTORICAL_LOCATIONS.map((l) => (
                  <option key={l.id} value={l.id}>
                    {t(l.name, lang)} — {t(l.region, lang)}
                  </option>
                ))}
              </select>
            </div>

            {/* Associated Events */}
            <div className="mt-6 border-t border-[#272521]/10 pt-4">
              <h3 className="text-xs font-semibold tracking-wider text-[#5E594F]">
                {t(UI_TEXT.workspace.connectedEvents, lang)} ({dossier.events.length})
              </h3>
              {dossier.events.length === 0 ? (
                <p className="mt-2 text-xs text-[#5E594F]">
                  {lang === 'ar'
                    ? 'لا توجد أحداث مباشرة مسجلة لهذا الموقع.'
                    : 'No direct timeline entries attached yet.'}
                </p>
              ) : (
                <ul className="mt-3 divide-y divide-[#272521]/10">
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
                          <div className="mt-1 font-editorial text-lg font-semibold text-[#101B17] group-hover:text-[#9E7E49]">
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

            {/* Associated People */}
            {dossier.people.length > 0 && (
              <div className="mt-5 border-t border-[#272521]/10 pt-4">
                <h3 className="text-xs font-semibold tracking-wider text-[#5E594F]">
                  {t(UI_TEXT.workspace.connectedPeople, lang)}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                  {dossier.people.slice(0, 8).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onSelectPerson(p.id)}
                      className="text-xs font-medium text-[#101B17] underline decoration-[#C5A46D]/70 underline-offset-4 hover:text-[#9E7E49]"
                    >
                      {t(p.name, lang)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
