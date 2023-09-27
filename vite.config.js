import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
  server: {
    proxy: {
      '/api': 'https://test.mahnuel.com/api/auth', // Replace with your API server URL
    },
  },
});
