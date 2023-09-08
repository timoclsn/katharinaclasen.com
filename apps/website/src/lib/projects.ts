type Context = (typeof contexts)[number];

export const contexts = [
  "selfEmployment",
  "sideproject",
  "nonProfit",
  "lecture",
  "employment",
] as const;

export const context = (context: Context, client: string) => {
  switch (context) {
    case "selfEmployment":
      return client;
    case "sideproject":
      return "Sideproject";
    case "nonProfit":
      return `${client} (Profit)`;
    case "lecture":
      return `${client} (Lecture)`;
    case "employment":
      return `${client} (Employment)`;
    default:
      return client;
  }
};
