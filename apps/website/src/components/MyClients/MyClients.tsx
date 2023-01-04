import { z } from "zod";
import { Body } from "../../design-system/Body/Body";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { queryContent } from "../../lib/sanity";
import { MyClientsCarousel } from "./MyClientsCarousel";

export type Clients = Awaited<ReturnType<typeof queryClients>>;

const queryClients = async () => {
  return await queryContent(
    `
      *[_type == 'client']
      {
        _id,
        shortName,
        name,
        'logo': logo.asset->url,
        description,
        website,
        caseStudy,
        quote{text, author},
      } | order(shortName asc)
    `,
    z.array(
      z.object({
        _id: z.string(),
        shortName: z.string(),
        name: z.string().nullable(),
        logo: z.string(),
        description: z.string(),
        website: z.string().nullable(),
        caseStudy: z.string().nullable(),
        quote: z
          .object({
            text: z.string(),
            author: z.string(),
          })
          .nullable(),
      })
    )
  );
};

export const MyClients = async () => {
  const clients = await queryClients();
  return (
    <section className="bg-background-secondary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My Clients
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          Some of the clients I have or had the pleasure of working with
        </Body>
        <MyClientsCarousel clients={clients} />
      </Container>
    </section>
  );
};
