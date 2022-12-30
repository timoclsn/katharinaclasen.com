import { Body } from "../../design-system/Body/Body";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { clientsQuery } from "../../lib/queries";
import { runQuery } from "../../lib/sanity";
import { MyClientsCarousel } from "./MyClientsCarousel";

export const MyClients = async () => {
  const clients = await runQuery(clientsQuery);
  return (
    <section className="bg-background-secondary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My Clients
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          Some of the clients I have or had the pleasure of working with
        </Body>
        <MyClientsCarousel clients={clients} />
      </Container>
    </section>
  );
};
