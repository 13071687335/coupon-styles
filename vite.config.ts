import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assetsCDN',
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: [
      {
        // @/xxxx => src/xxxx
        find: /\@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
  plugins: [vue(), vueJsx()],
})
