// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const baseUrl = process.env.BASE_URL || '';

export default defineConfig({
  site: 'https://gnokit.github.io',
  base: baseUrl,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});