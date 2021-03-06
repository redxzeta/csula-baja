const colors = require("tailwindcss/colors");
// 747a7b
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Fira Sans", "Menlo", "monospace"],
      body: ["Roboto Mono", "Menlo", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: "#edf365",
      prime: "#ffdd00",
      drime: "#998506 ",
      lighterBlack: "#353535",
      darkWhite: "#f0f0f0",
      secondary: "#272727",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
