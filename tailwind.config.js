/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        myWhite: "#FFFFFF",
        myLightGreen: "#A2AA8E",
        myDarkest: "#333333",
        myBackground: "#37483E",
        myHighLight: "#FF6600",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
