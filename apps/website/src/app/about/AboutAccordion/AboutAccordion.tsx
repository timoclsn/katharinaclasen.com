import { Accordion } from "../../../components/Accordion/Accordion";
import { Section } from "../../../components/Section/Section";
import { getAccordionItems } from "../../../lib/queries";

export const AboutAccordion = async () => {
  const items = await getAccordionItems("922d0552-0090-40fb-bf92-3710cf3e9c17");

  return (
    <Section color="primary">
      <Accordion items={items} />
    </Section>
  );
};
