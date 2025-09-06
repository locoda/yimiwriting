/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        hh15: {
          bg: "#fff7f2",
          fg: "#33272a",
          muted: "#594a4e",
          card: "#fffffe",
          accent: "#e65073",
          accent2: "#f4a7b9",
          accent3: "#9cdba8",
          border: "#e8d8cf",
        },
      },
      fontFamily: {
        serif: ['"Libertinus Serif"', 'Times', ...defaultTheme.fontFamily.serif],
        sans: ['"Libertinus Sans"', 'Noto Sans SC', 'system-ui', ...defaultTheme.fontFamily.sans],
        brand: ['Whisper', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
