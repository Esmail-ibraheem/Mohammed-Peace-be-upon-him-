import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { MUSEUM_IMAGES } from '../data/assets';
import { UI_TEXT, t } from '../data/i18n';
import { SEERAH_EVENTS, TIMELINE_ERAS } from '../data/timeline';
import type { Language } from '../types/seerah';
import { EvidenceStamp } from './EvidenceStamp';

interface ImmersiveStoryModalProps {
  open: boolean;
  lang: Language;
  initialEventId?: string | null;
  onClose: () => void;
}

export function ImmersiveStoryModal({
  open,
  lang,
  initialEventId,
  onClose,
}: ImmersiveStoryModalProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    if (initialEventId) {
      const found = SEERAH_EVENTS.findIndex((e) => e.id === initialEventId);
      if (found >= 0) setIndex(found);
    }
  }, [open, initialEventId]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setIndex((i) => Math.min(SEERAH_EVENTS.length - 1, i + 1));
      }
      if (e.key === 'ArrowLeft') {
        setIndex((i) => Math.max(0, i - 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const current = SEERAH_EVENTS[index];
  const era = TIMELINE_ERAS.find((e) => e.id === current.eraId);
  const bgImage = current.imageUrl ?? era?.imageUrl ?? MUSEUM_IMAGES.hijazHero;
  const progress = Math.round(((index + 1) / SEERAH_EVENTS.length) * 100);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'ar' ? 'الوضع التفاعلي للسيرة' : 'Immersive Seerah Exhibition'}
      className="fixed inset-0 z-50 flex flex-col bg-[#101B17] text-[#F9F6EF]"
    >
      {/* Top Progress Bar */}
      <div className="h-1 w-full bg-[#F9F6EF]/10">
        <div
          className="h-full bg-[#C5A46D] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-[#C5A46D]/20 px-6 py-4">
        <div className="text-xs text-[#F2E8D5]/80 tabular-nums">
          <span>
            {era ? `${era.number}. ${t(era.title, lang)}` : ''}
          </span>
          <span aria-hidden="true" className="mx-2">·</span>
          <span>
            {index + 1} / {SEERAH_EVENTS.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t(UI_TEXT.workspace.close, lang)}
          className="inline-flex items-center gap-2 border border-[#C5A46D]/35 px-3 py-1.5 text-xs font-medium text-[#F9F6EF] transition-colors hover:bg-[#C5A46D]/15"
        >
          <X className="h-4 w-4" />
          <span>{t(UI_TEXT.workspace.close, lang)}</span>
        </button>
      </div>

      {/* Main Split Exhibition Stage */}
      <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
        <div className="relative min-h-[240px] lg:col-span-6 lg:min-h-full">
          <img
            src={bgImage}
            alt={t(current.title, lang)}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B17] via-[#101B17]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#101B17]/35 lg:to-[#101B17]" />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-12 lg:col-span-6 lg:px-14">
          <EvidenceStamp
            grade={current.evidenceGrade}
            datePrecision={current.datePrecision}
            dateText={t(current.dateDisplay, lang)}
            lang={lang}
            darkSurface
          />

          <h2 className="mt-3 font-editorial text-3xl font-semibold leading-tight text-[#F9F6EF] sm:text-4xl lg:text-5xl">
            {t(current.title, lang)}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#F2E8D5]/90">
            {t(current.narrative, lang)}
          </p>

          {current.arabicQuote && (
            <div className="mt-6 border-y border-[#C5A46D]/30 py-4">
              <p dir="rtl" className="font-arabic text-2xl text-[#C5A46D]">
                {current.arabicQuote}
              </p>
              {current.arabicQuoteTranslation && (
                <p
                  dir="ltr"
                  className="mt-2 font-editorial text-sm italic text-[#F2E8D5]/75"
                >
                  “{current.arabicQuoteTranslation}”
                </p>
              )}
            </div>
          )}

          <div className="mt-6 text-xs text-[#F2E8D5]/70">
            <span className="font-semibold text-[#C5A46D]">
              {lang === 'ar' ? 'المصدر الأولي:' : 'Primary Source:'}
            </span>{' '}
            {current.sources
              .map((s) => `${lang === 'ar' ? s.bookAr : s.book} (${s.citation})`)
              .join(' · ')}
          </div>
        </div>
      </div>

      {/* Bottom Chronological Scrubber */}
      <div className="flex items-center justify-between gap-4 border-t border-[#C5A46D]/20 bg-[#0B1310] px-6 py-4">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="inline-flex items-center gap-2 border border-[#C5A46D]/35 px-4 py-2 text-xs font-medium text-[#F9F6EF] transition-colors hover:bg-[#C5A46D]/15 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>{lang === 'ar' ? 'السابق' : 'Previous'}</span>
        </button>

        <div className="hidden max-w-xl flex-1 items-center gap-1 overflow-x-auto md:flex">
          {TIMELINE_ERAS.map((eraItem) => {
            const isCurrentEra = eraItem.id === current.eraId;
            return (
              <button
                key={eraItem.id}
                type="button"
                onClick={() => {
                  const firstInEra = SEERAH_EVENTS.findIndex(
                    (ev) => ev.eraId === eraItem.id
                  );
                  if (firstInEra >= 0) setIndex(firstInEra);
                }}
                className={`px-2 py-1 text-[11px] whitespace-nowrap transition-colors ${
                  isCurrentEra
                    ? 'border-b-2 border-[#C5A46D] font-semibold text-[#C5A46D]'
                    : 'text-[#F2E8D5]/55 hover:text-[#F9F6EF]'
                }`}
              >
                {eraItem.number}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() =>
            setIndex((i) => Math.min(SEERAH_EVENTS.length - 1, i + 1))
          }
          disabled={index === SEERAH_EVENTS.length - 1}
          className="inline-flex items-center gap-2 bg-[#C5A46D] px-4 py-2 text-xs font-semibold text-[#101B17] transition-colors hover:bg-[#D4B784] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <span>{lang === 'ar' ? 'التالي' : 'Next Event'}</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
