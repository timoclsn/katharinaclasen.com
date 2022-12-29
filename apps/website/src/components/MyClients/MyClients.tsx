import { Files, Link2, LucideIcon } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";

interface Client {
  shortName: string;
  name?: string;
  description: string;
  quote?: {
    text: string;
    author: string;
  };
  buttons?: Array<{
    style: "solid" | "outline" | "text";
    icon: LucideIcon;
    label: string;
    link: string;
  }>;
}

const clients: Array<Client> = [
  {
    shortName: "Bauder",
    name: "Paul Bauder GmbH & Co. KG",
    description:
      "I am Bauder's UX Designer for their digitization projects, working closely together with different development agencies and experienced inhouse digital experts to deliver great experiences.",
    quote: {
      text: "I am Bauder's UX Designer for their digitization projects, working closely together with different development agencies and experienced inhouse digital experts to deliver great experiences.",
      author: "Sebastian Dehlinger (Senior Product Owner)",
    },
    buttons: [
      {
        style: "solid",
        icon: Files,
        label: "Case study",
        link: "",
      },
      {
        style: "outline",
        icon: Link2,
        label: "Bauder's website",
        link: "",
      },
    ],
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

export const MyClients = () => {
  return (
    <section className="bg-background-secondary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My Clients
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          Some of the clients I have or had the pleasure of working with
        </Body>
        <ul className="flex flex-wrap gap-2">
          {clients.map((client, idx) => {
            const imagePath = `/clients/${client.shortName
              .toLowerCase()
              .split(" ")
              .join("-")}.png`;
            return (
              <li key={idx}>
                <Tag
                  size="xl"
                  outline="solid"
                  state="deselected"
                  prepend={
                    <Image
                      src={imagePath}
                      alt={`Logo of ${client.shortName}`}
                      width={50}
                      height={50}
                    />
                  }
                >
                  {client.shortName}
                </Tag>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
