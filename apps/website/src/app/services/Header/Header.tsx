import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import { getTextSnippet } from "../../../lib/queries";
import codeImg from "./code.png";
import memojiImg from "./memoji.png";
import stonesImg from "./stones.png";

export const Header = async () => {
  const { content } = await getTextSnippet(
    "4b272c72-97ad-4e93-b5a1-fe9e9caa4956"
  );
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col overflow-hidden bg-background-stone">
      <div className="relative flex flex-1 gap-12 py-24">
        <div className="relative hidden w-1/3 justify-end lg:flex">
          <Image
            src={stonesImg}
            alt="Gems in a grid with a plus in the center."
            sizes="30vw"
            className="absolute inset-0 h-full w-full object-contain object-right"
            priority
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-10 bg-background-stone px-4 py-10 sm:px-8 lg:w-2/3 lg:rounded-l-6xl">
          <Heading level="1" className="max-w-4xl !leading-[1.2]">
            I am the{" "}
            <Tag size="xxl" align="bottom">
              flexible
            </Tag>{" "}
            UX-Design{" "}
            <Tag size="xxl" align="bottom">
              extension
            </Tag>{" "}
            to your digital team
          </Heading>
          <div>
            <Body as="p" priority="secondary" className="mb-8 max-w-md">
              {content}
            </Body>
            <Button href="/services#about-my-services">
              <ArrowRight />
              My services
            </Button>
          </div>
        </div>
        <Image
          src={memojiImg}
          alt="Memoji of Katharina Clasen forming a victory sign with her hands."
          className="absolute bottom-0 right-0 -mb-20 mr-20 h-auto w-[150px] animate-in slide-in-from-right-full duration-700 ease-out lg:-mb-40 lg:mr-40 lg:w-[250px]"
          sizes="30vw"
          priority
        />
      </div>
      <Image
        src={codeImg}
        alt="Image of computer code on a screen."
        className="h-[150px] w-full object-cover sm:h-[320px]"
        sizes="100vw"
        priority
      />
    </section>
  );
};
