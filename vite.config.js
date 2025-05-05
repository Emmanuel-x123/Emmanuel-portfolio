export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // Helps with debugging
    postcss: './postcss.config.js'
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets', // Ensures CSS goes to right folder
    cssCodeSplit: true // Keep this enabled
  }
})