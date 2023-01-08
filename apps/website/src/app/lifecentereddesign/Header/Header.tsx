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
    <section className="h-[calc(100vh-80px)] py-10">
      <Container inset className="flex h-full">
        <div className="hidden flex-1 flex-col justify-end lg:flex">
          <Image
            src={memoji}
            alt="Memoji of Katharina Clasen wavin gher hand"
            className="-mb-10"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <Heading level="1" className="max-w-4xl">
            Everything <Tag size="xxl">Life-centered</Tag>{" "}
            <Tag size="xxl">Design</Tag> and what I am doing in this space
          </Heading>
          <div>
            <Body as="p" priority="secondary" className="mb-8 max-w-md">
              I believe that we need to start to go beyond short-term desires,
              think holistically and create value in a greater sense in order to
              build sustainable businesses and become future-ready.
            </Body>
            <Button>
              <ArrowRight />
              My philosophy
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
