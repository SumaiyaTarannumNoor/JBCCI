/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#18069e',
        secondary: '#e6aa05',
      },
    },
  },
  plugins: [],
};