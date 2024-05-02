/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        custompink: '#ebc5dc',
        custombutton : '#5a84a8',
        customchatbg : '#e9e9e9',
        customgpt : '#aac8c0',
        customdall : '#dd91be' ,
        customsmart : '#5a84a8' ,
        customuserbg: '#fff7f7',
        custombotbg:'#aac8c0',
      }
    },
  },
  plugins: [],
}


