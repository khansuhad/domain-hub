/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "firstColor": "#DDF2FD",
        "secondColor": "#9BBEC8",
        "thirdColor": "#427D9D",
        "fourthColor": "#164863",
       
      }
    },
  },
  plugins: [require("daisyui")],
}

