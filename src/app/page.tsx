import { z } from "zod";
import { queryContent } from "../lib/sanity";
import { animalSchema } from "../schemas/animal";

const Home = async () => {
  const animals = await queryContent(
    '*[_type == "animal"]',
    z.array(animalSchema)
  );

  return (
    <ul>
      {animals.map((animal, idx) => (
        <li key={idx}>
          <p>{animal._id}</p>
          <p>{animal.name}</p>
          <p>{animal._createdAt}</p>
        </li>
      ))}
    </ul>
  );
};

export default Home;
