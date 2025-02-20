import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '',
  server: {
    port: 3000,
    host: true,
    allowedHosts: ['.ngrok-free.app'],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [],
      manifest: {
        name: '',
        short_name: '',
        description: '',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    tailwindcss(),
  ],
});
