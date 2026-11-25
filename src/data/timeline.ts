import { MUSEUM_IMAGES } from './assets';
import type { SeerahEvent, TimelineEra } from '../types/seerah';

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: 'before-birth',
    number: '01',
    title: { en: 'Before His Birth', ar: 'قبل المولد' },
    dateRange: { en: 'Before ~570 CE', ar: 'قبل نحو ٥٧٠ م' },
    summary: {
      en: 'The Abrahamic heritage of Makkah, the raising of the Kaaba, the rediscovery of Zamzam, noble lineage, and the Year of the Elephant.',
      ar: 'الإرث الإبراهيمي في مكة، وبناء الكعبة، وحفر زمزم، والنسب الشريف، وعام الفيل.',
    },
    imageUrl: MUSEUM_IMAGES.hijazHero,
  },
  {
    id: 'birth-childhood',
    number: '02',
    title: { en: 'Birth & Childhood', ar: 'المولد والطفولة' },
    dateRange: { en: '~570–582 CE', ar: 'نحو ٥٧٠–٥٨٢ م' },
    summary: {
      en: 'Birth in Makkah, fostering with Halimah al-Sa’diyyah, the opening of his chest, bereavement of his mother and grandfather, and care under Abu Talib.',
      ar: 'المولد في مكة، والرضاعة عند حليمة السعدية، وشق الصدر، ووفاة أمه وجده، وكفالة أبي طالب.',
    },
    imageUrl: MUSEUM_IMAGES.hijazHero,
  },
  {
    id: 'youth-adulthood',
    number: '03',
    title: { en: 'Youth & Adulthood', ar: 'الشباب والرجولة' },
    dateRange: { en: '~582–610 CE', ar: 'نحو ٥٨٢–٦١٠ م' },
    summary: {
      en: 'Shepherding in the Hijaz, the Pact of the Virtuous, caravan trade, reputation as Al-Amin, marriage to Khadijah, and the Black Stone arbitration.',
      ar: 'رعي الغنم، وحلف الفضول، والتجارة بالشام، ولقب الصادق الأمين، والزواج من خديجة، وتحكيم الحجر الأسود.',
    },
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },
  {
    id: 'beginning-revelation',
    number: '04',
    title: { en: 'Beginning of Revelation', ar: 'بداية الوحي' },
    dateRange: { en: '610–613 CE', ar: '٦١٠–٦١٣ م' },
    summary: {
      en: 'Contemplative seclusion in the Cave of Hira, the descent of Jibreel with Surah Al-Alaq, counsel of Waraqah ibn Nawfal, and the earliest believers.',
      ar: 'التحنث في غار حراء، ونزول جبريل بسورة العلق، وشهادة ورقة بن نوفل، والسابقون الأولون.',
    },
    imageUrl: MUSEUM_IMAGES.caveOfHira,
  },
  {
    id: 'makkan-period',
    number: '05',
    title: { en: 'The Makkan Period', ar: 'العهد المكي' },
    dateRange: { en: '613–622 CE', ar: '٦١٣–٦٢٢ م' },
    summary: {
      en: 'Public proclamation at Mount Safa, persecution, migration to Abyssinia, the three-year boycott, Year of Sorrow, Ta’if, and Al-Isra wal-Mi’raj.',
      ar: 'الجهر بالدعوة على الصفا، والاضطهاد، والهجرة إلى الحبشة، والحصار في الشعب، وعام الحزن، والطائف، والإسراء والمعراج.',
    },
    imageUrl: MUSEUM_IMAGES.caveOfHira,
  },
  {
    id: 'the-hijrah',
    number: '06',
    title: { en: 'The Hijrah', ar: 'الهجرة النبوية' },
    dateRange: { en: '622 CE · 1 AH', ar: '٦٢٢ م · ١ هـ' },
    summary: {
      en: 'Departure from Makkah with Abu Bakr, refuge in the Cave of Thawr, pursuit of Suraqah ibn Malik, founding Masjid Quba, and arrival in Madinah.',
      ar: 'الخروج من مكة مع أبي بكر، واللجوء إلى غار ثور، وقصة سراقة بن مالك، وتأسيس مسجد قباء، والقدوم إلى المدينة.',
    },
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },
  {
    id: 'madinan-period',
    number: '07',
    title: { en: 'The Madinan Period', ar: 'العهد المدني' },
    dateRange: { en: '622–630 CE · 1–8 AH', ar: '٦٢٢–٦٣٠ م · ١–٨ هـ' },
    summary: {
      en: 'Establishing the Prophetic Mosque and civic charter, Badr, Uhud, the Trench, the Treaty of Hudaybiyyah, diplomatic epistles, and Khaybar.',
      ar: 'بناء المسجد النبوي ووثيقة المدينة، وبدر، وأحد، والخندق، وصلح الحديبية، والرسائل إلى الملوك، وخيبر.',
    },
    imageUrl: MUSEUM_IMAGES.madinahCourtyard,
  },
  {
    id: 'final-years',
    number: '08',
    title: { en: 'The Final Years', ar: 'السنوات الأخيرة' },
    dateRange: { en: '630–632 CE · 8–10 AH', ar: '٦٣٠–٦٣٢ م · ٨–١٠ هـ' },
    summary: {
      en: 'The bloodless Conquest of Makkah, Hunayn, Tabuk, the Year of Delegations, and the Farewell Pilgrimage proclaiming universal human dignity.',
      ar: 'فتح مكة، وغزوة حنين، وغزوة تبوك، وعام الوفود، وحجة الوداع وخطبتها الجامعة.',
    },
    imageUrl: MUSEUM_IMAGES.manuscript,
  },
  {
    id: 'his-passing',
    number: '09',
    title: { en: 'His Passing', ar: 'وفاة الرسول ﷺ' },
    dateRange: { en: '632 CE · 11 AH', ar: '٦٣٢ م · ١١ هـ' },
    summary: {
      en: 'His final illness, parting counsel on prayer and compassion, passing in the chamber of Aishah, Abu Bakr’s steadying address, and burial in Madinah.',
      ar: 'مرضه الأخير، ووصيته بالصلاة والرحمة، ووفاته في حجرة عائشة، وخطبة أبي بكر الثابتة، ودفنه بالمدينة.',
    },
    imageUrl: MUSEUM_IMAGES.madinahCourtyard,
  },
];

export const SEERAH_EVENTS: SeerahEvent[] = [
  // ERA 1: BEFORE HIS BIRTH
  {
    id: 'ibrahim-kaaba',
    eraId: 'before-birth',
    yearCE: -1800,
    dateDisplay: { en: 'Ancient Era (Pre-570 CE)', ar: 'العهد القديم (قبل ٥٧٠ م)' },
    datePrecision: 'approximate',
    title: {
      en: 'Prophet Ibrahim & Ismail Raise the Kaaba',
      ar: 'رفع إبراهيم وإسماعيل عليهما السلام قواعد الكعبة',
    },
    summary: {
      en: 'Prophet Ibrahim and his son Ismail عليهما السلام raised the foundations of the Sacred House in Makkah and supplicated for a final Messenger from their descendants.',
      ar: 'رفع نبي الله إبراهيم وابنه إسماعيل عليهما السلام القواعد من البيت الحرام في مكة ودعوا أن يبعث الله في ذريتهما رسولاً منهم.',
    },
    narrative: {
      en: 'Long before the birth of Muhammad ﷺ, Prophet Ibrahim عليه السلام settled Hajar and their infant son Ismail in the barren valley of Makkah. After the miraculous spring of Zamzam emerged, Ibrahim and Ismail raised the stone foundations of the Kaaba as a sanctuary of pure monotheism. In their prayer recorded in the Qur’an, they asked Allah to send from among their progeny a messenger who would recite His signs and teach scripture and wisdom—a supplication the Prophet ﷺ later described himself as answering.',
      ar: 'قبل مولد النبي ﷺ بقرون، أسكن إبراهيم عليه السلام هاجر وابنه إسماعيل بوادٍ غير ذي زرع عند بيت الله المحرم، ففجّر الله لهما زمزم، ثم رفع إبراهيم وإسماعيل قواعد البيت داعين الله أن يبعث فيهم رسولاً منهم يتلو عليهم آياته ويعلمهم الكتاب والحكمة.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Baqarah 2:127–129',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3364 (Story of Hajar and Zamzam)',
        grade: 'sahih',
      },
    ],
    arabicQuote: 'رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ',
    arabicQuoteTranslation:
      'Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom.',
    locationId: 'makkah-kaaba',
    personIds: ['ibrahim', 'ismail'],
    prophecyIds: ['earlier-glad-tidings'],
    imageUrl: MUSEUM_IMAGES.hijazHero,
  },
  {
    id: 'zamzam-rediscovery',
    eraId: 'before-birth',
    yearCE: 540,
    dateDisplay: { en: 'c. 540 CE', ar: 'نحو ٥٤٠ م' },
    datePrecision: 'approximate',
    title: {
      en: 'Rediscovery of Zamzam by Abdul-Muttalib',
      ar: 'إعادة حفر بئر زمزم على يد عبد المطلب',
    },
    summary: {
      en: 'The Prophet’s grandfather, Abdul-Muttalib ibn Hashim, restored the long-buried well of Zamzam, solidifying Banu Hashim’s stewardship of pilgrims.',
      ar: 'أعاد جد النبي ﷺ عبد المطلب بن هاشم حفر بئر زمزم بعد اندثارها، فترسّخت سقاية الحجاج لبني هاشم.',
    },
    narrative: {
      en: 'For generations after the tribe of Jurhum departed Makkah, the precise location of the well of Zamzam remained obscured. Classical Seerah historians record that Abdul-Muttalib received repeated dreams indicating where to excavate near the Kaaba. Assisted by his eldest son al-Harith, he uncovered the ancient spring and assumed the honored duty of providing water (siqayah) to pilgrims.',
      ar: 'بقيت زمزم مطمورةً دهراً بعد خروج قبيلة جرهم من مكة، ثم رأى عبد المطلب بن هاشم في المنام موضعها فحفرها مع ابنه الحارث حتى أظهر ماءها، فكان له شرف سقاية الحجيج.',
    },
    evidenceGrade: 'historical',
    sources: [
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, Chapter on Digging of Zamzam',
        grade: 'historical',
      },
      {
        book: 'Ibn Sa’d — Al-Tabaqat al-Kubra',
        bookAr: 'ابن سعد — الطبقات الكبرى',
        citation: 'Vol. 1, Account of Abdul-Muttalib',
        grade: 'historical',
      },
    ],
    scholarlyNotes: {
      en: 'While the core historical fact of Abdul-Muttalib’s stewardship of Zamzam is widely agreed upon, some narrative embellishments regarding the vow to sacrifice Abdullah carry varying chains in classical historiography.',
      ar: 'أصل حفر عبد المطلب لزمزم مشهور عند أهل السير، أما بعض تفاصيل النذر ففي أسانيدها كلام عند المحققين.',
    },
    locationId: 'makkah-kaaba',
    personIds: ['abdul-muttalib', 'abdullah'],
  },
  {
    id: 'year-of-elephant',
    eraId: 'before-birth',
    yearCE: 570,
    dateDisplay: { en: 'c. 570 CE', ar: 'نحو ٥٧٠ م' },
    datePrecision: 'approximate',
    title: {
      en: 'The Year of the Elephant (Am al-Fil)',
      ar: 'عام الفيل وحفظ البيت الحرام',
    },
    summary: {
      en: 'Abrahah marched from Yemen with war elephants to destroy the Kaaba, but Allah protected the Sanctuary as immortalized in Surah al-Fil.',
      ar: 'زحف أبرهة الحبشي من اليمن بجيشه وفيلته لهدم الكعبة، فحفظ الله بيته وأهلك الجيش كما جاء في سورة الفيل.',
    },
    narrative: {
      en: 'Abrahah, the Abyssinian viceroy in Yemen, erected a grand cathedral in Sana’a and marched toward Makkah with a formidable army including an elephant named Mahmud intending to demolish the Kaaba. When Abdul-Muttalib negotiated for his seized camels, he famously remarked: "I am the lord of the camels, and the House has a Lord who will protect it." As the army approached Makkah, the elephant refused to advance and Allah sent flocks of birds pelting the invaders with stones of baked clay.',
      ar: 'سار أبرهة الأشرم من اليمن بجيش عظيم يتقدمه الفيل لهدم الكعبة، فخرج عبد المطلب يطلب إبله قائلاً: «أنا رب الإبل، وللبيت رب سيحميه». ولما اقترب الجيش برك الفيل وأرسل الله عليهم طيراً أبابيل ترميهم بحجارة من سجيل.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Fil 105:1–5',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 2731 (Reference to Allah holding back the elephant from Makkah)',
        grade: 'sahih',
      },
    ],
    arabicQuote: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
    arabicQuoteTranslation: 'Have you not considered how your Lord dealt with the companions of the elephant?',
    locationId: 'makkah-kaaba',
    personIds: ['abdul-muttalib'],
    revelationIds: ['surah-al-fil-note'],
    imageUrl: MUSEUM_IMAGES.hijazHero,
  },

  // ERA 2: BIRTH & CHILDHOOD
  {
    id: 'birth-of-prophet',
    eraId: 'birth-childhood',
    yearCE: 570,
    dateDisplay: { en: 'c. 570–571 CE (Rabi’ al-Awwal)', ar: 'نحو ٥٧٠–٥٧١ م (ربيع الأول)' },
    datePrecision: 'disputed',
    title: {
      en: 'Birth of Muhammad ﷺ in Makkah',
      ar: 'مولد النبي محمد ﷺ في مكة',
    },
    summary: {
      en: 'Born on a Monday in the Year of the Elephant as a posthumous orphan; his grandfather Abdul-Muttalib named him Muhammad.',
      ar: 'وُلد يوم الاثنين في عام الفيل يتيماً بعد وفاة أبيه عبد الله، وسمّاه جده عبد المطلب محمداً.',
    },
    narrative: {
      en: 'Prophet Muhammad ﷺ was born on a Monday in Makkah in the Year of the Elephant, after his father Abdullah ibn Abdul-Muttalib had already passed away in Yathrib while returning from a trade journey. His mother Aminah bint Wahb sent word to Abdul-Muttalib, who carried the newborn into the Kaaba in gratitude and named him Muhammad—an uncommon name among the Arabs at the time.',
      ar: 'وُلد النبي ﷺ يوم الاثنين بمكة في عام الفيل، وكان أبوه عبد الله قد توفي قبل ولادته. أرسلت أمه آمنة بنت وهب إلى جده عبد المطلب ففرح به ودخل به الكعبة وشكر الله وسمّاه محمداً.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih Muslim',
        bookAr: 'صحيح مسلم',
        citation: 'Hadith 1162 (Born on a Monday)',
        grade: 'sahih',
      },
      {
        book: 'Musnad Ahmad',
        bookAr: 'مسند أحمد',
        citation: 'Hadith 17163 (Mother’s vision of light illuminating castles of Sham)',
        grade: 'hasan',
      },
    ],
    scholarlyNotes: {
      en: 'While birth on a Monday in the Year of the Elephant is authentic, scholars differ on the exact calendar day (commonly 9th or 12th of Rabi’ al-Awwal). Furthermore, popular reports claiming fourteen balconies of Kisra’s palace collapsed or the Persian sacred fire went out are graded weak (Da’if) by hadith critics such as al-Bayhaqi and Ibn Kathir’s modern editors.',
      ar: 'ثبت في الصحيح أنه وُلد يوم الاثنين عام الفيل، واختلف المؤرخون في اليوم من ربيع الأول (بين التاسع والثاني عشر). أما روايات سقوط شرفات إيوان كسرى وخمود نار فارس فضعّف أسانيدها أهل التحقيق.',
    },
    locationId: 'makkah-kaaba',
    personIds: ['aminah', 'abdullah', 'abdul-muttalib'],
  },
  {
    id: 'halimah-and-chest-opening',
    eraId: 'birth-childhood',
    yearCE: 574,
    dateDisplay: { en: 'c. 574 CE', ar: 'نحو ٥٧٤ م' },
    datePrecision: 'approximate',
    title: {
      en: 'Fostering with Halimah & Opening of the Chest',
      ar: 'الرضاعة عند حليمة السعدية وحادثة شق الصدر',
    },
    summary: {
      en: 'Raised in the pure desert air of Banu Sa’d by Halimah al-Sa’diyyah, where Angel Jibreel cleansed his heart in childhood.',
      ar: 'نشأ في بادية بني سعد عند حليمة السعدية، وهناك أتاه جبريل عليه السلام فشق صدره وطهّر قلبه.',
    },
    narrative: {
      en: 'Following Makkan custom to nurture infants in the eloquence and health of the desert, Aminah entrusted young Muhammad ﷺ to Halimah al-Sa’diyyah of Banu Sa’d. Around the age of four, while playing with children, Angel Jibreel came to him, opened his chest, removed a dark clot saying "This was the portion of Satan in you," washed his heart with Zamzam water in a golden basin, and restored it. Fearing for his safety, Halimah returned him lovingly to Aminah.',
      ar: 'أرضعته حليمة السعدية في ديار بني سعد فحلّت البركة على أهلها، وفي نحو الرابعة من عمره أتاه جبريل وهو يلعب مع الغلمان فشق صدره واستخرج علقة وقال: «هذا حظ الشيطان منك»، ثم غسل قلبه بماء زمزم وأعاده.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih Muslim',
        bookAr: 'صحيح مسلم',
        citation: 'Hadith 162 (Authentic narration of Anas ibn Malik)',
        grade: 'sahih',
      },
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, Account of Halimah al-Sa’diyyah',
        grade: 'historical',
      },
    ],
    locationId: 'banu-sad',
    personIds: ['halimah', 'aminah'],
    miracleIds: ['opening-of-chest'],
  },
  {
    id: 'passing-aminah-abwa',
    eraId: 'birth-childhood',
    yearCE: 576,
    dateDisplay: { en: 'c. 576 CE (Age 6)', ar: 'نحو ٥٧٦ م (سن السادسة)' },
    datePrecision: 'approximate',
    title: {
      en: 'Passing of Aminah at al-Abwa & Guardianship of Abu Talib',
      ar: 'وفاة أمه آمنة بالأبواء وكفالة جده ثم أبي طالب',
    },
    summary: {
      en: 'After visiting Yathrib, his mother Aminah passed away at al-Abwa; two years later Abdul-Muttalib died, passing guardianship to Abu Talib.',
      ar: 'توفيت أمه آمنة بالأبواء أثناء العودة من يثرب، ثم كفله جده عبد المطلب سنتين حتى وفاته، فانتقل إلى كفالة عمه أبي طالب.',
    },
    narrative: {
      en: 'At age six, Aminah took Muhammad ﷺ accompanied by Umm Ayman to visit his father’s grave and maternal relatives in Yathrib. On the return journey, she fell ill and passed away at al-Abwa. Umm Ayman brought the young orphan back to Makkah under the tender care of Abdul-Muttalib, who died two years later when Muhammad ﷺ was eight, entrusting him to his uncle Abu Talib.',
      ar: 'سافرت آمنة بابنها وبرفقتهما أم أيمن إلى يثرب لزيارة أخواله وقبر أبيه، وفي طريق العودة توفيت بالأبواء. فكفله جده عبد المطلب ثم أوصى به قبل وفاته لعمه أبي طالب الذي أحاطه بالرعاية والمحبة.',
    },
    evidenceGrade: 'historical',
    sources: [
      {
        book: 'Ibn Sa’d — Al-Tabaqat al-Kubra',
        bookAr: 'ابن سعد — الطبقات الكبرى',
        citation: 'Vol. 1, Death of Aminah at al-Abwa',
        grade: 'historical',
      },
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Ad-Duha 93:6 (Did He not find you an orphan and give you refuge?)',
        grade: 'quran',
      },
    ],
    locationId: 'al-abwa',
    personIds: ['aminah', 'abdul-muttalib', 'abu-talib'],
  },
  {
    id: 'bahira-syria-journey',
    eraId: 'birth-childhood',
    yearCE: 582,
    dateDisplay: { en: 'c. 582 CE (Age 12)', ar: 'نحو ٥٨٢ م (سن الثانية عشرة)' },
    datePrecision: 'disputed',
    title: {
      en: 'Caravan to Busra & the Account of Monk Bahira',
      ar: 'رحلة الشام وقصة الراهب بحيرا',
    },
    summary: {
      en: 'A widely circulated Seerah report describing Abu Talib taking young Muhammad ﷺ to Syria and meeting a monk named Bahira—subject to significant scholarly critique.',
      ar: 'خبر مشهور في كتب السيرة عن رحلة أبي طالب بالشام ولقاء الراهب بحيرا، وهو محل خلاف ونقد حديثي معتبر بين العلماء.',
    },
    narrative: {
      en: 'According to accounts compiled in Jami’ at-Tirmidhi and early Seerah works, Abu Talib took the twelve-year-old Muhammad ﷺ on a trade caravan to Busra in Syria, where a Christian monk named Bahira noticed signs of prophethood and urged Abu Talib to guard him from harm. However, major hadith critics carefully scrutinized the text and chain.',
      ar: 'تذكر روايات في الترمذي وكتب السير أن أبا طالب خرج بالنبي ﷺ إلى بصرى الشام فرآه راهب يُدعى بحيرا ولاحظ علامات النبوة فأوصى عمه بردّه إلى مكة، غير أن نقاد الحديث بحثوا هذه الرواية بدقة.',
    },
    evidenceGrade: 'disputed',
    sources: [
      {
        book: "Jami' at-Tirmidhi",
        bookAr: 'جامع الترمذي',
        citation: 'Hadith 3620 (Graded Hasan Gharib by al-Tirmidhi; critiqued by al-Dhahabi)',
        grade: 'disputed',
      },
      {
        book: 'Ibn Kathir — Al-Bidayah wan-Nihayah',
        bookAr: 'ابن كثير — البداية والنهاية',
        citation: 'Discussion on historical anomalies in the Bilal/Abu Bakr mention',
        grade: 'disputed',
      },
    ],
    scholarlyNotes: {
      en: 'Imam al-Dhahabi and Ibn Qayyim al-Jawziyyah flagged anachronisms in the Tirmidhi wording—specifically the mention that Abu Talib sent him back with Abu Bakr and Bilal, even though Bilal was likely not yet born and Abu Bakr was still a child. Thus historians treat the narration with caution rather than as an undisputed fact.',
      ar: 'نبّه الإمام الذهبي وابن القيم إلى نكارة في لفظ رواية الترمذي، لا سيما ذكر إرساله مع أبي بكر وبلال مع أن بلالاً لم يكن وُلد بعد وأبا بكر كان صغيراً، ولذلك يميّز المحققون هذا الخبر بوضوح.',
    },
    locationId: 'busra-sham',
    personIds: ['abu-talib'],
  },

  // ERA 3: YOUTH & ADULTHOOD
  {
    id: 'shepherd-hilf-al-fudul',
    eraId: 'youth-adulthood',
    yearCE: 590,
    dateDisplay: { en: 'c. 590 CE', ar: 'نحو ٥٩٠ م' },
    datePrecision: 'approximate',
    title: {
      en: 'Shepherding & the Pact of the Virtuous (Hilf al-Fudul)',
      ar: 'رعي الغنم وحلف الفضول لنصرة المظلوم',
    },
    summary: {
      en: 'Worked as a shepherd in Makkah and witnessed the chivalrous alliance in the house of Abdullah ibn Jud’an vowing to stand with the oppressed.',
      ar: 'رعى الغنم لأهل مكة، وشهد حلف الفضول في دار عبد الله بن جدعان لنصرة المظلوم، وظل يثني عليه بعد النبوة.',
    },
    narrative: {
      en: 'In his youth, Muhammad ﷺ tended sheep for the people of Makkah for modest wages—a vocation he later noted every prophet shared, cultivating patience and watchfulness. Around age twenty, he witnessed Hilf al-Fudul, a covenant forged by noble Makkan clans to defend any wronged stranger or resident. Decades later after prophethood, he declared: "I witnessed a pact in the house of Abdullah ibn Jud’an that I would not trade for red camels; and if I were invited to it in Islam, I would accept."',
      ar: 'عمل النبي ﷺ في شبابه برعي الغنم لأهل مكة على قراريط، وذكر لاحقاً أن ما من نبي إلا رعى الغنم. وفي نحو العشرين شهد حلف الفضول في دار عبد الله بن جدعان، وقال بعد البعثة: «لو أُدعى به في الإسلام لأجبت».',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 2262 (Shepherding of every prophet)',
        grade: 'sahih',
      },
      {
        book: 'Al-Bayhaqi — Al-Sunan al-Kubra',
        bookAr: 'البيهقي — السنن الكبرى',
        citation: 'Vol. 6, p. 367 (Hilf al-Fudul testimony)',
        grade: 'hasan',
      },
    ],
    locationId: 'makkah-kaaba',
    personIds: ['abu-talib'],
  },
  {
    id: 'marriage-khadijah',
    eraId: 'youth-adulthood',
    yearCE: 595,
    dateDisplay: { en: 'c. 595 CE (Age 25)', ar: 'نحو ٥٩٥ م (سن الخامسة والعشرين)' },
    datePrecision: 'approximate',
    title: {
      en: 'Trade Journey, Title Al-Amin & Marriage to Khadijah',
      ar: 'التجارة ولقب الأمين والزواج من خديجة رضي الله عنها',
    },
    summary: {
      en: 'Known across Makkah as Al-Sadiq Al-Amin, he led Khadijah bint Khuwaylid’s trade caravan with remarkable integrity, leading to a devoted twenty-five-year marriage.',
      ar: 'عُرف بالصادق الأمين وتولى تجارة السيدة خديجة بنت خويلد بأمانة عظيمة، فكانت بداية زواج مبارك استمر خمساً وعشرين سنة.',
    },
    narrative: {
      en: 'Khadijah bint Khuwaylid, a respected and prosperous Makkan merchant, heard of Muhammad’s ﷺ truthfulness and trustworthiness (Al-Amin) and commissioned him to manage her merchandise to Syria accompanied by her servant Maysarah. Moved by his impeccable character and honor, she proposed marriage through her friend Nafisah. Together they had six children—al-Qasim, Zaynab, Ruqayyah, Umm Kulthum, Fatimah, and Abdullah—and he married no other woman during her lifetime.',
      ar: 'سمعت السيدة خديجة بنت خويلد بصدقه وأمانته فاستأجرته في تجارتها إلى الشام مع غلامها ميسرة، فلما رأت من خلقه وبركته ما رأت رغبت في الزواج منه. وعاش معها خمساً وعشرين سنة رزقه الله فيها بأولاده كلهم سوى إبراهيم، ولم يتزوج عليها في حياتها.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3816–3821 (Virtues and lifelong devotion to Khadijah)',
        grade: 'sahih',
      },
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, Trade for Khadijah and Marriage',
        grade: 'historical',
      },
    ],
    scholarlyNotes: {
      en: 'Classical sources most commonly cite Khadijah’s age at marriage as forty, though Ibn Abbas is also reported via Ibn Sa’d to have cited twenty-eight; scholars note both historical reports transparently.',
      ar: 'المشهور في كتب السير أن عمر خديجة عند الزواج كان أربعين سنة، ووردت رواية عن ابن عباس عند ابن سعد بأنها كانت في الثامنة والعشرين.',
    },
    locationId: 'makkah-kaaba',
    personIds: ['khadijah', 'fatimah', 'zaynab-daughter', 'abu-talib'],
  },
  {
    id: 'black-stone-arbitration',
    eraId: 'youth-adulthood',
    yearCE: 605,
    dateDisplay: { en: 'c. 605 CE (Age 35)', ar: 'نحو ٦٠٥ م (سن الخامسة والثلاثين)' },
    datePrecision: 'approximate',
    title: {
      en: 'Rebuilding the Kaaba & the Black Stone Arbitration',
      ar: 'إعادة بناء الكعبة وتحكيم وضع الحجر الأسود',
    },
    summary: {
      en: 'Prevented tribal bloodshed when Quraysh disputed who would set the Black Stone, inviting every clan chief to lift it together on his cloak.',
      ar: 'حقن دماء قريش حين اختلفت على شرف وضع الحجر الأسود، فبسط رداءه وأشرك جميع القبائل في رفعه ثم وضعه بيده الشريفة.',
    },
    narrative: {
      en: 'After flash floods damaged the Kaaba, the clans of Quraysh united to rebuild its walls using only lawfully earned wealth. When they reached the corner of the Black Stone (Al-Hajar al-Aswad), fierce rivalry erupted over which tribe deserved the honor of setting it in place, nearly sparking warfare. They agreed to accept the judgment of the next man entering the Sanctuary. Seeing Muhammad ﷺ, they exclaimed: "This is Al-Amin! We accept him!" He spread his cloak, placed the stone upon it, had a leader from each tribe hold an edge to lift it, and then set it firmly in place with his own hands.',
      ar: 'لما جدّدت قريش بناء الكعبة بعد سيل جارف، تنازعت القبائل فيمن يضع الحجر الأسود حتى كاد القتال يقع، فاتفقوا على تحكيم أول داخل من باب المسجد، فدخل محمد ﷺ فقالوا: «هذا الأمين، رضيناه». فوضع الحجر على ثوبه وأمر كل قبيلة أن تأخذ بطرف، ثم وضعه بيده في مكانه.',
    },
    evidenceGrade: 'hasan',
    sources: [
      {
        book: 'Musnad Ahmad',
        bookAr: 'مسند أحمد',
        citation: 'Hadith 15517 (Account of the Black Stone placement)',
        grade: 'hasan',
      },
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, Rebuilding of the Kaaba',
        grade: 'historical',
      },
    ],
    locationId: 'makkah-kaaba',
    personIds: ['abbas', 'abu-talib'],
  },

  // ERA 4: BEGINNING OF REVELATION
  {
    id: 'first-revelation-hira',
    eraId: 'beginning-revelation',
    yearCE: 610,
    dateDisplay: { en: 'Ramadan, 610 CE (Age 40)', ar: 'رمضان ٦١٠ م (سن الأربعين)' },
    datePrecision: 'approximate',
    title: {
      en: 'The First Revelation in the Cave of Hira',
      ar: 'بدء الوحي في غار حراء',
    },
    summary: {
      en: 'During solitary devotion on Jabal al-Nour, Angel Jibreel appeared to Muhammad ﷺ revealing the opening five verses of Surah Al-Alaq.',
      ar: 'بينما كان يتحنث في غار حراء بجبل النور، نزل عليه جبريل عليه السلام بأولى آيات القرآن الكريم من سورة العلق.',
    },
    narrative: {
      en: 'As he approached forty, solitude became beloved to Muhammad ﷺ. He would retreat to the Cave of Hira atop Jabal al-Nour for nights of worship and reflection. In the month of Ramadan, Angel Jibreel came to him and commanded: "Read!" He replied, "I cannot read." Three times Jibreel embraced him tightly before revealing the first words of the Qur’an: "Read in the name of your Lord who created." Trembling, he returned to Khadijah, who comforted him with immortal words affirming his compassion and integrity.',
      ar: 'حُبّب إليه الخلاء فكان يتحنث في غار حراء الليالي ذوات العدد، حتى جاءه الحق وهو في الغار فجاءه الملك فقال: «اقرأ»، قال: «ما أنا بقارئ»، فغطّه ثلاثاً ثم تلا عليه مطلع سورة العلق. فرجع يرجف فؤاده إلى خديجة فطمأنته وذكّرته بخصال خيره.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3 (Book of Revelation, narrated by Aishah)',
        grade: 'sahih',
      },
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Alaq 96:1–5',
        grade: 'quran',
      },
    ],
    arabicQuote: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ',
    arabicQuoteTranslation: 'Read in the name of your Lord who created — created man from a clinging substance.',
    locationId: 'cave-of-hira',
    personIds: ['khadijah', 'waraqah'],
    revelationIds: ['rev-alaq'],
    miracleIds: ['holy-quran'],
    imageUrl: MUSEUM_IMAGES.caveOfHira,
  },
  {
    id: 'waraqah-and-early-believers',
    eraId: 'beginning-revelation',
    yearCE: 610,
    dateDisplay: { en: '610–613 CE', ar: '٦١٠–٦١٣ م' },
    datePrecision: 'approximate',
    title: {
      en: 'Waraqah ibn Nawfal & the Earliest Believers',
      ar: 'شهادة ورقة بن نوفل والسابقون الأولون',
    },
    summary: {
      en: 'Waraqah ibn Nawfal recognized the angel who came to Musa, while Khadijah, Abu Bakr, Ali, and Zayd ibn Harithah embraced Islam during the quiet early years.',
      ar: 'أخبره ورقة بن نوفل أنه الناموس الذي نزل على موسى، فأسلمت خديجة وأبو بكر وعلي وزيد بن حارثة، وتعلّم المسلمون في دار الأرقم.',
    },
    narrative: {
      en: 'Khadijah brought Muhammad ﷺ to her elderly Christian cousin Waraqah ibn Nawfal, a scholar of earlier scriptures. Upon hearing what transpired in Hira, Waraqah declared: "This is the Namus (Jibreel) whom Allah sent down to Musa!" and foretold that his people would drive him out. For three years, the message spread quietly among trusted companions—Khadijah, Abu Bakr, Ali ibn Abi Talib, Zayd ibn Harithah, Uthman, Zubayr, Bilal, and others gathering in Dar al-Arqam.',
      ar: 'انطلقت به خديجة إلى ابن عمها ورقة بن نوفل، فلما سمع خبره قال: «هذا الناموس الذي نزل الله على موسى»، وأخبره أن قومه سيخرجونه. واستمرت الدعوة ثلاث سنين سراً فأسلم السابقون الأولون واجتمعوا في دار الأرقم.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3 (Consultation with Waraqah ibn Nawfal)',
        grade: 'sahih',
      },
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, Early Companions and Dar al-Arqam',
        grade: 'historical',
      },
    ],
    locationId: 'makkah-kaaba',
    personIds: ['khadijah', 'waraqah', 'abu-bakr', 'ali', 'zayd-harithah'],
    revelationIds: ['rev-muddaththir'],
  },

  // ERA 5: THE MAKKAN PERIOD
  {
    id: 'mount-safa-public-call',
    eraId: 'makkan-period',
    yearCE: 613,
    dateDisplay: { en: 'c. 613 CE', ar: 'نحو ٦١٣ م' },
    datePrecision: 'approximate',
    title: {
      en: 'Public Proclamation from Mount Safa',
      ar: 'الجهر بالدعوة من فوق جبل الصفا',
    },
    summary: {
      en: 'Commanded to warn his closest kin, the Prophet ﷺ called Quraysh to Mount Safa; they testified to his absolute truthfulness before Abu Lahab rejected the call.',
      ar: 'لما نزل الأمر بالإنذار، صعد النبي ﷺ الصفا فنادى بطون قريش فشهدوا بصدقه قبل أن يعارضه أبو لهب.',
    },
    narrative: {
      en: 'When Surah ash-Shu’ara (26:214) commanded "And warn your closest kindred," the Prophet ﷺ climbed Mount Safa and summoned the clans of Quraysh. He asked: "If I told you an army was behind this valley ready to attack, would you believe me?" They replied, "Yes, we have never known you to lie." When he warned them of the Hereafter and called to monotheism, his uncle Abu Lahab scorned him, prompting the revelation of Surah al-Masad.',
      ar: 'لما نزل قوله تعالى ﴿وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ﴾ صعد الصفا ونادى قريشاً وسألهم: «أرأيتم لو أخبرتكم أن خيلاً بالوادي تريد أن تغير عليكم أكنتم مصدقيّ؟» قالوا: نعم ما جربنا عليك كذباً، ثم دعاهم إلى التوحيد فعارضه أبو لهب.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 4770 (Address on Mount Safa)',
        grade: 'sahih',
      },
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Hijr 15:94 & Surah Al-Masad 111:1–5',
        grade: 'quran',
      },
    ],
    locationId: 'makkah-kaaba',
    personIds: ['abu-lahab', 'abu-talib', 'abbas'],
  },
  {
    id: 'abyssinia-migration',
    eraId: 'makkan-period',
    yearCE: 615,
    dateDisplay: { en: 'c. 615 CE', ar: 'نحو ٦١٥ م' },
    datePrecision: 'approximate',
    title: {
      en: 'Migration to Abyssinia & Justice of al-Najashi',
      ar: 'الهجرة إلى الحبشة وعدل النجاشي',
    },
    summary: {
      en: 'To shelter persecuted believers—including Uthman, Ruqayyah, and Ja’far ibn Abi Talib—the Prophet ﷺ advised migration to Abyssinia under a just Christian king.',
      ar: 'أشار النبي ﷺ على المستضعفين بالهجرة إلى الحبشة حيث الملك العادل النجاشي، وألقى جعفر بن أبي طالب خطبته البليغة هناك.',
    },
    narrative: {
      en: 'As torture intensified against vulnerable believers such as Bilal ibn Rabah and the family of Yasir, the Prophet ﷺ directed a group of Muslims to seek sanctuary in Abyssinia, saying: "There is a king there under whom no one is wronged." In a second larger migration led by Ja’far ibn Abi Talib, Quraysh sent envoys demanding their extradition. Ja’far’s moving speech and recitation of Surah Maryam moved King al-Najashi to grant them full protection.',
      ar: 'لما اشتد أذى قريش للمسلمين كبلال وآل ياسر، أذن لهم النبي ﷺ بالهجرة إلى الحبشة وقال: «إن بها ملكاً لا يُظلم عنده أحد». ولما أرسلت قريش لردّهم، تلا جعفر بن أبي طالب آيات من سورة مريم فبكى النجاشي وآواهم.',
    },
    evidenceGrade: 'hasan',
    sources: [
      {
        book: 'Musnad Ahmad',
        bookAr: 'مسند أحمد',
        citation: 'Hadith 1740 (Umm Salamah’s account of Ja’far before al-Najashi)',
        grade: 'hasan',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3875 (Migration to Abyssinia)',
        grade: 'sahih',
      },
    ],
    locationId: 'abyssinia',
    personIds: ['bilal', 'uthman'],
  },
  {
    id: 'splitting-of-moon-event',
    eraId: 'makkan-period',
    yearCE: 617,
    dateDisplay: { en: 'c. 617 CE (5 Years Pre-Hijrah)', ar: 'نحو ٦١٧ م (قبل الهجرة بخمس سنين)' },
    datePrecision: 'approximate',
    title: {
      en: 'The Splitting of the Moon (Inshiqaq al-Qamar)',
      ar: 'معجزة انشقاق القمر',
    },
    summary: {
      en: 'When Makkan leaders demanded a visible sign, the moon split into two distinct halves above Mount Hira, recorded in Surah al-Qamar and mutawatir reports.',
      ar: 'سأل أهل مكة النبي ﷺ آيةً، فانشقّ القمر فرقتين فوق حراء، وخلّد القرآن ذلك في مطلع سورة القمر.',
    },
    narrative: {
      en: 'Makkan leaders challenged the Prophet ﷺ to show them a clear sign. By Allah’s permission, the full moon split into two halves—one part seen above Mount Hira and the other below it—while the Prophet ﷺ called witnesses to observe. Despite witnessing it, obstinate leaders dismissed it as passing magic, upon which Surah al-Qamar (54:1–2) was revealed.',
      ar: 'طلب أهل مكة من رسول الله ﷺ أن يريهم آية، فأراهم القمر شقّين حتى رأوا حراء بينهما، فنزلت سورة القمر شاهدةً على الحدث ومُعرضي قريش عنه.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Qamar 54:1–2',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3636 & 3868 (Narrated by Anas and Ibn Mas’ud)',
        grade: 'sahih',
      },
    ],
    arabicQuote: 'اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ',
    arabicQuoteTranslation: 'The Hour has drawn near, and the moon has split.',
    locationId: 'makkah-kaaba',
    personIds: ['abu-jahl'],
    revelationIds: ['rev-qamar'],
    miracleIds: ['splitting-of-moon'],
  },
  {
    id: 'boycott-year-of-sorrow',
    eraId: 'makkan-period',
    yearCE: 619,
    dateDisplay: { en: '616–619 CE', ar: '٦١٦–٦١٩ م' },
    datePrecision: 'approximate',
    title: {
      en: 'The Three-Year Boycott & the Year of Sorrow',
      ar: 'حصار شعب أبي طالب وعام الحزن',
    },
    summary: {
      en: 'Banu Hashim endured a harsh three-year social and economic embargo; shortly after its lifting, both Khadijah and Abu Talib passed away.',
      ar: 'تحمّل بنو هاشم حصاراً قاسياً ثلاث سنوات في الشعب، وعقب فكّه توفيت السيدة خديجة وعمه أبو طالب في عام واحد.',
    },
    narrative: {
      en: 'Quraysh hung a boycott parchment inside the Kaaba banning marriage, trade, and food supplies to Banu Hashim and Banu al-Muttalib until they surrendered Muhammad ﷺ. Confined to Shi’b Abi Talib for three agonizing years, the community survived severe hunger until honorable Makkans tore up the unjust charter. Soon after in the tenth year of prophethood, both Abu Talib and Khadijah رضي الله عنها passed away—leaving the Prophet ﷺ deeply grieved and without tribal protection in Makkah.',
      ar: 'كتبت قريش صحيفة مقاطعة ظالمة لبني هاشم وبني المطلب ثلاث سنين حتى أكلوا أوراق الشجر، ثم نقضها نفر من عقلاء قريش. وبعد خروجهم بقليل توفي عمه أبو طالب وزوجته الوفية خديجة رضي الله عنها فسمّاه أهل السيرة عام الحزن.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 1590 & 3884 (Boycott valley & passing of Abu Talib)',
        grade: 'sahih',
      },
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, The Boycott and Passing of Khadijah',
        grade: 'historical',
      },
    ],
    locationId: 'makkah-kaaba',
    personIds: ['khadijah', 'abu-talib', 'fatimah'],
  },
  {
    id: 'journey-to-taif',
    eraId: 'makkan-period',
    yearCE: 619,
    dateDisplay: { en: 'c. 619 CE', ar: 'نحو ٦١٩ م' },
    datePrecision: 'approximate',
    title: {
      en: 'The Journey to Ta’if & Mercy Toward Its People',
      ar: 'رحلة الطائف ورحمته بأهلها',
    },
    summary: {
      en: 'Seeking support in Ta’if with Zayd ibn Harithah, he was stoned until bleeding, yet declined the Angel of the Mountains’ offer to crush the town, praying for their descendants.',
      ar: 'خرج إلى الطائف مع زيد بن حارثة يدعوهم إلى الله فرجموه حتى أدموا قدميه، فرفض عرض ملك الجبال إهلاكهم ورجا أن يخرج الله من أصلابهم من يعبده.',
    },
    narrative: {
      en: 'Walking roughly 100 kilometers to Ta’if with Zayd ibn Harithah, the Prophet ﷺ invited the leaders of Thaqif to Islam. They mocked him and incited crowds to pelt him with stones until his sandals filled with blood. Later asked by Aishah whether any day was harder than Uhud, he recalled Ta’if: when the Angel of the Mountains offered to collapse the two peaks upon them, he replied, "Rather, I hope Allah will bring forth from their descendants people who worship Allah alone."',
      ar: 'مشى إلى الطائف مع زيد بن حارثة فدعا سادة ثقيف فأغروا به سفهاءهم يرمونه بالحجارة حتى سال الدم من قدميه. وقد أخبر عائشة أنه كان أشد عليه من يوم أحد، وحين عرض عليه ملك الجبال أن يطبق عليهم الأخشبين قال: «بل أرجو أن يخرج الله من أصلابهم من يعبد الله وحده».',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3231 (Aishah’s question & Angel of the Mountains)',
        grade: 'sahih',
      },
      {
        book: 'Sahih Muslim',
        bookAr: 'صحيح مسلم',
        citation: 'Hadith 1795',
        grade: 'sahih',
      },
    ],
    scholarlyNotes: {
      en: 'The core incident of Ta’if and the Angel of the Mountains is Sahih in Bukhari and Muslim. The famous supplication "To You I complain of my weakness" appears in Ibn Ishaq and al-Tabarani with a weak chain, though its meaning is widely praised by scholars.',
      ar: 'قصة الطائف وعرض ملك الجبال ثابتة في الصحيحين، أما دعاء «اللهم إليك أشكو ضعف قوتي» ففي سنده ضعف عند المحدثين وإن كان معناه جليلاً.',
    },
    locationId: 'taif',
    personIds: ['zayd-harithah', 'aishah'],
  },
  {
    id: 'isra-miraj',
    eraId: 'makkan-period',
    yearCE: 620,
    dateDisplay: { en: 'c. 620–621 CE', ar: 'نحو ٦٢٠–٦٢١ م' },
    datePrecision: 'disputed',
    title: {
      en: 'Al-Isra wal-Mi’raj: The Night Journey & Ascension',
      ar: 'الإسراء والمعراج وفرض الصلوات الخمس',
    },
    summary: {
      en: 'Carried by night from Masjid al-Haram to Masjid al-Aqsa in Jerusalem and ascended through the heavens, receiving the gift of the five daily prayers.',
      ar: 'أُسري به ليلاً من المسجد الحرام إلى المسجد الأقصى ثم عُرج به إلى السماوات العلى حيث فُرضت الصلوات الخمس.',
    },
    narrative: {
      en: 'In consolation after years of grief, Allah took His Messenger ﷺ by night upon al-Buraq from Makkah to Masjid al-Aqsa in Jerusalem, where he led earlier prophets in prayer. From there he ascended through the seven heavens, greeting Adam, Yahya, Isa, Yusuf, Idris, Harun, Musa, and Ibrahim عليهما السلام, reaching Sidrat al-Muntaha where the five daily prayers were directly enjoined upon the Muslim community. Abu Bakr immediately affirmed the event without hesitation, earning the title Al-Siddiq.',
      ar: 'تسليةً له بعد المحن، أُسري بالنبي ﷺ ليلاً على البراق من المسجد الحرام إلى المسجد الأقصى فصلى بالأنبياء إماماً، ثم عُرج به عبر السماوات السبع حتى سدرة المنتهى وفُرضت الصلوات الخمس، وصدّقه أبو بكر فوراً فلُقّب بالصدّيق.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Isra 17:1 & Surah An-Najm 53:13–18',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3887 & 349 (Detailed Ascension & prescription of Salah)',
        grade: 'sahih',
      },
    ],
    scholarlyNotes: {
      en: 'The event itself is established by Qur’an and mutawatir Sahih Hadith. However, classical scholars differ on its exact month and year—Ibn Qayyim and Ibn Hajar note that the popular 27th of Rajab date is not established by an authentic chain.',
      ar: 'أصل الإسراء والمعراج ثابت بالقرآن والأحاديث المتواترة، أما تعيين ليلة السابع والعشرين من رجب فلم يثبت فيه دليل صحيح كما نصّ ابن القيم وابن حجر.',
    },
    arabicQuote: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',
    arabicQuoteTranslation:
      'Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa.',
    locationId: 'jerusalem-aqsa',
    personIds: ['abu-bakr', 'ibrahim'],
    revelationIds: ['rev-isra'],
    miracleIds: ['isra-miraj-miracle'],
    imageUrl: MUSEUM_IMAGES.manuscript,
  },
  {
    id: 'pledges-of-aqabah',
    eraId: 'makkan-period',
    yearCE: 621,
    dateDisplay: { en: '621–622 CE', ar: '٦٢١–٦٢٢ م' },
    datePrecision: 'approximate',
    title: {
      en: 'The First & Second Pledges of Aqabah',
      ar: 'بيعتا العقبة الأولى والثانية',
    },
    summary: {
      en: 'Pilgrims from Yathrib pledged loyalty and protection to the Prophet ﷺ at Aqabah, preparing the way for the historic Hijrah.',
      ar: 'بايع وفد من الأنصار من يثرب رسول الله ﷺ عند العقبة على الإسلام والنصرة، مما مهّد للهجرة المباركة.',
    },
    narrative: {
      en: 'During the pilgrimage seasons, the Prophet ﷺ met delegates from the Aws and Khazraj tribes of Yathrib. Following the First Pledge of Aqabah, he dispatched Mus’ab ibn Umayr to teach the Qur’an in Yathrib, where Islam spread rapidly. The next year, seventy-three men and two women met him secretly by night at Aqabah, pledging to protect him as they protected their own families.',
      ar: 'التقى النبي ﷺ في مواسم الحج بوفود من الأوس والخزرج، فأرسل معهم مصعب بن عمير معلماً للقرآن حتى دخل الإسلام بيوت يثرب، ثم كانت بيعة العقبة الكبرى بحضور ثلاثة وسبعين رجلاً وامرأتين تعاهدوا على نصرته وحمايته.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3892–3893 (Pledge of Aqabah narrated by Ubadah ibn al-Samit)',
        grade: 'sahih',
      },
      {
        book: 'Musnad Ahmad',
        bookAr: 'مسند أحمد',
        citation: 'Hadith 14456 (Jabir’s account of the Second Pledge)',
        grade: 'sahih',
      },
    ],
    locationId: 'makkah-kaaba',
    personIds: ['abbas'],
  },

  // ERA 6: THE HIJRAH
  {
    id: 'cave-of-thawr',
    eraId: 'the-hijrah',
    yearCE: 622,
    dateDisplay: { en: '622 CE · Safar/Rabi’ al-Awwal 1 AH', ar: '٦٢٢ م · ١ هـ' },
    datePrecision: 'exact',
    title: {
      en: 'Departure from Makkah & Refuge in the Cave of Thawr',
      ar: 'الخروج من مكة واللجوء إلى غار ثور',
    },
    summary: {
      en: 'Escaping an assassination plot, the Prophet ﷺ and Abu Bakr sheltered three nights in Cave Thawr, immortalized in Surah at-Tawbah 9:40.',
      ar: 'نجا النبي ﷺ من مؤامرة قريش ولجأ مع أبي بكر ثلاث ليالٍ في غار ثور، فخلّد القرآن طمأنته له: «لا تحزن إن الله معنا».',
    },
    narrative: {
      en: 'When Quraysh chiefs conspired in Dar al-Nadwah to assassinate him, the Prophet ﷺ left Ali ibn Abi Talib in his bed to return entrusted valuables to Makkans, and departed southward with Abu Bakr to the Cave of Thawr. When trackers stood directly outside the cave’s mouth, Abu Bakr whispered that if one looked down at his feet he would see them. The Prophet ﷺ reassured him: "What do you think of two, when Allah is their third?" Asma bint Abi Bakr brought them provisions while Abdullah ibn Abi Bakr relayed Makkan news.',
      ar: 'لما تآمرت قريش على قتله، خلّف عليّاً ليردّ الأمانات إلى أهلها، وخرج مع أبي بكر جنوباً نحو غار ثور حيث مكثا ثلاث ليالٍ. وحين وقف المطاردون عند فم الغار طمأنه النبي ﷺ بقوله: «ما ظنك باثنين الله ثالثهما»، وكانت أسماء بنت أبي بكر تأتيهما بالزاد.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah At-Tawbah 9:40',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3653 & 3905 (Abu Bakr in the Cave of Thawr)',
        grade: 'sahih',
      },
    ],
    scholarlyNotes: {
      en: 'Crucial authenticity distinction: The shelter in Cave Thawr and the divine protection are established by Qur’an 9:40 and Sahih al-Bukhari. However, the popular stories of a spider spinning a web and two doves nesting at the cave entrance are graded Da’if (weak) or disputed by prominent hadith scholars (including al-Albani and Shu’ayb al-Arna’ut, while Ibn Hajar noted Hasan-li-ghayrihi only for the spider report). They must not be conflated with the Qur’anic and Sahih text.',
      ar: 'تمييز علمي مهم: مكوثهما في غار ثور وحفظ الله لهما ثابتان بالقرآن وصحيح البخاري، أما قصص نسج العنكبوت وعش الحمامتين فعند جمهور محققي الحديث أسانيدها ضعيفة أو مختلف فيها (حسّن ابن حجر حديث العنكبوت لغيره وضعّفه آخرون كالألباني والأرناؤوط)، لذا لا تُجعل في مرتبة الصحيح.',
    },
    arabicQuote: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
    arabicQuoteTranslation: 'When he said to his companion, "Do not grieve; indeed Allah is with us."',
    locationId: 'cave-of-thawr',
    personIds: ['abu-bakr', 'ali', 'asma-bint-abi-bakr'],
    revelationIds: ['rev-tawbah-cave'],
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },
  {
    id: 'suraqah-and-quba',
    eraId: 'the-hijrah',
    yearCE: 622,
    dateDisplay: { en: 'September 622 CE · Rabi’ al-Awwal 1 AH', ar: 'ربيع الأول ١ هـ · سبتمبر ٦٢٢ م' },
    datePrecision: 'exact',
    title: {
      en: 'Pursuit of Suraqah, Founding Masjid Quba & Arrival in Madinah',
      ar: 'قصة سراقة وتأسيس مسجد قباء والقدوم إلى المدينة',
    },
    summary: {
      en: 'Suraqah’s horse sank repeatedly in firm desert ground when pursuing the Prophet ﷺ; days later the Prophet founded Masjid Quba and entered joyous Yathrib.',
      ar: 'ساخت قوائم فرس سراقة بن مالك في الأرض الصلبة حين لحقه، ثم بلغ النبي ﷺ قباء فأسس أول مسجد في الإسلام ودخل المدينة وسط فرح الأنصار.',
    },
    narrative: {
      en: 'Lured by Quraysh’s bounty of 100 camels, the skilled tracker Suraqah ibn Malik caught up with the small Hijrah party guided by Abdullah ibn Urayqit. Each time he neared, his horse’s hooves sank deep into solid earth until he realized the Prophet ﷺ was divinely protected and sought a written pledge of security. Continuing along the coastal route, the Prophet ﷺ arrived at Quba, establishing the first mosque built upon piety, before entering Madinah where the Ansar welcomed him with overwhelming joy.',
      ar: 'لاحقهما سراقة بن مالك طمعاً في جائزة قريش، فساخت قوائم فرسه في الأرض الصلبة مراراً حتى أيقن بحفظ الله له فطلب كتاب أمان. ثم واصل الركب مسيره حتى وصل قباء فأسس مسجدها، ثم دخل المدينة فاستقبله الأنصار بالترحاب والسرور.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3906 (Suraqah ibn Malik & arrival in Madinah)',
        grade: 'sahih',
      },
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah At-Tawbah 9:108 (Mosque founded upon righteousness)',
        grade: 'quran',
      },
    ],
    scholarlyNotes: {
      en: 'The arrival in Quba and Madinah and the incident of Suraqah are rigorously authentic in Bukhari. Regarding the famous welcoming poem "Tala’a al-Badru Alayna", scholars note its chain of transmission for the Hijrah arrival is weak (some historians like Ibn Hajar suggested it may belong to the return from Tabuk).',
      ar: 'قصة سراقة وتأسيس قباء والقدوم إلى المدينة ثابتة في صحيح البخاري. أما نشيد «طلع البدر علينا» فإسناده عند القدوم من الهجرة ضعيف، ورجّح بعض أهل العلم أنه قيل عند القدوم من تبوك.',
    },
    locationId: 'quba',
    personIds: ['abu-bakr'],
    prophecyIds: ['conquest-persia'],
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },

  // ERA 7: THE MADINAN PERIOD
  {
    id: 'madinah-mosque-charter',
    eraId: 'madinan-period',
    yearCE: 622,
    dateDisplay: { en: '622–623 CE · 1 AH', ar: '٦٢٢–٦٢٣ م · ١ هـ' },
    datePrecision: 'exact',
    title: {
      en: 'Prophetic Mosque, Brotherhood & Charter of Madinah',
      ar: 'بناء المسجد النبوي والمؤاخاة ووثيقة المدينة',
    },
    summary: {
      en: 'Purchased land from two orphans to build Masjid al-Nabawi, forged brotherhood between Muhajirun and Ansar, and authored a pluralistic civic charter.',
      ar: 'اشترى أرض المسجد من غلامين يتيمين وبنى المسجد النبوي، وآخى بين المهاجرين والأنصار، وكتب وثيقة المدينة المنظمة للتعايش.',
    },
    narrative: {
      en: 'Where his camel al-Qaswa knelt in Madinah, the Prophet ﷺ insisted on purchasing the plot fairly from two orphaned boys, Sahl and Suhayl. Working side by side with his companions carrying sun-dried bricks, he erected Masjid al-Nabawi. He paired displaced Makkan migrants (Muhajirun) with Madinan hosts (Ansar) in remarkable solidarity, and drafted the Charter of Madinah (Sahifat al-Madinah) defining mutual defense, justice, and religious autonomy among Muslim and Jewish tribes.',
      ar: 'بركت ناقته القصواء في مربد ليتيمين فأبى إلا شراءه منهما، وشارك الصحابة بنفسه في بناء المسجد النبوي باللبن وجذوع النخل. وآخى بين المهاجرين والأنصار، وكتب صحيفة المدينة لتنظيم الحقوق والواجبات والدفاع المشترك بين جميع مكوناتها.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3906 & 3932 (Building the Mosque & Brotherhood)',
        grade: 'sahih',
      },
      {
        book: 'Ibn Hisham — Al-Seerah al-Nabawiyyah',
        bookAr: 'ابن هشام — السيرة النبوية',
        citation: 'Vol. 1, Text of the Charter of Madinah',
        grade: 'historical',
      },
    ],
    locationId: 'madinah-mosque',
    personIds: ['abu-bakr', 'umar', 'ali', 'bilal'],
    miracleIds: ['crying-palm-trunk'],
    imageUrl: MUSEUM_IMAGES.madinahCourtyard,
  },
  {
    id: 'change-of-qiblah',
    eraId: 'madinan-period',
    yearCE: 624,
    dateDisplay: { en: '624 CE · 2 AH', ar: '٦٢٤ م · ٢ هـ' },
    datePrecision: 'exact',
    title: {
      en: 'The Change of the Qiblah Toward Makkah',
      ar: 'تحويل القبلة إلى المسجد الحرام',
    },
    summary: {
      en: 'After sixteen or seventeen months facing Jerusalem in prayer, revelation directed believers to turn toward the Kaaba in Makkah.',
      ar: 'بعد ستة عشر أو سبعة عشر شهراً من الصلاة نحو بيت المقدس، نزل الوحي بتحويل القبلة شطر المسجد الحرام.',
    },
    narrative: {
      en: 'For the first sixteen to seventeen months in Madinah, the Prophet ﷺ prayed facing Masjid al-Aqsa while quietly yearning for the direction of Ibrahim’s Kaaba. Allah revealed Surah al-Baqarah (2:144), directing him to turn his face toward Masjid al-Haram—uniting the spiritual identity of the nascent community.',
      ar: 'صلى النبي ﷺ بالمدينة نحو بيت المقدس ستة عشر أو سبعة عشر شهراً، وكان يقلب وجهه في السماء شوقاً إلى الكعبة، فأنزل الله آية تحويل القبلة شطر المسجد الحرام.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Baqarah 2:144',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 40 & 4486 (Al-Bara ibn Azib)',
        grade: 'sahih',
      },
    ],
    locationId: 'madinah-mosque',
    personIds: ['abu-bakr', 'umar'],
    revelationIds: ['rev-qiblah'],
  },
  {
    id: 'battle-of-badr',
    eraId: 'madinan-period',
    yearCE: 624,
    dateDisplay: { en: '17 Ramadan 2 AH · March 624 CE', ar: '١٧ رمضان ٢ هـ · مارس ٦٢٤ م' },
    datePrecision: 'exact',
    title: {
      en: 'The Battle of Badr (Yawm al-Furqan)',
      ar: 'غزوة بدر الكبرى (يوم الفرقان)',
    },
    summary: {
      en: 'Outnumbered three to one near the wells of Badr, 313 believers were aided by angels and achieved a decisive turning point in Islamic history.',
      ar: 'التقى ٣١٣ من المسلمين بجيش قريش الذي تجاوز الألف عند بدر، فأمدّهم الله بالملائكة وكان نصراً فاصلاً سماه القرآن يوم الفرقان.',
    },
    narrative: {
      en: 'Setting out initially to intercept a Qurayshi caravan carrying confiscated Makkan Muslim wealth, the 313 poorly equipped companions unexpectedly faced a fully armed Makkan army of around 1,000 fighters led by Abu Jahl. The Prophet ﷺ spent the night in earnest supplication and consulted his companions—adopting al-Hubab ibn al-Mundhir’s strategic counsel on positioning near the wells. Assisted by descending angels as affirmed in Surah al-Anfal, the Muslims won decisively and treated captives with dignity—offering literate prisoners freedom in exchange for teaching Madinan children to read.',
      ar: 'خرج المسلمون في بضع عشرة وثلاثمائة فواجهوا جيش قريش البالغ نحو ألف مقاتل. استشار النبي ﷺ أصحابه وأخذ برأي الحباب بن المنذر في النزول عند الماء، وألحّ في الدعاء ليلتها حتى أمدّهم الله بالملائكة، وكان الفداء لمن يُحسن الكتابة تعليم أبناء المدينة.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Anfal 8:9–17 & 8:41',
        grade: 'quran',
      },
      {
        book: 'Sahih Muslim',
        bookAr: 'صحيح مسلم',
        citation: 'Hadith 1763 (Supplication of the Prophet & support of angels)',
        grade: 'sahih',
      },
    ],
    locationId: 'badr',
    personIds: ['abu-bakr', 'umar', 'ali', 'hamzah', 'bilal', 'abu-jahl'],
    revelationIds: ['rev-anfal-badr'],
    miracleIds: ['angels-at-badr'],
  },
  {
    id: 'battle-of-uhud',
    eraId: 'madinan-period',
    yearCE: 625,
    dateDisplay: { en: 'Shawwal 3 AH · March 625 CE', ar: 'شوال ٣ هـ · مارس ٦٢٥ م' },
    datePrecision: 'exact',
    title: {
      en: 'The Battle of Uhud & Steadfastness in Trial',
      ar: 'غزوة أحد ودروس الثبات والانضباط',
    },
    summary: {
      en: 'After an initial Muslim advantage, archers left their hill post, enabling a flanking attack that injured the Prophet ﷺ and martyred his uncle Hamzah.',
      ar: 'بعد تفوّق المسلمين، غادر الرماة جبل الرماة فالتفّت خيل قريش، فأُصيب النبي ﷺ واستشهد عمه حمزة وسبعون من الصحابة.',
    },
    narrative: {
      en: 'Determined to avenge Badr, Quraysh marched to Mount Uhud with 3,000 troops. The Prophet ﷺ positioned fifty archers on a key hill with strict orders never to abandon it regardless of victory or defeat. When the tide seemed won, most archers descended, allowing Khalid ibn al-Walid’s cavalry to encircle the Muslim lines. Seventy companions—including the Prophet’s beloved uncle Hamzah—were martyred, and the Prophet ﷺ himself sustained facial injuries, yet refused to curse his enemies, praying instead for their guidance.',
      ar: 'زحفت قريش بثلاثة آلاف مقاتل إلى جبل أحد، فرتّب النبي ﷺ خمسين رامياً على الجبل وأمرهم ألا يبرحوه، فلما نزل أكثرهم التفّت الخيل على المسلمين فاستشهد حمزة بن عبد المطلب وسبعون صحابياً وشُجّ وجه النبي ﷺ وهو يقول: «اللهم اغفر لقومي فإنهم لا يعلمون».',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Imran 3:121–179',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3039 & 4073 (Archers’ hill & martyrdom of Hamzah)',
        grade: 'sahih',
      },
    ],
    locationId: 'uhud',
    personIds: ['hamzah', 'ali', 'abu-bakr', 'umar', 'fatimah'],
  },
  {
    id: 'battle-of-trench',
    eraId: 'madinan-period',
    yearCE: 627,
    dateDisplay: { en: 'Shawwal 5 AH · 627 CE', ar: 'شوال ٥ هـ · ٦٢٧ م' },
    datePrecision: 'exact',
    title: {
      en: 'Battle of the Trench (Al-Ahzab) & Prophecies of Future Realms',
      ar: 'غزوة الخندق (الأحزاب) وبشارات الفتوح',
    },
    summary: {
      en: 'Following Salman al-Farisi’s counsel, Muslims dug a defensive trench around Madinah against a 10,000-strong coalition; amidst hunger, food multiplied miraculously.',
      ar: 'بمشورة سلمان الفارسي حفر المسلمون خندقاً حول المدينة أمام عشرة آلاف من الأحزاب، وظهرت معجزات تكثير الطعام وبشارات الفتوح.',
    },
    narrative: {
      en: 'Facing a coalition of 10,000 fighters from Quraysh and allied tribes, the Prophet ﷺ adopted Salman al-Farisi’s unprecedented defensive strategy of excavating a trench across Madinah’s exposed northern approach. Working through freezing winds and hunger, he struck a stubborn boulder that emitted three sparks—foretelling the future opening of Syria, Persia, and Yemen. At Jabir ibn Abdullah’s home, a modest meal miraculously fed the entire digging force of a thousand companions, and a fierce gale eventually scattered the besieging confederates.',
      ar: 'أشار سلمان الفارسي بحفر الخندق لصد عشرة آلاف من الأحزاب، وشارك النبي ﷺ في الحفر بنفسه، وعند ضرب صخرة عظيمة بشّر بفتوح الشام وفارس واليمن. كما بارك الله في طعام جابر بن عبد الله القليل حتى شبع أهل الخندق، ثم أرسل الله ريحاً فرّقت الأحزاب.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Ahzab 33:9–25',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 4101–4102 (Jabir’s multiplied meal at the Trench)',
        grade: 'sahih',
      },
    ],
    locationId: 'madinah-mosque',
    personIds: ['salman', 'ali', 'umar'],
    miracleIds: ['multiplication-of-food'],
    prophecyIds: ['conquest-yemen-syria', 'conquest-persia'],
  },
  {
    id: 'treaty-hudaybiyyah',
    eraId: 'madinan-period',
    yearCE: 628,
    dateDisplay: { en: 'Dhul-Qa’dah 6 AH · March 628 CE', ar: 'ذو القعدة ٦ هـ · مارس ٦٢٨ م' },
    datePrecision: 'exact',
    title: {
      en: 'The Treaty of Hudaybiyyah & Water Miracle',
      ar: 'صلح الحديبية وبيعة الرضوان ومعجزة نبع الماء',
    },
    summary: {
      en: 'Halted during peaceful Umrah, the Prophet ﷺ concluded a visionary ten-year truce that the Qur’an hailed as a "Manifest Victory" (Fath Mubin).',
      ar: 'عقد النبي ﷺ صلحاً تاريخياً لعشر سنوات رغم شروطه الظاهرة، فسمّاه القرآن فتحاً مبيناً وأتاح انتشار الدعوة والرسائل إلى الملوك.',
    },
    narrative: {
      en: 'Marching peacefully with 1,400 unarmed companions intending Umrah, the Prophet ﷺ camped at Hudaybiyyah when Quraysh blocked entry. When water ran dry, he placed his hand in a small vessel and water gushed between his fingers sufficient for all 1,400 companions. After the Pledge of Ridwan under the tree, he accepted seemingly asymmetric peace terms with Suhayl ibn Amr, prioritizing long-term security and dialogue. Returning home, Surah al-Fath revealed it was a manifest victory—and during the two years of peace, more people embraced Islam than in all preceding years combined.',
      ar: 'خرج مع ألف وأربعمائة صحابي معتمرين غير محاربين فصدّتهم قريش عند الحديبية، وهناك نبع الماء من بين أصابعه الشريفة فشرب الجميع وتوضأوا. وبعد بيعة الرضوان أبرم صلحاً لعشر سنين، فأنزل الله سورة الفتح مبشّرةً بأنه فتح مبين، فانتشر الإسلام في السلم انتشاراً واسعاً.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Fath 48:1–29',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 2731–2732 (Treaty text) & Hadith 3576 (Water from his fingers)',
        grade: 'sahih',
      },
    ],
    locationId: 'hudaybiyyah',
    personIds: ['abu-bakr', 'umar', 'uthman', 'ali', 'umm-salamah'],
    revelationIds: ['rev-fath'],
    miracleIds: ['multiplication-of-water'],
    prophecyIds: ['entering-makkah-security'],
  },
  {
    id: 'letters-and-khaybar',
    eraId: 'madinan-period',
    yearCE: 628,
    dateDisplay: { en: 'Muharram 7 AH · 628 CE', ar: 'محرم ٧ هـ · ٦٢٨ م' },
    datePrecision: 'exact',
    title: {
      en: 'Epistles to World Rulers & Expedition of Khaybar',
      ar: 'الرسائل إلى الملوك وغزوة خيبر',
    },
    summary: {
      en: 'Dispatched diplomatic letters inviting Heraclius, Khosrow, al-Muqawqis, and al-Najashi to Islam, and resolved hostilities at the fortresses of Khaybar.',
      ar: 'أرسل رسائل دبلوماسية إلى هرقل وكسرى والمقوقس والنجاشي يدعوهم للإسلام، ثم فُتحت حصون خيبر وظهر شفاء عين علي رضي الله عنه.',
    },
    narrative: {
      en: 'Freed by the Hudaybiyyah truce, the Prophet ﷺ commissioned a silver seal reading "Muhammad, Messenger of Allah" and sent ambassadors to the Byzantine Emperor Heraclius, the Sasanian Shah Khosrow, the governor of Egypt, and the King of Abyssinia—documented in the famous dialogue between Heraclius and Abu Sufyan in Sahih al-Bukhari. Shortly afterward, the Muslims marched to Khaybar, where the Prophet ﷺ healed Ali ibn Abi Talib’s inflamed eyes by supplication and was warned miraculously by a poisoned shoulder of lamb.',
      ar: 'اتخذ النبي ﷺ خاتماً من فضة نُقش عليه «محمد رسول الله» وأرسل كتباً إلى هرقل وكسرى والمقوقس والنجاشي، كما في حوار هرقل وأبي سفيان في صحيح البخاري. وعقب ذلك كانت غزوة خيبر حيث شُفيت عينا عليّ رضي الله عنه بدعائه وأخبرته الشاة المسمومة.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 7 (Letter to Heraclius) & Hadith 4210 (Healing of Ali at Khaybar)',
        grade: 'sahih',
      },
      {
        book: 'Sunan Abi Dawud',
        bookAr: 'سنن أبي داود',
        citation: 'Hadith 4512 (Poisoned lamb at Khaybar)',
        grade: 'sahih',
      },
    ],
    locationId: 'khaybar',
    personIds: ['ali', 'abu-sufyan'],
    miracleIds: ['healing-ali-eyes', 'poisoned-sheep-khaybar'],
  },

  // ERA 8: THE FINAL YEARS
  {
    id: 'conquest-of-makkah',
    eraId: 'final-years',
    yearCE: 630,
    dateDisplay: { en: '20 Ramadan 8 AH · January 630 CE', ar: '٢٠ رمضان ٨ هـ · يناير ٦٣٠ م' },
    datePrecision: 'exact',
    title: {
      en: 'The Conquest of Makkah & Universal Amnesty',
      ar: 'فتح مكة والعفو العام',
    },
    summary: {
      en: 'Entering Makkah humbly with 10,000 companions after the truce was broken, he cleansed the Kaaba of idols and granted general amnesty to his former persecutors.',
      ar: 'دخل مكة خاضعاً متواضعاً في عشرة آلاف صحابي بعد نقض الصلح، فطهّر الكعبة من الأصنام ومنح أهلها عفواً عاماً.',
    },
    narrative: {
      en: 'When Quraysh’s allies violated the Hudaybiyyah pact by attacking Banu Khuza’ah, the Prophet ﷺ marched with 10,000 companions toward Makkah, ordering his commanders to avoid bloodshed. Riding into his birthplace with his head bowed in deep humility before Allah, he cleansed the Kaaba of 360 idols while reciting "Truth has come and falsehood has vanished." Addressing the anxious leaders of Quraysh who had persecuted him for twenty years, he declared echoing Prophet Yusuf: "No blame upon you today; go, for you are free." Bilal ascended the Kaaba to call the Adhan.',
      ar: 'لما نقضت قريش العهد، سار النبي ﷺ في عشرة آلاف ودخل مكة خافضاً رأسه تواضعاً لله وأمر بحقن الدماء. طهّر الكعبة من الأصنام تالياً ﴿وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ﴾، ثم عفا عن قريش قائلاً: «لا تثريب عليكم اليوم»، وصعد بلال فوق الكعبة فأذّن.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 4280 & 4287 (Conquest of Makkah & cleansing of Kaaba)',
        grade: 'sahih',
      },
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah An-Nasr 110:1–3',
        grade: 'quran',
      },
    ],
    scholarlyNotes: {
      en: 'The peaceful entry, cleansing of the Kaaba, and clemency are rigorously authentic in Bukhari and Muslim. The concise phrase "Go, for you are free (al-tulaqa)" is widely transmitted in early Seerah books (Ibn Ishaq, al-Bayhaqi) with historical corroboration.',
      ar: 'أصل الفتح والعفو العام ثابت في الصحيحين، ولفظ «اذهبوا فأنتم الطلقاء» مشهور في كتب السيرة والسنن الكبرى للبيهقي بأسانيد تاريخية.',
    },
    locationId: 'makkah-kaaba',
    personIds: ['abu-sufyan', 'bilal', 'abbas', 'ali', 'abu-bakr'],
    revelationIds: ['rev-nasr'],
    prophecyIds: ['entering-makkah-security'],
    imageUrl: MUSEUM_IMAGES.hijazHero,
  },
  {
    id: 'hunayn-and-tabuk',
    eraId: 'final-years',
    yearCE: 630,
    dateDisplay: { en: '8–9 AH · 630 CE', ar: '٨–٩ هـ · ٦٣٠ م' },
    datePrecision: 'exact',
    title: {
      en: 'Hunayn, Expedition of Tabuk & Year of Delegations',
      ar: 'غزوة حنين وغزوة تبوك وعام الوفود',
    },
    summary: {
      en: 'Stood firm at Hunayn when ambushed, led the arduous northern march to Tabuk in peak summer, and welcomed tribal delegations across Arabia.',
      ar: 'ثبت النبي ﷺ في كمين حنين حتى تحوّلت الهزيمة نصراً، وقاد جيش العسرة إلى تبوك، ثم استقبل وفود قبائل العرب.',
    },
    narrative: {
      en: 'Weeks after Makkah’s conquest, Hawazin ambushed the 12,000-strong Muslim force in the valley of Hunayn. The Prophet ﷺ stood steadfast calling out "I am the Prophet, no lie!" until his companions rallied. Later in 9 AH, amidst intense heat and scarcity, he led 30,000 companions northward to Tabuk on the Byzantine frontier without battle, securing treaties across northern Arabia. During 9–10 AH, over seventy tribal delegations journeyed to Madinah to learn Islam.',
      ar: 'فوجئ المسلمون بكمين هوازن في وادي حنين فثبت النبي ﷺ ونادى أصحابه فاجتمعوا وانتصروا. ثم قاد في السنة التاسعة جيش العسرة إلى تبوك في حرٍّ شديد فأبرم عهوداً بأطراف الشام، وتوالت بعدها وفود القبائل إلى المدينة في عام الوفود.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah At-Tawbah 9:25–26 (Hunayn) & 9:117 (Hour of Hardship / Tabuk)',
        grade: 'quran',
      },
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 4315 (Steadfastness at Hunayn) & Hadith 4418 (Tabuk)',
        grade: 'sahih',
      },
    ],
    locationId: 'tabuk',
    personIds: ['abbas', 'abu-bakr', 'umar', 'uthman', 'ali'],
  },
  {
    id: 'farewell-pilgrimage',
    eraId: 'final-years',
    yearCE: 632,
    dateDisplay: { en: '9 Dhul-Hijjah 10 AH · March 632 CE', ar: '٩ ذو الحجة ١٠ هـ · مارس ٦٣٢ م' },
    datePrecision: 'exact',
    title: {
      en: 'The Farewell Pilgrimage & Sermon at Arafat',
      ar: 'حجة الوداع وخطبة عرفة الجامعة',
    },
    summary: {
      en: 'Before over 100,000 pilgrims at Arafat, he declared the sanctity of life, property, women’s rights, and racial equality, as Surah al-Ma’idah 5:3 revealed the perfection of the religion.',
      ar: 'خطب في أكثر من مائة ألف حاج بعرفة مقرراً حرمة الدماء والأموال وحقوق النساء والمساواة بين البشر، ونزلت آية إكمال الدين.',
    },
    narrative: {
      en: 'In the tenth year of Hijrah, the Prophet ﷺ performed his sole Hajj accompanied by over 100,000 Muslims. Standing in the plain of Arafat, he delivered his timeless Farewell Sermon: proclaiming the inviolability of human life, honor, and property; abolishing usury and blood feuds; enjoining kindness and justice toward women; and declaring that no Arab has superiority over a non-Arab, nor white over black, except through righteousness. That very afternoon, Allah revealed: "Today I have perfected for you your religion."',
      ar: 'حج النبي ﷺ حجة الوداع مع أكثر من مائة ألف مسلم، وألقى بعرفة خطبته الخالدة فحرّم الدماء والأموال والأعراض، وأبطل الربا وثارات الجاهلية، وأوصى بالنساء خيراً، وأعلن أن لا فضل لعربي على أعجمي إلا بالتقوى، ونزلت يومئذٍ آية إكمال الدين.',
    },
    evidenceGrade: 'quran',
    sources: [
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: "Surah Al-Ma'idah 5:3 (Perfection of the Religion)",
        grade: 'quran',
      },
      {
        book: 'Sahih Muslim',
        bookAr: 'صحيح مسلم',
        citation: 'Hadith 1218 (Jabir’s complete narration of the Farewell Hajj)',
        grade: 'sahih',
      },
      {
        book: 'Musnad Ahmad',
        bookAr: 'مسند أحمد',
        citation: 'Hadith 23489 (Equality of all races except by piety — Sahih)',
        grade: 'sahih',
      },
    ],
    arabicQuote: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
    arabicQuoteTranslation:
      'This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion.',
    locationId: 'arafat',
    personIds: ['aishah', 'fatimah', 'abu-bakr', 'umar', 'ali', 'bilal'],
    revelationIds: ['rev-maidah-perfection'],
    imageUrl: MUSEUM_IMAGES.manuscript,
  },

  // ERA 9: HIS PASSING
  {
    id: 'final-illness-and-counsel',
    eraId: 'his-passing',
    yearCE: 632,
    dateDisplay: { en: 'Safar–Rabi’ al-Awwal 11 AH · May–June 632 CE', ar: 'صفر–ربيع الأول ١١ هـ · ٦٣٢ م' },
    datePrecision: 'exact',
    title: {
      en: 'Final Illness, Whisper to Fatimah & Parting Counsel',
      ar: 'المرض الأخير والوصية بالصلاة وبشارة فاطمة',
    },
    summary: {
      en: 'During his final illness in Aishah’s chamber, he entrusted Abu Bakr to lead prayer, whispered to Fatimah that she would be first of his family to join him, and urged guarding prayer.',
      ar: 'مُرّض في حجرة عائشة وأمر أبا بكر أن يؤمّ الناس، وأسرّ إلى فاطمة أنها أول أهله لحوقاً به، وأوصى بالصلاة ومَن تحت أيديهم.',
    },
    narrative: {
      en: 'Returning from visiting the graveyard of al-Baqi, the Prophet ﷺ developed a severe fever. With the loving consent of his wives, he was nursed in Aishah’s chamber. He instructed Abu Bakr to lead the congregational prayers and gave away his remaining few coins to the poor. Calling his daughter Fatimah close, he whispered that his time was near—she wept—then whispered that she would be the first of his family to join him, bringing a serene smile through her tears. Among his final counsels were: "The prayer, the prayer, and those under your care."',
      ar: 'ابتدأ مرضه بعد زيارة البقيع واستأذن زوجاته أن يُمرّض في بيت عائشة، فأمر أبا بكر بالصلاة بالناس وتصدّق بما بقي عنده من دنانير. وناجى ابنته فاطمة فأخبرها بدنوّ أجله فبكت ثم أخبرها أنها أول أهله لحوقاً به فضحكت، وكانت آخر وصاياه: «الصلاة الصلاة وما ملكت أيمانكم».',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 3623–3624 (Whisper to Fatimah) & Hadith 4442 (Abu Bakr leading prayer)',
        grade: 'sahih',
      },
      {
        book: 'Sunan Ibn Majah',
        bookAr: 'سنن ابن ماجه',
        citation: 'Hadith 2698 (Final counsel on prayer — Sahih)',
        grade: 'sahih',
      },
    ],
    locationId: 'madinah-mosque',
    personIds: ['aishah', 'fatimah', 'abu-bakr', 'ali'],
    prophecyIds: ['death-of-fatimah'],
  },
  {
    id: 'passing-and-burial',
    eraId: 'his-passing',
    yearCE: 632,
    dateDisplay: { en: '12 Rabi’ al-Awwal 11 AH · June 632 CE', ar: '١٢ ربيع الأول ١١ هـ · يونيو ٦٣٢ م' },
    datePrecision: 'exact',
    title: {
      en: 'His Passing ﷺ, Abu Bakr’s Address & Burial in Madinah',
      ar: 'وفاة النبي ﷺ وخطبة أبي بكر ودفنه بالمدينة',
    },
    summary: {
      en: 'Resting in Aishah’s arms on a Monday, he departed saying "With the Highest Companion"; Abu Bakr steadied the grief-stricken community with Surah Al-Imran 3:144.',
      ar: 'توفي يوم الاثنين في حجر عائشة قائلاً «في الرفيق الأعلى»، فثبّت أبو بكر الصحابة بآية ﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾ ودُفن حيث قُبض.',
    },
    narrative: {
      en: 'On Monday morning, the Prophet ﷺ lifted the curtain of Aishah’s chamber and smiled warmly seeing the companions aligned in Fajr prayer behind Abu Bakr. Later that forenoon, resting his head against Aishah after using a miswak, he lifted his gaze and whispered: "Rather, the Highest Companion (Al-Rafiq al-A’la)." News of his passing shook Madinah to its core; Umar was overcome in disbelief until Abu Bakr kissed the Prophet’s forehead, stepped out, and recited: "Whoever worshipped Muhammad, then Muhammad has died; whoever worships Allah, then Allah is Ever-Living and never dies." He was buried in the very spot where he passed away inside Aishah’s chamber.',
      ar: 'كشف النبي ﷺ ستر حجرة عائشة صبيحة الاثنين فتبسّم مسروراً برؤية أصحابه في صفوف صلاة الفجر، وفي ضحى ذلك اليوم استاك وسكن في حجر عائشة قائلاً: «بل الرفيق الأعلى». فذُهل الصحابة حتى خرج أبو بكر وقال: «من كان يعبد محمداً فإن محمداً قد مات، ومن كان يعبد الله فإن الله حي لا يموت»، ثم دُفن في الموضع الذي قُبض فيه.',
    },
    evidenceGrade: 'sahih',
    sources: [
      {
        book: 'Sahih al-Bukhari',
        bookAr: 'صحيح البخاري',
        citation: 'Hadith 4449–4454 (Final moments & Abu Bakr’s address)',
        grade: 'sahih',
      },
      {
        book: "The Holy Qur'an",
        bookAr: 'القرآن الكريم',
        citation: 'Surah Al-Imran 3:144 (Recited by Abu Bakr)',
        grade: 'quran',
      },
    ],
    arabicQuote: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ',
    arabicQuoteTranslation: 'Muhammad is not but a messenger. Other messengers have passed on before him.',
    locationId: 'madinah-mosque',
    personIds: ['aishah', 'abu-bakr', 'umar', 'ali', 'fatimah', 'abbas'],
    imageUrl: MUSEUM_IMAGES.madinahCourtyard,
  },
];
