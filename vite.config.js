// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    larvel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
});
