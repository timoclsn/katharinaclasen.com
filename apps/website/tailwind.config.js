/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "var(--sans-font)",
      serif: "var(--serif-font)",
    },
    colors: {
      background: {
        transparent: "transparent",
        primary: "#FFFFFF",
        secondary: "#F9F7F6",
        dark: "#171D2D",
        lilac: "#EDE7F3",
        "pink-candy": "#F7E4F2",
        "red-candy": "#FAEAE9",
        stone: "#F0EEEA",
        mint: "#E8EFE0",
        "ocean-foam": "#E2E5F5",
        salmon: "#FFD9B7",
        sun: "#FFEBB7",
        "blue-extreme": "#343294",
        "lilac-extreme": "#513294",
      },
      contrast: {
        primary: {
          dark: "#171D2D",
          light: "#FFFFFF",
        },
        secondary: {
          dark: "rgba(23, 29, 45, 0.64)",
          light: "rgba(255, 255, 255, 0.8)",
        },
        disabled: {
          dark: "rgba(23, 29, 45, 0.4)",
          light: "rgba(255, 255, 255, 0.48)",
        },
      },
      outline: {
        normal: {
          dark: "rgba(23, 29, 45, 0.24)",
          light: "rgba(255, 255, 255, 0.32)",
        },
        light: {
          dark: "rgba(23, 29, 45, 0.12)",
          light: "rgba(255, 255, 255, 0.16)",
        },
      },
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
