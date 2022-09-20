const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      red: colors.rose,
      blue: colors.cyan,
      orange: colors.orange,
    },
    extend: {
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      }
    },
  },
  plugins: [],
}
