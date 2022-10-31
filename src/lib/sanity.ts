import { createClient } from "next-sanity";
import { z, ZodSchema } from "zod";

const projectId = z.string().parse(process.env.SANITY_PROJECT_ID);

export const sanityClient = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2022-10-31",
  useCdn: false,
});

export const queryContent = async <T>(query: string, schema: z.ZodType<T>) => {
  const result = await sanityClient.fetch(query);
  const parsedResult = schema.parse(result);
  return parsedResult;
};
