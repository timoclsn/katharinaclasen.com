import { ClipboardList, Files } from "lucide-react";
import Image from "next/image";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import { Button } from "../../../design-system/Button/Button";
import { getTextSnippet } from "../../../lib/queries";
import bicImg from "./bic.png";

export const Bic = async () => {
  const { content } = await getTextSnippet(
    "87b890c6-253f-4b07-9325-39a0ecbdaa4c",
  );
  return (
    <Section id="bic" color="primary">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={bicImg}
          alt="Title page of the Behavioral Impact Canvas"
          className="max-h-[500px] w-full object-contain lg:w-1/2"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <MDXContent source={content} color="dark" family="serif" />
          <ButtonGroup>
            <Button href="/projects/behavioral-impact-canvas">
              <Files />
              About the canvas
            </Button>
            <Button
              style="outline"
              href="/downloads/behavioral-impact-canvas.pdf"
              external
            >
              <ClipboardList />
              View the Canvas
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Section>
  );
};
