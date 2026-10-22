// تكامل بعد البناء: يعزل نطاقات الأرقام (مثل 1926–1939 أو 1964 / 1966) باتجاه LTR
// حتى لا تنعكس داخل النص العربي. يعمل على نصوص HTML فقط، ويتجاوز title وscript وstyle وsvg وoption وtextarea.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RANGE = /(?<![\d\w])(\d{1,4}(?:\s?[–\-\/]\s?\d{1,4})+)(?![\d\w])/g;
const HAS_RANGE = new RegExp(RANGE.source);
const SKIP = /<(title|script|style|svg|option|textarea)\b[\s\S]*?<\/\1>/gi;

export function isolateRanges(html) {
  const parts = [];
  let last = 0;
  for (const m of html.matchAll(SKIP)) {
    parts.push([html.slice(last, m.index), true], [m[0], false]);
    last = m.index + m[0].length;
  }
  parts.push([html.slice(last), true]);
  return parts
    .map(([chunk, edit]) =>
      edit
        ? chunk.replace(/>([^<]+)</g, (all, text) =>
            HAS_RANGE.test(text) ? '>' + text.replace(RANGE, '<span dir="ltr" class="num-range">$1</span>') + '<' : all,
          )
        : chunk,
    )
    .join('');
}

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

export default function bidiNumbers() {
  return {
    name: 'bidi-numbers',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let n = 0;
        for await (const f of htmlFiles(fileURLToPath(dir))) {
          const src = await readFile(f, 'utf8');
          const out = isolateRanges(src);
          if (out !== src) {
            await writeFile(f, out);
            n++;
          }
        }
        logger.info(`عزل نطاقات الأرقام في ${n} صفحة.`);
      },
    },
  };
}
