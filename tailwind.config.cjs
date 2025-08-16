/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
        colors: {
        hh15: {
          bg: "#faeee7",
          fg: "#33272a",
          muted: "#594a4e",
          card: "#fffffe",
          accent: "#ff8ba7",
          accent2: "#ffc6c7",
          accent3: "#c3f0ca",
          border: "#f1e5de",
        },
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
