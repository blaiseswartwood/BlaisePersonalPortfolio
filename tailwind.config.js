/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#060a12",
        secondary: "#b7c1cf",
        tertiary: "#0e1726",
        "black-100": "#0a1220",
        "black-200": "#07101c",
        "white-100": "#f4f8fb",
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