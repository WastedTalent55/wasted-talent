import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wastedtalent55.github.io',
  base: '/wasted-talent',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },

});