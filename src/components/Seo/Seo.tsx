import Head from "next/head";

interface Props {
  title: string;
  description: string;
  slug: string;
  previewImage: string;
}

export const Seo = ({ title, description, slug, previewImage }: Props) => {
  const url = "https://katharinaclasen.com";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={`${url}${slug}`} key="canonical" />

      <meta property="og:type" content="website" key="og:type" />
      <meta
        property="og:site_name"
        content="Katharina Clasen"
        key="og:site_name"
      />
      <meta property="og:locale" content="en" key="og:locale" />
      <meta property="og:url" content={`${url}${slug}`} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta
        property="og:image"
        content={`${url}/${previewImage}`}
        key="og:image"
      />
      <meta
        property="og:image:alt"
        content="Katharina Clasen"
        key="og:image:alt"
      />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
    </Head>
  );
};
