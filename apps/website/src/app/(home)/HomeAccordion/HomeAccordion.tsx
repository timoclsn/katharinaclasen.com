import { Accordion } from "../../../components/Accordion/Accordion";
import { Container } from "../../../design-system/Container/Container";
import { getAccordionItems } from "../../../lib/queries";

export const HomeAccordion = async () => {
  const items = await getAccordionItems("2d7a36ed-8689-4051-9069-628b38a9f343");

  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Accordion items={items} itemsClassName="lg:h-[600px]" />
      </Container>
    </section>
  );
};
