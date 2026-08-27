import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bodrumkentkutuphanesi.pages.dev',
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
