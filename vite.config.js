import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/a/',
  plugins: [react()],
  build: {
    assetsDir: 'static',
    brotliSize: false, // not supported in StackBlitz
  },
})
