import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Critical for Vercel
  build: {
    outDir: 'dist',  // Vite will put files in Front-end/dist
    emptyOutDir: true
  }
})