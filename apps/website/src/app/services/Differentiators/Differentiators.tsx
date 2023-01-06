import { z } from "zod";
import { CardGrid } from "../../../components/CardGrid/CardGrid";
import { Quote } from "../../../components/Quote/Quote";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { getCardGridItems } from "../../../lib/queries";
import { queryContent } from "../../../lib/sanity";

export const Differentiators = async () => {
  const differentiators = await getCardGridItems(
    "f82aeac9-95d4-4f49-a8f8-ec2c7f207c44"
  );
  const quotes = await queryContent(
    `
      *[_type == 'client' && quote.differentiators == true]
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
          Differentiators
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          This is what makes working with me special:
        </Body>
        <CardGrid items={differentiators} />
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
