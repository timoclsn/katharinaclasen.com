import { createClient } from "next-sanity";
import "server-only";
import { z } from "zod";

const sanityClient = createClient({
  projectId: "dk9hv6ix",
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: false,
});

export const queryContent = async <TSchema extends z.ZodTypeAny>(
  query: string,
  schema: TSchema
) => {
  const result = await sanityClient.fetch(query);
  return schema.parse(result) as z.infer<TSchema>;
};
