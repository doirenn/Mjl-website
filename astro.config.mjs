// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Host used only to build canonical URLs and the sitemap.
// This does not attach a domain or change DNS.
const site = process.env.SITE_URL ?? 'https://mjl-website.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
