/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Google Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
