/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        custompink: '#ebc5dc',
        custombutton : '#5a84a8',
      }
    },
  },
  plugins: [],
}


