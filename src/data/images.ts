import type { ImageMetadata } from 'astro';
import type { ImageId } from './types';

import img01 from '../assets/images/01-beginnings-scribe.jpg';
import img02 from '../assets/images/02-arabic-tradition-library.jpg';
import img03 from '../assets/images/03-comparison-tree.jpg';
import img04 from '../assets/images/04-structure-forms.jpg';
import img05 from '../assets/images/05-society-courtyard.jpg';
import img06 from '../assets/images/06-corpora-computing.jpg';
import img07 from '../assets/images/07-portrait-panini.jpg';
import img08 from '../assets/images/08-portrait-sibawayh.jpg';
import img09 from '../assets/images/09-portrait-jurjani.jpg';
import img10 from '../assets/images/10-portrait-saussure.jpg';
import img11 from '../assets/images/11-portrait-chomsky.jpg';
import img12 from '../assets/images/12-portrait-labov.jpg';

export interface SiteImage {
  id: ImageId;
  /** العنوان كما سُمّيت الصورة عند إنشائها. */
  title: string;
  /** اسم الملف الأصلي المحفوظ في originals/ */
  original: string;
  src: ImageMetadata;
  kind: 'scene' | 'portrait';
  alt: string;
  /** تعليق مرئي يوضح طبيعة الصورة. */
  caption: string;
  /** موضع التركيز عند القص (object-position). */
  focus: string;
}

const generatedNote = 'عمل فني مولّد؛ مشهد رمزي وليس وثيقة تاريخية.';

export const images: Record<ImageId, SiteImage> = {
  img01: {
    id: 'img01',
    title: '01 — بدايات دراسة اللغة',
    original: 'The_Scribe_s_Clay_Archive-1.png',
    src: img01,
    kind: 'scene',
    alt: 'لوحة مائية لكاتب ملتحٍ يتأمل لوحاً طينياً بين يديه، وأمامه ألواح أخرى وأقلام قصب، وخلفه رفوف ألواح ونافذة مقوسة تطل على مدينة ونهر.',
    caption: `كاتب مع ألواح طينية. ${generatedNote}`,
    focus: '28% 40%',
  },
  img02: {
    id: 'img02',
    title: '02 — التراث اللغوي العربي',
    original: 'A_Medieval_Scholar_Compares_Manuscripts-2.png',
    src: img02,
    kind: 'scene',
    alt: 'لوحة مائية لعالم بعمامة ورداء أزرق يجلس على وسادة ويراجع مخطوطين مفتوحين على منضدة، في مكتبة تملؤها الرفوف والفوانيس والزخارف.',
    caption: 'عالم يراجع مخطوطات في مكتبة. مشهد عام تخيّلي، وليس صورة لسيبويه أو لمكتبة محددة.',
    focus: '50% 45%',
  },
  img03: {
    id: 'img03',
    title: '03 — مقارنة اللغات',
    original: 'Philologist_beneath_a_branching_tree-3.png',
    src: img03,
    kind: 'scene',
    alt: 'لوحة مائية لباحث يقرأ ورقة إلى مكتب مزدحم بالكتب والأوراق، وعلى الجدار خلفه رسم كبير لشجرة متفرعة الأغصان.',
    caption: 'الشجرة في الصورة استعارة بصرية، وليست مخططاً علمياً لأسر اللغات.',
    focus: '38% 40%',
  },
  img04: {
    id: 'img04',
    title: '04 — البنية والقواعد',
    original: 'Branching_Forms_Above_an_Open_Book-4.png',
    src: img04,
    kind: 'scene',
    alt: 'كتاب مفتوح على طاولة في قاعة درس قديمة، تعلوه أشكال هندسية زرقاء ونحاسية معلقة ومتصلة بخيوط رفيعة.',
    caption: 'الأشكال المعلقة فوق الكتاب رمزية، وليست شجرة تركيبية صحيحة.',
    focus: '50% 40%',
  },
  img05: {
    id: 'img05',
    title: '05 — اللغة في المجتمع',
    original: 'Language_in_the_Courtyard-5.png',
    src: img05,
    kind: 'scene',
    alt: 'لوحة مائية لثلاثة أشخاص يتحاورون حول طاولة في فناء مشمس: امرأة تدوّن ملاحظات، ورجل مسن يتحدث بيديه، ورجل يصغي، وعلى الطاولة جهاز تسجيل صغير وأكواب.',
    caption: `حوار في فناء، وجهاز تسجيل على الطاولة. ${generatedNote}`,
    focus: '50% 42%',
  },
  img06: {
    id: 'img06',
    title: '06 — المدونات والحوسبة',
    original: 'From_Archives_to_Algorithms-6.png',
    src: img06,
    kind: 'scene',
    alt: 'مكتب عليه كتاب مفتوح وبطاقات فهرسة ورقية تتطاير متحولة إلى مربعات ملونة تتجه نحو شاشة حاسوب.',
    caption: 'التحول من الأوراق إلى البيانات مشهد رمزي.',
    focus: '50% 55%',
  },
  img07: {
    id: 'img07',
    title: '07 — بانيني، بورتريه تخيّلي',
    original: 'Imagined_Panini_with_Palm-Leaf_Manuscripts-7.png',
    src: img07,
    kind: 'portrait',
    alt: 'بورتريه مائي لرجل أشيب اللحية يرتدي ثوباً أبيض بحواف زرقاء، ويحمل حزمة من الأوراق المستطيلة.',
    caption: 'تصوّر فني تخيّلي لبانيني.',
    focus: '50% 25%',
  },
  img08: {
    id: 'img08',
    title: '08 — سيبويه، بورتريه تخيّلي',
    original: 'Sibawayh__Scholar_of_Arabic_Linguistics-8.png',
    src: img08,
    kind: 'portrait',
    alt: 'بورتريه مائي لرجل شاب بعمامة بيضاء ورداء أزرق يمسك كتاباً مفتوحاً، وخلفه مدينة على نهر.',
    caption: 'تصوّر فني تخيّلي لسيبويه.',
    focus: '50% 22%',
  },
  img09: {
    id: 'img09',
    title: '09 — عبد القاهر الجرجاني، بورتريه تخيّلي',
    original: 'Abd_al-Qahir_al-Jurjani_Scholar_of_Rhetoric-9.png',
    src: img09,
    kind: 'portrait',
    alt: 'بورتريه مائي لرجل بعمامة بيضاء ولحية رمادية يضع يده على كتاب مغلق، وبجانبه أدوات نحاسية.',
    caption: 'تصوّر فني تخيّلي لعبد القاهر الجرجاني.',
    focus: '50% 25%',
  },
  img10: {
    id: 'img10',
    title: '10 — فرديناند دي سوسير',
    original: 'Ferdinand_de_Saussure_in_sepia-10.png',
    src: img10,
    kind: 'portrait',
    alt: 'بورتريه بالحبر والألوان المائية لرجل بشارب كثيف يرتدي بدلة داكنة وربطة عنق.',
    caption: 'بورتريه فني مولّد لفرديناند دي سوسير، وليس صورة أرشيفية.',
    focus: '50% 30%',
  },
  img11: {
    id: 'img11',
    title: '11 — نعوم تشومسكي',
    original: 'Noam_Chomsky_in_Ink_and_Watercolor-11.png',
    src: img11,
    kind: 'portrait',
    alt: 'بورتريه بالحبر والألوان المائية لرجل مسن بشعر أبيض ونظارة، يرتدي كنزة زرقاء داكنة.',
    caption: 'بورتريه فني مولّد لنعوم تشومسكي، وليس صورة أرشيفية.',
    focus: '50% 30%',
  },
  img12: {
    id: 'img12',
    title: '12 — وليام لابوف',
    original: 'William_Labov_linguistics_scholar-12.png',
    src: img12,
    kind: 'portrait',
    alt: 'بورتريه مائي لرجل مسن بنظارة يرتدي سترة داكنة ويحمل دفتراً صغيراً، وخلفه أشكال لأشخاص يتحادثون.',
    caption: 'بورتريه فني مولّد لوليام لابوف، وليس صورة أرشيفية.',
    focus: '50% 25%',
  },
};
