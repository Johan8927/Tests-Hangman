import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { chromium } from 'playwright';


export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
            reporter : ['text', 'json' , 'html']

        },
    },


    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                data: resolve(__dirname, 'data/index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});



