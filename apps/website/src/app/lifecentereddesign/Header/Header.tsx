import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import memoji from "./memoji.png";

export const Header = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col">
      <Container inset className="relative flex flex-1 flex-col items-end">
        <div className="flex h-full flex-1 flex-col justify-between gap-10 py-20 pb-40 sm:pb-20">
          <Heading level="1" className="max-w-4xl !leading-[1.2]">
            Everything <Tag size="xxl">Life-centered</Tag>{" "}
            <Tag size="xxl">Design</Tag> and what I am doing in this space
          </Heading>
          <div>
            <Body as="p" priority="secondary" className="mb-8 max-w-md">
              I believe that we need to start to go beyond short-term desires,
              think holistically and create value in a greater sense in order to
              build sustainable businesses and become future-ready.
            </Body>
            <Button href="/lifecentereddesign#my-lcd-projects">
              <ArrowRight />
              My Life-centered Design projects
            </Button>
          </div>
        </div>
        <Image
          src={memoji}
          alt="Memoji of Katharina Clasen wavin gher hand"
          className="absolute bottom-0 left-auto h-auto w-[150px] animate-in fade-in slide-in-from-bottom-full duration-700 ease-out md:w-[250px] lg:w-[350px] xl:left-0 xl:right-0"
          sizes="30vw"
          priority
        />
      </Container>
    </section>
  );
};
