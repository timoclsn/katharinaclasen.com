import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import memojiImg from "./memoji.png";
import laptopImg from "./laptop.png";

export const Header = () => {
  return (
    <section className="flex h-[calc(100vh-80px)] flex-col">
      <Container
        inset
        className="relative flex flex-1 flex-col justify-between gap-10 py-20"
      >
        <Heading level="1" className="max-w-4xl !leading-[1.1]">
          Let&apos;s use digital for good and create{" "}
          <Tag size="xxl" align="bottom">
            truly positive
          </Tag>{" "}
          experiences!
        </Heading>
        <div>
          <Body as="p" priority="secondary" className="mb-8 max-w-md">
            I believe that we need to start to go beyond short-term desires,
            think holistically and create value in a greater sense in order to
            build sustainable businesses and become future-ready.
          </Body>
          <Button href="#my-philosophy">
            <ArrowRight />
            My philosophy
          </Button>
        </div>
        <Image
          src={memojiImg}
          alt="Memoji of Katharina Clasen forming a heart with her hands."
          className="absolute bottom-0 right-0 hidden lg:block"
          sizes="30vw"
          priority
        />
      </Container>
      <Image
        src={laptopImg}
        alt="Image of a mostly closed laptop."
        className="h-[320px] w-full object-cover"
        sizes="100vw"
        priority
      />
    </section>
  );
};
