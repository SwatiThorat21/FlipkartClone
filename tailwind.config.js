/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    colors: {
      blue: "#2874f0",
      yellow: "#ffe500",
      white: "rgb(255 255 255);",
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
  },
  plugins: [],
};
