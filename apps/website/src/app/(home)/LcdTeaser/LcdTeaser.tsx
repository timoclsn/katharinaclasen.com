import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import earthImg from "./assets/earth.png";

export const LcdTeaser = () => {
  return (
    <section className="bg-background-dark py-32">
      <Container inset className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={earthImg}
          alt="Image of the earth from space"
          className="max-h-[500px] object-contain lg:w-1/2"
          placeholder="blur"
        />
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <Heading color="light">Life-centered Design</Heading>
          <Body as="p" color="light" priority="secondary" family="serif">
            I am very passionate about Life-centered Design, as I strongly
            believe that it is the future of design. For a couple of years now,
            I have been doing several activities in that space, starting from
            weaving it into my lecture to launching the LifeCenteredDesign.Net
            hub as well as co-founding the Life-centered Design Collective. If
            you like to find out more, please visit the page I dedicated to this
            topic by clicking on the button below. Reach out if you have
            questions or want to collaborate!
          </Body>
          <Button color="white">
            <ArrowRight />
            More about Life-centered Design
          </Button>
        </div>
      </Container>
    </section>
  );
};