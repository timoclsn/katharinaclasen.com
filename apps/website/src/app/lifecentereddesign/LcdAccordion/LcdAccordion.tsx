import { Accordion } from "../../../components/Accordion/Accordion";
import { Section } from "../../../components/Section/Section";
import { Body } from "../../../design-system/Body/Body";
import { Heading } from "../../../design-system/Heading/Heading";
import { getAccordionItems } from "../../../lib/queries";

export const LcdAccordion = async () => {
  const items = await getAccordionItems("af776ab1-1d56-4434-ae50-fbda4b706422");
  return (
    <Section id="how-lcd-changes-how-we-design" color="primary">
      <Heading as="h2" level="1" className="mb-6">
        How Life-centered Design changes the way we design
      </Heading>
      <Body as="p" size="large" priority="secondary" className="mb-16">
        This is how Life-centered Design changes the way we create products,
        systems, and services
      </Body>
      <Accordion items={items} />
    </Section>
  );
};
