import { z } from "zod";
import { ContentCard } from "../../../components/ContentCard/ContentCard";
import { Quote } from "../../../components/Quote/Quote";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { queryContent } from "../../../lib/sanity";

const illustrations = [
  "bolt",
  "hand",
  "head",
  "heart",
  "phone",
  "geometry",
] as const;

export const MyPhilosophy = async () => {
  const philosophies = await queryContent(
    `
      *[_type == 'philosophy']
      {
          orderRank,
          illustration,
          title,
          description,
          button{label, href},
          illustration2,
          title2,
          description2,
          button2{label, href},
          backgroundColor,
          customBackgroundColor,
          color,
          border,
          backgroundImage{'url': asset->url, alt},
          image{'url': asset->url, alt},
      } | order(orderRank)
  `,
    z.array(
      z.object({
        illustration: z.enum(illustrations).nullable(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        button: z
          .object({
            label: z.string(),
            href: z.string(),
          })
          .nullable(),
        illustration2: z.enum(illustrations).nullable(),
        title2: z.string().nullable(),
        description2: z.string().nullable(),
        button2: z
          .object({
            label: z.string(),
            href: z.string(),
          })
          .nullable(),
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
        customBackgroundColor: z.string().nullable(),
        color: z.enum(["light", "dark"]).nullable(),
        border: z.boolean().nullable(),
        backgroundImage: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .nullable(),
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .nullable(),
      })
    )
  );
  const quotes = await queryContent(
    `
      *[_type == 'client' && quote.philosophy == true]
      {
        shortName,
        'text': quote.text,
        'author': quote.author,
      } | order(shortName asc)
  `,
    z.array(
      z.object({
        text: z.string(),
        author: z.string(),
      })
    )
  );
  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My philosophy
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          These are the principles that guide my thinking and doing:
        </Body>
        <ul className="flex flex-wrap justify-between gap-3">
          {philosophies.map((philosophy, idx) => {
            const isTwoCards =
              philosophy.illustration2 ||
              philosophy.title2 ||
              philosophy.description2 ||
              philosophy.button2;
            return (
              <li
                key={idx}
                className={`w-full flex-grow ${
                  isTwoCards ? "md:w-4/5 lg:w-2/4" : "md:w-2/5 lg:w-1/4"
                }`}
              >
                <ContentCard
                  illustration={philosophy.illustration || undefined}
                  title={philosophy.title || undefined}
                  description={philosophy.description || undefined}
                  button={philosophy.button || undefined}
                  illustration2={philosophy.illustration2 || undefined}
                  title2={philosophy.title2 || undefined}
                  description2={philosophy.description2 || undefined}
                  button2={philosophy.button2 || undefined}
                  backgroundColor={philosophy.backgroundColor || undefined}
                  color={philosophy.color || undefined}
                  customBackgroundColor={
                    philosophy.customBackgroundColor || undefined
                  }
                  border={philosophy.border || undefined}
                  backgroundImage={philosophy.backgroundImage || undefined}
                  image={philosophy.image || undefined}
                />
              </li>
            );
          })}
        </ul>
        {quotes.length > 0 && (
          <ul className="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {quotes.map((quote, idx) => (
              <li key={idx}>
                <Quote text={quote.text} author={quote.author} size="normal" />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};
