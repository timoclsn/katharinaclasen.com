import { Accordion } from "../../../components/Accordion/Accordion";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { getAccordionItems } from "../../../lib/queries";

export const ServicesAccordion = async () => {
  const items = await getAccordionItems("59b06a53-4ec9-4455-9255-ec9401207ded");

  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          How I work
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          These are the general modes you&amp;ll find me working in:
        </Body>
        <Accordion items={items} itemsClassName="lg:h-[600px]" />
      </Container>
    </section>
  );
};
