import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import memojiImg from "./memoji.png";
import smartphoneImg from "./smartphone.png";

export const Header = () => {
  return (
    <section className="flex h-[calc(100vh-80px)] flex-col">
      <Container
        inset
        className="relative flex flex-1 flex-col justify-between gap-10 py-20"
      >
        <Heading level="1" className="max-w-4xl !leading-[1.1]">
          With any questions or just to have a coffee – feel free to{" "}
          <Tag size="xxl" align="bottom">
            Get in touch
          </Tag>
        </Heading>
        <div>
          <Body as="p" priority="secondary" className="mb-8 max-w-md">
            I am here for any questions you might have regarding my services or
            the way I work. You have the option to book a call or just get in
            touch via your prefered channel!
          </Body>
          <div className="flex items-center justify-start gap-6">
            <Button>
              <Phone />
              Book a call
            </Button>
            <Button style="outline">
              <Mail />
              Email me
            </Button>
            <Button style="outline">
              <Instagram />
              Instagram
            </Button>
            <Button style="outline">
              <Linkedin />
              LinkedIn
            </Button>
          </div>
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
        src={smartphoneImg}
        alt="Image a rendered smartphone with a call from Katharina Clasen"
        className="h-[320px] w-full object-cover"
        sizes="100vw"
        priority
      />
    </section>
  );
};
