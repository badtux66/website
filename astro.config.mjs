// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// If you deploy to a repo named something other than 'website', update `base` to match.
export default defineConfig({
  site: 'https://ekozturk.com',
  integrations: [tailwind(), sitemap()],
});
