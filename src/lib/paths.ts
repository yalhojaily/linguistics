import type { Station } from '../data/types';

/** مسار الأساس بلا شرطة ختامية، مثل "/linguistics". */
export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** يبني رابطاً داخلياً تحت مسار الأساس. */
export function url(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}

export function stationUrl(s: Pick<Station, 'slug'>, hash = ''): string {
  return url(`stations/${s.slug}/`) + (hash ? `#${hash}` : '');
}

export const nav = [
  { href: 'journey/', label: 'الرحلة' },
  { href: 'timeline/', label: 'الخط الزمني' },
  { href: 'people/', label: 'الأعلام' },
  { href: 'glossary/', label: 'المعجم' },
  { href: 'lab/', label: 'المختبر' },
  { href: 'books/', label: 'كتب اللسانيات' },
  { href: 'sources/', label: 'المصادر' },
  { href: 'method/', label: 'المنهجية' },
];
