import { createClient } from "next-sanity";
import { z } from "zod";

const sanityClient = createClient({
  projectId: "dk9hv6ix",
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: false,
});

export const queryContent = async <Schema extends z.ZodTypeAny>(
  query: string,
  schema: Schema
): Promise<z.infer<Schema>> => {
  const result = await sanityClient.fetch(query);
  return await schema.parseAsync(result);
};
