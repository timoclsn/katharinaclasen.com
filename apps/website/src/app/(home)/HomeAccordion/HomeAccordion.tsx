import { Accordion } from "../../../components/Accordion/Accordion";
import { Section } from "../../../components/Section/Section";
import { Container } from "../../../design-system/Container/Container";
import { getAccordionItems } from "../../../lib/queries";

export const HomeAccordion = async () => {
  const items = await getAccordionItems("2d7a36ed-8689-4051-9069-628b38a9f343");

  return (
    <Section color="primary">
      <Container inset>
        <Accordion items={items} size="normal" />
      </Container>
    </Section>
  );
};
