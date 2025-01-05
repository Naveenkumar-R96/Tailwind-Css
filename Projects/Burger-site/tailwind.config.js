/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":'480px'
      },
      fontFamily:{
        "Roboto":['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

