/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: '#FCFBF8', // Duru krem zemin
        ink: '#111827',       // Koyu metin
        olive: '#1B368F',     // Canlı Bodrum Kent Kütüphanesi Logosu Mavisi
        'bodrum-blue': '#1B368F', // Canlı Bodrum Mavisi
        'bodrum-blue-light': '#E8EEFB',
        'bodrum-blue-dark': '#14296D',
        sand: '#EAE5DB',      // Ayırıcı ton
        'stone-gray': '#555A64',
        primary: '#1B368F',
        'primary-container': '#E8EEFB',
        'on-primary': '#ffffff',
        'on-primary-container': '#1B368F',
        secondary: '#374151',
        'secondary-container': '#EAE5DB',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#1F2937',
        tertiary: '#14296D',
        'tertiary-container': '#0D1B48',
        'surface-bright': '#FFFFFF',
        'surface-dim': '#E8E3D9',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#FAF8F4',
        'surface-container': '#F4F1EA',
        'surface-container-high': '#EFECE4',
        'surface-container-highest': '#E5E0D5',
        'on-surface': '#111827',
        'on-surface-variant': '#374151',
        outline: '#6B7280',
        'outline-variant': '#D1D5DB'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.5rem',
        full: '9999px'
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
