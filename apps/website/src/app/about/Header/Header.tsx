import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import memojiImg from "./assets/memoji.png";
import laptopImg from "./assets/laptop.png";

export const Header = () => {
  return (
    <section className="bg-background-red-candy">
      <Container inset className="relative pb-28 pt-40">
        <Heading level="1" className="mb-52 max-w-4xl">
          Let&apos;s use digital for good and create{" "}
          <Tag size="xxl">truly positive</Tag> experiences!
        </Heading>
        <Body as="p" priority="secondary" className="mb-8 max-w-md">
          I believe that we need to start to go beyond short-term desires, think
          holistically and create value in a greater sense in order to build
          sustainable businesses and become future-ready.
        </Body>
        <Button>
          <ArrowRight />
          My philosophy
        </Button>
        <Image
          src={memojiImg}
          alt="Memoji of Katharina Clasen forming a heart with her hands."
          className="absolute bottom-0 right-0"
          sizes="30vw"
          priority
        />
      </Container>
      <Image
        src={laptopImg}
        alt="Image of a mostly closed laptop."
        className="h-[320px] w-full object-cover"
        sizes="100vw"
      />
    </section>
  );
};
