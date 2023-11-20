/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        myWhite: "#FFFFFF",
        myLightGreen: "#D2C8A4",
        myDarkest: "#444141",
        myBackground: "#191616",
        myHighLight: "#FC4850",
      },
      fontFamily: {
        poppins: ["Broadway"],
        sansita: ["Sansita"],
      },
    },
  },
  plugins: [],
};
