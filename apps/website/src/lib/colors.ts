export const backgroundColorsList = [
  "primary",
  "secondary",
  "dark",
  'lilac',
  "pinkCandy",
  "redCandy",
  "stone",
  "mint",
  'oceanFoam',
  "salmon",
  'sun',
  "blueExtreme",
  "lilacExtreme",
] as const;

export const backgroundColorsMap = {
  primary: "bg-background-primary",
  secondary: "bg-background-secondary",
  dark: "bg-background-dark",
  lilac: "bg-background-lilac",
  pinkCandy: "bg-background-pink-candy",
  redCandy: "bg-background-red-candy",
  stone: "bg-background-stone",
  mint: "bg-background-mint",
  oceanFoam: "bg-background-ocean-foam",
  salmon: "bg-background-salmon",
  sun: "bg-background-sun",
  blueExtreme: "bg-background-blue-extreme",
  lilacExtreme: "bg-background-lilac-extreme",
} as const;

export type BackgroundColor = keyof typeof backgroundColorsMap;