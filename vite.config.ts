import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/automatehq/', // GitHub Pages base path
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ['automatehq.onrender.com']
  },
  // resolve: {
  //   alias: {
  //     'react': 'react',
  //     'react-dom': 'react-dom'
  //   }
  // },
  build: {
    sourcemap: true,
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
