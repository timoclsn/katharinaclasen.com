import { Accordion } from "../../../components/Accordion/Accordion";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { getAccordionItems } from "../../../lib/queries";

export const LcdAccordion = async () => {
  const items = await getAccordionItems("922d0552-0090-40fb-bf92-3710cf3e9c17");
  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          How Life-centered Design changes the way we design
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          This is how Life-centered Design changes the way we create products,
          systems, and services
        </Body>
        <Accordion items={items} />
      </Container>
    </section>
  );
};
