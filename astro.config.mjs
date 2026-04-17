// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ACÁ AGREGAMOS EL DOMINIO PARA QUE EL SITEMAP SEPA LAS URLs ABSOLUTAS
  site: 'https://xn--fumigacines-buenosaires-djc.com.ar/', 
  
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    partytown({
      config: {
        // Esto permite que los eventos de conversión viajen del Web Worker al hilo principal
        forward: ['dataLayer.push'], 
      },
    }), 
    sitemap()
  ]
});