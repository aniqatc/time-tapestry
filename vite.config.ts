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
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Time Tapestry',
        short_name: 'Time Tapestry',
        description: 'A calendar for birthdays, notable dates, and astronomy.',
        theme_color: '#f4f7fb',
        background_color: '#f4f7fb',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        categories: ['calendar', 'lifestyle'],
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
