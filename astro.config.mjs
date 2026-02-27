import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agent-church-production.up.railway.app',
  integrations: [],
  vite: {
    preview: {
      allowedHosts: ['.railway.app', 'localhost'],
    },
  },
});
