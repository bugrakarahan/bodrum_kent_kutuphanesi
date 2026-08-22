/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: '#FAF8F5', // Açık krem / çok açık toprak rengi zemin
        ink: '#111827',       // Siyah / koyu mürekkep
        olive: '#005B94',     // Yeşil yerine Bodrum mavisi
        'bodrum-blue': '#005B94', // Bodrum mavisi
        'bodrum-blue-light': '#E6F0F7',
        sand: '#E8E3D9',      // Yumuşak açık toprak / sınır tonu
        'stone-gray': '#6B7280',
        primary: '#005B94',
        'primary-container': '#111827',
        'on-primary': '#ffffff',
        'on-primary-container': '#E6F0F7',
        secondary: '#374151',
        'secondary-container': '#E8E3D9',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#1F2937',
        tertiary: '#003A61',
        'tertiary-container': '#002640',
        'surface-bright': '#FCFAF7',
        'surface-dim': '#E8E3D9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#FAF8F5',
        'surface-container': '#F5F2EC',
        'surface-container-high': '#EFEBE3',
        'surface-container-highest': '#E8E3D9',
        'on-surface': '#111827',
        'on-surface-variant': '#374151',
        outline: '#6B7280',
        'outline-variant': '#D1D5DB'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.5rem',
        full: '9999px'
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        gutter: '24px',
        'container-max': '1280px',
        base: '8px'
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"EB Garamond"', 'Georgia', 'serif'],
        'headline-lg': ['"EB Garamond"', 'serif'],
        'headline-md': ['"EB Garamond"', 'serif'],
        'display-lg': ['"EB Garamond"', 'serif'],
        'body-lg': ['"EB Garamond"', 'serif'],
        'body-md': ['"EB Garamond"', 'serif'],
        'label-md': ['"EB Garamond"', 'serif'],
        caption: ['"EB Garamond"', 'serif']
      }
    }
  },
  plugins: []
};
