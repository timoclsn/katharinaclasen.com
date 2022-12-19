import { Body } from "../components/Body/Body";
import { Heading } from "../components/Heading/Heading";
import { queryPersons } from "../lib/queries";
import Image from "next/image";
import { urlForImage } from "../lib/sanity";

const Home = async () => {
  const persons = await queryPersons();
  return (
    <ul>
      {persons.map((person, idx) => (
        <li key={idx}>
          <Heading level="2">Heading</Heading>
          <Body as="p">{person.fullName}</Body>
          <Image
            src={urlForImage(person.portrait).url()}
            alt={person.portraitAlt}
            width={200}
            height={200}
          />
        </li>
      ))}
    </ul>
  );
};

export default Home;
