import { Clipboard } from "lucide-react";
import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { Button } from "../../../design-system/Button/Button";
import { LINKEDIN_URL } from "../../../lib/contact";
import { getImage, getTextSnippet } from "../../../lib/queries";

export const AboutMe = async () => {
  const { content } = await getTextSnippet(
    "21714849-9385-4b58-9f14-600c1ebdf708",
  );
  const image = await getImage("24761a5c-f2f8-43d3-91da-5c1d5ebf6d31");

  return (
    <Section id="about-me" color="primary">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
          className="max-h-[500px] w-full object-contain lg:w-1/2"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <MDXContent source={content} family="serif" className="mb-8" />
          <Button href={LINKEDIN_URL} external>
            <Clipboard />
            My CV
          </Button>
        </div>
      </div>
    </Section>
  );
};
