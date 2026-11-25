import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { UI_TEXT, t } from '../data/i18n';
import type { ActiveSection, Language } from '../types/seerah';

interface HeaderProps {
  lang: Language;
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
  onOpenAsk: () => void;
}

const NAV_ITEMS: { id: ActiveSection; key: keyof typeof UI_TEXT.nav }[] = [
  { id: 'timeline', key: 'timeline' },
  { id: 'encyclopedia', key: 'encyclopedia' },
  { id: 'atlas', key: 'atlas' },
  { id: 'people', key: 'people' },
  { id: 'revelations', key: 'revelations' },
];

export function Header({
  lang,
  activeSection,
  onSelectSection,
  onOpenAsk,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: ActiveSection) => {
    onSelectSection(section);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#272521]/10 bg-[#F9F6EF]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleNav('timeline')}
          className="font-editorial text-xl font-semibold tracking-tight text-[#101B17] whitespace-nowrap shrink-0 transition-colors hover:text-[#9E7E49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A46D] sm:text-2xl"
        >
          {t(UI_TEXT.brand, lang)}
        </button>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A46D] ${
                  active
                    ? 'text-[#101B17]'
                    : 'text-[#5E594F] hover:text-[#101B17]'
                }`}
              >
                {t(UI_TEXT.nav[item.key], lang)}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-[#C5A46D]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA Action (+ mobile drawer toggle on small viewports) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenAsk}
            className="bg-[#101B17] px-4 py-2 text-xs font-medium tracking-wide text-[#F9F6EF] whitespace-nowrap shrink-0 transition-colors hover:bg-[#1D312A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A46D] sm:text-sm"
          >
            {t(UI_TEXT.nav.askSeerah, lang)}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#272521]/15 text-[#101B17] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#272521]/10 bg-[#F9F6EF] px-4 py-3 md:hidden"
        >
          <div className="flex flex-col divide-y divide-[#272521]/10">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center justify-between py-2 text-start text-sm font-medium ${
                    active ? 'text-[#101B17] font-semibold' : 'text-[#5E594F]'
                  }`}
                >
                  <span>{t(UI_TEXT.nav[item.key], lang)}</span>
                  {active && <span className="h-1.5 w-6 bg-[#C5A46D]" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
