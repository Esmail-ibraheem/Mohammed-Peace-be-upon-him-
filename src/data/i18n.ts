import type { DatePrecision, EvidenceGrade, Language } from '../types/seerah';

export const EVIDENCE_META: Record<
  EvidenceGrade,
  {
    label: { en: string; ar: string };
    description: { en: string; ar: string };
    shortCode: string;
    accentClass: string;
    borderClass: string;
  }
> = {
  quran: {
    label: { en: "Qur'an", ar: 'القرآن الكريم' },
    description: {
      en: "Directly mentioned or established in the Holy Qur'an.",
      ar: 'ثابت ومذكور صراحةً في القرآن الكريم.',
    },
    shortCode: 'QRN',
    accentClass: 'text-[#101B17]',
    borderClass: 'border-[#101B17]',
  },
  sahih: {
    label: { en: 'Sahih', ar: 'صحيح' },
    description: {
      en: 'Authentic narration verified by rigorous hadith chains (e.g., Bukhari, Muslim).',
      ar: 'حديث صحيح الإسناد ثابت في الصحيحين أو ما صححه أئمة الحديث.',
    },
    shortCode: 'SHH',
    accentClass: 'text-[#1B4D3E]',
    borderClass: 'border-[#1B4D3E]',
  },
  hasan: {
    label: { en: 'Hasan', ar: 'حسن' },
    description: {
      en: 'Sound narration meeting accepted hadith reliability standards.',
      ar: 'حديث حسن الإسناد مقبول عند أهل العلم.',
    },
    shortCode: 'HSN',
    accentClass: 'text-[#3F5E4D]',
    borderClass: 'border-[#3F5E4D]',
  },
  disputed: {
    label: { en: 'Disputed', ar: 'مختلف فيه' },
    description: {
      en: 'Scholars differ regarding the chain of transmission, timing, or details.',
      ar: 'اختلف العلماء في ثبوته أو تاريخه أو بعض تفاصيله.',
    },
    shortCode: 'DSP',
    accentClass: 'text-[#8C5E1A]',
    borderClass: 'border-[#8C5E1A]',
  },
  daif: {
    label: { en: "Da'if", ar: 'ضعيف' },
    description: {
      en: 'Weak narration; preserved in historical literature but not established as authentic.',
      ar: 'رواية ضعيفة السند، تُذكر للتنبيه والتمييز ولا يُجزم بثبوتها.',
    },
    shortCode: 'DAF',
    accentClass: 'text-[#8B3A2B]',
    borderClass: 'border-[#8B3A2B]',
  },
  historical: {
    label: { en: 'Historical', ar: 'تاريخي' },
    description: {
      en: 'Early Seerah or biographical report assessed by classical historians separately from sahih hadith.',
      ar: 'خبر سيري أو تاريخي يُنظر فيه بمنهج المؤرخين منفصلاً عن شروط الصحيح.',
    },
    shortCode: 'HST',
    accentClass: 'text-[#5E594F]',
    borderClass: 'border-[#5E594F]',
  },
};

export const DATE_PRECISION_LABEL: Record<DatePrecision, { en: string; ar: string }> = {
  exact: { en: 'Documented date', ar: 'تاريخ موثّق' },
  approximate: { en: 'Approximate date', ar: 'تاريخ تقريبي' },
  disputed: { en: 'Scholarly date variance', ar: 'تاريخ مختلف فيه' },
};

export const UI_TEXT = {
  brand: { en: 'The Prophetic Journey', ar: 'الرحلة النبوية' },
  nav: {
    timeline: { en: 'Timeline', ar: 'الخط الزمني' },
    encyclopedia: { en: 'Encyclopedia', ar: 'الموسوعة' },
    atlas: { en: 'Atlas', ar: 'الأطلس' },
    people: { en: 'People', ar: 'الشخصيات' },
    revelations: { en: 'Revelations', ar: 'الوحي' },
    askSeerah: { en: 'Ask the Seerah', ar: 'اسأل السيرة' },
  },
  hero: {
    kicker: {
      en: 'Digital Historical Museum · Source-Verified Seerah Archive',
      ar: 'متحف رقمي تاريخي · موسوعة السيرة النبوية الموثقة',
    },
    title: {
      en: 'The Life of Prophet Muhammad ﷺ',
      ar: 'سيرة النبي محمد ﷺ',
    },
    subtitle: {
      en: 'Explore the complete chronological Seerah from before his birth to his passing—grounded in the Qur’an, Sahih Hadith, and classical historiography with explicit authenticity grading.',
      ar: 'استكشف السيرة النبوية كاملةً بتسلسل زمني دقيق من قبل المولد حتى الوفاة، موثّقة بالقرآن والسنة الصحيحة وكتب السيرة مع التمييز الصريح بين الصحيح والضعيف والمختلف فيه.',
    },
    exploreTimeline: { en: 'Begin Chronological Journey', ar: 'ابدأ الرحلة الزمنية' },
    immersiveMode: { en: 'Enter Immersive Mode', ar: 'الوضع التفاعلي' },
    noDepictionNote: {
      en: 'Curatorial Principle: Visuals feature historical Hijazi landscapes, Islamic calligraphy, and classical manuscripts without depicting the Prophet ﷺ.',
      ar: 'منهج العرض: تعتمد الصور على معالم الحجاز التاريخية والمخطوطات والخط العربي، دون أي تجسيد للنبي ﷺ.',
    },
  },
  workspace: {
    searchPlaceholder: {
      en: 'Search events, people, miracles, surahs, or sources...',
      ar: 'ابحث في الأحداث، الشخصيات، المعجزات، السور، أو المصادر...',
    },
    allGrades: { en: 'All evidence grades', ar: 'جميع درجات التوثيق' },
    allEras: { en: 'All nine eras', ar: 'جميع المراحل التسع' },
    bookmarks: { en: 'Saved', ar: 'المحفوظات' },
    onThisDay: { en: 'Hijri Highlights', ar: 'حدث في مثل هذا اليوم' },
    close: { en: 'Close', ar: 'إغلاق' },
    readDossier: { en: 'Inspect Dossier', ar: 'عرض التوثيق' },
    primarySources: { en: 'Primary Sources & Verification', ar: 'المصادر الأولية والتوثيق' },
    scholarlyNotes: { en: 'Scholarly Commentary & Differences', ar: 'تحقيق العلماء والاختلافات' },
    connectedPeople: { en: 'Connected Figures', ar: 'شخصيات مرتبطة' },
    connectedLocation: { en: 'Historical Location', ar: 'الموقع التاريخي' },
    connectedRevelations: { en: 'Associated Revelations', ar: 'آيات نزلت في الحدث' },
    connectedEvents: { en: 'Related Chronological Events', ar: 'أحداث زمنية مرتبطة' },
    saveBookmark: { en: 'Bookmark', ar: 'حفظ' },
    savedBookmark: { en: 'Bookmarked', ar: 'محفوظ' },
    noResults: {
      en: 'No documented entries match the current search and filter criteria.',
      ar: 'لا توجد مدخلات موثقة تطابق معايير البحث والتصفية الحالية.',
    },
    resetFilters: { en: 'Reset filters', ar: 'إعادة تعيين التصفية' },
  },
  encyclopediaTabs: {
    miracles: { en: 'Miracles', ar: 'المعجزات' },
    prophecies: { en: 'Prophecies', ar: 'دلائل النبوة' },
    shamail: { en: 'Character & Daily Life', ar: 'الشمائل والحياة اليومية' },
    sources: { en: 'Sources & Authenticity', ar: 'المصادر ومنهج التوثيق' },
    learning: { en: 'Learning & Study', ar: 'التعلم والاختبارات' },
  },
} as const;

export function t(text: { en: string; ar: string }, lang: Language): string {
  return lang === 'ar' ? text.ar : text.en;
}
