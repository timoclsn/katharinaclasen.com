import { Metadata } from "next";
import { MDXContent } from "../../components/MDXContent/MDXContent";
import { Container } from "../../design-system/Container/Container";
import { getTextSnippet } from "../../lib/queries";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Imprint from Katharina Clasen",
};

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
