import { CardGrid } from "../../../components/CardGrid/CardGrid";
import { ClientQuote } from "../../../components/ClientQuote/ClientQuote";
import { Section } from "../../../components/Section/Section";
import { Body } from "../../../design-system/Body/Body";
import { Heading } from "../../../design-system/Heading/Heading";
import { getCardGridItems } from "../../../lib/queries";

export const MyPhilosophy = async () => {
  const cardGrid = await getCardGridItems(
    "4636d048-0b7e-4cf4-9416-b90c291705c6"
  );
  const { title, subtitle, items, quotes } = cardGrid;
  return (
    <Section id="my-philosophy" color="primary">
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
              <ClientQuote
                text={quote.text}
                author={quote.author}
                size="normal"
              />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};
