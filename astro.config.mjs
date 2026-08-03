// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xn--fumigacines-buenosaires-djc.com.ar', 
  trailingSlash: 'always', 
  build: {
    format: 'directory',
    assets: 'static'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap() // Se removió Partytown
  ]
});