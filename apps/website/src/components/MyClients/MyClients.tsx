import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";

const clients = [
  "Bauder",
  "KADIA",
  "bex technologies",
  "HRlab",
  "JobNinja",
  "Bosch Power Tools",
  "Hörmann",
  "vialytics",
  "Craftnote",
  "DGNB",
  "homee",
  "stromee",
  "eCozy",
  "STEINEL",
  "IVU Informationssysteme",
  "Immersion7",
  "Codeatelier",
];

export const MyClients = () => {
  return (
    <section className="py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My Clients
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          Some of the clients I have or had the pleasure of working with
        </Body>
        <ul className="flex flex-wrap gap-2">
          {clients.map((client, idx) => {
            const imagePath = `/clients/${client
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
                      alt={`Logo of ${client}`}
                      width={50}
                      height={50}
                    />
                  }
                >
                  {client}
                </Tag>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
