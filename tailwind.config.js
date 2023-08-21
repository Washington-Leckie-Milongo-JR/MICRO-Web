/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      color:{
        "color-primary":"black",
      }
    },
    container:{
      center: true,
      padding:{
        default: '20px',
        md:"50px"

      }
    }
  },
  plugins: [],
}

