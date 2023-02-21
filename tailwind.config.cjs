/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      blue: "#5368F3",
      orange: "#DF5F3D",
      yellow: "#FFC403",
      beige: "F8F4EE",
      "gray-dark": "#979898",
      gray: "#8492a6",
      "gray-light": "#D9D9D9",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
