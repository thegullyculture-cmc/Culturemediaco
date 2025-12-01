import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/culture-media-co/', // GitHub Pages deployment path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});