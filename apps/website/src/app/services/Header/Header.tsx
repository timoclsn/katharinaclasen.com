import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import codeImg from "./code.png";
import memojiImg from "./memoji.png";
import stonesImg from "./stones.png";

export const Header = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col">
      <div className="relative flex flex-1 gap-12 py-24">
        <div className="hidden w-1/3 justify-end lg:flex">
          <Image
            src={stonesImg}
            alt="Gems in a grid with a plus in the center."
            sizes="30vw"
            className="h-full w-auto flex-none"
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
              I believe that we need to start to go beyond short-term desires,
              think holistically and create value in a greater sense in order to
              build sustainable businesses and become future-ready.
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
          className="absolute bottom-0 right-0 -mb-20 mr-20 h-auto w-[150px] lg:-mb-40 lg:mr-40 lg:w-[250px]"
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
