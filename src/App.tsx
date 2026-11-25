import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Globe, Search, X } from 'lucide-react';
import { AskSeerahModal } from './components/AskSeerahModal';
import { AtlasView } from './components/AtlasView';
import { EncyclopediaView } from './components/EncyclopediaView';
import { EventDetailModal } from './components/EventDetailModal';
import { Header } from './components/Header';
import { ImmersiveStoryModal } from './components/ImmersiveStoryModal';
import { PeopleView } from './components/PeopleView';
import { RevelationsView } from './components/RevelationsView';
import { TimelineView } from './components/TimelineView';
import { EVIDENCE_META, UI_TEXT, t } from './data/i18n';
import { SEERAH_EVENTS } from './data/timeline';
import type {
  ActiveSection,
  EncyclopediaTab,
  Language,
  SeerahEvent,
} from './types/seerah';
import {
  searchKnowledgeBase,
  type KnowledgeSearchHit,
} from './utils/seerahEngine';

const BOOKMARKS_KEY = 'prophetic_journey_bookmarks_v1';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<ActiveSection>('timeline');
  const [encyclopediaTab, setEncyclopediaTab] =
    useState<EncyclopediaTab>('miracles');
  const [selectedEvent, setSelectedEvent] = useState<SeerahEvent | null>(null);
  const [focusedPersonId, setFocusedPersonId] = useState<string | null>(null);
  const [focusedLocationId, setFocusedLocationId] = useState<string | null>(null);
  const [focusedRevelationId, setFocusedRevelationId] = useState<string | null>(
    null
  );
  const [immersiveOpen, setImmersiveOpen] = useState(false);
  const [immersiveEventId, setImmersiveEventId] = useState<string | null>(null);
  const [askOpen, setAskOpen] = useState(false);
  const [globalQuery, setGlobalQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore storage errors
    }
    return ['first-revelation-hira', 'cave-of-thawr'];
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarkedIds));
    } catch {
      // ignore storage errors
    }
  }, [bookmarkedIds]);

  const globalHits = useMemo(
    () => (globalQuery.trim().length >= 2 ? searchKnowledgeBase(globalQuery, 8) : []),
    [globalQuery]
  );

  const toggleBookmark = (eventId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const navigateToPerson = (personId: string) => {
    setFocusedPersonId(personId);
    setActiveSection('people');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLocation = (locationId: string) => {
    setFocusedLocationId(locationId);
    setActiveSection('atlas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRevelation = (revId: string) => {
    setFocusedRevelationId(revId);
    setActiveSection('revelations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHit = (hit: KnowledgeSearchHit) => {
    setGlobalQuery('');
    if (hit.kind === 'event') {
      const found = SEERAH_EVENTS.find((e) => e.id === hit.id);
      if (found) setSelectedEvent(found);
      return;
    }
    if (hit.kind === 'person') {
      navigateToPerson(hit.id);
      return;
    }
    if (hit.kind === 'location') {
      navigateToLocation(hit.id);
      return;
    }
    if (hit.kind === 'revelation') {
      navigateToRevelation(hit.id);
      return;
    }
    if (hit.kind === 'miracle') {
      setEncyclopediaTab('miracles');
      setActiveSection('encyclopedia');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (hit.kind === 'prophecy') {
      setEncyclopediaTab('prophecies');
      setActiveSection('encyclopedia');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6EF] text-[#272521]">
      <Header
        lang={lang}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        onOpenAsk={() => setAskOpen(true)}
      />

      {/* Archival Workspace Utility Bar (Search, Language EN/AR RTL, Bookmarks) */}
      <div className="border-b border-[#272521]/10 bg-[#F2E8D5]/55">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Global Knowledge Graph Search */}
          <div className="relative flex-1 min-w-[220px] max-w-md">
            <label htmlFor="global-archive-search" className="sr-only">
              {t(UI_TEXT.workspace.searchPlaceholder, lang)}
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[#5E594F] ltr:left-3 rtl:right-3"
              aria-hidden="true"
            />
            <input
              id="global-archive-search"
              type="search"
              value={globalQuery}
              onChange={(e) => setGlobalQuery(e.target.value)}
              placeholder={t(UI_TEXT.workspace.searchPlaceholder, lang)}
              className="w-full border border-[#272521]/15 bg-[#F9F6EF] py-1.5 text-xs text-[#272521] placeholder:text-[#5E594F]/75 focus:border-[#C5A46D] focus:outline-none ltr:pl-9 ltr:pr-8 rtl:pr-9 rtl:pl-8"
            />
            {globalQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setGlobalQuery('')}
                className="absolute top-1/2 -translate-y-1/2 text-[#5E594F] hover:text-[#101B17] ltr:right-2.5 rtl:left-2.5"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}

            {/* Instant Search Results Dropdown */}
            {globalHits.length > 0 && (
              <div className="absolute inset-x-0 top-full z-30 mt-1 max-h-96 overflow-y-auto border border-[#C5A46D]/50 bg-[#F9F6EF] shadow-xl">
                <ul className="divide-y divide-[#272521]/10">
                  {globalHits.map((hit) => (
                    <li key={`${hit.kind}-${hit.id}`}>
                      <button
                        type="button"
                        onClick={() => handleNavigateHit(hit)}
                        className="block w-full px-4 py-3 text-start transition-colors hover:bg-[#F2E8D5]/60"
                      >
                        <div className="text-[11px] text-[#5E594F]">
                          <span className="uppercase">{hit.kind}</span>
                          {hit.grade && (
                            <>
                              <span className="mx-1.5">·</span>
                              <span className={EVIDENCE_META[hit.grade].accentClass}>
                                {t(EVIDENCE_META[hit.grade].label, lang)}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="mt-0.5 font-editorial text-base font-semibold text-[#101B17]">
                          {lang === 'ar' ? hit.titleAr : hit.titleEn}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Controls: Bookmarks shortcut & EN / العربية Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setEncyclopediaTab('learning');
                setActiveSection('encyclopedia');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5E594F] transition-colors hover:text-[#101B17]"
            >
              <Bookmark className="h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
              <span>{t(UI_TEXT.workspace.bookmarks, lang)}</span>
              <span className="tabular-nums text-[#101B17]">
                ({bookmarkedIds.length})
              </span>
            </button>

            <span aria-hidden="true" className="h-4 w-px bg-[#272521]/15" />

            <div
              role="group"
              aria-label="Language switch"
              className="inline-flex items-center border border-[#272521]/15 bg-[#F9F6EF]"
            >
              <Globe className="mx-2 h-3.5 w-3.5 text-[#9E7E49]" aria-hidden="true" />
              <button
                type="button"
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  lang === 'en'
                    ? 'bg-[#101B17] text-[#F9F6EF]'
                    : 'text-[#5E594F] hover:text-[#101B17]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={lang === 'ar'}
                onClick={() => setLang('ar')}
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  lang === 'ar'
                    ? 'bg-[#101B17] text-[#F9F6EF]'
                    : 'text-[#5E594F] hover:text-[#101B17]'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Active Gallery Canvas */}
      <main className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
        {activeSection === 'timeline' && (
          <TimelineView
            lang={lang}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            onOpenImmersive={(eventId) => {
              setImmersiveEventId(eventId ?? null);
              setImmersiveOpen(true);
            }}
          />
        )}

        {activeSection === 'encyclopedia' && (
          <EncyclopediaView
            lang={lang}
            activeTab={encyclopediaTab}
            onSelectTab={setEncyclopediaTab}
            bookmarkedIds={bookmarkedIds}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
          />
        )}

        {activeSection === 'atlas' && (
          <AtlasView
            lang={lang}
            initialLocationId={focusedLocationId}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            onSelectPerson={navigateToPerson}
          />
        )}

        {activeSection === 'people' && (
          <PeopleView
            lang={lang}
            initialPersonId={focusedPersonId}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            onSelectLocation={navigateToLocation}
          />
        )}

        {activeSection === 'revelations' && (
          <RevelationsView
            lang={lang}
            initialRevelationId={focusedRevelationId}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            onSelectLocation={navigateToLocation}
          />
        )}
      </main>

      {/* Quiet Institutional Museum Footer */}
      <footer className="border-t border-[#272521]/12 bg-[#101B17] text-[#F2E8D5]">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <div className="font-editorial text-2xl font-semibold text-[#F9F6EF]">
              {t(UI_TEXT.brand, lang)}
            </div>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-[#F2E8D5]/70">
              {lang === 'ar'
                ? 'متحف رقمي وموسوعة موثقة للسيرة النبوية الشريفة تميّز بين القرآن والحديث الصحيح والحسن والتاريخي والمختلف فيه.'
                : 'An interactive digital museum and source-verified encyclopedia of the Seerah of Prophet Muhammad ﷺ, clearly distinguishing Qur’anic, Sahih, Hasan, Historical, and Disputed reports.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#F2E8D5]/80">
            <button
              type="button"
              onClick={() => {
                setEncyclopediaTab('sources');
                setActiveSection('encyclopedia');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#C5A46D]"
            >
              {t(UI_TEXT.encyclopediaTabs.sources, lang)}
            </button>
            <button
              type="button"
              onClick={() => {
                setEncyclopediaTab('shamail');
                setActiveSection('encyclopedia');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#C5A46D]"
            >
              {t(UI_TEXT.encyclopediaTabs.shamail, lang)}
            </button>
            <button
              type="button"
              onClick={() => {
                setEncyclopediaTab('learning');
                setActiveSection('encyclopedia');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#C5A46D]"
            >
              {t(UI_TEXT.encyclopediaTabs.learning, lang)}
            </button>
            <button
              type="button"
              onClick={() => setAskOpen(true)}
              className="text-[#C5A46D] hover:underline"
            >
              {t(UI_TEXT.nav.askSeerah, lang)}
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <EventDetailModal
        event={selectedEvent}
        lang={lang}
        isBookmarked={
          selectedEvent ? bookmarkedIds.includes(selectedEvent.id) : false
        }
        onToggleBookmark={toggleBookmark}
        onClose={() => setSelectedEvent(null)}
        onSelectPerson={navigateToPerson}
        onSelectLocation={navigateToLocation}
        onSelectRevelation={navigateToRevelation}
      />

      <ImmersiveStoryModal
        open={immersiveOpen}
        lang={lang}
        initialEventId={immersiveEventId}
        onClose={() => setImmersiveOpen(false)}
      />

      <AskSeerahModal
        open={askOpen}
        lang={lang}
        onClose={() => setAskOpen(false)}
        onNavigateHit={handleNavigateHit}
      />
    </div>
  );
}
