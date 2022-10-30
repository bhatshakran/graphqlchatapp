/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'black',
        primary: '#C0C0C0',
        secondary: '#1877F2',
      },
      fontSize: {
        xxs: '10px',
      },
      screens: {
        sidebar: '250px',
      },
      fontFamily: {
        acworth: ['Acworth'],
        mustica: ['Mustica'],
      },
    },
  },
  plugins: [],
};
