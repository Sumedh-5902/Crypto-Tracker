/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily : { nunito : "Nunito"},
    },

    colors : {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72", 
      yellow : "#fcd12a"   
    },

    fontSize : {
      sm: "14px", 
      md: "18px", 
      lg: "24px", 
      xl: "32px", 
      base: "16px",
    },

    animation : {
      'spin-slow' : 'spin 3s linear infinite',
      'spin-med' : 'spin 1s linear infinite',
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

