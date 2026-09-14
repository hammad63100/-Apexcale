import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/-Apexcale/' : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // expose for live preview
    port: 5173,
    strictPort: true,
    allowedHosts: true, // allow the sandbox preview host
  },
}));
