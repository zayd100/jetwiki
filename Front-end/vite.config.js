import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Required for Vercel
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your local backend (dev only)
        changeOrigin: true,
      }
    }
  },
});