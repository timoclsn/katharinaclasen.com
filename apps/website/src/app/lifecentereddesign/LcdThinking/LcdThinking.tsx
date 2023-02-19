import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { Card } from "../../../design-system/Card/Card";
import { Heading } from "../../../design-system/Heading/Heading";
import { getTextSnippet } from "../../../lib/queries";
import thinkingImg from "./thinking.jpg";

export const LcdThinking = async () => {
  const { content } = await getTextSnippet(
    "3a5572f6-c488-4bee-a3c6-7ca0977088d4"
  );
  return (
    <Section color="primary">
      <Card
        color="secondary"
        className="flex flex-col overflow-hidden lg:flex-row"
      >
        <div className="p-6 sm:p-16">
          <Heading level="3" className="mb-8">
            Life-centered Design expands our thinking and doing along two axes
          </Heading>
          <MDXContent source={content} />
        </div>
        <div className="w-1/3 flex-none">
          <Image
            src={thinkingImg}
            alt="Image of some crossroads from the top."
            className="hidden h-full w-full object-cover lg:block"
          />
        </div>
      </Card>
    </Section>
  );
};
