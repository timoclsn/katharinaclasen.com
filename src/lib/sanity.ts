import { createClient } from "next-sanity";
import { cache } from "react";
import "server-only";
import { z } from "zod";

const projectId = z.string().parse(process.env.SANITY_PROJECT_ID);

const sanityClient = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2022-10-31",
  useCdn: false,
});

export const queryContent = cache(
  async <T>(query: string, schema: z.ZodType<T>) => {
    const result = await sanityClient.fetch(query);
    const parsedResult = schema.parse(result);
    return parsedResult;
  }
);
