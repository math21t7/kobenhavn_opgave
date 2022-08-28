/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
primary:"#DD4A48",
secundary:"#ECB390",
button:"#000000",
body:"#F5EEDC",
background:"#C0D8C0",
hoverone:"#c3e0c3",
hovertwo:"#f2be9d",
darkbg:"#43464b",
darktxt:"#FFFFFF",
    },
    extend: { 
      fontFamily:{
        contrail:"'Contrail One', cursive",
        oxygen:"'Oxygen',sans-serif",
      },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
},
}
