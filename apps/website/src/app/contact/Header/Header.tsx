import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import {
  CALENDLY_URL,
  EMAIL,
  INSTAGRAL_URL,
  LINKEDIN_URL,
} from "../../../lib/contact";
import { getTextSnippet } from "../../../lib/queries";
import memojiImg from "./memoji.png";
import smartphoneImg from "./smartphone.png";

export const Header = async () => {
  const { content } = await getTextSnippet(
    "e0c78e26-6cdb-4f2e-b147-fb6ef99b5bd2",
  );
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col overflow-hidden bg-background-pink-candy">
      <Container
        inset
        className="relative flex flex-1 flex-col justify-between gap-10 py-20 pb-40 lg:pb-20"
      >
        <Heading level="1" className="max-w-4xl leading-[1.1]!">
          With any questions or just to have a coffee – feel free to{" "}
          <Tag size="xxl" align="bottom">
            Get in touch
          </Tag>
        </Heading>
        <div>
          <Body as="p" priority="secondary" className="mb-8 max-w-md">
            {content}
          </Body>
          <div className="flex flex-wrap items-center justify-start gap-6">
            <Button href={CALENDLY_URL} external>
              <Phone />
              Book a call
            </Button>
            <Button style="outline" href={`mailto:${EMAIL}`}>
              <Mail />
              Email me
            </Button>
            <Button style="outline" href={INSTAGRAL_URL}>
              <Instagram />
              Instagram
            </Button>
            <Button style="outline" href={LINKEDIN_URL}>
              <Linkedin />
              LinkedIn
            </Button>
          </div>
        </div>
        <Image
          src={memojiImg}
          alt="Memoji of Katharina Clasen forming a heart with her hands."
          className="absolute bottom-0 right-0 h-auto w-[150px] duration-500 ease-out animate-in fade-in slide-in-from-bottom-1/3 md:w-[250px] lg:w-[350px]"
          sizes="30vw"
          priority
        />
      </Container>
      <Image
        src={smartphoneImg}
        alt="Image a rendered smartphone with a call from Katharina Clasen"
        className="relative z-10 h-[150px] w-full object-cover sm:h-[320px]"
        sizes="100vw"
        priority
      />
    </section>
  );
};
