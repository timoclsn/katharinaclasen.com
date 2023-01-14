import { Accordion } from "../../../components/Accordion/Accordion";
import { Container } from "../../../design-system/Container/Container";
import { getAccordionItems } from "../../../lib/queries";

export const AboutAccordion = async () => {
  const items = await getAccordionItems("922d0552-0090-40fb-bf92-3710cf3e9c17");

  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Accordion items={items} />
      </Container>
    </section>
  );
};
