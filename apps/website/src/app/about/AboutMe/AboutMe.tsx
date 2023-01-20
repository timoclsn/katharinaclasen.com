import { Clipboard } from "lucide-react";
import Image from "next/image";
import { Section } from "../../../components/Section/Section";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import portraitImg from "./portrait.png";

export const AboutMe = () => {
  return (
    <Section id="about-me" color="primary">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Container inset className="flex flex-1 items-start justify-center">
          <Image src={portraitImg} alt="Portait of Katharina Clasen" />
        </Container>
        <Container inset className="flex flex-1 items-center justify-center">
          <div>
            <Heading className="mb-8">A bit about me:</Heading>
            <Body as="p" priority="secondary" family="serif" className="mb-8">
              My name is Katharina, but you can call me Katha. I live in a small
              town nearby Stuttgart Germany, mainly working with German
              companies. I have been working as a{" "}
              <Body weight="bold" priority="primary">
                freelance UX Designer
              </Body>{" "}
              for{" "}
              <Body weight="bold" priority="primary">
                10 years
              </Body>{" "}
              – and I still love it! During that time I had the pleasure to work
              an a plethora of different digital projects, from the concept and
              design of several smart home apps all the way to the redesign of a
              human machine interface. While doing that, I was able to work in
              different industries which helps me create an open mindset and be
              able to transfer learnings from one field to another.
            </Body>
            <Button>
              <Clipboard />
              My CV
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
};
