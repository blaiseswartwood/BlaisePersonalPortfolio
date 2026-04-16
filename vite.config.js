import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion'],
          ui: ['react-parallax-tilt', 'react-card-flip', 'react-slick', 'react-vertical-timeline-component']
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    minify: 'esbuild'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  server: {
    port: 3000,
    open: true
  }
});