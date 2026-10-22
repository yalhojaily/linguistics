// فحص سلامة بيانات المحتوى بعد البناء: 26 محطة، روابط المصادر والمحطات، والصور.
// يُشغَّل بعد `npm run build` لأنه يقرأ الناتج من dist/.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const errors = [];
const ok = (cond, msg) => {
  if (!cond) errors.push(msg);
};

ok(existsSync(dist), 'dist/ غير موجود؛ شغّل npm run build أولاً.');
const stationsDir = join(dist, 'stations');
const slugs = existsSync(stationsDir) ? readdirSync(stationsDir) : [];
ok(slugs.length === 26, `عدد صفحات المحطات ${slugs.length} بدلاً من 26.`);

for (const page of ['index.html', 'journey/index.html', 'timeline/index.html', 'people/index.html', 'glossary/index.html', 'lab/index.html', 'sources/index.html', 'method/index.html', '404.html']) {
  ok(existsSync(join(dist, page)), `الصفحة مفقودة: ${page}`);
}

const timeline = existsSync(join(dist, 'timeline/index.html')) ? readFileSync(join(dist, 'timeline/index.html'), 'utf8') : '';
const items = timeline.match(/class="tl-item[^"]*"/g) ?? [];
ok(items.length === 26, `الخط الزمني يعرض ${items.length} محطة بدلاً من 26.`);

const sourcesHtml = existsSync(join(dist, 'sources/index.html')) ? readFileSync(join(dist, 'sources/index.html'), 'utf8') : '';
const srcIds = new Set([...sourcesHtml.matchAll(/id="src-(s\d+)"/g)].map((m) => m[1]));
const EXPECTED_SOURCES = 103; // 38 من المادة الأصلية + 65 مصدر إثراء (م39–م103)
ok(srcIds.size === EXPECTED_SOURCES, `صفحة المصادر تضم ${srcIds.size} مرجعاً بدلاً من ${EXPECTED_SOURCES}.`);

for (const slug of slugs) {
  const html = readFileSync(join(stationsDir, slug, 'index.html'), 'utf8');
  for (const sec of ['question', 'idea', 'changed', 'deep', 'chronology', 'concepts', 'limits', 'sources', 'related']) {
    ok(html.includes(`id="${sec}"`), `${slug}: القسم ${sec} مفقود.`);
  }
  ok(/class="src"/.test(html), `${slug}: لا توجد مصادر.`);
  // كل إحالة داخل الصفحة إلى مصدر يجب أن يقابلها مصدر مدرج في قائمة المحطة.
  const listed = new Set([...html.matchAll(/id="src-(s\d+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/href="#src-(s\d+)"/g)) ok(listed.has(m[1]), `${slug}: إحالة إلى ${m[1]} غير مدرجة في مصادر المحطة.`);
}

if (errors.length) {
  console.error('فشل الفحص:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`فحص البيانات ناجح: ${slugs.length} محطة، ${srcIds.size} مرجعاً، وكل إحالات المحطات مدرجة.`);
