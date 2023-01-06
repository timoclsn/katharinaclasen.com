import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";
import { z } from 'zod';

const sanityClient = createClient({
  projectId: 'dk9hv6ix',
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: typeof document !== 'undefined',
});

export const queryContent = async <T extends z.ZodTypeAny>(query: string, schema: T): Promise<z.infer<T>> => {
  const result = await sanityClient.fetch(query);
  return schema.parseAsync(result);
};

const imageBuilder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: string) => {
  return imageBuilder.image(source);
};