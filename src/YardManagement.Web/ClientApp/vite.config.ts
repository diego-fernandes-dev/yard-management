import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
        port: 3000,
        strictPort: true,
        proxy: {
          '/api': {
            target: 'https://localhost:7298',
            changeOrigin: true,
            secure: true
          }
        }
    },
    plugins: [react(), mkcert()],
})