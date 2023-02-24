import { createClient } from "next-sanity";
import { cache } from "react";
import "server-only";
import { z } from "zod";

const client = createClient({
  projectId: "dk9hv6ix",
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: false,
});

const clientFetch = cache(client.fetch.bind(client));

export const queryContent = async <TSchema extends z.ZodTypeAny>(
  query: string,
  schema: TSchema
) => {
  const result = await clientFetch(query);
  return schema.parse(result) as z.infer<TSchema>;
};
