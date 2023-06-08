import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, './index.html'),
                registration: resolve(__dirname, 'src/pages/Registration.html'),
                chat: resolve(__dirname, 'src/pages/Chat.html')
            },
        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/pages'),
        context: {
            greetings: 'start page',
            Registration: 'Registration Page',
            Chat: 'Chat page'
        }
    })],
}) 