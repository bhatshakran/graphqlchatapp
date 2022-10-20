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
      fontFamily: {
        acworth: ['Acworth'],
        vistol: ['Vistol'],
      },
    },
  },
  plugins: [],
};
