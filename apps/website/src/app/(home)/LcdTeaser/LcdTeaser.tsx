import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { Button } from "../../../design-system/Button/Button";
import { getTextSnippet } from "../../../lib/queries";
import earthImg from "./earth.jpg";

export const LcdTeaser = async () => {
  const { content } = await getTextSnippet(
    "44ee2a4a-1135-43a4-a5c8-59bb49ef7a47",
  );
  return (
    <Section color="dark">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={earthImg}
          alt="Image of the earth from space"
          className="max-h-[500px] object-contain lg:w-1/2"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <MDXContent source={content} family="serif" color="light" />
          <Button color="light" href="/lifecentereddesign">
            <ArrowRight />
            More about Life-centered Design
          </Button>
        </div>
      </div>
    </Section>
  );
};
