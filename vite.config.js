import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Orçamento VIAGÁS',
        short_name: 'Orçamento',
        description: 'Gerador de orçamentos VIAGÁS',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/icon/header_coty_ico.ico',
            sizes: '192x192',
            type: 'image/x-icon',
          },
          {
            src: '/images/icon/header_coty_ico.ico',
            sizes: '512x512',
            type: 'image/x-icon',
          }
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
    }),
  ],
});
