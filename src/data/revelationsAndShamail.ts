import { MUSEUM_IMAGES } from './assets';
import type {
  ClassicalSourceGuide,
  HijriDayEntry,
  QuizQuestion,
  RevelationEntry,
  ShamailCategory,
} from '../types/seerah';

export const REVELATIONS: RevelationEntry[] = [
  {
    id: 'rev-alaq',
    surahName: { en: 'Surah Al-Alaq', ar: 'سورة العلق' },
    surahNumber: 96,
    ayahRange: '96:1–5',
    period: 'makkan',
    yearDisplay: { en: 'Approximately 610 CE', ar: 'نحو ٦١٠ م' },
    title: { en: 'The First Revelation: Command to Read', ar: 'أول الوحي: اقرأ باسم ربك' },
    arabicAyah: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ',
    translation:
      'Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous.',
    occasionOfRevelation: {
      en: 'Revealed during solitary devotion in the Cave of Hira on Jabal al-Nour when Angel Jibreel embraced the Prophet ﷺ three times before delivering the opening words of the Qur’an.',
      ar: 'نزلت أثناء تحنثه ﷺ في غار حراء بجبل النور حين أتاه جبريل فغطّه ثلاثاً ثم تلا عليه مطلع سورة العلق.',
    },
    tafsirSummary: {
      en: 'Establishes divine creation, sacred literacy, and the honor of knowledge as the very opening note of the final revelation.',
      ar: 'تفتتح الرسالة الخاتمة بربط المعرفة والقراءة والعلم باسم الله الخالق الأكرم.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 3 (Book of Revelation)',
      grade: 'sahih',
    },
    locationId: 'cave-of-hira',
    eventId: 'first-revelation-hira',
    imageUrl: MUSEUM_IMAGES.caveOfHira,
  },
  {
    id: 'rev-muddaththir',
    surahName: { en: 'Surah Al-Muddaththir', ar: 'سورة المدثر' },
    surahNumber: 74,
    ayahRange: '74:1–5',
    period: 'makkan',
    yearDisplay: { en: 'Approximately 610 CE', ar: 'نحو ٦١٠ م' },
    title: { en: 'Arise and Warn: The Commission to Preach', ar: 'قم فأنذر: بدء التكليف بالدعوة' },
    arabicAyah: 'يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ ۝ وَثِيَابَكَ فَطَهِّرْ',
    translation:
      'O you who covers himself, arise and warn. And your Lord glorify. And your clothing purify.',
    occasionOfRevelation: {
      en: 'Revealed after a brief pause in revelation (Fatrat al-Wahy) when the Prophet ﷺ saw Jibreel seated upon a throne between heaven and earth and returned home asking to be wrapped.',
      ar: 'نزلت عقب فترة انقطاع الوحي حين رأى النبي ﷺ جبريل بين السماء والأرض فرجع يقول: زمّلوني دثّروني.',
    },
    tafsirSummary: {
      en: 'While Surah al-Alaq inaugurated prophethood, scholars note Surah al-Muddaththir inaugurated active messengership—summoning him to carry the message to humanity.',
      ar: 'كما كانت العلق إيذاناً بالنبوة، كانت المدثر إيذاناً بالرسالة والنهوض بالإنذار.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 4 (Jabir ibn Abdullah)',
      grade: 'sahih',
    },
    locationId: 'makkah-kaaba',
    eventId: 'waraqah-and-early-believers',
  },
  {
    id: 'rev-qamar',
    surahName: { en: 'Surah Al-Qamar', ar: 'سورة القمر' },
    surahNumber: 54,
    ayahRange: '54:1–2',
    period: 'makkan',
    yearDisplay: { en: 'Approximately 617 CE', ar: 'نحو ٦١٧ م' },
    title: { en: 'The Splitting of the Moon', ar: 'انشقاق القمر' },
    arabicAyah: 'اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ ۝ وَإِن يَرَوْا آيَةً يُعْرِضُوا وَيَقُولُوا سِحْرٌ مُّسْتَمِرٌّ',
    translation:
      'The Hour has come near, and the moon has split. And if they see a sign, they turn away and say, "Passing magic."',
    occasionOfRevelation: {
      en: 'Revealed in Makkah when Qurayshi opponents witnessed the moon split into two halves above Mount Hira yet dismissed the cosmic miracle as sorcery.',
      ar: 'نزلت في مكة حين أرى الله قريشاً انشقاق القمر فرقتين فوق حراء فأعرضوا وقالوا سحر مستمر.',
    },
    tafsirSummary: {
      en: 'Demonstrates that stubborn denial is not remedied merely by physical miracles when hearts refuse accountability.',
      ar: 'تؤكد أن الجحود القلبي لا تزيله الآيات الحسية وحدها حين يغلب العناد.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 3636 & 4864',
      grade: 'sahih',
    },
    locationId: 'makkah-kaaba',
    eventId: 'splitting-of-moon-event',
  },
  {
    id: 'rev-isra',
    surahName: { en: 'Surah Al-Isra', ar: 'سورة الإسراء' },
    surahNumber: 17,
    ayahRange: '17:1',
    period: 'makkan',
    yearDisplay: { en: 'Approximately 620–621 CE', ar: 'نحو ٦٢٠–٦٢١ م' },
    title: { en: 'The Night Journey from Makkah to Jerusalem', ar: 'الإسراء من المسجد الحرام إلى الأقصى' },
    arabicAyah: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ',
    translation:
      'Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed.',
    occasionOfRevelation: {
      en: 'Commemorates the miraculous nocturnal journey linking Makkah and Jerusalem in the late Makkan period following the Year of Sorrow and Ta’if.',
      ar: 'توثّق رحلة الإسراء المباركة بين المسجدين الشريفين في أواخر العهد المكي بعد عام الحزن والطائف.',
    },
    tafsirSummary: {
      en: 'Opens with tasbih ("Exalted is He") signaling a momentous manifestation of divine power and spiritual continuity with earlier prophets.',
      ar: 'تفتتح بالتسبيح إشعاراً بعظم الحدث وربط الرسالة الخاتمة بسلسلة الأنبياء السابقين.',
    },
    evidenceGrade: 'quran',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 3887',
      grade: 'sahih',
    },
    locationId: 'jerusalem-aqsa',
    eventId: 'isra-miraj',
    imageUrl: MUSEUM_IMAGES.manuscript,
  },
  {
    id: 'rev-tawbah-cave',
    surahName: { en: 'Surah At-Tawbah', ar: 'سورة التوبة' },
    surahNumber: 9,
    ayahRange: '9:40',
    period: 'madinan',
    yearDisplay: { en: 'Recalling 622 CE (Revealed 9 AH)', ar: 'توثيق ٦٢٢ م (نزلت ٩ هـ)' },
    title: { en: 'Serenity in the Cave of Thawr', ar: 'السكينة في غار ثور' },
    arabicAyah: 'ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
    translation:
      'The second of two, when they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us."',
    occasionOfRevelation: {
      en: 'Revealed during the Tabuk campaign (9 AH) reminding believers of Allah’s miraculous protection during the dark hours of the Hijrah inside the Cave of Thawr.',
      ar: 'نزلت في سياق غزوة تبوك (٩ هـ) مذكّرةً بنصر الله لنبيه وصاحبه أبي بكر حين كانا في غار ثور.',
    },
    tafsirSummary: {
      en: 'Affirms Abu Bakr’s unique Qur’anic honorific as "his companion" and defines true serenity (sakinah) in moments of extreme peril.',
      ar: 'تثبت شرف صحبة أبي بكر الصديق وتجلّي السكينة الإلهية في أشد لحظات الخطر.',
    },
    evidenceGrade: 'quran',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 3653',
      grade: 'sahih',
    },
    locationId: 'cave-of-thawr',
    eventId: 'cave-of-thawr',
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },
  {
    id: 'rev-qiblah',
    surahName: { en: 'Surah Al-Baqarah', ar: 'سورة البقرة' },
    surahNumber: 2,
    ayahRange: '2:144',
    period: 'madinan',
    yearDisplay: { en: '2 AH · 624 CE', ar: '٢ هـ · ٦٢٤ م' },
    title: { en: 'Turning Toward the Sacred Mosque (Qiblah)', ar: 'تحويل القبلة نحو المسجد الحرام' },
    arabicAyah: 'قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ',
    translation:
      'We have certainly seen the turning of your face toward the heaven, and We will surely turn you to a qiblah with which you will be pleased. So turn your face toward al-Masjid al-Haram.',
    occasionOfRevelation: {
      en: 'Revealed sixteen or seventeen months after arriving in Madinah, answering the Prophet’s silent longing to face Ibrahim’s Kaaba in Makkah.',
      ar: 'نزلت بعد نحو ستة عشر شهراً من الهجرة استجابةً لشوق النبي ﷺ للصلاة نحو الكعبة المشرفة.',
    },
    tafsirSummary: {
      en: 'Establishes the distinct communal orientation of the Muslim ummah while honoring earlier sacred heritage.',
      ar: 'ترسّخ استقلال قبلة الأمة المسلمة وارتباطها التاريخي بالبيت الحرام.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 4486',
      grade: 'sahih',
    },
    locationId: 'madinah-mosque',
    eventId: 'change-of-qiblah',
  },
  {
    id: 'rev-anfal-badr',
    surahName: { en: 'Surah Al-Anfal', ar: 'سورة الأنفال' },
    surahNumber: 8,
    ayahRange: '8:9–10',
    period: 'madinan',
    yearDisplay: { en: 'Ramadan 2 AH · 624 CE', ar: 'رمضان ٢ هـ · ٦٢٤ م' },
    title: { en: 'Divine Reinforcement at Badr', ar: 'الإمداد الإلهي يوم بدر' },
    arabicAyah: 'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
    translation:
      'When you asked help of your Lord, and He answered you: "Indeed, I will reinforce you with a thousand from the angels, following one another."',
    occasionOfRevelation: {
      en: 'Revealed immediately following the Battle of Badr after the Prophet ﷺ pleaded earnestly all night for the survival of the small community of believers.',
      ar: 'نزلت عقب غزوة بدر بعد إلحاح النبي ﷺ في الدعاء ليلة المعركة لنصر الفئة المؤمنة.',
    },
    tafsirSummary: {
      en: 'Teaches believers that material strategy must always be coupled with humility, ethical conduct, and reliance upon Allah.',
      ar: 'تربط بين الأخذ بالأسباب والتوكل الصادق والانضباط الأخلاقي في ساحات الابتلاء.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih Muslim',
      bookAr: 'صحيح مسلم',
      citation: 'Hadith 1763',
      grade: 'sahih',
    },
    locationId: 'badr',
    eventId: 'battle-of-badr',
  },
  {
    id: 'rev-fath',
    surahName: { en: 'Surah Al-Fath', ar: 'سورة الفتح' },
    surahNumber: 48,
    ayahRange: '48:1–3',
    period: 'madinan',
    yearDisplay: { en: 'Dhul-Qa’dah 6 AH · 628 CE', ar: 'ذو القعدة ٦ هـ · ٦٢٨ م' },
    title: { en: 'The Manifest Victory of Hudaybiyyah', ar: 'الفتح المبين عقب صلح الحديبية' },
    arabicAyah: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا ۝ لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ',
    translation:
      'Indeed, We have given you a clear conquest — that Allah may forgive for you what preceded of your sin and what will follow.',
    occasionOfRevelation: {
      en: 'Revealed between Makkah and Madinah while returning from the Treaty of Hudaybiyyah; the Prophet ﷺ said it was dearer to him than everything upon which the sun rises.',
      ar: 'نزلت في طريق العودة من الحديبية بين مكة والمدينة، وقال النبي ﷺ إنها أحب إليه مما طلعت عليه الشمس.',
    },
    tafsirSummary: {
      en: 'Redefines victory as strategic peace and spiritual expansion rather than battlefield dominance.',
      ar: 'تعيد تعريف النصر الحقيقي بوصفه سلاماً ممهّداً للدعوة والتمكين لا مجرد غلبة عسكرية.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 4177 & 4833',
      grade: 'sahih',
    },
    locationId: 'hudaybiyyah',
    eventId: 'treaty-hudaybiyyah',
  },
  {
    id: 'rev-nasr',
    surahName: { en: 'Surah An-Nasr', ar: 'سورة النصر' },
    surahNumber: 110,
    ayahRange: '110:1–3',
    period: 'madinan',
    yearDisplay: { en: '8–10 AH · 630–632 CE', ar: '٨–١٠ هـ · ٦٣٠–٦٣٢ م' },
    title: { en: 'Victory, Humility & the Sign of Completion', ar: 'النصر والتسبيح والإيذان بتمام الرسالة' },
    arabicAyah: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ۝ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ۝ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ',
    translation:
      'When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes, then exalt Him with praise of your Lord and ask forgiveness of Him.',
    occasionOfRevelation: {
      en: 'Revealed around the Conquest of Makkah and Year of Delegations; Ibn Abbas perceptively recognized before Umar and the elders of Badr that it also signaled the nearing end of the Prophet’s earthly mission.',
      ar: 'ارتبطت بفتح مكة ودخول الناس في دين الله أفواجاً، وفهم ابن عباس أمام عمر أنها نعيٌ لقرب أجل النبي ﷺ بتمام الرسالة.',
    },
    tafsirSummary: {
      en: 'Teaches that moments of greatest triumph call for heightened humility, gratitude, and seeking forgiveness rather than pride.',
      ar: 'ترسي أن أعظم لحظات النصر تُقابل بالتسبيح والحمد والاستغفار لا بالغرور.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 4970 (Ibn Abbas and Umar)',
      grade: 'sahih',
    },
    locationId: 'makkah-kaaba',
    eventId: 'conquest-of-makkah',
  },
  {
    id: 'rev-maidah-perfection',
    surahName: { en: "Surah Al-Ma'idah", ar: 'سورة المائدة' },
    surahNumber: 5,
    ayahRange: '5:3',
    period: 'madinan',
    yearDisplay: { en: '9 Dhul-Hijjah 10 AH · March 632 CE', ar: '٩ ذو الحجة ١٠ هـ · مارس ٦٣٢ م' },
    title: { en: 'Perfection of the Religion at Arafat', ar: 'إكمال الدين يوم عرفة' },
    arabicAyah: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
    translation:
      'This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion.',
    occasionOfRevelation: {
      en: 'Revealed on a Friday evening while the Prophet ﷺ stood in the Plain of Arafat during the Farewell Pilgrimage, eighty-one days before his passing.',
      ar: 'نزلت عشية يوم جمعة والنبي ﷺ واقف بعرفة في حجة الوداع، قبل وفاته بنحو واحد وثمانين يوماً.',
    },
    tafsirSummary: {
      en: 'Umar ibn al-Khattab affirmed its exact day and place, marking the culmination of twenty-three years of prophetic revelation.',
      ar: 'أثبت عمر بن الخطاب زمانها ومكانها بدقة، تتويجاً لثلاث وعشرين سنة من الوحي.',
    },
    evidenceGrade: 'sahih',
    hadithReference: {
      book: 'Sahih al-Bukhari',
      bookAr: 'صحيح البخاري',
      citation: 'Hadith 45 (Umar ibn al-Khattab)',
      grade: 'sahih',
    },
    locationId: 'arafat',
    eventId: 'farewell-pilgrimage',
    imageUrl: MUSEUM_IMAGES.manuscript,
  },
];

export const SHAMAIL_CATEGORIES: ShamailCategory[] = [
  {
    id: 'physical-description',
    title: { en: 'Physical Description', ar: 'الخِلقة الشريفة' },
    subtitle: { en: 'Authentic Shama’il narrations', ar: 'أوصافه في الشمائل المحمدية' },
    summary: {
      en: 'Well-proportioned and radiant in countenance, neither overly tall nor short, with broad shoulders, luminous expression, and serene dignity.',
      ar: 'كان ربعة من القوم ليس بالطويل البائن ولا بالقصير، أزهر اللون، رحب الصدر، مشرق المحيا كأن الشمس تجري في وجهه.',
    },
    narrations: [
      {
        arabic: 'كَانَ رَسُولُ اللَّهِ ﷺ أَحْسَنَ النَّاسِ وَجْهًا وَأَحْسَنَهُمْ خَلْقًا، لَيْسَ بِالطَّوِيلِ الْبَائِنِ وَلَا بِالْقَصِيرِ',
        english: 'The Messenger of Allah ﷺ was the most handsome of people in countenance and the finest in build; neither conspicuously tall nor short.',
        source: 'Sahih al-Bukhari 3549 · Al-Shama’il 1',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'personality',
    title: { en: 'Personality & Character', ar: 'الأخلاق والسجايا' },
    subtitle: { en: 'Mercy, patience, humility & courage', ar: 'الرحمة والصبر والتواضع والشجاعة' },
    summary: {
      en: 'Aishah described his character as "the Qur’an in living practice"—never speaking harshly, never repaying evil with evil, yet the bravest when standing for truth.',
      ar: 'وصفته عائشة بأن خُلُقه كان القرآن، لم يكن فاحشاً ولا متفحشاً، يعفو ويصفح، وكان أشجع الناس عند البأس.',
    },
    narrations: [
      {
        arabic: 'كَانَ خُلُقُهُ الْقُرْآنَ',
        english: 'His character was the Qur’an.',
        source: 'Sahih Muslim 746 (Narrated by Aishah)',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'daily-routine',
    title: { en: 'Daily Routine', ar: 'برنامجه اليومي' },
    subtitle: { en: 'Balance of worship, service & rest', ar: 'التوازن بين العبادة والعمل والراحة' },
    summary: {
      en: 'Divided his time with harmony—night prayer before dawn, teaching companions after Fajr, serving his household with his own hands, visiting the sick, and resting early after Isha.',
      ar: 'وزّع يومه بتوازن بديع: قيام الليل، وتعليم الصحابة بعد الفجر، وخدمة أهله بيده، وعيادة المرضى، والنوم المبكر بعد العشاء.',
    },
    narrations: [
      {
        arabic: 'كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ، فَإِذَا حَضَرَتِ الصَّلَاةُ خَرَجَ إِلَى الصَّلَاةِ',
        english: 'He used to be occupied in serving his household, and when the time for prayer arrived he would go out to pray.',
        source: 'Sahih al-Bukhari 676 (Aishah)',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'food-drink',
    title: { en: 'Food & Drink', ar: 'طعامه وشرابه' },
    subtitle: { en: 'Gratitude, simplicity & etiquette', ar: 'الزهد والشكر وآداب الطعام' },
    summary: {
      en: 'Never criticized any meal—eating if he desired it and leaving it politely if not. Loved dates, honey, cold sweet water, vinegar, and olive oil, often sharing meals communally.',
      ar: 'ما عاب طعاماً قط؛ إن اشتهاه أكله وإلا تركه، وكان يحب التمر والعسل والماء البارد العذب ويأكل في جماعة.',
    },
    narrations: [
      {
        arabic: 'مَا عَابَ النَّبِيُّ ﷺ طَعَامًا قَطُّ، إِنِ اشْتَهَاهُ أَكَلَهُ، وَإِنْ كَرِهَهُ تَرَكَهُ',
        english: 'The Prophet ﷺ never found fault with any food; if he desired it he ate it, and if he disliked it he left it.',
        source: 'Sahih al-Bukhari 5409 · Al-Shama’il 187',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'clothing',
    title: { en: 'Clothing & Cleanliness', ar: 'لباسه وزينته' },
    subtitle: { en: 'Simplicity, neatness & fragrance', ar: 'البساطة والنظافة والطيب' },
    summary: {
      en: 'Preferred clean, simple cotton or Yemeni striped cloaks (hibarah), valued white garments, loved pleasant musk fragrance, and practiced constant oral hygiene with the miswak.',
      ar: 'أحبّ الثياب النظيفة البسيطة كالقميص والبردة اليمانية (الحبرة) والثياب البيض، وأحبّ الطيب والسواك.',
    },
    narrations: [
      {
        arabic: 'كَانَ أَحَبُّ الثِّيَابِ إِلَى النَّبِيِّ ﷺ الْحِبَرَةَ',
        english: 'The garment most beloved to the Prophet ﷺ was the striped Yemeni cloak (hibarah).',
        source: 'Sahih al-Bukhari 5812 · Al-Shama’il 60',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'family-life',
    title: { en: 'Family Life', ar: 'حياته الأسرية' },
    subtitle: { en: 'Affection, counsel & domestic partnership', ar: 'المودة والمشاورة والرفق بأهله' },
    summary: {
      en: 'Mended his own sandals, sewed his own garments, raced playfully with Aishah, consulted Umm Salamah in crises, and declared: "The best of you are those best to their families."',
      ar: 'خصف نعله وخاط ثوبه، وسابق عائشة ملاطفاً، واستشار أم سلمة في الملمات، وقال: «خيركم خيركم لأهله وأنا خيركم لأهلي».',
    },
    narrations: [
      {
        arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي',
        english: 'The best of you are those who are best to their families, and I am the best of you to my family.',
        source: "Jami' at-Tirmidhi 3895 (Sahih)",
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'children',
    title: { en: 'Kindness Toward Children', ar: 'رحمته بالأطفال' },
    subtitle: { en: 'Warmth, greeting & patience', ar: 'الملاطفة والسلام عليهم والرفق بهم' },
    summary: {
      en: 'Greeted children with Salam as he passed, consoled a boy whose pet sparrow died ("O Abu Umayr, what happened to the little bird?"), and shortened congregational prayers upon hearing an infant cry.',
      ar: 'سلّم على الصبيان، ولاطف الطفل أبا عمير في عصفوره، وخفّف الصلاة إذا سمع بكاء صبي رحمةً بأمه.',
    },
    narrations: [
      {
        arabic: 'إِنِّي لَأَدْخُلُ فِي الصَّلَاةِ وَأَنَا أُرِيدُ إِطَالَتَهَا، فَأَسْمَعُ بُكَاءَ الصَّبِيِّ، فَأَتَجَوَّزُ فِي صَلَاتِي مِمَّا أَعْلَمُ مِنْ شِدَّةِ وَجْدِ أُمِّهِ مِنْ بُكَائِهِ',
        english: 'I begin prayer intending to lengthen it, then I hear the crying of a child, so I shorten my prayer knowing his mother’s distress.',
        source: 'Sahih al-Bukhari 709',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'animals',
    title: { en: 'Compassion for Animals', ar: 'الرفق بالحيوان' },
    subtitle: { en: 'Mercy across all living creatures', ar: 'الرحمة بالكائنات الحية' },
    summary: {
      en: 'Taught that giving water to a thirsty dog earned divine forgiveness, forbade overloading camels or taking chicks from distressed mother birds, and enjoined excellence even in slaughter.',
      ar: 'علّم أن في كل كبد رطبة أجراً، ونهى عن إجهاد الإبل وتفجيع الطير بفراخه، وأمر بالإحسان في كل شيء.',
    },
    narrations: [
      {
        arabic: 'فِي كُلِّ ذَاتِ كَبِدٍ رَطْبَةٍ أَجْرٌ',
        english: 'In kindness to every living creature there is a reward.',
        source: 'Sahih al-Bukhari 2466',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'leadership',
    title: { en: 'Leadership & Consultation', ar: 'القيادة والشورى والعدل' },
    subtitle: { en: 'Shura, equity & servant leadership', ar: 'الشورى والعدل والقيادة بالقدوة' },
    summary: {
      en: 'Consulted companions widely (adopting Salman’s trench and al-Hubab’s water plan at Badr), carried stone and dug soil alongside everyone, and upheld equal justice even toward his own kin.',
      ar: 'كان أكثر الناس مشورة لأصحابه، وشاركهم الحفر والبناء بيده، وأرسى مبدأ سيادة العدل على الجميع دون استثناء.',
    },
    narrations: [
      {
        arabic: 'مَا رَأَيْتُ أَحَدًا أَكْثَرَ مَشُورَةً لِأَصْحَابِهِ مِنْ رَسُولِ اللَّهِ ﷺ',
        english: 'I have never seen anyone consult his companions more frequently than the Messenger of Allah ﷺ.',
        source: "Jami' at-Tirmidhi 1714 (Abu Hurayrah — Hasan)",
        grade: 'hasan',
      },
    ],
  },
  {
    id: 'worship',
    title: { en: 'Worship & Devotion', ar: 'العبادة والذكر' },
    subtitle: { en: 'Gratitude in night prayer & remembrance', ar: 'قيام الليل والشكر ودوام الذكر' },
    summary: {
      en: 'Stood in night prayer until his feet swelled; when Aishah asked why given his guaranteed forgiveness, he replied: "Should I not be a grateful servant?"',
      ar: 'كان يقوم الليل حتى تتفطر قدماه، ولما سألته عائشة عن ذلك قال: «أفلا أكون عبداً شكوراً؟».',
    },
    narrations: [
      {
        arabic: 'أَفَلَا أَكُونُ عَبْدًا شَكُورًا',
        english: 'Should I not be a grateful servant?',
        source: 'Sahih al-Bukhari 4837',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'belongings',
    title: { en: 'Modest Belongings', ar: 'مقتنياته ﷺ وزهده' },
    subtitle: { en: 'Verified simplicity & detachment', ar: 'بساطة العيش وترك الزخرف' },
    summary: {
      en: 'Slept upon a woven palm mat that left marks on his side, owned a silver signet ring, a wooden drinking cup, and a few simple garments—passing away with his armor mortgaged for barley.',
      ar: 'نام على حصير أثّر في جنبه، وكان له خاتم من فضة وقدح من خشب، وتوفي ودرعه مرهونة في ثلاثين صاعاً من شعير.',
    },
    narrations: [
      {
        arabic: 'تُوُفِّيَ رَسُولُ اللَّهِ ﷺ وَدِرْعُهُ مَرْهُونَةٌ عِنْدَ يَهُودِيٍّ بِثَلَاثِينَ صَاعًا مِنْ شَعِيرٍ',
        english: 'The Messenger of Allah ﷺ passed away while his armor was mortgaged to a Jewish neighbor for thirty measures of barley for his household.',
        source: 'Sahih al-Bukhari 2916',
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'teachings',
    title: { en: 'Core Teachings & Maxims', ar: 'جوامع الكلم ووصاياه' },
    subtitle: { en: 'Concise universal ethical wisdom', ar: 'الهداية الجامعة والأخلاق الكونية' },
    summary: {
      en: 'Given Jawami’ al-Kalim (concise, comprehensive speech): actions are judged by intentions, mercy begets divine mercy, and harming neither oneself nor others anchors Islamic ethics.',
      ar: 'أُوتي جوامع الكلم: إنما الأعمال بالنيات، والراحمون يرحمهم الرحمن، ولا ضرر ولا ضرار.',
    },
    narrations: [
      {
        arabic: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
        english: 'The merciful are shown mercy by the Most Merciful. Show mercy to those on earth, and the One above the heavens will show mercy to you.',
        source: 'Sunan Abi Dawud 4941 · Tirmidhi 1924 (Sahih)',
        grade: 'sahih',
      },
    ],
  },
];

export const CLASSICAL_SOURCES: ClassicalSourceGuide[] = [
  {
    id: 'src-quran',
    name: { en: 'The Holy Qur’an', ar: 'القرآن الكريم' },
    author: { en: 'Divine Revelation', ar: 'كلام الله المنزل' },
    era: { en: '610–632 CE', ar: '٦١٠–٦٣٢ م' },
    purpose: { en: 'Supreme primary source for revelation, ethics, and major milestones.', ar: 'المصدر الأول والأوثق للأحداث الكبرى ومقاصد الرسالة.' },
    methodologyNote: { en: 'Preserved by mass oral and written transmission (tawatur).', ar: 'منقول بالتواتر القطعي صدراً وسطراً.' },
  },
  {
    id: 'src-bukhari',
    name: { en: 'Sahih al-Bukhari', ar: 'صحيح البخاري' },
    author: { en: 'Imam Muhammad ibn Isma’il al-Bukhari', ar: 'الإمام محمد بن إسماعيل البخاري' },
    era: { en: 'd. 256 AH / 870 CE', ar: 'ت ٢٥٦ هـ / ٨٧٠ م' },
    purpose: { en: 'Most stringent collection of authentic Prophetic narrations and Maghazi.', ar: 'أصح كتب الحديث النبوي ويتضمن كتاب المغازي ومناقب الصحابة.' },
    methodologyNote: { en: 'Requires verified contemporaneous meeting between every narrator pair.', ar: 'يشترط ثبوت اللقاء والسماع بين كل راوٍ وشيخه.' },
  },
  {
    id: 'src-muslim',
    name: { en: 'Sahih Muslim', ar: 'صحيح مسلم' },
    author: { en: 'Imam Muslim ibn al-Hajjaj', ar: 'الإمام مسلم بن الحجاج' },
    era: { en: 'd. 261 AH / 875 CE', ar: 'ت ٢٦١ هـ / ٨٧٥ م' },
    purpose: { en: 'Companion pillar of Sahih narrations organized with meticulous chain variants.', ar: 'ثاني أصح كتب السنة ويمتاز بجمع طرق الحديث الواحد في موضع واحد.' },
    methodologyNote: { en: 'Rigorous isnad verification with detailed wording comparisons.', ar: 'تحقيق دقيق للأسانيد وتفاوت ألفاظ الرواة.' },
  },
  {
    id: 'src-abudawud',
    name: { en: 'Sunan Abi Dawud', ar: 'سنن أبي داود' },
    author: { en: 'Imam Abu Dawud al-Sijistani', ar: 'الإمام أبو داود السجستاني' },
    era: { en: 'd. 275 AH / 889 CE', ar: 'ت ٢٧٥ هـ / ٨٨٩ م' },
    purpose: { en: 'Primary Sunan collection containing legal, diplomatic, and everyday narrations.', ar: 'من أمهات كتب السنن والأحكام والآداب النبوية.' },
    methodologyNote: { en: 'Includes Sahih, Hasan, and graded weak reports—each individually verified.', ar: 'يضم الصحيح والحسن وغيرهما مع تبيين درجة كل رواية.' },
  },
  {
    id: 'src-tirmidhi',
    name: { en: "Jami' at-Tirmidhi", ar: 'جامع الترمذي' },
    author: { en: 'Imam Abu Isa at-Tirmidhi', ar: 'الإمام أبو عيسى الترمذي' },
    era: { en: 'd. 279 AH / 892 CE', ar: 'ت ٢٧٩ هـ / ٨٩٢ م' },
    purpose: { en: 'Hadith compilation famous for explicit per-narration grading and virtues.', ar: 'يمتاز ببيان درجة كل حديث وأقوال الفقهاء والمناقب.' },
    methodologyNote: { en: 'Pioneered the "Hasan" classification alongside critical remarks.', ar: 'أسّس لمنهجية تبيين الحسن والغريب والعلل.' },
  },
  {
    id: 'src-shamail',
    name: { en: 'Al-Shama’il al-Muhammadiyyah', ar: 'الشمائل المحمدية' },
    author: { en: 'Imam at-Tirmidhi', ar: 'الإمام الترمذي' },
    era: { en: '9th Century CE', ar: 'القرن الثالث الهجري' },
    purpose: { en: 'Dedicated monograph on the Prophet’s ﷺ physical traits, habits, dress, and character.', ar: 'المصدر الأساس لأوصاف النبي ﷺ وهديه ومعيشته اليومية.' },
    methodologyNote: { en: 'Contains 56 topical chapters; modern editors verify each narration’s grade.', ar: '٥٦ باباً تُراجع أسانيد كل حديث فيها بدقة.' },
  },
  {
    id: 'src-ibn-hisham',
    name: { en: 'Al-Seerah al-Nabawiyyah (Ibn Hisham)', ar: 'السيرة النبوية لابن هشام' },
    author: { en: 'Abd al-Malik ibn Hisham (after Ibn Ishaq)', ar: 'ابن هشام (تهذيب سيرة ابن إسحاق)' },
    era: { en: 'd. 218 AH / 833 CE', ar: 'ت ٢١٨ هـ / ٨٣٣ م' },
    purpose: { en: 'Earliest surviving comprehensive chronological Seerah narrative.', ar: 'أقدم سيرة نبوية شاملة وصلت إلينا.' },
    methodologyNote: { en: 'Historical compilation blending authentic reports with unchained maghazi accounts—requires cross-checking.', ar: 'يجمع بين الصحيح والمراسيل التاريخية فيُقابل بأهل الحديث.' },
  },
  {
    id: 'src-ibn-sad',
    name: { en: 'Al-Tabaqat al-Kubra', ar: 'الطبقات الكبرى' },
    author: { en: 'Muhammad ibn Sa’d', ar: 'محمد بن سعد' },
    era: { en: 'd. 230 AH / 845 CE', ar: 'ت ٢٣٠ هـ / ٨٤٥ م' },
    purpose: { en: 'Encyclopedic biographical dictionary of the Prophet ﷺ and early companions.', ar: 'موسوعة تراجم الصحابة والتابعين والوثائق النبوية.' },
    methodologyNote: { en: 'Invaluable for prosopography, family ties, and epistles; chains assessed individually.', ar: 'مرجع أساس للتراجم والأنساب مع دراسة الأسانيد.' },
  },
  {
    id: 'src-ibn-kathir',
    name: { en: 'Al-Bidayah wan-Nihayah', ar: 'البداية والنهاية' },
    author: { en: 'Imam Ismail ibn Kathir', ar: 'الحافظ ابن كثير' },
    era: { en: 'd. 774 AH / 1373 CE', ar: 'ت ٧٧٤ هـ / ١٣٧٣ م' },
    purpose: { en: 'Critical historical synthesis evaluating Seerah reports with hadith rigor.', ar: 'موسوعة تاريخية نقدية تميّز الصحيح من الضعيف في السيرة.' },
    methodologyNote: { en: 'Explicitly critiques weak legends and reconciles conflicting timelines.', ar: 'ينقد الإسرائيليات والروايات الواهية ويجمع بين الروايات.' },
  },
  {
    id: 'src-bayhaqi',
    name: { en: 'Dala’il al-Nubuwwah', ar: 'دلائل النبوة' },
    author: { en: 'Imam Ahmad al-Bayhaqi', ar: 'الإمام البيهقي' },
    era: { en: 'd. 458 AH / 1066 CE', ar: 'ت ٤٥٨ هـ / ١٠٦٦ م' },
    purpose: { en: 'Seven-volume archive documenting miracles and signs of prophethood with chains.', ar: 'أوسع موسوعة مسندة في دلائل النبوة والمعجزات.' },
    methodologyNote: { en: 'Preserves full isnads allowing scholars to separate Sahih from weak reports.', ar: 'يسوق الأسانيد كاملة لتمكين المحققين من الحكم عليها.' },
  },
  {
    id: 'src-zad',
    name: { en: 'Zad al-Ma’ad', ar: 'زاد المعاد في هدي خير العباد' },
    author: { en: 'Imam Ibn Qayyim al-Jawziyyah', ar: 'الإمام ابن قيم الجوزية' },
    era: { en: 'd. 751 AH / 1350 CE', ar: 'ت ٧٥١ هـ / ١٣٥٠ م' },
    purpose: { en: 'Analytical study of Prophetic guidance, ethics, expeditions, and jurisprudence.', ar: 'دراسة تحليلية فقهية وتربوية لهدي النبي ﷺ ومغازيه.' },
    methodologyNote: { en: 'Renowned for resolving chronological discrepancies with scholarly independence.', ar: 'يشتهر بالتحقيق الزمني والفقهي المتين.' },
  },
  {
    id: 'src-dorar',
    name: { en: 'Dorar Hadith Encyclopedia', ar: 'الموسوعة الحديثية (الدرر السنية)' },
    author: { en: 'Contemporary Verification Reference', ar: 'مرجع التخريج والتحقيق المعاصر' },
    era: { en: 'Modern Digital Verification', ar: 'التوثيق الحديثي المعاصر' },
    purpose: { en: 'Cross-referencing hadith gradings from classical and modern hadith masters.', ar: 'مقارنة أحكام أئمة الحديث المتقدمين والمتأخرين على الروايات.' },
    methodologyNote: { en: 'Used to surface scholarly consensus and transparent differences in grading.', ar: 'يعرض خلاصة أحكام المحدثين بشفافية علمية.' },
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'Which Surah contains the very first verses revealed to Prophet Muhammad ﷺ in the Cave of Hira?',
      ar: 'ما هي السورة التي نزل منها أول الوحي على النبي ﷺ في غار حراء؟',
    },
    options: [
      { en: 'Surah Al-Fatihah', ar: 'سورة الفاتحة' },
      { en: 'Surah Al-Alaq (96:1–5)', ar: 'سورة العلق (١–٥)' },
      { en: 'Surah Al-Muddaththir', ar: 'سورة المدثر' },
      { en: 'Surah Al-Muzzammil', ar: 'سورة المزمل' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'According to Sahih al-Bukhari (Hadith 3), Angel Jibreel revealed the first five verses of Surah Al-Alaq ("Read in the name of your Lord who created") in the Cave of Hira.',
      ar: 'ثبت في صحيح البخاري (حديث ٣) أن أول ما نزل من القرآن هو الآيات الخمس الأولى من سورة العلق.',
    },
    sourceCitation: 'Sahih al-Bukhari 3',
    evidenceGrade: 'sahih',
  },
  {
    id: 'q2',
    question: {
      en: 'How do classical hadith critics classify the popular story of a spider spinning a web and doves nesting at the Cave of Thawr?',
      ar: 'كيف يصنّف محققو الحديث قصة نسج العنكبوت وعش الحمامتين على باب غار ثور؟',
    },
    options: [
      { en: 'Directly mentioned in Surah At-Tawbah 9:40', ar: 'مذكورة صراحةً في سورة التوبة' },
      { en: 'Mutawatir in Sahih al-Bukhari and Muslim', ar: 'متواترة في الصحيحين' },
      { en: 'Disputed / Da’if — separate from the authentic Qur’anic account of the Cave', ar: 'مختلف فيها / ضعيفة السند وتُميّز عن الثابت في القرآن والصحيح' },
      { en: 'Part of the Treaty of Hudaybiyyah', ar: 'جزء من صلح الحديبية' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'While the shelter in Cave Thawr and divine protection are established by Qur’an 9:40 and Sahih al-Bukhari, the spider web and dove accounts have weak or disputed chains and should not be conflated with the Qur’anic text.',
      ar: 'المكوث في الغار وحفظ الله ثابت بالقرآن والبخاري، أما قصص العنكبوت والحمامتين ففي أسانيدها ضعف وخلاف بين المحققين.',
    },
    sourceCitation: 'Qur’an 9:40 · Bukhari 3653 · Hadith Criticism',
    evidenceGrade: 'disputed',
  },
  {
    id: 'q3',
    question: {
      en: 'Whose counsel led to digging the defensive Trench (Khandaq) around Madinah in 5 AH?',
      ar: 'من الصحابي الذي أشار بحفر الخندق حول المدينة في السنة الخامسة للهجرة؟',
    },
    options: [
      { en: 'Salman al-Farisi رضي الله عنه', ar: 'سلمان الفارسي رضي الله عنه' },
      { en: 'Bilal ibn Rabah رضي الله عنه', ar: 'بلال بن رباح رضي الله عنه' },
      { en: 'Zayd ibn Harithah رضي الله عنه', ar: 'زيد بن حارثة رضي الله عنه' },
      { en: 'Waraqah ibn Nawfal', ar: 'ورقة بن نوفل' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Salman al-Farisi proposed digging a trench—a Persian defensive technique unfamiliar to Arabian warfare—which the Prophet ﷺ adopted after consulting his companions.',
      ar: 'أشار سلمان الفارسي رضي الله عنه بحفر الخندق، وهي خطة لم تكن معروفة عند العرب فاستحسنها النبي ﷺ.',
    },
    sourceCitation: 'Ibn Hisham · Sahih al-Bukhari 4102',
    evidenceGrade: 'sahih',
  },
  {
    id: 'q4',
    question: {
      en: 'Which Surah heralded the Treaty of Hudaybiyyah as a "Manifest Victory" (Fath Mubin)?',
      ar: 'ما هي السورة التي نزلت مبشّرةً بأن صلح الحديبية «فتح مبين»؟',
    },
    options: [
      { en: 'Surah Al-Anfal', ar: 'سورة الأنفال' },
      { en: 'Surah Al-Fath (48)', ar: 'سورة الفتح (٤٨)' },
      { en: 'Surah Al-Qamar', ar: 'سورة القمر' },
      { en: 'Surah Al-Fil', ar: 'سورة الفيل' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Surah Al-Fath (48:1) was revealed on the return journey from Hudaybiyyah, affirming that peaceful diplomacy opened the way for vast growth of Islam.',
      ar: 'نزلت سورة الفتح في طريق العودة من الحديبية مبشّرةً بالفتح المبين.',
    },
    sourceCitation: 'Qur’an 48:1 · Sahih al-Bukhari 4177',
    evidenceGrade: 'quran',
  },
  {
    id: 'q5',
    question: {
      en: 'Which grandson of the Prophet ﷺ fulfilled the Sahih al-Bukhari prophecy of reconciling two great Muslim factions?',
      ar: 'من سبط النبي ﷺ الذي تحققت على يديه نبوءة الإصلاح بين فئتين عظيمتين من المسلمين؟',
    },
    options: [
      { en: 'Al-Hasan ibn Ali رضي الله عنهما', ar: 'الحسن بن علي رضي الله عنهما' },
      { en: 'Al-Husayn ibn Ali رضي الله عنهما', ar: 'الحسين بن علي رضي الله عنهما' },
      { en: 'Abdullah ibn Abbas', ar: 'عبد الله بن عباس' },
      { en: 'Usamah ibn Zayd', ar: 'أسامة بن زيد' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'In Sahih al-Bukhari 2704, the Prophet ﷺ said of al-Hasan: "Perhaps Allah will reconcile two great groups of Muslims through him," fulfilled in 41 AH (Year of Unity).',
      ar: 'في صحيح البخاري (٢٧٠٤) قال النبي ﷺ عن الحسن: «ولعل الله أن يصلح به بين فئتين عظيمتين من المسلمين»، وتحقق ذلك عام ٤١ هـ.',
    },
    sourceCitation: 'Sahih al-Bukhari 2704',
    evidenceGrade: 'sahih',
  },
  {
    id: 'q6',
    question: {
      en: 'Where was the miracle of water gushing from between the Prophet’s ﷺ fingers witnessed by 1,400 companions?',
      ar: 'في أي موضع شهد ألف وأربعمائة صحابي معجزة نبع الماء من بين أصابعه الشريفة؟',
    },
    options: [
      { en: 'Ta’if', ar: 'الطائف' },
      { en: 'Al-Hudaybiyyah', ar: 'الحديبية' },
      { en: 'Abyssinia', ar: 'الحبشة' },
      { en: 'Busra in Syria', ar: 'بصرى الشام' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Narrated by Jabir ibn Abdullah in Sahih al-Bukhari 3576: at Hudaybiyyah, 1,400 companions drank and made ablution from water springing from between his fingers.',
      ar: 'روى جابر بن عبد الله في صحيح البخاري (٣٥٧٦) أن الماء نبع من بين أصابعه يوم الحديبية فكفى ألفاً وأربعمائة صحابي.',
    },
    sourceCitation: 'Sahih al-Bukhari 3576',
    evidenceGrade: 'sahih',
  },
];

export const HIJRI_HIGHLIGHTS: HijriDayEntry[] = [
  {
    id: 'h-ramadan-17',
    hijriDay: '17',
    hijriMonth: { en: 'Ramadan · 2 AH', ar: 'رمضان · ٢ هـ' },
    eventId: 'battle-of-badr',
    title: { en: 'Battle of Badr (Yawm al-Furqan)', ar: 'غزوة بدر الكبرى' },
    summary: { en: 'Decisive turning point near the wells of Badr documented in Surah al-Anfal.', ar: 'يوم الفرقان الذي أعزّ الله فيه الفئة المؤمنة.' },
    evidenceGrade: 'quran',
  },
  {
    id: 'h-ramadan-20',
    hijriDay: '20',
    hijriMonth: { en: 'Ramadan · 8 AH', ar: 'رمضان · ٨ هـ' },
    eventId: 'conquest-of-makkah',
    title: { en: 'The Peaceful Conquest of Makkah', ar: 'فتح مكة الأعظم' },
    summary: { en: 'Entry into Makkah with humility, cleansing of the Kaaba, and universal amnesty.', ar: 'دخول مكة متواضعاً وتطهير الكعبة والعفو العام.' },
    evidenceGrade: 'sahih',
  },
  {
    id: 'h-dhulhijjah-9',
    hijriDay: '9',
    hijriMonth: { en: 'Dhul-Hijjah · 10 AH', ar: 'ذو الحجة · ١٠ هـ' },
    eventId: 'farewell-pilgrimage',
    title: { en: 'Farewell Sermon at Arafat', ar: 'خطبة حجة الوداع بعرفة' },
    summary: { en: 'Revelation of Surah al-Ma’idah 5:3 and proclamation of human dignity.', ar: 'نزول آية إكمال الدين وخطبة المساواة الإنسانية.' },
    evidenceGrade: 'quran',
  },
  {
    id: 'h-rabi-12',
    hijriDay: '12',
    hijriMonth: { en: 'Rabi’ al-Awwal · 11 AH', ar: 'ربيع الأول · ١١ هـ' },
    eventId: 'passing-and-burial',
    title: { en: 'Passing of the Messenger of Allah ﷺ', ar: 'وفاة رسول الله ﷺ' },
    summary: { en: 'Final Monday in Madinah and Abu Bakr’s steadying recitation of Surah Al-Imran 3:144.', ar: 'رحيله ﷺ إلى الرفيق الأعلى وثبات أبي بكر الصديق.' },
    evidenceGrade: 'sahih',
  },
];
