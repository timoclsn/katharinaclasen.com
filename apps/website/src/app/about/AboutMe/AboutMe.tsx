import { Clipboard } from "lucide-react";
import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { Button } from "../../../design-system/Button/Button";
import { Heading } from "../../../design-system/Heading/Heading";
import { getTextSnippet } from "../../../lib/queries";
import portraitImg from "./portrait.png";

export const AboutMe = async () => {
  const { content } = await getTextSnippet(
    "21714849-9385-4b58-9f14-600c1ebdf708"
  );
  return (
    <Section id="about-me" color="primary">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={portraitImg}
          alt="Portait of Katharina Clasen"
          className="max-h-[500px] w-full object-contain lg:w-1/2"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <Heading className="mb-8">A bit about me:</Heading>
          <MDXContent source={content} family="serif" className="mb-8" />
          <Button>
            <Clipboard />
            My CV
          </Button>
        </div>
      </div>
    </Section>
  );
};
