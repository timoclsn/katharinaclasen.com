import { Container } from "../../../design-system/Container/Container";
import Image from "next/image";
import { Heading } from "../../../design-system/Heading/Heading";
import { Body } from "../../../design-system/Body/Body";
import earthImg from "./earth.png";

export const WhatIsLcd = () => {
  return (
    <section className="bg-background-dark py-32">
      <Container inset className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <Heading color="light">What is Life-centered Design?</Heading>
          <Body as="p" color="light" priority="secondary" family="serif">
            Life-centered Design is an emergin design thinking that considers
            all life while designing products, systems, or services. It
            acknowledges, that we live in a co-dependent system and therefor
            need to act this way. Life-centered Design is an holistic approach
            that considers the whole life-cycle of a solution, all stakeholders
            – including non-human ones – and short-term as well as long-term
            effects. There is an ever growing community that is developing and
            promoting the principles of life-centered design and creating
            practical tools to help make it applicable. One example is the
            Life-centered Design Collective we foundeed in 2022. Some tools,
            like the non-human persona, have been used and perfected quite a lot
            already, others are just being developed. If you want to stay up to
            date on resources around LCD, I want to recommend my repository
            called LifeCenteredDesign.Net
          </Body>
        </div>
        <Image
          src={earthImg}
          alt="Image of the earth from space"
          className="max-h-[500px] object-contain lg:w-1/2"
          placeholder="blur"
        />
      </Container>
    </section>
  );
};
