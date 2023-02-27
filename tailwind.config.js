/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./code.js"],
  theme: {
    extend: {},
    colors: {
      blue: "#2874f0",
      yellow: "#ffe500",
      white: "rgb(255 255 255);",
      gray: "#474545",
      sliderBgColor: "#f1f3f6",
      green: "#388e3c"
    },
    fontFamily: {
      roboto: "Roboto,Arial,sans-serif;",
    },
    fontSize: {
      belowBase: "0.95rem",
      xs: "0.75rem",
      sm: "0.875rem",
      lg: "1.125rem",
      threexl: "2rem",
      text3Xl: "1.875rem",
      textBase: "1rem",
    },
    boxShadow: {
      featureGray: "0 1px 1px 0 rgb(0 0 0 / 16%)",
      btnShadow: "1px 1px 5px rgba(0,0,0,0.1)",
      viewAllBtn: "0 2px 4px 0 rgb(0 0 0 / 20%);",
    },
    maxWidth: {
      maxSliderImg: "1680px",
      maxFeatureList: "1280px",
      maxSearchBar: "564px",
      moreProImg: "100%",
    },
    minWidth: {
      minSliderImg: "978px",
    },
    width: {
      full: "100%",
      w20: "80px",
      w3: "12px",
      w16: "64px",
      wSlidingImg: "99.1%",
      featureList: "1280px",
      max: "max-content",
      moreProImg: "99%",
      productContainer: "230px",
      productImg: "200px",
      w20:"6.2rem",
      
    },
    backgroundImage: {
      bestOfElectronics:
        "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90')",
    },
   
  },
  plugins: [],
};
