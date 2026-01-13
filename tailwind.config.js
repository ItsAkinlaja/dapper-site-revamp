/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dapper: {
          gold: '#C5A059',
          black: '#000000',
          dark: '#111111',
          gray: '#333333'
        }
      },
    },
  },
  plugins: [],
}
