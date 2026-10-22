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

for (const page of ['index.html', 'journey/index.html', 'timeline/index.html', 'people/index.html', 'glossary/index.html', 'lab/index.html', 'sources/index.html', 'books/index.html', 'method/index.html', 'full/index.html', '404.html']) {
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

const booksHtml = existsSync(join(dist, 'books/index.html')) ? readFileSync(join(dist, 'books/index.html'), 'utf8') : '';
const bookCount = (booksHtml.match(/class="book"/g) ?? []).length;
ok(bookCount >= 40, `صفحة الكتب تعرض ${bookCount} كتاباً فقط.`);
// كل رابط مجاني يجب أن يكون من نطاق معتمد للملكية العامة أو الوصول المفتوح أو صفحة المؤلف.
const FREE_HOSTS = ['ecampusontario.pressbooks.pub', 'langsci-press.org', 'opendata.uni-halle.de', 'ar.wikisource.org', 'fr.wikisource.org', 'archive.org', 'www.projekt-gutenberg.org', 'www.gutenberg.org', 'gutenberg.org', 'web.stanford.edu'];
for (const m of booksHtml.matchAll(/class="b-free" href="([^"]+)"/g)) {
  ok(FREE_HOSTS.includes(new URL(m[1].replace(/&amp;/g, '&')).hostname), `رابط مجاني من نطاق غير معتمد: ${m[1]}`);
}

// «المحتوى الكامل»: كل المحطات وأقسامها في صفحة واحدة، بلا أزرار ولا طي ولا روابط قفز داخلية.
const fullHtml = existsSync(join(dist, 'full/index.html')) ? readFileSync(join(dist, 'full/index.html'), 'utf8') : '';
const fullMain = fullHtml.split('<main')[1] ?? '';
ok((fullMain.match(/class="f-st /g) ?? []).length === 26, 'صفحة المحتوى الكامل لا تضم المحطات الست والعشرين.');
ok(!/<details|<button|<select|<input/.test(fullMain), 'صفحة المحتوى الكامل تحتوي عناصر تفاعلية أو طياً.');
ok(!/href="#/.test(fullMain), 'صفحة المحتوى الكامل تحتوي روابط قفز داخلية.');
ok((fullMain.match(/class="f-deep"/g) ?? []).length >= 90, 'صفحة المحتوى الكامل ينقصها الشرح الموسع.');
ok((fullMain.match(/class="f-src-cite"/g) ?? []).length === EXPECTED_SOURCES, 'صفحة المحتوى الكامل لا تضم كل المراجع.');

if (errors.length) {
  console.error('فشل الفحص:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`فحص البيانات ناجح: ${slugs.length} محطة، ${srcIds.size} مرجعاً، وكل إحالات المحطات مدرجة، و${bookCount} كتاباً.`);
