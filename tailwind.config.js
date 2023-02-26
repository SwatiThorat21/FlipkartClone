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
    },
    boxShadow: {
      featureGray: "0 1px 1px 0 rgb(0 0 0 / 16%)",
      btnShadow: "1px 1px 5px rgba(0,0,0,0.1)",
    },
    maxWidth: {
      maxSliderImg: "1680px",
      maxFeatureList: "1280px",
      maxSearchBar: "564px"
    },
    minWidth: {
      minSliderImg: "978px",
    },
    width: {
      full: "100%",
      w20: "80px",
      w3: "12px",
      w16: "64px",
      wSlidingImg: "97.1%",
      featureList: "1280px",
      max: "max-content"

    }
  },
  plugins: [],
};
