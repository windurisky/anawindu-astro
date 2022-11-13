/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Vollkorn'],
        cursive: ['Great Vibes'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'champagne-pink': {
        50: '#fffff3',
        100: '#fff7e9',
        200: '#ffeddf',
        300: '#fce3d5',
        400: '#f2d9cb',
        500: '#e8cfc1',
        600: '#dec5b7',
        700: '#d4bbad',
        800: '#cab1a3',
        900: '#c0a799',
      },
      'cafe-noir': {
        50: '#847059',
        100: '#7a664f',
        200: '#705c45',
        300: '#66523b',
        400: '#5c4831',
        500: '#523e27',
        600: '#48341d',
        700: '#3e2a13',
        800: '#342009',
        900: '#2a1600',
      },
      'cinnamon-satin': {
        50: '#e797a8',
        100: '#dd8d9e',
        200: '#d38394',
        300: '#c9798a',
        400: '#bf6f80',
        500: '#b56576',
        600: '#ab5b6c',
        700: '#a15162',
        800: '#974758',
        900: '#8d3d4e',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
