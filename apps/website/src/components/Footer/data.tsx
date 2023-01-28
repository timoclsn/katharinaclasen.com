import { Instagram, Linkedin } from "lucide-react";

export const data = [
  {
    title: "About",
    link: "/about",
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
        link: "/about#my-clients",
        icon: null,
      },
      {
        title: "My philosophy",
        link: "/about#my-philosophy",
        icon: null,
      },
    ],
  },
  {
    title: "Services",
    link: "/services",
    links: [
      {
        title: "Differentiators",
        link: "/services#differentiators",
        icon: null,
      },
      {
        title: "My services",
        link: "/services#my-services",
        icon: null,
      },
      {
        title: "How I work",
        link: "/services#how-i-work",
        icon: null,
      },
    ],
  },
  {
    title: "Projects",
    link: "/projects",
    links: [
      {
        title: "All Case Studies",
        link: "/projects",
        icon: null,
      },
    ],
  },
  {
    title: "Life-centered Design",
    link: "/lifecentereddesign",
    links: [
      {
        title: "What is Life-centered Design?",
        link: "/lifecentereddesign#what-is-lcd",
        icon: null,
      },
      {
        title: "My Life-centered projects",
        link: "/lifecentereddesign#my-lcd-projects",
        icon: null,
      },
      {
        title: "My Life-centered Design principles",
        link: "/lifecentereddesign#my-lcd-principles",
        icon: null,
      },
      {
        title: "My Life-centered Design journey",
        link: "/lifecentereddesign#my-lcd-journey",
        icon: null,
      },
      {
        title: "How Life-centered Design changes the way we design",
        link: "/lifecentereddesign#how-lcd-changes-how-we-design",
        icon: null,
      },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
    links: [
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
    title: "Legal",
    link: "/imprint",
    links: [
      {
        title: "Imprint",
        link: "/imprint",
        icon: null,
      },
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
        icon: null,
      },
    ],
  },
] as const;
