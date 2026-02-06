import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'views/scripts',
  base: '/dist/',
  build: {
    outDir: '../../public/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'views/scripts/index.ts'),
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: 'styles[extname]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  server: {
    middlewareMode: true,
    hmr: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'views')
    }
  }
});
