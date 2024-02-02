// @ts-nocheck
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        instrumentSans: "Instrument Sans, sans-serif"
      },
      colors: {
        firstColor: "#0E214E", // background color
        secondColor: "#1DACFF", // nav + footer color
        thirdColor: "#6788F8", // button normal color
        fourthColor: "#202A7C", // button hover color
        fifthColor: "#010B3C", // bg for dark mode and text color for light mode
        sixthColor: "#F5F7F8", // text color for dark mode
      },
    },
  },
  plugins: [require("daisyui")],
};
