/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2.25rem",
      "5xl": "2.75rem",
      "6xl": "3.75rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
    },

    extend: {
      fontFamily: {
        light: ["light", "sans-serif"],
        regular: ["regular", "sans-serif"],
        medium: ["medium", "sans-serif"],
        bold: ["bold", "sans-serif"],
        thin: ["thin", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 80s linear infinite",
      },
      backgroundImage: {
        "hover-gradient":
          "linear-gradient(94deg, #e992ff -10.21%, #efadff 78.93%)",
        // "title-gradient":
        //   "linear-gradient(to right, #cfd2e0, #dde0ed, #dcdee7);",
        "title-gradient": "linear-gradient(180deg, #d5bbf0, #dad6ff)",
        "contact-title":
          "linear-gradient(to bottom,  #CFEEFF , #EFADFF 72.92%)",
        "section-subtitle":
          "linear-gradient(151deg, #FFF 30.38%, rgba(255, 255, 255, 0.00) 133.25%)",
      },

      colors: {
        pink: "#CFEEFF",
        pink2: "#EFADFF",
      },
      borderWidth: {
        1: "1px",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
