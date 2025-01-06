import { Metadata } from "next";
import { BackgroundColor } from "./colors";

export const createGenerateMetadata = (
  generateMetadata: ({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) => Promise<Metadata>,
) => generateMetadata;

interface OgImageOptions {
  overline?: string | null;
  headline?: string | null;
  readingTime?: string | null;
  date?: string | null;
  client?: string | null;
  image?: string | null;
  backgroundColor?: BackgroundColor | null;
}

export const ogImage = ({
  overline,
  headline,
  readingTime,
  date,
  client,
  image,
  backgroundColor,
}: OgImageOptions = {}) => {
  const searchParams = new URLSearchParams();

  if (overline) {
    searchParams.set("overline", overline);
  }

  if (headline) {
    searchParams.set("headline", headline);
  }

  if (readingTime) {
    searchParams.set("readingTime", readingTime);
  }

  if (date) {
    searchParams.set("date", date);
  }

  if (client) {
    searchParams.set("client", client);
  }

  if (image) {
    searchParams.set("image", image);
  }

  if (backgroundColor) {
    searchParams.set("backgroundColor", backgroundColor);
  }

  return `/og-image${
    searchParams.toString() ? "?" : ""
  }${searchParams.toString()}`;
};
