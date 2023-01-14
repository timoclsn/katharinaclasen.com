import { MDXContent } from "../../components/MDXContent/MDXContent";
import { Container } from "../../design-system/Container/Container";
import { getTextSnippet } from "../../lib/queries";

const ImprintPage = async () => {
  const textSnippet = await getTextSnippet(
    "e489ce4e-0e6e-4561-b560-882cb0e29359"
  );

  return (
    <Container inset className="py-40">
      <MDXContent MDXRemoteProps={textSnippet.content} />
    </Container>
  );
};

export default ImprintPage;
