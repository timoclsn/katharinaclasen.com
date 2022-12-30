import imageUrlBuilder from '@sanity/image-url';
import { makeSafeQueryRunner } from "groqd";
import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: 'dk9hv6ix',
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: typeof document !== 'undefined',
});

export const runQuery = makeSafeQueryRunner(query => sanityClient.fetch(query));

const imageBuilder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: string) => {
  return imageBuilder.image(source);
};