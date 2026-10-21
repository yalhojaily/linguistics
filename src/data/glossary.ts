/** المعجم التمهيدي من المادة المرجعية، مع ربط تحريري بالمحطات. التعريفات مبسطة. */
export interface Term {
  id: string;
  ar: string;
  en: string;
  def: string;
  stations: string[];
}

export const glossary: Term[] = [
  { id: 'linguistics', ar: 'اللسانيات', en: 'Linguistics', def: 'الدراسة المنهجية للغة وبنيتها واستعمالها وتغيرها واكتسابها.', stations: ['12', '11'] },
  { id: 'philology', ar: 'فقه النصوص / الفيلولوجيا', en: 'Philology', def: 'دراسة النصوص واللغات في سياقاتها التاريخية؛ حدود المصطلح تتغير بين التقاليد.', stations: ['04', '08'] },
  { id: 'phonetics', ar: 'الصوتيات', en: 'Phonetics', def: 'دراسة إنتاج الأصوات الكلامية وخصائصها المادية وإدراكها.', stations: ['10'] },
  { id: 'phonology', ar: 'علم الأصوات الوظيفي', en: 'Phonology', def: 'دراسة تنظيم الأصوات، أو الوحدات المقابلة لها، ووظائفها داخل نظام اللغة.', stations: ['13'] },
  { id: 'morphology', ar: 'الصرف', en: 'Morphology', def: 'دراسة بناء الكلمات والعلاقات بين أشكالها.', stations: ['02', '05'] },
  { id: 'syntax', ar: 'النحو / التركيب', en: 'Syntax', def: 'دراسة تنظيم الكلمات والعبارات وعلاقاتها في التراكيب.', stations: ['05', '14'] },
  { id: 'semantics', ar: 'الدلالة', en: 'Semantics', def: 'دراسة المعنى اللغوي؛ تختلف مناهجها في طبيعة التمثيل والتفسير.', stations: ['20', '06'] },
  { id: 'pragmatics', ar: 'التداولية', en: 'Pragmatics', def: 'دراسة جوانب المعنى والفعل اللغوي المرتبطة بالاستعمال والسياق.', stations: ['19'] },
  { id: 'synchrony', ar: 'التزامن / الآنية', en: 'Synchrony', def: 'النظر في نظام اللغة في فترة معينة.', stations: ['12'] },
  { id: 'diachrony', ar: 'التعاقب / التاريخية', en: 'Diachrony', def: 'النظر في تغير اللغة عبر الزمن.', stations: ['12', '08'] },
  { id: 'phoneme', ar: 'الفونيم', en: 'Phoneme', def: 'وحدة تقابلية في تحليل النظام الصوتي للغة محددة.', stations: ['13'] },
  { id: 'transcription', ar: 'النسخ الصوتي', en: 'Phonetic transcription', def: 'تمثيل للنطق وفق نظام رموز؛ يختلف في مقدار تفصيله.', stations: ['10'] },
  { id: 'generative', ar: 'النحو التوليدي', en: 'Generative grammar', def: 'عائلة من المقاربات تصوغ أنظمة صريحة تحدد الأبنية اللغوية.', stations: ['14'] },
  { id: 'productivity', ar: 'الإنتاجية', en: 'Productivity', def: 'إمكان استعمال نمط لتكوين تعبيرات جديدة.', stations: ['14', '02'] },
  { id: 'compositionality', ar: 'التركيبية', en: 'Compositionality', def: 'ارتباط معنى التعبير بمعاني أجزائه وطريقة تركيبها.', stations: ['20'] },
  { id: 'implicature', ar: 'الاستلزام الحواري', en: 'Conversational implicature', def: 'معنى مستنتج في سياق التواصل يتجاوز بعض ما صُرّح به.', stations: ['19'] },
  { id: 'typology', ar: 'النمطية اللغوية', en: 'Linguistic typology', def: 'مقارنة الخصائص البنائية للغات وحدود تنوعها.', stations: ['18'] },
  { id: 'corpus', ar: 'المدونة اللغوية', en: 'Corpus', def: 'مجموعة مواد لغوية جُمعت وفق معايير لدراستها.', stations: ['23'] },
  { id: 'psycholinguistics', ar: 'اللسانيات النفسية', en: 'Psycholinguistics', def: 'دراسة العمليات النفسية لفهم اللغة وإنتاجها واكتسابها.', stations: ['15'] },
  { id: 'sociolinguistics', ar: 'اللسانيات الاجتماعية', en: 'Sociolinguistics', def: 'دراسة العلاقات بين الأنماط اللغوية والحياة الاجتماعية.', stations: ['17'] },
  { id: 'cognitive', ar: 'اللسانيات المعرفية', en: 'Cognitive linguistics', def: 'اتجاه يربط اللغة بالتصور والقدرات الإدراكية العامة والاستعمال.', stations: ['22'] },
  { id: 'computational', ar: 'اللسانيات الحاسوبية', en: 'Computational linguistics', def: 'دراسة اللغة باستخدام نماذج وأدوات حاسوبية، بما فيها جوانب نظرية وتطبيقية.', stations: ['24', '26'] },
];
