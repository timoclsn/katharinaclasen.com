import { MDXContent } from "../../components/MDXContent/MDXContent";
import { Container } from "../../design-system/Container/Container";
import { getTextSnippet } from "../../lib/queries";

export const metadata = {
  title: "Privacy policy",
  description: "Privacy policy from Katharina Clasen",
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
