import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import memojiImg from "./memoji.png";
import laptopImg from "./laptop.png";
import { getTextSnippet } from "../../../lib/queries";

export const Header = async () => {
  const { content } = await getTextSnippet(
    "e1621db5-a950-467f-b6fd-2c0dfa735e3e"
  );
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col overflow-hidden bg-background-red-candy">
      <Container
        inset
        className="relative flex flex-1 flex-col justify-between gap-10 py-20"
      >
        <Heading level="1" className="max-w-4xl !leading-[1.2]">
          Let&apos;s use digital for good and create{" "}
          <Tag size="xxl" align="bottom">
            truly positive
          </Tag>{" "}
          experiences!
        </Heading>
        <div>
          <Body as="p" priority="secondary" className="mb-8 max-w-md">
            {content}
          </Body>
          <Button href="/about#my-philosophy">
            <ArrowRight />
            My philosophy
          </Button>
        </div>
        <Image
          src={memojiImg}
          alt="Memoji of Katharina Clasen forming a heart with her hands."
          className="absolute bottom-0 right-0 h-auto w-[150px] animate-in fade-in slide-in-from-bottom-full duration-700 ease-out sm:w-[250px] lg:w-[350px]"
          sizes="30vw"
          priority
        />
      </Container>
      <Image
        src={laptopImg}
        alt="Image of a mostly closed laptop."
        className="relative z-10 h-[150px] w-full object-cover sm:h-[320px]"
        sizes="100vw"
        priority
      />
    </section>
  );
};
