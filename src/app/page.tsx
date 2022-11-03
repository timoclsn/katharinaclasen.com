import { z } from "zod";
import { queryContent } from "../lib/sanity";
import { animalSchema } from "../schemas/animal";
import { Text } from "../components/Text/Text";
import { Heading } from "../components/Heading/Heading";

const Home = async () => {
  const animals = await queryContent(
    '*[_type == "animal"]',
    z.array(animalSchema)
  );

  return (
    <ul>
      {animals.map((animal, idx) => (
        <li key={idx}>
          <Heading>Heading</Heading>
          <Text as="p">{animal._id}</Text>
          <p>{animal.name}</p>
          <p>{animal._createdAt}</p>
        </li>
      ))}
    </ul>
  );
};

export default Home;
