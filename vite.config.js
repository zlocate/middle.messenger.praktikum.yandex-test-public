import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'build'),
        rollupOptions: {
            input: resolve(__dirname, './index.html'),
        }
    },
}) 