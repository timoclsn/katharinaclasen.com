import { CardGrid } from "../../../components/CardGrid/CardGrid";
import { Quote } from "../../../components/Quote/Quote";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { getCardGridItems } from "../../../lib/queries";

export const LcdPrinciples = async () => {
  const cardGrid = await getCardGridItems(
    "ca47f6e9-4d82-469a-8d06-4e305208cfef"
  );
  const { title, subtitle, items, quotes } = cardGrid;
  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          {title}
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          {subtitle}
        </Body>
        <CardGrid items={items} />
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