/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        fade: 'fade 0.5s ease-in-out',
      },

      keyframes: theme => ({
        fade:{
          '0%' :{opacity: 0},
          '1000%' :{opacity: 1,}
        },
      }),

    },
  },
  plugins: [],
}
