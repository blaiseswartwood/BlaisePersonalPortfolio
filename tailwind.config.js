/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        "black-100": "rgb(var(--color-black-100) / <alpha-value>)",
        "black-200": "rgb(var(--color-black-200) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
        "white-100": "rgb(var(--color-white-100) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Poppins'", "sans-serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.darken-85': { 'filter': 'brightness(85%)' },
        '.darken-75': { 'filter': 'brightness(75%)' },
      });
    },
  ],
};