import { groq } from "next-sanity";
import { z } from "zod";
import { Body } from "../../design-system/Body/Body";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { markdownToHtml } from "../../lib/markdown";
import { queryContent } from "../../lib/sanity";
import { Section } from "../Section/Section";
import { MyClientsCarousel } from "./MyClientsCarousel";

export type Clients = Awaited<ReturnType<typeof queryCarousel>>["items"];

const queryCarousel = async () => {
  const result = await queryContent(
    groq`
    *[_id == '908fb376-7834-4b39-9c9a-8927976fa4e4']
    {
      title,
      subtitle,
      items[]->{
        shortName,
        name,
        'logo': logo.asset->url,
        description,
        website,
        caseStudy,
        quote->{text, author},
      },
    }
    `,
    z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        items: z.array(
          z.object({
            shortName: z.string(),
            name: z.string().nullable(),
            logo: z.string(),
            description: z.string().transform((value) => markdownToHtml(value)),
            website: z.string().nullable(),
            caseStudy: z.string().nullable(),
            quote: z
              .object({
                text: z.string(),
                author: z.string(),
              })
              .nullable(),
          })
        ),
      })
    )
  );

  return result[0];
};

export const MyClients = async () => {
  const { title, subtitle, items } = await queryCarousel();
  return (
    <Section id="my-clients" color="secondary">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          {title}
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          {subtitle}
        </Body>
        <MyClientsCarousel clients={items} />
      </Container>
    </Section>
  );
};
