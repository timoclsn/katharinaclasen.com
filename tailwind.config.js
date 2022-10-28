/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["'Source Serif 4Variable'", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
