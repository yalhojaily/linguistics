// @ts-check
import { defineConfig } from 'astro/config';
import bidiNumbers from './integrations/bidi-numbers.mjs';

// موقع مشروع على GitHub Pages: https://yalhojaily.github.io/linguistics/
// إن أُضيف نطاق مخصص لاحقاً: غيّر `site` إلى النطاق، واحذف `base`.
export default defineConfig({
  site: 'https://yalhojaily.github.io',
  base: '/linguistics',
  trailingSlash: 'always',
  integrations: [bidiNumbers()],
  build: { format: 'directory' },
  image: {
    responsiveStyles: false,
  },
});
