"use client";

import { ArrowRight } from "lucide-react";
import { Accordion } from "../../../design-system/Accordion/Accordion";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Bolt, Hand, Heart, Phone } from "../../../illustrations";

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
              <Hand
                className="text-contrast-secondary-light opacity-60"
                width={75}
                height={75}
              />
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
              <Heart
                className="text-contrast-secondary-dark opacity-60"
                width={75}
                height={75}
              />
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
              <Bolt
                className="text-contrast-secondary-dark opacity-60"
                width={75}
                height={75}
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
              <Phone
                className="text-contrast-secondary-light opacity-60"
                width={75}
                height={75}
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
