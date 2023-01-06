import { z } from "zod";
import { CardGrid } from "../../../components/CardGrid/CardGrid";
import { Quote } from "../../../components/Quote/Quote";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { getCardGridItems } from "../../../lib/queries";
import { queryContent } from "../../../lib/sanity";

export const MyPhilosophy = async () => {
  const philosophies = await getCardGridItems(
    "4636d048-0b7e-4cf4-9416-b90c291705c6"
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
        <CardGrid items={philosophies} />
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
