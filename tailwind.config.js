/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', 'sans-serif'],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

