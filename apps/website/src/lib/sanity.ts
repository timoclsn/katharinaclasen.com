import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";
import { z } from 'zod';

const sanityClient = createClient({
  projectId: 'dk9hv6ix',
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: typeof document !== 'undefined',
});

export const queryContent = async <T>(query: string, schema: z.ZodType<T>) => {
  const result = await sanityClient.fetch(query);
  return schema.parse(result);
};

const imageBuilder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: string) => {
  return imageBuilder.image(source);
};