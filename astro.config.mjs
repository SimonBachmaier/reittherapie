import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

const site = 'https://reittherapie-bachmaier.de';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  markdown: {
    // The old site rendered "..." and quotes literally.
    processor: satteri({ features: { smartPunctuation: false } }),
  },
  redirects: {
    '/leistungen': '/',
    '/pferde': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => ![`${site}/leistungen/`, `${site}/pferde/`].includes(page),
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // The Bootstrap 4 based theme predates modern Sass and triggers these deprecations.
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div', 'if-function'],
        },
      },
    },
  },
});
