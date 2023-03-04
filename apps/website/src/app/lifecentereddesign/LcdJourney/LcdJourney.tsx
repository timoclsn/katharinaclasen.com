import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { Heading } from "../../../design-system/Heading/Heading";
import { getTextSnippet } from "../../../lib/queries";
import journeyImg from "./journey.jpg";

export const LcdJourney = async () => {
  const { content } = await getTextSnippet(
    "f82e5299-98ae-4fb9-95c5-75544775deb0"
  );
  return (
    <Section id="my-lcd-journey" color="secondary">
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <Image
          src={journeyImg}
          alt="Image of a path"
          className="max-h-[500px] object-contain lg:w-1/2"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <Heading>My Life-centered Design journey</Heading>
          <MDXContent source={content} family="serif" />
        </div>
      </div>
    </Section>
  );
};
