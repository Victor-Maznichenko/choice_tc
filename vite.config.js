import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import * as path from 'path'

const pathSrc = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader()],
    resolve: {
        alias: [{
            find: '@',
            replacement: pathSrc
        }],
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            sass: {
                additionalData: `@import "@/assets/sass/unitExample"`,
            },
        },
    }
});