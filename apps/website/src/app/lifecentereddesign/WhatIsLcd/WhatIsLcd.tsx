import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { getTextSnippet } from "../../../lib/queries";
import earthImg from "./earth.jpg";

export const WhatIsLcd = async () => {
  const { content } = await getTextSnippet(
    "c249368d-64c2-4640-bfb1-81ab7ae01255"
  );
  return (
    <Section id="what-is-lcd" color="dark">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <MDXContent source={content} color="light" family="serif" />
        </div>
        <Image
          src={earthImg}
          alt="Image of the earth from space"
          className="max-h-[500px] w-full object-contain lg:w-1/2"
        />
      </div>
    </Section>
  );
};
