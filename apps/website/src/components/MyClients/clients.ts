interface Client {
  shortName: string;
  name?: string;
  description: string;
  quote?: {
    text: string;
    author: string;
  };
  website?: string;
  caseStudy?: string;
}

export const clients: Array<Client> = [
  {
    shortName: "Bauder",
    name: "Paul Bauder GmbH & Co. KG",
    description:
      "I am Bauder's UX Designer for their digitization projects, working closely together with different development agencies and experienced inhouse digital experts to deliver great experiences.",
    quote: {
      text: "I am Bauder's UX Designer for their digitization projects, working closely together with different development agencies and experienced inhouse digital experts to deliver great experiences.",
      author: "Sebastian Dehlinger (Senior Product Owner)",
    },
    website: "https://www.bauder.de",
    caseStudy: "/clients/bauder",
  },
  {
    shortName: "KADIA",
    description: "",
  },
  {
    shortName: "bex technologies",
    description: "",
  },
  {
    shortName: "HRlab",
    description: "",
  },
  {
    shortName: "JobNinja",
    description: "",
  },
  {
    shortName: "Bosch Power Tools",
    description: "",
  },
  {
    shortName: "Hörmann",
    description: "",
  },
  {
    shortName: "vialytics",
    description: "",
  },
  {
    shortName: "Craftnote",
    description: "",
  },
  {
    shortName: "DGNB",
    description: "",
  },
  {
    shortName: "homee",
    description: "",
  },
  {
    shortName: "stromee",
    description: "",
  },
  {
    shortName: "eCozy",
    description: "",
  },
  {
    shortName: "STEINEL",
    description: "",
  },
  {
    shortName: "IVU Informationssysteme",
    description: "",
  },
  {
    shortName: "Immersion7",
    description: "",
  },
  {
    shortName: "Codeatelier",
    description: "",
  },
];