import { Metadata } from "next";
import { MDXContent } from "../../components/MDXContent/MDXContent";
import { Container } from "../../design-system/Container/Container";
import { getMetadata, getTextSnippet } from "../../lib/queries";

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, description } = await getMetadata(
    "d55aa383-149f-4b32-a7ae-4b640483d033"
  );
  return {
    title,
    description,
  };
};

const PrivacyPage = async () => {
  const textSnippet = await getTextSnippet(
    "1a89fc3a-c6c5-473d-94f1-eaea8893b5b8"
  );

  return (
    <Container inset size="small" className="py-40">
      <MDXContent source={textSnippet.content} />
    </Container>
  );
};

export default PrivacyPage;
