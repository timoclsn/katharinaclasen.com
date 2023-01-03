"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Accordion } from "../../../design-system/Accordion/Accordion";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import aboutMeImg from "./assets/about-me.png";
import differentiatorsImg from "./assets/differentiators.png";
import howIWorkImg from "./assets/how-i-work.png";
import philosophyImg from "./assets/philosophy.png";

export const HomeAccordion = () => {
  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Accordion type="single" defaultValue="item-1">
          <Accordion.Item
            value="item-1"
            color="blueExtreme"
            className="lg:h-[600px]"
          >
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Image src={aboutMeImg} alt="Illustration of a hand" />
              <Heading color="light" className="lg:writing-vertical">
                About me!
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" size="large" priority="secondary" color="light">
                  These are the principles that guide my thinking and doing as a
                  freelance UX Designer: Holistic approach • Challenging
                  assumptions • Learning by Doing • Viewing problems as
                  opportunities • Valueing collaboration • Being curious •
                  Life-centered Design | Empathy
                </Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item
            value="item-2"
            color="redCandy"
            className="lg:h-[600px]"
          >
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Image src={philosophyImg} alt="Illustration of a heart" />
              <Heading className="lg:writing-vertical">Philosophy</Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <div className="flex flex-col items-start gap-4">
                  <Body as="p" size="large" priority="secondary">
                    These are the principles that guide my thinking and doing as
                    a freelance UX Designer:
                  </Body>
                  <Body as="p" size="large" priority="secondary">
                    Holistic approach • Challenging assumptions • Learning by
                    Doing • Viewing problems as opportunities • Valueing
                    collaboration • Being curious • Life-centered Design |
                    Empathy
                  </Body>
                  <Button>
                    <ArrowRight />
                    Website
                  </Button>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" color="stone" className="lg:h-[600px]">
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Image
                src={differentiatorsImg}
                alt="Illustration of a lightning bolt"
              />
              <Heading className="lg:writing-vertical">Differentiators</Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" size="large" priority="secondary">
                  These are the principles that guide my thinking and doing as a
                  freelance UX Designer: Holistic approach • Challenging
                  assumptions • Learning by Doing • Viewing problems as
                  opportunities • Valueing collaboration • Being curious •
                  Life-centered Design | Empathy
                </Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4" color="dark" className="lg:h-[600px]">
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Image
                src={howIWorkImg}
                alt="Illustration of a hand and a smartphone"
              />
              <Heading color="light" className="lg:writing-vertical">
                How I work
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" size="large" priority="secondary" color="light">
                  These are the principles that guide my thinking and doing as a
                  freelance UX Designer: Holistic approach • Challenging
                  assumptions • Learning by Doing • Viewing problems as
                  opportunities • Valueing collaboration • Being curious •
                  Life-centered Design | Empathy
                </Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};
