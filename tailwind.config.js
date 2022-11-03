/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "var(--sans-font)",
      serif: "var(--serif-font)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
