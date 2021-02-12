const colors = require("tailwindcss/colors");

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
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
