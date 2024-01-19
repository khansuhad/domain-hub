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
      },
      colors: {
        firstColor: "#DDF2FD", // background color
        secondColor: "#9BBEC8", // nav + footer color
        thirdColor: "#427D9D", // button normal color
        fourthColor: "#164863", // button hover color
      },
    },
  },
  plugins: [require("daisyui")],
};
