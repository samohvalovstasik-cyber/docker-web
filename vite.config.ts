import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/docker-web-project/',      
  root: 'src',
  plugins: [UnoCSS()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        installation: resolve(__dirname, 'src/installation.html'),
        commands: resolve(__dirname, 'src/commands.html'),
        dockerfile: resolve(__dirname, 'src/dockerfile.html'),
        compose: resolve(__dirname, 'src/compose.html'),
        examples: resolve(__dirname, 'src/examples.html'),
        faq: resolve(__dirname, 'src/faq.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        blog: resolve(__dirname, 'src/blog.html'),
      },
    },
  },
})