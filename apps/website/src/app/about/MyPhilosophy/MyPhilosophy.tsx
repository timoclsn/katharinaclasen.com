import { z } from "zod";
import { ContentCard } from "../../../components/ContentCard/ContentCard";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { queryContent } from "../../../lib/sanity";

export const MyPhilosophy = async () => {
  const philosophies = await queryContent(
    `
      *[_type == 'philosophy']
      {
          _id,
          title,
          description,
          backgroundColor,
          color,
          border,
          illustration,
          button{label, href},
          backgroundImage{'url': asset->url, alt},
      } | order(title asc)
  `,
    z.array(
      z.object({
        _id: z.string(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        backgroundColor: z
          .enum([
            "primary",
            "blueExtreme",
            "redCandy",
            "stone",
            "dark",
            "salmon",
            "lilacExtreme",
            "pinkCandy",
            "mint",
          ])
          .nullable(),
        color: z.enum(["light", "dark"]).nullable(),
        border: z.boolean().nullable(),
        illustration: z
          .enum(["bolt", "hand", "head", "heart", "phone", "geometry"])
          .nullable(),
        button: z
          .object({
            label: z.string(),
            href: z.string(),
          })
          .nullable(),
        backgroundImage: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .nullable(),
      })
    )
  );
  return (
    <section className="bg-background-secondary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My philosophy
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          These are the principles that guide my thinking and doing:
        </Body>
        <ul className="flex flex-wrap justify-between gap-3">
          {philosophies.map((philosophy, idx) => (
            <li key={idx} className="w-full flex-grow md:w-2/5 lg:w-1/4">
              <ContentCard
                illustration={philosophy.illustration || undefined}
                title={philosophy.title || undefined}
                description={philosophy.description || undefined}
                button={philosophy.button || undefined}
                backgroundColor={philosophy.backgroundColor || undefined}
                color={philosophy.color || undefined}
                border={philosophy.border || undefined}
                backgroundImage={philosophy.backgroundImage || undefined}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
