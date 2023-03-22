import { MDXContent } from "../../components/MDXContent/MDXContent";
import { Container } from "../../design-system/Container/Container";
import { createGenerateMetadata, ogImage } from "../../lib/metadata";
import { getMetadata, getTextSnippet } from "../../lib/queries";

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "284418b6-bffc-4dd8-ac18-97c7c6e0bc1b"
  );
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      url: "https://katharinaclasen.com/imprint",
      siteName: "Katharina Clasen",
      description,
      images: {
        url: ogImage({
          overline: `${title} • Katharina Clasen`,
        }),
        alt: title,
        width: 1200,
        height: 630,
      },
    },
  };
});

const ImprintPage = async () => {
  const textSnippet = await getTextSnippet(
    "e489ce4e-0e6e-4561-b560-882cb0e29359"
  );

  return (
    <Container inset size="small" className="py-40">
      <MDXContent source={textSnippet.content} />
    </Container>
  );
};

export default ImprintPage;
