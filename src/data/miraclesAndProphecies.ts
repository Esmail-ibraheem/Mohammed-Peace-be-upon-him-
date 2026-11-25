import { MUSEUM_IMAGES } from './assets';
import type { MiracleEntry, ProphecyEntry } from '../types/seerah';

export const MIRACLES: MiracleEntry[] = [
  {
    id: 'holy-quran',
    title: { en: 'The Holy Qur’an', ar: 'القرآن الكريم — المعجزة الخالدة' },
    category: { en: 'Enduring Linguistic & Spiritual Miracle', ar: 'المعجزة الخالدة' },
    summary: {
      en: 'The eternal, preserved revelation whose unmatched eloquence, depth, and preservation stand as the supreme proof of prophethood.',
      ar: 'المعجزة الباقية إلى قيام الساعة في بيانه وإعجازه وهدايته وحفظه من التحريف.',
    },
    context: {
      en: 'Unlike sensory miracles witnessed only by contemporaries, the Prophet ﷺ taught that every prophet was given signs suited to his era, and his enduring sign is revelation itself—revealed over twenty-three years to an unlettered Messenger in the heart of a society famed for poetry.',
      ar: 'بخلاف المعجزات الحسية المؤقتة، بيّن النبي ﷺ أن معجزته الخالدة هي الوحي الذي أوحاه الله إليه، فنزل منجّماً على مدى ثلاث وعشرين سنة على نبي أمّي فتحدى فصحاء العرب.',
    },
    arabicText: 'مَا مِنَ الأَنْبِيَاءِ نَبِيٌّ إِلَّا أُعْطِيَ مَا مِثْلُهُ آمَنَ عَلَيْهِ الْبَشَرُ، وَإِنَّمَا كَانَ الَّذِي أُوتِيتُ وَحْيًا أَوْحَاهُ اللَّهُ إِلَيَّ',
    translation:
      'There was no prophet among the prophets except that he was given miracles because of which people believed, and what I have been given is Revelation which Allah has inspired in me.',
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Al-Isra 17:88 & Al-Hijr 15:9', grade: 'quran' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 4981', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Classical scholars such as al-Baqillani, al-Jurjani, and Ibn Kathir highlight multiple facets of Qur’anic i’jaz: unmatched literary structure (nazm), internal coherence despite 23 years of gradual revelation, historical accuracy, and unbroken preservation through memorization and manuscripts.',
      ar: 'أبرز أئمة الإعجاز كالباقلاني والجرجاني وابن كثير وجوه إعجازه في النظم الفريد والاتساق التام رغم نزوله المنجّم، وحفظه المتواتر في الصدور والسطور.',
    },
    eventId: 'first-revelation-hira',
    locationId: 'cave-of-hira',
    featured: true,
    imageUrl: MUSEUM_IMAGES.manuscript,
  },
  {
    id: 'splitting-of-moon',
    title: { en: 'The Splitting of the Moon', ar: 'انشقاق القمر' },
    category: { en: 'Cosmic Sign', ar: 'آية كونية' },
    summary: {
      en: 'Witnessed by Makkans before the Hijrah when the moon separated into two clear halves across Mount Hira, recorded in Surah al-Qamar.',
      ar: 'انشقّ القمر فرقتين أمام أهل مكة قبل الهجرة حتى رُئي جبل حراء بينهما، ونزلت فيه سورة القمر.',
    },
    context: {
      en: 'Requested by leaders of Quraysh as a visible sign in Makkah approximately five years prior to the Hijrah. Multiple companions—including Abdullah ibn Mas’ud, Anas ibn Malik, and Jubayr ibn Mut’im—transmitted eyewitness accounts.',
      ar: 'طلب أهل مكة آيةً قبل الهجرة بنحو خمس سنوات، فأراهم الله انشقاق القمر، ورواه جمع من الصحابة كابن مسعود وأنس وجبير بن مطعم.',
    },
    arabicText: 'انْشَقَّ الْقَمَرُ عَلَى عَهْدِ رَسُولِ اللَّهِ ﷺ شِقَّتَيْنِ فَقَالَ النَّبِيُّ ﷺ: اشْهَدُوا',
    translation:
      'During the lifetime of the Messenger of Allah ﷺ, the moon was split into two parts, and the Prophet ﷺ said: "Bear witness!"',
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Al-Qamar 54:1–2', grade: 'quran' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3636 & 3637', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Ibn Kathir emphasizes that this narration reaches the level of tawatur (mass transmission) among companions and affirms it occurred historically during the Makkan period rather than being solely futuristic.',
      ar: 'أكّد ابن كثير أن روايات انشقاق القمر بلغت حد التواتر عن الصحابة، وأن الآية خبر عن وقوع الحدث في العهد المكي.',
    },
    eventId: 'splitting-of-moon-event',
    locationId: 'makkah-kaaba',
    featured: true,
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },
  {
    id: 'isra-miraj-miracle',
    title: { en: 'Al-Isra wal-Mi’raj', ar: 'الإسراء والمعراج' },
    category: { en: 'Miraculous Night Journey & Ascension', ar: 'رحلة الليل والعروج السماوي' },
    summary: {
      en: 'Carried overnight from Makkah to Jerusalem and elevated beyond the seven heavens, where the five daily prayers were instituted.',
      ar: 'رحلة ليلية من المسجد الحرام إلى المسجد الأقصى ثم العروج إلى السماوات العلى وفرض الصلوات الخمس.',
    },
    context: {
      en: 'Following the grief of the Year of Sorrow and rejection at Ta’if, the Prophet ﷺ was honored with this miraculous journey. Upon returning, he described architectural details of Masjid al-Aqsa and oncoming caravans to skeptical Makkans.',
      ar: 'جاءت تكرمةً وتثبيتاً له بعد عام الحزن والطائف، ولما كذّبته قريش وصف لهم بيت المقدس وقوافلهم القادمة وصفاً دقيقاً.',
    },
    arabicText: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',
    translation:
      'Glory be to Him who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa.',
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Al-Isra 17:1', grade: 'quran' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3886 & 3887', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'The majority of classical scholars affirm the Isra and Mi’raj occurred physically and spiritually while awake, noting the Arabic word "bi-abdihi" (His servant) encompasses both body and soul.',
      ar: 'ذهب جمهور أهل العلم إلى أن الإسراء والمعراج كانا بالروح والجسد يقظةً، لقوله تعالى «بعبده».',
    },
    eventId: 'isra-miraj',
    locationId: 'jerusalem-aqsa',
    featured: true,
    imageUrl: MUSEUM_IMAGES.caveOfHira,
  },
  {
    id: 'multiplication-of-water',
    title: { en: 'Water Flowing from Between His Fingers', ar: 'نبع الماء من بين أصابعه الشريفة' },
    category: { en: 'Provision & Blessing', ar: 'البركة وتكثير الماء' },
    summary: {
      en: 'On multiple journeys—including Hudaybiyyah with 1,400 companions—fresh water sprang forth from between his fingers until every person drank and performed ablution.',
      ar: 'نبع الماء مراراً من بين أصابعه الشريفة كما في الحديبية، فشرب ألف وأربعمائة صحابي وتوضأوا من إناء صغير.',
    },
    context: {
      en: 'At Hudaybiyyah, thirst struck the camp of 1,400 companions. Only a small vessel of water remained before the Prophet ﷺ. He placed his hand inside it, and Jabir ibn Abdullah testified that water began surging like springs from between his fingers.',
      ar: 'عطش الناس يوم الحديبية ولم يبق إلا ركوة ماء، فوضع النبي ﷺ يده فيها فجعل الماء يفور من بين أصابعه كالعيون فشربوا جميعاً.',
    },
    arabicText: 'فَوَضَعَ يَدَهُ فِي الرَّكْوَةِ فَجَعَلَ الْمَاءُ يَفُورُ مِنْ بَيْنِ أَصَابِعِهِ كَأَمْثَالِ الْعُيُونِ، فَشَرِبْنَا وَتَوَضَّأْنَا',
    translation:
      'He placed his hand into the leather vessel, and water began gushing from between his fingers like springs; so we all drank and made ablution.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3576 (Narrated by Jabir ibn Abdullah)', grade: 'sahih' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3579 (Anas ibn Malik at al-Zawra)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Imam al-Muzani and Ibn Abd al-Barr remarked that water springing directly from human flesh and bone is even more extraordinary than water springing from stone, and it is documented in multiple independent Sahih chains.',
      ar: 'ذكر غير واحد من العلماء أن نبع الماء من بين اللحم والدم أعظم في خرق العادة، وقد تكرر ذلك في مواطن عدة بأسانيد صحيحة متضافرة.',
    },
    eventId: 'treaty-hudaybiyyah',
    locationId: 'hudaybiyyah',
    featured: true,
    imageUrl: MUSEUM_IMAGES.hijrahRoute,
  },
  {
    id: 'crying-palm-trunk',
    title: { en: 'The Crying Palm Trunk (Hanin al-Jidh’)', ar: 'حنين الجذع' },
    category: { en: 'Inanimate Creation', ar: 'تسبيح الجمادات وحنينها' },
    summary: {
      en: 'When a wooden pulpit was built in Masjid al-Nabawi, the date-palm trunk the Prophet ﷺ used to lean on wept aloud until he stepped down and embraced it.',
      ar: 'لما صُنع المنبر وترك النبي ﷺ جذع النخلة الذي كان يخطب إليه، حنّ الجذع وبكى حتى نزل إليه واحتضنه فسكن.',
    },
    context: {
      en: 'For years, the Prophet ﷺ leaned against a palm-tree trunk while delivering Friday sermons in Madinah. When a three-step minbar was crafted for him, the entire congregation heard the trunk groan like a grieving camel until he descended and stroked it with compassion.',
      ar: 'كان النبي ﷺ يخطب مستنداً إلى جذع نخلة، فلما اتُّخذ له المنبر سمع أهل المسجد للجذع أنيناً كحنين العشار، فنزل النبي ﷺ ووضع يده عليه ومسحه حتى سكن.',
    },
    arabicText: 'فَصَاحَ الْجِذْعُ صِيَاحَ الصَّبِيِّ، فَنَزَلَ النَّبِيُّ ﷺ فَضَمَّهُ إِلَيْهِ، يَئِنُّ أَنِينَ الصَّبِيِّ الَّذِي يُسَكَّنُ',
    translation:
      'The trunk cried out like a child, so the Prophet ﷺ came down and embraced it while it sobbed like a child being comforted.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3584 & 3585 (Jabir ibn Abdullah)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Al-Hasan al-Basri would weep when narrating this hadith, telling his students: "A piece of wood yearned for the Messenger of Allah ﷺ—you have greater right to yearn for him." It is among the most extensively corroborated miracles in Sunnah.',
      ar: 'كان الحسن البصري يبكي إذا حدّث بهذا الحديث ويقول: يا عباد الله، الخشبة تحنّ إلى رسول الله ﷺ شوقاً إليه، فأنتم أحق أن تشتاقوا إلى لقائه.',
    },
    eventId: 'madinah-mosque-charter',
    locationId: 'madinah-mosque',
    featured: true,
    imageUrl: MUSEUM_IMAGES.madinahCourtyard,
  },
  {
    id: 'multiplication-of-food',
    title: { en: 'The Multiplication of Food', ar: 'تكثير الطعام والبركة فيه' },
    category: { en: 'Provision & Blessing', ar: 'البركة في الطعام' },
    summary: {
      en: 'Modest provisions—such as Jabir’s single young goat and small measure of barley at the Trench—sufficed to feed a thousand hungry companions with leftovers remaining.',
      ar: 'كفى طعام قليل—كعناق جابر وصاع شعير يوم الخندق—ألف صحابي حتى شبعوا وبقي الطعام كما هو.',
    },
    context: {
      en: 'Seeing severe hunger on the Prophet’s face while digging the Trench, Jabir secretly invited him and a few guests. Instead, the Prophet ﷺ invited all 1,000 diggers, blessed the dough and stew pot, and served group after group until every person ate their fill.',
      ar: 'رأى جابر الجوع في وجه النبي ﷺ يوم الخندق فدعاه في نفر قليل، فنادى النبي ﷺ أهل الخندق كلهم وبارك في البرمة والعجين فأكل ألف رجل وشبعوا.',
    },
    arabicText: 'فَأَكَلُوا حَتَّى تَرَكُوهُ وَانْحَرَفُوا، وَإِنَّ بُرْمَتَنَا لَتَغِطُّ كَمَا هِيَ',
    translation:
      'They ate until they left it and departed, while our cooking pot was still brimming and bubbling just as it had been.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 4102 (Jabir’s feast at the Trench)', grade: 'sahih' },
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 2040 (Abu Talhah’s barley loaves)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Narrated across numerous independent episodes (Jabir at Khandaq, Abu Talhah, Abu Hurayrah’s bowl of milk, and the Tabuk army provisions), demonstrating recurring barakah witnessed by hundreds.',
      ar: 'تكررت هذه المعجزة في عدة وقائع صحيحة كقصة جابر وأبي طلحة وقدح اللبن لأبي هريرة وأهل الصفة.',
    },
    eventId: 'battle-of-trench',
    locationId: 'madinah-mosque',
    featured: true,
    imageUrl: MUSEUM_IMAGES.madinahCourtyard,
  },
  {
    id: 'opening-of-chest',
    title: { en: 'The Opening of His Chest (Shaqq al-Sadr)', ar: 'شق الصدر وتطهير القلب' },
    category: { en: 'Prophetic Preparation', ar: 'الإعداد النبوي' },
    summary: {
      en: 'Angel Jibreel opened his chest in childhood while with Banu Sa’d, purifying his heart with Zamzam water—confirmed in Sahih Muslim.',
      ar: 'أتاه جبريل في طفولته ببادية بني سعد فشق صدره وغسل قلبه بماء زمزم، كما ثبت في صحيح مسلم.',
    },
    context: {
      en: 'Anas ibn Malik reported that he personally saw the faint seam-mark upon the Prophet’s ﷺ chest decades later, corroborating the childhood purification.',
      ar: 'شهد أنس بن مالك أنه كان يرى أثر المخيط في صدر النبي ﷺ، وهو من أصح روايات الإعداد النبوي.',
    },
    arabicText: 'فَشَقَّ عَنْ قَلْبِهِ، فَاسْتَخْرَجَ الْقَلْبَ، فَاسْتَخْرَجَ مِنْهُ عَلَقَةً، فَقَالَ: هَذَا حَظُّ الشَّيْطَانِ مِنْكَ',
    translation:
      'He opened his heart and extracted a dark clot from it, saying: "This was the portion of Satan in you."',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 162 (Narrated by Anas ibn Malik)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Imam al-Nawawi notes that the washing of the heart occurred in childhood and again prior to al-Isra wal-Mi’raj as physical and spiritual preparation for receiving divine revelation.',
      ar: 'ذكر الإمام النووي أن شق الصدر وقع في الصغر ووقع مرة أخرى قبيل الإسراء والمعراج تهيئةً لمقام الوحي والعروج.',
    },
    eventId: 'halimah-and-chest-opening',
    locationId: 'banu-sad',
  },
  {
    id: 'stones-greeting-him',
    title: { en: 'The Stone in Makkah That Greeted Him', ar: 'تسليم الحجر عليه في مكة' },
    category: { en: 'Inanimate Creation', ar: 'تسبيح الجمادات' },
    summary: {
      en: 'The Prophet ﷺ recalled a stone in Makkah that used to greet him with peace before he was even commissioned as a Messenger.',
      ar: 'أخبر النبي ﷺ أنه يعرف حجراً بمكة كان يسلّم عليه قبل أن يُبعث نبياً.',
    },
    context: {
      en: 'Narrated by Jabir ibn Samurah in Sahih Muslim, reflecting how creation recognized his prophethood prior to public revelation.',
      ar: 'رواه جابر بن سمرة في صحيح مسلم، دلالةً على إرهاصات النبوة وتكريم الله له.',
    },
    arabicText: 'إِنِّي لَأَعْرِفُ حَجَرًا بِمَكَّةَ كَانَ يُسَلِّمُ عَلَيَّ قَبْلَ أَنْ أُبْعَثَ، إِنِّي لَأَعْرِفُهُ الْآنَ',
    translation:
      'Indeed, I know a stone in Makkah that used to greet me with peace before I was sent as a Messenger; indeed I recognize it even now.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 2277 (Jabir ibn Samurah)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Al-Qadi Iyad cites this alongside the crying palm trunk as authentic proofs of inanimate matter glorifying Allah and recognizing His Messenger ﷺ.',
      ar: 'عدّه القاضي عياض في «الشفا» من أعلام النبوة الصحيحة الدالة على إدراك الجمادات وتسبيحها.',
    },
    locationId: 'makkah-kaaba',
  },
  {
    id: 'healing-ali-eyes',
    title: { en: 'Healing of Ali’s Eyes at Khaybar', ar: 'شفاء عيني علي بن أبي طالب يوم خيبر' },
    category: { en: 'Miraculous Healing', ar: 'الشفاء بالدعاء' },
    summary: {
      en: 'Before entrusting the banner at Khaybar to Ali ibn Abi Talib, the Prophet ﷺ supplicated and applied his blessed saliva to Ali’s severely inflamed eyes, curing them instantly.',
      ar: 'كان عليّ رضي الله عنه أرمد العينين يوم خيبر، فبصق النبي ﷺ في عينيه ودعا له فبرئ في الحال كأن لم يكن به وجع.',
    },
    context: {
      en: 'After days of impasse at Khaybar, the Prophet ﷺ announced he would give the banner to one who loves Allah and His Messenger. Ali was brought forward suffering severe ophthalmia and was healed immediately.',
      ar: 'قال النبي ﷺ لأعطينّ الراية غداً رجلاً يحب الله ورسوله، فدعا علياً وهو يشتكي عينيه فشفاه الله فوراً.',
    },
    arabicText: 'فَبَصَقَ فِي عَيْنَيْهِ وَدَعَا لَهُ، فَبَرَأَ حَتَّى كَأَنْ لَمْ يَكُنْ بِهِ وَجَعٌ',
    translation:
      'He applied his saliva to his eyes and prayed for him, and he was cured so completely that it was as if he had never felt any pain.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 4210 (Sahl ibn Sa’d)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Narrated identically in both Sahih al-Bukhari and Sahih Muslim, serving both as a miracle of healing and a celebrated virtue of Ali ibn Abi Talib.',
      ar: 'متفق عليه بين البخاري ومسلم، وجمع بين دلالة النبوة ومنقبة عليّ رضي الله عنه.',
    },
    eventId: 'letters-and-khaybar',
    locationId: 'khaybar',
  },
  {
    id: 'poisoned-sheep-khaybar',
    title: { en: 'The Poisoned Shoulder of Lamb at Khaybar', ar: 'إخبار الشاة المسمومة في خيبر' },
    category: { en: 'Divine Protection', ar: 'العصمة والحفظ الإلهي' },
    summary: {
      en: 'A roasted shoulder of lamb gifted at Khaybar miraculously informed the Prophet ﷺ that it had been laced with poison, saving him and his companions.',
      ar: 'أهديت له شاة مشوية مسمومة في خيبر فأخبره الذراع أنه مسموم، فأمسك يده وحذّر أصحابه.',
    },
    context: {
      en: 'After taking a single morsel, the Prophet ﷺ halted his companions immediately, stating the foreleg had warned him of poison. The woman who prepared it confessed when questioned.',
      ar: 'ما إن لاك مضغة حتى قال لأصحابه: «ارفعوا أيديكم، فإنها أخبرتني أنها مسمومة»، فاعترفت التي قدّمتها.',
    },
    arabicText: 'ارْفَعُوا أَيْدِيَكُمْ، فَإِنَّهَا أَخْبَرَتْنِي أَنَّهَا مَسْمُومَةٌ',
    translation: 'Lift your hands away, for it has informed me that it is poisoned.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sunan Abi Dawud', bookAr: 'سنن أبي داود', citation: 'Hadith 4512 (Abu Hurayrah — Sahih)', grade: 'sahih' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 2617 (Poisoned sheep incident)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Later during his final illness, the Prophet ﷺ remarked to Aishah (Bukhari 4428) that he still felt the lingering pain of that Khaybar morsel, underscoring both divine protection at the time and the honor of martyrdom.',
      ar: 'ذكر النبي ﷺ لعائشة في مرض وفاته أنه لا يزال يجد ألم تلك الأكلة، فجمع الله له بين حفظه لإتمام الرسالة وشرف الشهادة.',
    },
    eventId: 'letters-and-khaybar',
    locationId: 'khaybar',
  },
  {
    id: 'answered-rain-supplication',
    title: { en: 'Answered Supplication for Rain (Istisqa’)', ar: 'استجابة دعائه بالاستسقاء في المدينة' },
    category: { en: 'Answered Supplication', ar: 'استجابة الدعاء' },
    summary: {
      en: 'During a Friday sermon in drought-stricken Madinah, he raised his hands praying for rain; clouds gathered instantly and rained a full week until he prayed for clear skies.',
      ar: 'دعا الله بالاستسقاء على المنبر والسماء صافية فتجمّعت السحب فوراً ومُطرت المدينة أسبوعاً كاملاً حتى دعا بانكشافها.',
    },
    context: {
      en: 'A bedouin entered the mosque during the Friday khutbah pleading that livestock were perishing from drought. Anas swore not a single cloud existed in the sky before the Prophet ﷺ raised his hands.',
      ar: 'دخل أعرابي يوم الجمعة يشكو الجدب وهلاك الأموال، فرفع النبي ﷺ يديه يدعو ولم يكن في السماء قزعة سحاب فنشأت سحابة عظيمة.',
    },
    arabicText: 'اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا... فَمَا نَزَلَ عَنْ مِنْبَرِهِ حَتَّى رَأَيْتُ الْمَطَرَ يَتَحَادَرُ عَلَى لِحْيَتِهِ',
    translation:
      'O Allah, send us rain... He had not yet descended from his pulpit before I saw rainwater dripping down his beard.',
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 933 & 1014 (Anas ibn Malik)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'The following Friday, a man returned asking him to pray for the rain to cease; he prayed "Around us, not upon us" and the clouds parted around Madinah like a crown.',
      ar: 'وفي الجمعة التالية طلبوا منه الدعاء بإمساك المطر فدعا «اللهم حوالينا ولا علينا» فانجابت السحب عن المدينة كالإكليل.',
    },
    locationId: 'madinah-mosque',
  },
  {
    id: 'angels-at-badr',
    title: { en: 'The Descent of Angels at Badr', ar: 'نزول الملائكة يوم بدر' },
    category: { en: 'Divine Support', ar: 'التأييد الإلهي' },
    summary: {
      en: 'When 313 believers faced a thousand armed opponents at Badr, Allah answered the Prophet’s supplication by sending ranks of angels led by Jibreel.',
      ar: 'استجاب الله دعاء النبي ﷺ يوم بدر فأمدّ المؤمنين بألف من الملائكة مردفين يتقدمهم جبريل عليه السلام.',
    },
    context: {
      en: 'Recorded explicitly in Surah al-Anfal and corroborated by companion eyewitnesses such as Rifa’ah ibn Rafi’ and Ibn Abbas in Sahih al-Bukhari and Sahih Muslim.',
      ar: 'نصّ عليه القرآن في سورة الأنفال وشهد به الصحابة يوم بدر كما في الصحيحين.',
    },
    arabicText: 'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
    translation:
      'Remember when you asked help of your Lord, and He answered you: "Indeed, I will reinforce you with a thousand from the angels, following one another."',
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Al-Anfal 8:9', grade: 'quran' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3995 (Jibreel holding the reins of his horse)', grade: 'sahih' },
    ],
    scholarlyCommentary: {
      en: 'Scholars emphasize the Qur’an explains the angels were sent as glad tidings and to steady the believers’ hearts, affirming that victory comes solely from Allah.',
      ar: 'بيّن القرآن أن ذلك بشرى وتثبيت لقلوب المؤمنين وأن النصر من عند الله وحده.',
    },
    eventId: 'battle-of-badr',
    locationId: 'badr',
  },
];

export const PROPHECIES: ProphecyEntry[] = [
  {
    id: 'earlier-glad-tidings',
    title: { en: 'Earlier Glad Tidings of His Coming', ar: 'البشارات السابقة ببعثته ﷺ' },
    category: 'lifetime',
    eraLabel: { en: 'Before His Birth', ar: 'قبل المولد' },
    originalNarration: {
      en: 'The Qur’an states that Prophet Isa عليه السلام gave glad tidings of a messenger to come after him named Ahmad, and that people of scripture found him described in their books.',
      ar: 'أخبر القرآن ببشارة عيسى عليه السلام برسول يأتي من بعده اسمه أحمد، وبأن أهل الكتاب يجدونه مكتوباً عندهم.',
    },
    arabicText: 'وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ',
    historicalFulfillmentOrInterpretation: {
      en: 'Realized in the mission of Prophet Muhammad ﷺ; early converts from Jewish and Christian scholarship such as Abdullah ibn Salam and Salman al-Farisi recognized his traits.',
      ar: 'تحققت ببعثة النبي محمد ﷺ، وقد أسلم عدد من علماء أهل الكتاب كعبد الله بن سلام وسلمان الفارسي لما عرفوا صفته.',
    },
    scholarlyDistinction: {
      en: 'The Qur’anic affirmation is decisive (Qur’an); specific mappings to particular surviving Biblical verses (e.g., Isaiah 42, Deuteronomy 18) represent later scholarly comparative exegesis rather than explicit hadith.',
      ar: 'الأصل ثابت بالقرآن الكريم، أما تعيين مواضع محددة في الأسفار المتداولة اليوم فهو اجتهاد مقارن للعلماء.',
    },
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah As-Saff 61:6 & Al-A’raf 7:157', grade: 'quran' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 2125 (Description in the Torah)', grade: 'sahih' },
    ],
    eventId: 'ibrahim-kaaba',
  },
  {
    id: 'roman-victory',
    title: { en: 'The Roman Victory Following Defeat', ar: 'انتصار الروم بعد هزيمتهم في بضع سنين' },
    category: 'lifetime',
    eraLabel: { en: 'Fulfilled During His Lifetime', ar: 'تحققت في حياته ﷺ' },
    originalNarration: {
      en: 'Revealed in Makkah when the Byzantine Empire suffered devastating losses to Sasanian Persia (614–615 CE), Surah ar-Rum explicitly foretold that the Romans would triumph within "bid’ sinin" (three to nine years).',
      ar: 'نزلت سورة الروم في مكة عقب هزيمة الروم الساحقة أمام الفرس، فبشّرت بأنهم سيغلبون في بضع سنين (من ثلاث إلى تسع).',
    },
    arabicText: 'غُلِبَتِ الرُّومُ ۝ فِي أَدْنَى الْأَرْضِ وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ ۝ فِي بِضْعِ سِنِينَ',
    historicalFulfillmentOrInterpretation: {
      en: 'Against all geopolitical expectations of 615 CE, Emperor Heraclius mounted a stunning counter-offensive defeating Persia around 622–624 CE, coinciding with the Muslim victory at Badr.',
      ar: 'على خلاف كل التوقعات العسكرية آنذاك، استعاد هرقل المبادرة وانتصر على الفرس نحو ٦٢٢–٦٢٤ م متزامناً مع فرح المسلمين بنصر بدر.',
    },
    scholarlyDistinction: {
      en: 'Both the text of the prophecy and its fulfillment within the precise Arabic window of 3–9 years are independently verified by Qur’anic scripture and Byzantine historical chronicles.',
      ar: 'النبوءة ثابتة بنص القرآن وتحققها موثّق في التاريخين الإسلامي والبيزنطي ضمن المدة المحددة بدقة.',
    },
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Ar-Rum 30:2–4', grade: 'quran' },
      { book: "Jami' at-Tirmidhi", bookAr: 'جامع الترمذي', citation: 'Hadith 3193 (Abu Bakr’s wager before prohibition)', grade: 'sahih' },
    ],
  },
  {
    id: 'entering-makkah-security',
    title: { en: 'Entering the Sacred Mosque in Security', ar: 'دخول المسجد الحرام آمنين' },
    category: 'lifetime',
    eraLabel: { en: 'Fulfilled During His Lifetime', ar: 'تحققت في حياته ﷺ' },
    originalNarration: {
      en: 'Revealed immediately after the Treaty of Hudaybiyyah when companions felt disappointed at turning back from Makkah, Allah promised they would surely enter Masjid al-Haram in full security.',
      ar: 'نزلت عقب صلح الحديبية حين حزن الصحابة لصدّهم عن العمرة، فوعدهم الله بدخول المسجد الحرام آمنين محلقين رؤوسهم ومقصرين.',
    },
    arabicText: 'لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ إِن شَاءَ اللَّهُ آمِنِينَ مُحَلِّقِينَ رُءُوسَكُمْ وَمُقَصِّرِينَ لَا تَخَافُونَ',
    historicalFulfillmentOrInterpretation: {
      en: 'Fulfilled the very next year in the Compensatory Umrah (7 AH) and completely in the peaceful Conquest of Makkah (8 AH).',
      ar: 'تحققت في العام التالي في عمرة القضاء (٧ هـ) ثم بتمام الأمن في فتح مكة (٨ هـ).',
    },
    scholarlyDistinction: {
      en: 'Explicit Qur’anic promise confirmed by direct historical fulfillment within 1–2 years.',
      ar: 'وعد قرآني صريح تحقق واقعاً خلال عامين.',
    },
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Al-Fath 48:27', grade: 'quran' },
    ],
    eventId: 'conquest-of-makkah',
  },
  {
    id: 'death-of-fatimah',
    title: { en: 'Passing of Fatimah First Among His Family', ar: 'لحاق فاطمة رضي الله عنها به أول أهله' },
    category: 'historical',
    eraLabel: { en: 'Shortly After His Passing', ar: 'بعد وفاته ﷺ' },
    originalNarration: {
      en: 'During his final illness, the Prophet ﷺ whispered to his daughter Fatimah that she would be the first among his household to join him after his passing.',
      ar: 'أسرّ النبي ﷺ إلى ابنته فاطمة في مرض وفاته أنها أول أهله لحوقاً به.',
    },
    arabicText: 'أَمَا تَرْضَيْنَ أَنْ تَكُونِي سَيِّدَةَ نِسَاءِ أَهْلِ الْجَنَّةِ... وَأَنَّكِ أَوَّلُ أَهْلِي لُحُوقًا بِي',
    historicalFulfillmentOrInterpretation: {
      en: 'Fatimah رضي الله عنها passed away six months after her father in Ramadan 11 AH—before any other member of his immediate family.',
      ar: 'توفيت السيدة فاطمة رضي الله عنها بعد أبيها بستة أشهر في رمضان ١١ هـ، وكانت أول أهل بيته لحاقاً به.',
    },
    scholarlyDistinction: {
      en: 'Both the whisper narrated by Aishah and its fulfillment six months later are rigorously authenticated in Sahih al-Bukhari and Sahih Muslim.',
      ar: 'ثابتة في الصحيحين روايةً وتحققاً.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3623–3624', grade: 'sahih' },
    ],
    eventId: 'final-illness-and-counsel',
  },
  {
    id: 'reconciliation-al-hasan',
    title: { en: 'Reconciliation Through Al-Hasan ibn Ali', ar: 'الإصلاح بين فئتين عظيمتين على يد الحسن' },
    category: 'historical',
    eraLabel: { en: 'After His Death (41 AH)', ar: 'بعد وفاته (عام الجماعة ٤١ هـ)' },
    originalNarration: {
      en: 'Holding his young grandson al-Hasan ibn Ali on the pulpit, the Prophet ﷺ said: "This son of mine is a noble leader, and perhaps Allah will reconcile two great factions of Muslims through him."',
      ar: 'قال النبي ﷺ عن حفيده الحسن وهو طفل على المنبر: «إن ابني هذا سيد، ولعل الله أن يصلح به بين فئتين عظيمتين من المسلمين».',
    },
    arabicText: 'إِنَّ ابْنِي هَذَا سَيِّدٌ وَلَعَلَّ اللَّهَ أَنْ يُصْلِحَ بِهِ بَيْنَ فِئَتَيْنِ عَظِيمَتَيْنِ مِنَ الْمُسْلِمِينَ',
    historicalFulfillmentOrInterpretation: {
      en: 'Thirty years later in 41 AH (the Year of Unity), al-Hasan magnanimously relinquished political authority to Mu’awiyah to halt civil bloodshed, uniting the Muslim community.',
      ar: 'تحققت بعد نحو ثلاثين عاماً في عام الجماعة (٤١ هـ) حين تنازل الحسن رضي الله عنه حقناً لدماء المسلمين فاجتمعت الكلمة.',
    },
    scholarlyDistinction: {
      en: 'Unanimously recognized across hadith commentators as one of the clearest post-prophetic historical fulfillments in Sahih al-Bukhari.',
      ar: 'من أوضح دلائل النبوة التاريخية الثابتة في صحيح البخاري.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 2704 & 3629', grade: 'sahih' },
    ],
  },
  {
    id: 'conquest-persia',
    title: { en: 'Opening of the Treasures of Persia (Kisra)', ar: 'فتح كنوز كسرى وفارس' },
    category: 'historical',
    eraLabel: { en: 'Historical Fulfillment (Caliphate of Umar)', ar: 'تحققت في خلافة عمر رضي الله عنه' },
    originalNarration: {
      en: 'At a time when Muslims were besieged and impoverished, the Prophet ﷺ foretold that the treasures of Kisra (the Persian Empire) would be spent in the path of Allah—and promised Suraqah the bracelets of Kisra.',
      ar: 'بشّر النبي ﷺ في أشد أوقات الضيق بإنفاق كنوز كسرى في سبيل الله، وبشّر سراقة بسواري كسرى.',
    },
    arabicText: 'إِذَا هَلَكَ كِسْرَى فَلَا كِسْرَى بَعْدَهُ... وَالَّذِي نَفْسِي بِيَدِهِ لَتُنْفِقُنَّ كُنُوزَهُمَا فِي سَبِيلِ اللَّهِ',
    historicalFulfillmentOrInterpretation: {
      en: 'During the caliphate of Umar ibn al-Khattab (c. 16 AH), the Sasanian capital Ctesiphon (al-Mada’in) fell and its royal regalia were brought to Madinah.',
      ar: 'في خلافة عمر بن الخطاب فُتحت المدائن وجيء بكنوز كسرى وسواريه إلى المدينة.',
    },
    scholarlyDistinction: {
      en: 'The core prophecy of the fall of Kisra and spending its treasures is Sahih in Bukhari & Muslim. The specific story of Umar placing Kisra’s bracelets on Suraqah is found in al-Bayhaqi’s Dala’il and historical collections with separate grading.',
      ar: 'أصل البشارة بفتح كنوز كسرى ثابت في الصحيحين، أما قصة إلباس عمر لسراقة سواري كسرى ففي دلائل النبوة وكتب التاريخ وتُقيّم بسندها الخاص.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3120 & 3618', grade: 'sahih' },
    ],
    eventId: 'battle-of-trench',
  },
  {
    id: 'conquest-yemen-syria',
    title: { en: 'Opening of Yemen, Sham (Syria) & Iraq', ar: 'فتح اليمن والشام والعراق' },
    category: 'historical',
    eraLabel: { en: 'Historical Fulfillment', ar: 'تحققت تاريخياً' },
    originalNarration: {
      en: 'The Prophet ﷺ foretold that Yemen, Greater Syria (al-Sham), and Iraq would be opened and that people would migrate to them seeking ease, while Madinah remained best for them.',
      ar: 'أخبر النبي ﷺ أن اليمن والشام والعراق ستُفتح، فيتحمّل الناس إليها والمدينة خير لهم لو كانوا يعلمون.',
    },
    arabicText: 'تُفْتَحُ الْيَمَنُ فَيَأْتِي قَوْمٌ يَبُسُّونَ فَيَتَحَمَّلُونَ بِأَهْلِهِمْ... وَتُفْتَحُ الشَّامُ... وَتُفْتَحُ الْعِرَاقُ',
    historicalFulfillmentOrInterpretation: {
      en: 'Fulfilled within a decade of the Prophet’s passing during the caliphates of Abu Bakr and Umar رضي الله عنهما.',
      ar: 'تحققت خلال عقد واحد بعد وفاته في عهد أبي بكر وعمر رضي الله عنهما.',
    },
    scholarlyDistinction: {
      en: 'Explicitly authentic in Sahih al-Bukhari and Sahih Muslim.',
      ar: 'ثابتة في الصحيحين بلا خلاف.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 1875', grade: 'sahih' },
    ],
  },
  {
    id: 'death-of-ammar',
    title: { en: 'The Martyrdom of Ammar ibn Yasir', ar: 'استشهاد عمار بن ياسر على يد الفئة الباغية' },
    category: 'historical',
    eraLabel: { en: 'Historical Fulfillment (37 AH)', ar: 'تحققت تاريخياً (٣٧ هـ)' },
    originalNarration: {
      en: 'While building Masjid al-Nabawi, the Prophet ﷺ brushed dust from Ammar ibn Yasir and said: "Alas for Ammar, the transgressing group will kill him."',
      ar: 'قال النبي ﷺ لعمار بن ياسر وهو ينقل اللبن لبناء المسجد: «ويح عمار تقتله الفئة الباغية».',
    },
    arabicText: 'وَيْحَ عَمَّارٍ تَقْتُلُهُ الْفِئَةُ الْبَاغِيَةُ، يَدْعُوهُمْ إِلَى الْجَنَّةِ وَيَدْعُونَهُ إِلَى النَّارِ',
    historicalFulfillmentOrInterpretation: {
      en: 'Over thirty years later, the elderly companion Ammar ibn Yasir was killed at the Battle of Siffin (37 AH) fighting alongside Caliph Ali ibn Abi Talib.',
      ar: 'استشهد عمار بن ياسر بعد أكثر من ثلاثين سنة في موقعة صفين (٣٧ هـ) وهو يقاتل في صف الخليفة علي بن أبي طالب.',
    },
    scholarlyDistinction: {
      en: 'Rigorously authentic (Sahih al-Bukhari); classical Sunni scholars note that the hadith indicates Ali’s side was closer to the truth while still preserving respect for companions’ ijtihad.',
      ar: 'حديث صحيح في البخاري، واستدل به أهل السنة على أن علياً كان أولى بالحق مع حفظ مكانة الصحابة في اجتهادهم.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 447 & 2812', grade: 'sahih' },
    ],
  },
  {
    id: 'tall-buildings-competition',
    title: { en: 'Competition in Constructing Tall Buildings', ar: 'التطاول في البنيان من الحفاة العراة رعاء الشاء' },
    category: 'disputed',
    eraLabel: { en: 'Minor Signs of the Hour', ar: 'أشراط الساعة الصغرى' },
    originalNarration: {
      en: 'In the famous Hadith of Jibreel, when asked about the signs of the Hour, the Prophet ﷺ answered: "That you see barefoot, destitute shepherds competing in constructing tall buildings."',
      ar: 'في حديث جبريل المشهور حين سأله عن أمارات الساعة قال: «وأن ترى الحفاة العراة العالة رعاء الشاء يتطاولون في البنيان».',
    },
    arabicText: 'وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ',
    historicalFulfillmentOrInterpretation: {
      en: 'Many contemporary commentators point to the rapid transformation of Arabian desert societies into capitals of the world’s tallest skyscrapers, while classical scholars like Ibn Hajar noted it began even earlier whenever wealth shifted to formerly pastoral peoples.',
      ar: 'يربط كثير من المعاصرين هذه العلامة بالتسابق الحديث في ناطحات السحاب بالجزيرة العربية، فيما رأى ابن حجر وغيره من المتقدمين أن بدايتها ظهرت منذ توسع البنيان وتبدّل أحوال البادية.',
    },
    scholarlyDistinction: {
      en: 'The narration itself is unanimously Sahih (Bukhari & Muslim). Applying it exclusively to a single modern city or skyscraper is an interpretive claim rather than part of the original text.',
      ar: 'الحديث متفق على صحته، أما تنزيله على مدينة أو برج بعينه فهو تفسير وتأويل تاريخي يُميّز عن نص الحديث.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 8 (Hadith of Jibreel)', grade: 'sahih' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 50', grade: 'sahih' },
    ],
  },
  {
    id: 'arabia-meadows-rivers',
    title: { en: 'Arabia Returning to Meadows and Rivers', ar: 'عودة أرض العرب مروجاً وأنهاراً' },
    category: 'disputed',
    eraLabel: { en: 'Future & Ecological Sign', ar: 'علامة مستقبلية / مختلف في توقيتها' },
    originalNarration: {
      en: 'The Prophet ﷺ said: "The Hour will not be established until the land of the Arabs once again returns to meadows and rivers."',
      ar: 'قال النبي ﷺ: «لا تقوم الساعة حتى تعود أرض العرب مروجاً وأنهاراً».',
    },
    arabicText: 'لَا تَقُومُ السَّاعَةُ حَتَّى تَعُودَ أَرْضُ الْعَرَبِ مُرُوجًا وَأَنْهَارًا',
    historicalFulfillmentOrInterpretation: {
      en: 'Notably uses the word "ta’ud" (returns), aligning with paleoclimatological evidence that Arabia was once green. Some observers link modern agricultural projects or greening events to its onset, while scholars caution that full fulfillment remains future.',
      ar: 'يلفت لفظ «تعود» إلى ما كان عليه ماضي الجزيرة، ويربط البعض بينه وبين التحولات المناخية أو الزراعية الحديثة، بينما يرى العلماء أن تمام تحققه لا يزال مستقبلاً.',
    },
    scholarlyDistinction: {
      en: 'Authentic in Sahih Muslim; claiming it is already fulfilled today is disputed and should be clearly separated from the text itself.',
      ar: 'الحديث صحيح في مسلم، أما الجزم بتحققه الكامل الآن فمحل نظر واختلاف.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 157 (Abu Hurayrah)', grade: 'sahih' },
    ],
  },
  {
    id: 'appearance-of-dajjal',
    title: { en: 'The Trial of Al-Masih al-Dajjal', ar: 'فتنة المسيح الدجال' },
    category: 'future',
    eraLabel: { en: 'Major Future Sign', ar: 'من علامات الساعة الكبرى' },
    originalNarration: {
      en: 'The Prophet ﷺ warned his community extensively—as did every prophet before him—against the supreme tribulation of the False Messiah (al-Dajjal), teaching believers protective supplications and the opening verses of Surah al-Kahf.',
      ar: 'حذّر النبي ﷺ أمته من فتنة المسيح الدجال تحذيراً بليغاً وعلّمهم الاستعاذة منه وقراءة فواتح سورة الكهف.',
    },
    arabicText: 'مَا بَيْنَ خَلْقِ آدَمَ إِلَى قِيَامِ السَّاعَةِ خَلْقٌ أَكْبَرُ مِنَ الدَّجَّالِ',
    historicalFulfillmentOrInterpretation: {
      en: 'A future eschatological event that has not occurred; authentic narrations explicitly state Makkah and Madinah will be guarded by angels against his entry.',
      ar: 'أمر غيبي مستقبلي لم يقع بعد، وثبت في الصحيح أن مكة والمدينة محفوظتان منه بالملائكة.',
    },
    scholarlyDistinction: {
      en: 'Mass-transmitted (mutawatir) in Sahih collections; classical scholars warn against speculative contemporary conspiracy claims identifying living individuals or institutions as the literal Dajjal.',
      ar: 'ثابت بالتواتر في الصحيحين، ويحذّر العلماء من الإسقاطات المتعجلة على شخصيات أو مؤسسات معاصرة.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 2946 & 809', grade: 'sahih' },
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 1881', grade: 'sahih' },
    ],
  },
  {
    id: 'return-of-isa',
    title: { en: 'The Return of Prophet Isa عليه السلام', ar: 'نزول عيسى ابن مريم عليه السلام' },
    category: 'future',
    eraLabel: { en: 'Major Future Sign', ar: 'من علامات الساعة الكبرى' },
    originalNarration: {
      en: 'Authentic narrations foretell the descent of Prophet Isa ibn Maryam عليه السلام near the end of time as a just arbiter who establishes peace, removes oppression, and defeats the Dajjal.',
      ar: 'أخبرت الأحاديث الصحيحة المتواترة بنزول عيسى ابن مريم عليه السلام حكماً عدلاً يقيم السلام ويقتل الدجال.',
    },
    arabicText: 'وَالَّذِي نَفْسِي بِيَدِهِ لَيُوشِكَنَّ أَنْ يَنْزِلَ فِيكُمُ ابْنُ مَرْيَمَ حَكَمًا عَدْلًا',
    historicalFulfillmentOrInterpretation: {
      en: 'Awaited future eschatological event ushering in an era of remarkable justice, harmony, and abundance.',
      ar: 'حدث مستقبلي منتظر يسود فيه العدل والأمان والبركة.',
    },
    scholarlyDistinction: {
      en: 'Established by mutawatir Sahih hadiths across Bukhari and Muslim.',
      ar: 'ثابت بالأحاديث الصحيحة المتواترة.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih al-Bukhari', bookAr: 'صحيح البخاري', citation: 'Hadith 3448', grade: 'sahih' },
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 155', grade: 'sahih' },
    ],
  },
  {
    id: 'yajuj-majuj',
    title: { en: 'The Emergence of Ya’juj and Ma’juj', ar: 'خروج يأجوج ومأجوج' },
    category: 'future',
    eraLabel: { en: 'Major Future Sign', ar: 'من علامات الساعة الكبرى' },
    originalNarration: {
      en: 'Mentioned in both Surah al-Kahf and Surah al-Anbiya as well as Sahih Muslim, their release marks a major end-times trial resolved by divine intervention after the supplication of Isa عليه السلام.',
      ar: 'مذكورون في سورتي الكهف والأنبياء وصحيح مسلم، وخروجهم من كبرى الفتن التي يرفعها الله بدعاء عيسى عليه السلام.',
    },
    arabicText: 'حَتَّىٰ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُم مِّن كُلِّ حَدَبٍ يَنسِلُونَ',
    historicalFulfillmentOrInterpretation: {
      en: 'Strictly a future eschatological event; scholars reject speculative attempts to equate specific modern nationalities with Ya’juj and Ma’juj.',
      ar: 'حدث مستقبلي غيبي، ويرفض المحققون إسقاطه على أمم أو دول معاصرة.',
    },
    scholarlyDistinction: {
      en: 'Established in both the Qur’an and Sahih Muslim.',
      ar: 'ثابت بالقرآن الكريم وصحيح مسلم.',
    },
    evidenceGrade: 'quran',
    sources: [
      { book: "The Holy Qur'an", bookAr: 'القرآن الكريم', citation: 'Surah Al-Anbiya 21:96 & Al-Kahf 18:94–99', grade: 'quran' },
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 2937', grade: 'sahih' },
    ],
  },
  {
    id: 'major-signs-of-hour',
    title: { en: 'The Ten Major Signs of the Hour', ar: 'العلامات العشر الكبرى للساعة' },
    category: 'future',
    eraLabel: { en: 'Major Future Signs', ar: 'أشراط الساعة الكبرى' },
    originalNarration: {
      en: 'Hudhayfah ibn Asid reported that the Prophet ﷺ enumerated ten major signs preceding the Hour: the Smoke, the Dajjal, the Beast, the sun rising from the West, the descent of Isa, Ya’juj and Ma’juj, three major landslides, and a fire emerging from Yemen.',
      ar: 'عدّد النبي ﷺ في حديث حذيفة بن أسيد عشر آيات كبرى قبل قيام الساعة: الدخان، والدجال، والدابة، وطلوع الشمس من مغربها، ونزول عيسى، ويأجوج ومأجوج، وثلاثة خسوف، ونار تخرج من اليمن.',
    },
    arabicText: 'إِنَّهَا لَنْ تَقُومَ حَتَّى تَرَوْنَ قَبْلَهَا عَشْرَ آيَاتٍ',
    historicalFulfillmentOrInterpretation: {
      en: 'Classical scholars note these signs will follow one another rapidly like beads falling from a cut string; their precise sequence is a matter of scholarly study.',
      ar: 'ذكر العلماء أنها تتتابع سريعاً كخرزات انقطع سلكها، مع وجود خلاف اجتهادي في ترتيب وقوع بعضها.',
    },
    scholarlyDistinction: {
      en: 'Text is Sahih in Muslim; exact chronological sequence among the ten signs is discussed differently by Ibn Hajar and al-Qurtubi.',
      ar: 'النص صحيح في مسلم، وترتيب وقوع العلامات محل بحث واجتهاد بين الشراح كابن حجر والقرطبي.',
    },
    evidenceGrade: 'sahih',
    sources: [
      { book: 'Sahih Muslim', bookAr: 'صحيح مسلم', citation: 'Hadith 2901 (Hudhayfah ibn Asid)', grade: 'sahih' },
    ],
  },
];
