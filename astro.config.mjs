import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lobster.faith',
  integrations: [],
  vite: {
    preview: {
      allowedHosts: ['.railway.app', 'localhost'],
    },
  },
});
