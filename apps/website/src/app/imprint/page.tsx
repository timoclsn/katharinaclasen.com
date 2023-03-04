import { MDXContent } from "../../components/MDXContent/MDXContent";
import { Container } from "../../design-system/Container/Container";
import { createGenerateMetadata } from "../../lib/metadata";
import { getMetadata, getTextSnippet } from "../../lib/queries";

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "284418b6-bffc-4dd8-ac18-97c7c6e0bc1b"
  );
  return {
    title,
    description,
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
