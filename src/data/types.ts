// أنواع بيانات المحتوى. المحتوى نفسه في ملفات البيانات المجاورة، منفصلاً عن مكونات الواجهة.

export type EraId =
  | 'ancient'
  | 'classical'
  | 'nineteenth'
  | 'structure'
  | 'expansion'
  | 'meaning-data'
  | 'neural';

export type TrackId =
  | 'early'
  | 'arabic'
  | 'grammar'
  | 'history'
  | 'sound'
  | 'meaning'
  | 'society'
  | 'data';

/** نوع التحول الذي تمثله المحطة (للتصفية). */
export type ShiftId = 'tradition' | 'method' | 'tool' | 'theory' | 'scope' | 'data';

/**
 * نوع التاريخ المعروض:
 * - period: فترة نشاط أو تبلور تقريبية
 * - publication: سنة نشر عمل محدد
 * - tool: ابتكار أداة أو إتاحة مورد
 * - event: واقعة مؤسسية (تأسيس جمعية مثلاً)
 */
export type DateKind = 'period' | 'publication' | 'tool' | 'event';

export type ImageId =
  | 'img01'
  | 'img02'
  | 'img03'
  | 'img04'
  | 'img05'
  | 'img06'
  | 'img07'
  | 'img08'
  | 'img09'
  | 'img10'
  | 'img11'
  | 'img12';

export type SourceId = `s${string}`;

export interface StationDate {
  label: string;
  kind: DateKind;
  note?: string;
}

export interface Name {
  ar: string;
  /** الاسم بالحروف اللاتينية عند الحاجة، يُعرض باتجاه LTR معزولاً. */
  latin?: string;
}

export interface Work {
  title: string;
  /** العنوان الأصلي إن كان أجنبياً. */
  latin?: string;
  year?: string;
  by?: string;
}

export interface AuthoredExample {
  /** جمل أو كلمات المثال (مؤلفة للتعليم). */
  lines: string[];
  explain: string;
}

/**
 * مواضع المحطة في الرسم العام. القيم سنوات تقريبية لأغراض الرسم فقط،
 * ولا تُعرض للقارئ بوصفها تواريخ؛ التواريخ المعروضة هي `dates`.
 */
export interface ChartSpan {
  from: number;
  to: number;
  /** حدود ضبابية: الفترة تقريبية. */
  fuzzy?: boolean;
  /** يستمر الاتجاه بعد نهاية الشريط (لم يُلغَ). */
  ongoing?: boolean;
  marks?: { year: number; kind: DateKind; label: string }[];
}

export type Relation = 'near' | 'before';

export interface Station {
  num: number;
  /** رقم من خانتين: "05" */
  id: string;
  slug: string;
  title: string;
  short: string;
  era: EraId;
  tracks: TrackId[];
  shift: ShiftId;
  /** وصف نوع المحطة كما في المادة المرجعية. */
  typeLabel: string;
  period: string;
  dates: StationDate[];
  question: string;
  summary: string;
  body: string[];
  changed: string;
  people?: Name[];
  works?: Work[];
  example?: AuthoredExample;
  lab?: 'irab' | 'deixis' | 'corpus';
  /** رسم توضيحي ثابت خاص بالمحطة. */
  figure?: 'scope' | 'levels';
  /** سؤال للتأمل، مستخلص من مادة المحطة؛ ليس تفاعلاً. */
  reflect?: string;
  limits: string[];
  sources: SourceId[];
  related: { id: string; rel: Relation; note?: string }[];
  image?: ImageId;
  /** صورة مشتركة تُعرض مصغرة وترتبط بمحطة أخرى. */
  sharedImage?: { image: ImageId; with: string };
  portrait?: ImageId;
  journey?: boolean;
  chart: ChartSpan;
}
