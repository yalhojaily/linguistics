import type { SourceId } from './types';

export type SourceKind =
  | 'reference-book'
  | 'chapter'
  | 'encyclopedia'
  | 'study'
  | 'institutional'
  | 'primary'
  | 'publisher'
  | 'excerpt';

export const sourceKinds: Record<SourceKind, string> = {
  'reference-book': 'كتاب مرجعي',
  chapter: 'فصل في كتاب مرجعي',
  encyclopedia: 'موسوعة أكاديمية',
  study: 'دراسة محكّمة',
  institutional: 'مصدر مؤسسي',
  primary: 'مصدر أولي',
  publisher: 'صفحة ناشر',
  excerpt: 'مقتطف أو وصف رسمي',
};

export type SourceGroup = 'general' | 'traditions' | 'modern' | 'society' | 'data';

export const sourceGroups: Record<SourceGroup, string> = {
  general: 'مراجع عامة ومنهجية',
  traditions: 'التقاليد القديمة والعربية',
  modern: 'اللسانيات الحديثة',
  society: 'المجتمع والتنوع والمعنى',
  data: 'البيانات والحوسبة والتوثيق',
};

export interface Source {
  id: SourceId;
  /** الرمز المعروض: م01 */
  label: string;
  group: SourceGroup;
  kind: SourceKind;
  /** التوثيق بصيغته الأصلية (لاتينية غالباً). */
  citation: string;
  /** وصف عربي قصير لعنوان المصدر إن لزم. */
  linkLabel: string;
  url: string;
  /** ما يدعمه المصدر في الموقع. */
  supports: string;
  /** ما استُخدم منه فعلاً، حتى لا يُوحى بقراءة كاملة. */
  used: string;
  extra?: { label: string; url: string; note?: string }[];
}

const CHL = 'In: Waugh, Monville-Burston & Joseph (eds.), The Cambridge History of Linguistics. Cambridge University Press, 2023';

export const sources: Source[] = [
  {
    id: 's01',
    label: 'م01',
    group: 'general',
    kind: 'reference-book',
    citation:
      'Waugh, Linda R.; Monville-Burston, Monique; Joseph, John E. (eds.). 2023. The Cambridge History of Linguistics. Cambridge University Press.',
    linkLabel: 'صفحة الكتاب',
    url: 'https://www.cambridge.org/core/books/cambridge-history-of-linguistics/9E944650E14861BEAFEDF5CE242618FC',
    supports: 'الإطار العام والتنوع التاريخي والجغرافي لتاريخ دراسة اللغة.',
    used: 'الفهرس ووصف الكتاب، مع الرجوع إلى صفحات فصول محددة مذكورة في هذه القائمة.',
  },
  {
    id: 's02',
    label: 'م02',
    group: 'general',
    kind: 'reference-book',
    citation:
      'Allan, Keith (ed.). 2013. The Oxford Handbook of the History of Linguistics. Oxford University Press.',
    linkLabel: 'صفحة الكتاب',
    url: 'https://academic.oup.com/edited-volume/28195',
    supports: 'مرجع إضافي للتوسع والتحقق من توزيع الموضوعات.',
    used: 'الإحالة إليه لا تدل على قراءة جميع فصوله.',
  },
  {
    id: 's03',
    label: 'م03',
    group: 'general',
    kind: 'encyclopedia',
    citation: 'Philosophy of Linguistics. Stanford Encyclopedia of Philosophy (substantive revision 2024).',
    linkLabel: 'نص المقالة',
    url: 'https://plato.stanford.edu/entries/linguistics/',
    supports:
      'اختلاف موضوعات النظريات ومناهجها، والبيانات، وأحكام المقبولية، والاكتساب والتفسير.',
    used: 'النص المتاح.',
  },
  {
    id: 's04',
    label: 'م04',
    group: 'traditions',
    kind: 'chapter',
    citation: `Woods, Christopher; Stauder, Andréas. 2023. "Ancient Near Eastern Linguistic Traditions: Mesopotamia, Egypt." ${CHL}, pp. 35–53.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/ancient-near-eastern-linguistic-traditions-mesopotamia-egypt/BE28BCF5AF3898EF5E746ABB4B436090',
    supports: 'القوائم والتدريب الكتابي والوعي اللغوي في بلاد الرافدين ومصر.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's05',
    label: 'م05',
    group: 'traditions',
    kind: 'chapter',
    citation: `Deshpande, Madhav M. 2023. "History of Linguistic Analysis in the Sanskrit Tradition in Premodern India, with a Brief Discussion of Vernacular Grammars." ${CHL}, pp. 77–101.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/history-of-linguistic-analysis-in-the-sanskrit-tradition-in-premodern-india-with-a-brief-discussion-of-vernacular-grammars/0FB92D02A57DF0E07D7360F4B539DC81',
    supports: 'التراث الهندي ومجالات التحليل وأسماء الأعمال. لا تعتمد المادة سنة محددة لبانيني.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's06',
    label: 'م06',
    group: 'traditions',
    kind: 'chapter',
    citation: `Woodard, Roger D. 2023. "Greek Linguistic Thought and its Roman Reception." ${CHL}, pp. 102–143.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/greek-linguistic-thought-and-its-roman-reception/FEC7F945B05E2C4B45FC1BEABD17E32F',
    supports: 'تاريخ التصنيف والمصطلح واستقباله الروماني.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's07',
    label: 'م07',
    group: 'traditions',
    kind: 'chapter',
    citation: `Peyraube, Alain; Chappell, Hilary; Vovin, Alexander. 2023. "East Asian Early Linguistic Traditions: China; Korea and Japan." ${CHL}, pp. 54–76.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/east-asian-early-linguistic-traditions-china-korea-and-japan/07C43FC57D8211E50FDA851ECEB3A0F4',
    supports: 'تاريخ الاهتمام بالكتابة والأصوات والمعاجم في شرق آسيا.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's08',
    label: 'م08',
    group: 'traditions',
    kind: 'chapter',
    citation: `"The Arabic Linguistic Tradition." 2023. ${CHL}, pp. 195–212.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/arabic-linguistic-tradition/0673036D0233A43ADBB0F8772C81C4AE',
    supports: 'موقع سيبويه، وطبيعة التحليل، وأثر النموذج العربي في أوصاف لغات أخرى.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's09',
    label: 'م09',
    group: 'traditions',
    kind: 'encyclopedia',
    citation: '"ʿAbd-al-Qāher Jorjānī." Encyclopaedia Iranica.',
    linkLabel: 'المقال الأكاديمي',
    url: 'https://www.iranicaonline.org/articles/abd-al-qaher-jorjani-grammarian-rhetorician-and-literary-theorist-d-1078/',
    supports: 'تعريف الجرجاني وأعماله ومشروعه البلاغي.',
    used: 'نص المقال.',
    extra: [
      {
        label:
          'The Legacy of ʿAbd al-Qāhir al-Jurjānī in the Arabic East before al-Qazwīnī’s Talkhīṣ al-Miftāḥ. Journal of Abbasid Studies, 2018',
        url: 'https://doi.org/10.1163/22142371-12340036',
        note: 'يكمل سياق استقبال أعماله.',
      },
    ],
  },
  {
    id: 's10',
    label: 'م10',
    group: 'traditions',
    kind: 'chapter',
    citation: `Kelly, Louis G. 2023. "Early to Late Medieval Europe." ${CHL}, pp. 144–174.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/early-to-late-medieval-europe/1449B8AAEA0080573631BAF0B9F56A9F',
    supports: 'التعليم اللاتيني والسياق الأوروبي الوسيط.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's11',
    label: 'م11',
    group: 'traditions',
    kind: 'study',
    citation:
      '"La Grammaire générale classique en tant que programme de recherche scientifique." Dialogue: Canadian Philosophical Review / Revue canadienne de philosophie.',
    linkLabel: 'صفحة الدراسة',
    url: 'https://www.cambridge.org/core/journals/dialogue-canadian-philosophical-review-revue-canadienne-de-philosophie/article/abs/la-grammaire-generale-classique-en-tant-que-programme-de-recherche-scientifique/4D7A76170EF11795A4C0AACDDBF908AD',
    supports:
      'موقع نحو بور رويال (1660) في تاريخ الأفكار. تاريخ الإتاحة الإلكترونية للدراسة ليس تاريخ هذه الأعمال.',
    used: 'صفحة الدراسة وملخصها.',
  },
  {
    id: 's12',
    label: 'م12',
    group: 'modern',
    kind: 'chapter',
    citation: `Hock, Hans Henrich. 2023. "Early Nineteenth-Century Linguistics." ${CHL}, pp. 326–344.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/early-nineteenthcentury-linguistics/F282A8BB2EC87711C9E17C14E3F699F0',
    supports: 'المقارنة التاريخية والمقابلات الصوتية والشجرة ومكانة السنسكريتية.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's13',
    label: 'م13',
    group: 'modern',
    kind: 'chapter',
    citation: `Jankowsky, Kurt. 2023. "The Neogrammarians and their Role in the Establishment of the Science of Linguistics." ${CHL}, pp. 345–360.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/neogrammarians-and-their-role-in-the-establishment-of-the-science-of-linguistics/C35BD964138453E43EDD8876979F00A4',
    supports: 'الانتظام والقياس والبرنامج المنهجي. عُرضت فترة الحركة تقريبياً لتجنب دقة زمنية غير لازمة.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's14',
    label: 'م14',
    group: 'modern',
    kind: 'institutional',
    citation: 'International Phonetic Association. "History of the IPA."',
    linkLabel: 'التاريخ الرسمي',
    url: 'https://www.internationalphoneticassociation.org/content/history-ipa',
    supports: 'التأسيس سنة 1886 وأول جدول سنة 1888.',
    used: 'مصدر مؤسسي أولي.',
  },
  {
    id: 's15',
    label: 'م15',
    group: 'modern',
    kind: 'chapter',
    citation: `Falk, Julia S. 2023. "American Linguistics to 1960: Science, Data, Method." ${CHL}, pp. 518–546.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/american-linguistics-to-1960-science-data-method/07DF218496DB7851B54C3372E6A9957E',
    supports: 'بواس وسابير وبلومفيلد وتنوع المشروع الأمريكي.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's16',
    label: 'م16',
    group: 'modern',
    kind: 'chapter',
    citation: `Desmet, Piet; Verleyen, Stijn. 2023. "Move to Synchrony: Late Nineteenth to Early Twentieth Century." ${CHL}, pp. 443–466.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/move-to-synchrony-late-nineteenth-to-early-twentieth-century/C27850FC991F12070772243608CD1FA1',
    supports: 'التحول إلى الدراسة التزامنية وأصوله المتعددة.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's17',
    label: 'م17',
    group: 'modern',
    kind: 'chapter',
    citation: '"Introduction." In: Saussure. Cambridge University Press.',
    linkLabel: 'صفحة المقدمة',
    url: 'https://www.cambridge.org/core/books/abs/saussure/introduction/5AABF3722739DA389CD5A1DEF5F4C407',
    supports: 'طبيعة تحرير «المحاضرات» من مذكرات دروس سوسير.',
    used: 'صفحة المقدمة وملخصها.',
  },
  {
    id: 's18',
    label: 'م18',
    group: 'modern',
    kind: 'chapter',
    citation: `Gambarara, Daniele; Fadda, Emanuele; Cigana, Lorenzo; Sériot, Patrick. 2023. "Structuralism in Europe." ${CHL}, pp. 467–495.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/structuralism-in-europe/FA470ADC90288C3ABF92B0F4408B7D71',
    supports: 'تعدد البنيويات، ومدرسة براغ 1926–1939، وأطروحات 1929.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's19',
    label: 'م19',
    group: 'modern',
    kind: 'institutional',
    citation: 'MIT Libraries. "1957: Syntactic Structures by Noam Chomsky."',
    linkLabel: 'صفحة المكتبة',
    url: 'https://libraries.mit.edu/150books/2011/04/13/1957/',
    supports: 'تاريخ كتاب «البنى التركيبية» وأثره.',
    used: 'صفحة المكتبة.',
    extra: [
      {
        label: 'لمحة قسم اللسانيات في MIT',
        url: 'https://linguistics.mit.edu/274-2/',
        note: 'للسياق المؤسسي.',
      },
    ],
  },
  {
    id: 's20',
    label: 'م20',
    group: 'modern',
    kind: 'publisher',
    citation:
      'Chomsky, Noam. Aspects of the Theory of Syntax. First published 1965; later edition page at MIT Press.',
    linkLabel: 'صفحة الناشر',
    url: 'https://mitpress.mit.edu/9780262527408/aspects-of-the-theory-of-syntax/',
    supports: 'موقع العمل في النحو التوليدي. يُعتمد 1965 تاريخاً للحدث، لا تاريخ الطبعة اللاحقة.',
    used: 'صفحة الناشر.',
  },
  {
    id: 's21',
    label: 'م21',
    group: 'modern',
    kind: 'chapter',
    citation: `"Language and Psychology, 1950–Present: A Brief Overview." 2023. ${CHL}.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/language-and-psychology-1950present-a-brief-overview/3EEADB308B79763660B3159DEDC38B01',
    supports: 'نطاق اللسانيات النفسية وصلتها بالتجارب والاكتساب والمعالجة والدراسات العصبية.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's22',
    label: 'م22',
    group: 'society',
    kind: 'institutional',
    citation: 'Gallaudet University Museum. "American Sign Language, a language recognized."',
    linkLabel: 'المصدر المؤسسي',
    url: 'https://gallaudet.edu/museum/exhibits/history-through-deaf-eyes/awareness-access-and-change/american-sign-language-a-language-recognized/',
    supports: 'التحول المرتبط بعمل ستوكو سنة 1960.',
    used: 'صفحة المتحف.',
  },
  {
    id: 's23',
    label: 'م23',
    group: 'society',
    kind: 'excerpt',
    citation:
      'Gallaudet University Press. Excerpt from Sociolinguistic Variation in American Sign Language, chapter 1.',
    linkLabel: 'المقتطف',
    url: 'https://ssl.gallaudet.edu/gupress/excerpts/SVASLone.html',
    supports: 'تقاطع دراسة التنوع ولغات الإشارة، وأعمال ستوكو، ومعجم 1965.',
    used: 'مقتطف الفصل الأول المنشور لدى الناشر.',
  },
  {
    id: 's24',
    label: 'م24',
    group: 'society',
    kind: 'chapter',
    citation: `"Language and Society." 2023. ${CHL}.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/language-and-society/99778EE72F8133224F5919E06757B4B4',
    supports: 'التنوع والجماعات الكلامية والازدواجية والاتصال.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's25',
    label: 'م25',
    group: 'society',
    kind: 'chapter',
    citation:
      '"Language, Culture, and Society." 2013. In: Allan (ed.), The Oxford Handbook of the History of Linguistics.',
    linkLabel: 'صفحة الفصل',
    url: 'https://academic.oup.com/edited-volume/28195/chapter-abstract/213156167',
    supports: 'تبلور المقاربات الاجتماعية في الستينيات.',
    used: 'الملخص المفهرس.',
  },
  {
    id: 's26',
    label: 'م26',
    group: 'society',
    kind: 'institutional',
    citation: 'Greenberg, Joseph H. 1963. Reference record in the WALS bibliography.',
    linkLabel: 'السجل المرجعي',
    url: 'https://wals.info/refdb/record/Greenberg-1963',
    supports: 'تثبيت معلم 1963. لا تدّعي المادة مراجعة كل كليات غرينبرغ أو الحكم على صلاحيتها.',
    used: 'السجل المرجعي.',
  },
  {
    id: 's27',
    label: 'م27',
    group: 'society',
    kind: 'primary',
    citation:
      'Comrie, Bernard; Dryer, Matthew S.; Gil, David; Haspelmath, Martin. "Introduction." WALS Online.',
    linkLabel: 'المقدمة المنهجية',
    url: 'https://wals.info/chapter/s1',
    supports: 'طبيعة الأطلس وخصائصه وعيناته وحدوده، ونشره الأول سنة 2005.',
    used: 'المقدمة المنهجية للأطلس.',
  },
  {
    id: 's28',
    label: 'م28',
    group: 'society',
    kind: 'encyclopedia',
    citation: 'Pragmatics. Stanford Encyclopedia of Philosophy (substantive revision 2024).',
    linkLabel: 'نص المقالة',
    url: 'https://plato.stanford.edu/entries/pragmatics/',
    supports: 'السياق والأفعال الكلامية والاستلزام والفرق بين الدلالة والاستعمال.',
    used: 'النص المتاح.',
  },
  {
    id: 's29',
    label: 'م29',
    group: 'society',
    kind: 'encyclopedia',
    citation: 'Montague Semantics. Stanford Encyclopedia of Philosophy.',
    linkLabel: 'نص المقالة',
    url: 'https://plato.stanford.edu/entries/montague-semantics/',
    supports: 'تاريخ الاتجاه في السبعينيات، والتركيبية، وشروط الصدق، والاستلزام.',
    used: 'النص المتاح.',
  },
  {
    id: 's30',
    label: 'م30',
    group: 'society',
    kind: 'chapter',
    citation: `"Functionalist Dimensions of Grammatical and Discourse Analysis." 2023. ${CHL}, pp. 577–617.`,
    linkLabel: 'صفحة الفصل',
    url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-linguistics/functionalist-dimensions-of-grammatical-and-discourse-analysis/3F0F5611566A5BCA66568A8238B43FF9',
    supports: 'تنوع الاتجاهات الوظيفية وتحليل الخطاب.',
    used: 'الملخص الأكاديمي للفصل.',
  },
  {
    id: 's31',
    label: 'م31',
    group: 'society',
    kind: 'excerpt',
    citation: 'Croft, William; Cruse, D. Alan. Cognitive Linguistics. Cambridge University Press. Chapter 1 excerpt.',
    linkLabel: 'المقتطف الرسمي',
    url: 'https://assets.cambridge.org/052166/1145/excerpt/0521661145_excerpt.htm',
    supports:
      'فترة نشوء الاتجاه وفرضياته المركزية. الصياغة تمثل تعريف المؤلفَين للاتجاه، لا إجماع جميع اللسانيين.',
    used: 'مقتطف الفصل الأول.',
  },
  {
    id: 's32',
    label: 'م32',
    group: 'data',
    kind: 'primary',
    citation:
      'Francis, W. Nelson; Kučera, Henry. Brown Corpus Manual. First manual 1964; the available version includes later revisions.',
    linkLabel: 'الدليل',
    url: 'https://listings.lib.msu.edu/public-corpora/cd421/manuals/brown/INDEX.HTM',
    supports: 'حجم المدونة وتاريخ نصوصها وتاريخ إتاحتها.',
    used: 'نص الدليل المتاح.',
  },
  {
    id: 's33',
    label: 'م33',
    group: 'data',
    kind: 'excerpt',
    citation: 'Corpus Linguistics. Cambridge University Press. Book description.',
    linkLabel: 'وصف الكتاب',
    url: 'https://assets.cambridge.org/97805214/96223/description/9780521496223_description.htm',
    supports:
      'التعريف العام للمنهج القائم على مجموعات أمثلة لغوية فعلية. لا تُستخدم الصفحة لتأريخ مراحل الحقل.',
    used: 'وصف الكتاب.',
  },
  {
    id: 's34',
    label: 'م34',
    group: 'data',
    kind: 'primary',
    citation:
      'Brown, Peter F., et al. 1990. "A Statistical Approach to Machine Translation." Computational Linguistics, 16(2): 79–85.',
    linkLabel: 'الورقة وسجلها لدى ACL',
    url: 'https://aclanthology.org/J90-2002/',
    supports: 'مصدر أولي لمحطة الترجمة الإحصائية.',
    used: 'الورقة.',
  },
  {
    id: 's35',
    label: 'م35',
    group: 'data',
    kind: 'primary',
    citation:
      'Himmelmann, Nikolaus P. 1998. "Documentary and Descriptive Linguistics." Linguistics, 36(1).',
    linkLabel: 'السجل الجامعي',
    url: 'https://kups.ub.uni-koeln.de/36676/',
    supports: 'تثبيت العمل المرجعي وتاريخه؛ الشرح العام مدعوم أيضاً بالمرجع التالي.',
    used: 'السجل الجامعي.',
    extra: [{ label: 'DOI', url: 'https://doi.org/10.1515/ling.1998.36.1.161' }],
  },
  {
    id: 's36',
    label: 'م36',
    group: 'data',
    kind: 'study',
    citation: '"Language documentation 20 years on." SOAS repository, 2016.',
    linkLabel: 'السجل والملخص',
    url: 'https://soas-repository.worktribe.com/output/435506/language-documentation-20-years-on',
    supports: 'نشوء التوثيق اللغوي حقلاً في العقد الأخير من القرن العشرين.',
    used: 'السجل والملخص.',
  },
  {
    id: 's37',
    label: 'م37',
    group: 'data',
    kind: 'primary',
    citation: 'Vaswani, Ashish, et al. 2017. "Attention Is All You Need."',
    linkLabel: 'النص وسجل النسخ',
    url: 'https://arxiv.org/abs/1706.03762',
    supports:
      'مصدر أولي لبنية المحوّل. سنة 2017 هي سنة الطرح الأول، ولا تغيّرها مراجعة لاحقة للنسخة.',
    used: 'النص وسجل النسخ.',
  },
  {
    id: 's38',
    label: 'م38',
    group: 'data',
    kind: 'primary',
    citation:
      'Bender, Emily M.; Koller, Alexander. 2020. "Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data." ACL, pp. 5185–5198.',
    linkLabel: 'الورقة',
    url: 'https://aclanthology.org/2020.acl-main.463/',
    supports:
      'موقف بحثي في العلاقة بين الشكل والمعنى، لا حكم إجماعي ولا دليل على كل الأنظمة اللاحقة.',
    used: 'الورقة.',
  },
];

export const sourceById = new Map(sources.map((s) => [s.id, s]));
