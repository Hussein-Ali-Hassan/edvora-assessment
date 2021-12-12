const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#292929",
        secondary: "#131313",
      },
    },
  },
  plugins: [],
};
