// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["BebasNeue-Regular", ...defaultTheme.fontFamily.sans],
        harmony: ["HarmonyOS Sans", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: {
          stroke: "#FFFFFF",
          "background-start": "#1F2551",
          "background-end": "#120B4F",
          active: "#FF6262",
        },
      },

      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        slideUp: "slideUp 0.75s ease-out forwards",
        slideDown: "slideDown 1.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
