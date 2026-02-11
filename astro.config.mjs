// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// https://astro.build/config
const baseUrl = process.env.BASE_URL || '';

/** @type {import('vite').Plugin} */
const nojekyllPlugin = {
  name: 'nojekyll',
  closeBundle() {
    // Create .nojekyll file to disable Jekyll processing on GitHub Pages
    // This is needed because Jekyll ignores files starting with underscore (_)
    // and Astro outputs assets to an _astro/ directory
    const nojekyllPath = resolve('./dist/.nojekyll');
    writeFileSync(nojekyllPath, '');
    console.log('.nojekyll file created in dist/');
  }
};

export default defineConfig({
  site: 'https://gnokit.github.io',
  base: baseUrl,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss(), nojekyllPlugin]
  }
});