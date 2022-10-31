import { InferGetStaticPropsType } from "next";
import { queryContent } from "src/lib/sanity";
import { animalSchema } from "src/schemas/animal";
import { z } from "zod";
import { Layout } from "../components/Layout/Layout";

export default function Home({
  animals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <ul>
        {animals.map((animal, idx) => (
          <li key={idx}>
            <p>{animal._id}</p>
            <p>{animal.name}</p>
            <p>{animal._createdAt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const animals = await queryContent(
    '*[_type == "animal"]',
    z.array(animalSchema)
  );

  return {
    props: {
      animals,
    },
  };
}
