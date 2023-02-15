/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "3.5rem",
      "5xl": "4.5rem",
    },
    fontFamily: {
      "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
      "satoshi-semibold": ["Satoshi-Medium", "sans-serif"],
      "satoshi-light": ["Satoshi-Light", "sans-serif"],
      figree: ["Figree", "sans-serif"],
    },
    colors: {
      transparent: "rgba(0,0,0,0)",
      white: "#FFFFFF",
      danger: "rgb(255,0,0)",
      gray: "#DFDFDF",
      yellow: "#f9ab00",
      blue: "#4353ff",
      dark: "#131313",
      activeGreen: "#16914e",
      black: "#000000",
    },

    animation: {
      marquee: "marquee 35s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
