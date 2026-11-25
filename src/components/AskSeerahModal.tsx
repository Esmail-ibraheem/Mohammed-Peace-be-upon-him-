import { useEffect, useState } from 'react';
import { ArrowRight, Loader2, Search, X } from 'lucide-react';
import { EVIDENCE_META, UI_TEXT, t } from '../data/i18n';
import type { Language } from '../types/seerah';
import {
  searchKnowledgeBase,
  type KnowledgeSearchHit,
} from '../utils/seerahEngine';

interface AskSeerahModalProps {
  open: boolean;
  lang: Language;
  onClose: () => void;
  onNavigateHit: (hit: KnowledgeSearchHit) => void;
}

const SAMPLE_QUESTIONS = [
  {
    en: 'Is the spider web at the Cave of Thawr authentic or disputed?',
    ar: 'ما درجة صحة قصة نسج العنكبوت عند غار ثور؟',
  },
  {
    en: 'What was Khadijah’s role during the first revelation?',
    ar: 'ما دور السيدة خديجة رضي الله عنها عند بدء الوحي؟',
  },
  {
    en: 'Why was the Treaty of Hudaybiyyah called a Manifest Victory?',
    ar: 'لماذا سمّى القرآن صلح الحديبية فتحاً مبيناً؟',
  },
];

export function AskSeerahModal({
  open,
  lang,
  onClose,
  onNavigateHit,
}: AskSeerahModalProps) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [citations, setCitations] = useState<KnowledgeSearchHit[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submitQuery = async (textToAsk: string) => {
    const trimmed = textToAsk.trim();
    if (trimmed.length < 3) {
      setValidationError(
        lang === 'ar'
          ? 'يرجى كتابة سؤال واضح لا يقل عن ٣ أحرف.'
          : 'Please enter a question of at least 3 characters.'
      );
      return;
    }

    setValidationError(null);
    setLoading(true);
    setAnswer(null);
    setErrorMessage(null);

    // Immediately retrieve verified archive hits locally so citations appear without lag
    const localHits = searchKnowledgeBase(trimmed, 6);
    setCitations(localHits);

    try {
      const res = await fetch('/api/ask-seerah', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed, lang }),
      });
      const data = await res.json();

      if (Array.isArray(data.citations) && data.citations.length > 0) {
        setCitations(data.citations);
      }

      if (!res.ok) {
        setErrorMessage(
          data.error ??
            (lang === 'ar'
              ? 'تعذّر الاتصال بخدمة التحليل حالياً.'
              : 'Unable to reach AI synthesis right now.')
        );
      } else {
        setAnswer(data.answer ?? '');
      }
    } catch {
      setErrorMessage(
        lang === 'ar'
          ? 'تعذّر الاتصال بالخادم. يمكنك مطالعة المصادر المطابقة من الأرشيف أدناه.'
          : 'Network error reaching the server. Verified matching entries from the archive remain shown below.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ask-seerah-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101B17]/75 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex max-h-[88vh] w-full max-w-3xl flex-col border border-[#C5A46D]/40 bg-[#F9F6EF] text-[#272521] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#272521]/10 bg-[#101B17] px-6 py-4 text-[#F9F6EF]">
          <div>
            <h2 id="ask-seerah-title" className="font-editorial text-2xl font-semibold">
              {t(UI_TEXT.nav.askSeerah, lang)}
            </h2>
            <p className="text-xs text-[#F2E8D5]/75">
              {lang === 'ar'
                ? 'بحث وتحقيق مسند إلى مدخلات الموسوعة الموثّقة مع بيان درجات الصحة.'
                : 'Source-grounded Seerah research citing verified entries and authenticity grades.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t(UI_TEXT.workspace.close, lang)}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#C5A46D]/40 text-[#F9F6EF] hover:bg-[#C5A46D]/20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitQuery(question);
            }}
            className="space-y-2"
          >
            <label htmlFor="ask-seerah-input" className="block text-xs font-semibold text-[#5E594F]">
              {lang === 'ar'
                ? 'اطرح سؤالاً عن حدث، شخصية، معجزة، أو درجة حديث:'
                : 'Ask about an event, companion, miracle, prophecy, or narration grade:'}
            </label>
            <div className="flex gap-2">
              <input
                id="ask-seerah-input"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={
                  lang === 'ar'
                    ? 'مثال: ما درجة صحة قصة غار ثور والعنكبوت؟'
                    : 'e.g. What is authentic vs. disputed about the Cave of Thawr?'
                }
                className="flex-1 border border-[#272521]/20 bg-[#F9F6EF] px-4 py-2.5 text-sm text-[#101B17] focus:border-[#C5A46D] focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-[#101B17] px-5 py-2.5 text-xs font-semibold text-[#F9F6EF] transition-colors hover:bg-[#1D312A] disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
                <span>{lang === 'ar' ? 'ابحث' : 'Research'}</span>
              </button>
            </div>
            {validationError && (
              <p role="alert" className="text-xs text-[#8B3A2B]">
                {validationError}
              </p>
            )}
          </form>

          {/* Suggested Inquiries */}
          <div className="space-y-2">
            <p className="text-xs text-[#5E594F]">
              {lang === 'ar' ? 'أسئلة مقترحة للبحث:' : 'Suggested inquiries:'}
            </p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_QUESTIONS.map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    const text = t(sample, lang);
                    setQuestion(text);
                    submitQuery(text);
                  }}
                  className="border border-[#272521]/15 bg-[#F2E8D5]/45 px-3 py-1.5 text-start text-xs text-[#101B17] transition-colors hover:border-[#C5A46D]"
                >
                  {t(sample, lang)}
                </button>
              ))}
            </div>
          </div>

          {/* Grounded AI Synthesis */}
          {answer && (
            <div className="border border-[#C5A46D]/40 bg-[#F2E8D5]/45 p-5">
              <h3 className="font-editorial text-xl font-semibold text-[#101B17]">
                {lang === 'ar' ? 'الخلاصة الموثّقة' : 'Grounded Research Summary'}
              </h3>
              <div className="mt-2 space-y-3 whitespace-pre-line text-sm leading-relaxed text-[#272521]">
                {answer}
              </div>
            </div>
          )}

          {/* Honest Error / Status Banner */}
          {errorMessage && (
            <div
              role="status"
              className="border border-[#8C5E1A]/35 bg-[#F2E8D5]/60 p-4 text-xs leading-relaxed text-[#272521]"
            >
              {errorMessage}
            </div>
          )}

          {/* Direct Verified Citations from Local Archive */}
          {citations.length > 0 && (
            <div className="space-y-3 border-t border-[#272521]/15 pt-4">
              <h3 className="text-xs font-semibold tracking-wider text-[#5E594F]">
                {lang === 'ar'
                  ? `المدخلات الموثّقة المطابقة في الأرشيف (${citations.length})`
                  : `Matching Verified Archive Entries (${citations.length})`}
              </h3>
              <ul className="divide-y divide-[#272521]/10 border border-[#272521]/12 bg-[#F9F6EF]">
                {citations.map((hit) => (
                  <li key={`${hit.kind}-${hit.id}`}>
                    <button
                      type="button"
                      onClick={() => {
                        onNavigateHit(hit);
                        onClose();
                      }}
                      className="group flex w-full items-start justify-between gap-3 p-4 text-start transition-colors hover:bg-[#F2E8D5]/45"
                    >
                      <div>
                        <div className="text-[11px] text-[#5E594F]">
                          <span className="uppercase">{hit.kind}</span>
                          {hit.grade && (
                            <>
                              <span className="mx-1.5">·</span>
                              <span className={`font-semibold ${EVIDENCE_META[hit.grade].accentClass}`}>
                                {t(EVIDENCE_META[hit.grade].label, lang)}
                              </span>
                            </>
                          )}
                          {hit.citation && (
                            <>
                              <span className="mx-1.5">·</span>
                              <span>{hit.citation}</span>
                            </>
                          )}
                        </div>
                        <div className="mt-1 font-editorial text-lg font-semibold text-[#101B17] group-hover:text-[#9E7E49]">
                          {lang === 'ar' ? hit.titleAr : hit.titleEn}
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-[#5E594F]">
                          {lang === 'ar' ? hit.snippetAr : hit.snippetEn}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#C5A46D] rtl:rotate-180" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
