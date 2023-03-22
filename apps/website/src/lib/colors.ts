export const backgroundColorsList = [
  "primary",
  "secondary",
  "dark",
  "lilac",
  "pinkCandy",
  "redCandy",
  "stone",
  "mint",
  "oceanFoam",
  "salmon",
  "sun",
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

export const backgroundColorsValueMap: Record<
  keyof typeof backgroundColorsMap,
  string
> = {
  primary: "#FFFFFF",
  secondary: "#F9F7F6",
  dark: "#171D2D",
  lilac: "#EDE7F3",
  pinkCandy: "#F7E4F2",
  redCandy: "#FAEAE9",
  stone: "#F0EEEA",
  mint: "#E8EFE0",
  oceanFoam: "#E2E5F5",
  salmon: "#FFD9B7",
  sun: "#FFEBB7",
  blueExtreme: "#343294",
  lilacExtreme: "#513294",
} as const;

export type BackgroundColor = keyof typeof backgroundColorsMap;

export const colorsList = ["light", "dark"] as const;

export type Color = (typeof colorsList)[number];
