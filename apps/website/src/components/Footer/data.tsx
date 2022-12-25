import { Instagram, Linkedin } from "lucide-react";

export const data = [
  {
    title: "About",
    links: [
      {
        title: "About me",
        link: "/about",
        icon: null,
      },
      {
        title: "My CV",
        link: "",
        icon: null,
      },
      {
        title: "My clients",
        link: "",
        icon: null,
      },
      {
        title: "My philosophy",
        link: "",
        icon: null,
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Differentiators",
        link: "",
        icon: null,
      },
      {
        title: "My services",
        link: "",
        icon: null,
      },
      {
        title: "How I work",
        link: "",
        icon: null,
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        title: "All Case Studies",
        link: "",
        icon: null,
      },
    ],
  },
  {
    title: "Life-centered Design",
    links: [
      {
        title: "What is Life-centered Design?",
        link: "",
        icon: null,
      },
      {
        title: "My Life-centered projects",
        link: "",
        icon: null,
      },
      {
        title: "My Life-centered Design principles",
        link: "",
        icon: null,
      },
      {
        title: "My Life-centered Design journey",
        link: "",
        icon: null,
      },
      {
        title: "How Life-centered Design changes the way we design",
        link: "",
        icon: null,
      },
    ],
  },
  {
    title: "Kontakt",
    links: [
      {
        title: "Kontakt",
        link: "",
        icon: null,
      },
      {
        title: "Instagram",
        link: "",
        icon: <Instagram />,
      },
      {
        title: "LinkedIn",
        link: "",
        icon: <Linkedin />,
      },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      {
        title: "Impressum",
        link: "",
        icon: null,
      },
      {
        title: "Datenschutz",
        link: "",
        icon: null,
      },
    ],
  },
] as const;
