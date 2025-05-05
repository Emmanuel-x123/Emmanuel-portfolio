import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: './', // Explicitly set root directory
  build: {
    outDir: 'dist', // Ensure this matches Netlify's publish directory
    rollupOptions: {
      input: {
        main: './index.html' // Explicit entry point
      }
    }
  }
})
