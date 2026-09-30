import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({ prefix: 'un-' }),
  ],
  theme: {
    breakpoints: {
      sm: '641px',
      md: '769px',
      lg: '1025px',
      xl: '1367px',
    },
    colors: {
      primary: '#5E7CE0',
      'primary-dark': '#3D5BC4',
      secondary: '#3DBE60',
      dark: '#1a1a2e',
      'dark-light': '#25253d',
      light: '#f8f9fa',
      accent: '#0db7ed',
    },
  },
  shortcuts: [
    ['container-x', 'max-w-7xl mx-auto px-4'],
    ['flex-center', 'flex justify-center items-center'],
    ['btn', 'inline-block px-5 py-2 rounded-md font-medium cursor-pointer transition-colors duration-200'],
    ['btn-primary', 'btn bg-primary text-white hover:bg-primary-dark'],
    ['btn-outline', 'btn border-2 border-primary text-primary hover:bg-primary hover:text-white'],
    ['card', 'bg-white rounded-lg shadow-md p-6'],
    ['card-hover', 'card hover:shadow-xl transition-shadow duration-300'],
    ['section-title', 'text-2xl md:text-3xl font-bold mb-4 text-dark'],
    ['link', 'text-primary hover:underline'],
    ['nav-link', 'px-3 py-2 rounded hover:bg-primary hover:text-white transition-colors'],
  ],
})