import imageUrlBuilder from '@sanity/image-url';
import { makeSafeQueryRunner } from "groqd";
import { createClient } from "next-sanity";
import { z } from "zod";

const projectId = z.string().parse(process.env.SANITY_PROJECT_ID);

const sanityClient = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: typeof document !== 'undefined',
});

export const runQuery = makeSafeQueryRunner(query => sanityClient.fetch(query));

const imageBuilder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: string) => {
  return imageBuilder.image(source);
};