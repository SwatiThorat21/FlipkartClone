/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./code.js"],
  theme: {
    extend: {},
    colors: {
      blue: "#2874f0",
      yellow: "#ffe500",
      white: "rgb(255 255 255);",
      gray: "#474545",
    },
    fontFamily: {
      roboto: "Roboto,Arial,sans-serif;",
    },
    fontSize: {
      belowBase: "0.95rem",
      xs: "0.75rem",
      sm: "0.875rem",
      lg: "1.125rem",
    },
    boxShadow: {
      gray: "0 1px 1px 0 rgb(0 0 0 / 16%)",
      btnShadow: "1px 1px 5px rgba(0,0,0,0.1)",
    },
  },
  plugins: [],
};
