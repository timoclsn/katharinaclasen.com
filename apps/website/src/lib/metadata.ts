import { Metadata } from "next";

export const createGenerateMetadata = (
  generateMetadata: ({
    params,
  }: {
    params: { slug: string };
  }) => Promise<Metadata>
) => generateMetadata;

interface OgImageOptions {
  title: string;
  subtitle: string;
  image: string;
}

export const ogImage = ({ title, subtitle, image }: OgImageOptions) => {
  const searchParams = new URLSearchParams();
  searchParams.set("title", title);
  searchParams.set("subtitle", subtitle);
  searchParams.set("image", image);
  return `https://katharinaclasen.com/og-image?${searchParams.toString()}`;
};
