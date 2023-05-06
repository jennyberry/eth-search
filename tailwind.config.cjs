/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,svelte,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      darkblue: "#5368F3",
      white: "#FFFFFF",
    tamarin: "#E86100",
      "orange-dark": "#DF5F3D",
      brightyellow: "#FFC403",
      beige: "#F8F4EE",
      "gray-dark": "#979898",
      gray: "#8492a6",
      "gray-light": "#D9D9D9",
      babyblue: "#CCEAF9",
      indigo: "#00487c",
      "yellow-light": "#F7E8A4",
      vanilla: "#FAF7F1",
      brown:"#702F00"
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      hub: "1024px",
      xl: "1440px",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },

  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold')},
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
        'p': { fontFamily: theme('fontFamily.poppins') },

      })
    }),
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};
