/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: '#F9F7F2',
        ink: '#1A2B3C',
        olive: '#556B2F',
        sand: '#E5DFD3',
        'stone-gray': '#7D7D7D',
        primary: '#041627',
        'primary-container': '#1a2b3c',
        'on-primary': '#ffffff',
        'on-primary-container': '#8192a7',
        secondary: '#625e55',
        'secondary-container': '#e5dfd3',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#666259',
        tertiary: '#0e1900',
        'tertiary-container': '#1e2f00',
        'surface-bright': '#fbf9f4',
        'surface-dim': '#dbdad5',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f5f3ee',
        'surface-container': '#f0eee9',
        'surface-container-high': '#eae8e3',
        'surface-container-highest': '#e4e2dd',
        'on-surface': '#1b1c19',
        'on-surface-variant': '#44474c',
        outline: '#74777d',
        'outline-variant': '#c4c6cd'
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
        sans: ['"Hanken Grotesk"', '"Libre Franklin"', 'system-ui', 'sans-serif'],
        'headline-lg': ['"EB Garamond"', 'serif'],
        'headline-md': ['"EB Garamond"', 'serif'],
        'display-lg': ['"EB Garamond"', 'serif'],
        'body-lg': ['"Hanken Grotesk"', 'sans-serif'],
        'body-md': ['"Hanken Grotesk"', 'sans-serif'],
        'label-md': ['"Hanken Grotesk"', 'sans-serif'],
        caption: ['"Hanken Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
};
