/** @type {import('./types/content').ThemeStyle} */
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const theme = require('./content/data/theme.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Google Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        main: theme.main,
        copy: theme.copy,
        'copy-alt': theme.copyAlt,
        primary: theme.primary,
        'primary-interactive': theme.primaryInteractive,
        'on-primary': theme.onPrimary,
        complementary: theme.complementary,
        'complementary-interactive': theme.complementaryInteractive,
        'on-complementary': theme.onComplementary,
        'complementary-alt': theme.complementaryAlt,
        'complementary-alt-interactive': theme.complementaryAltInteractive,
        'on-complementary-alt': theme.onComplementaryAlt,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
