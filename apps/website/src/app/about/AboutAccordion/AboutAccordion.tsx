"use client";

import { ArrowRight } from "lucide-react";
import { Accordion } from "../../../design-system/Accordion/Accordion";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import {
  Bolt,
  Hand,
  Head,
  Heart,
  Phone,
} from "../../../lib/illustrations/illustrations";

export const AboutAccordion = () => {
  return (
    <section className="bg-background-primary py-32">
      <Container inset>
        <Accordion type="single" defaultValue="item-1">
          <Accordion.Item value="item-1" color="mint" className="lg:h-[600px]">
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Head
                className="text-contrast-secondary-dark opacity-60"
                width={75}
                height={75}
              />
              <Heading color="dark" className="lg:writing-vertical">
                Education
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" size="large" priority="secondary" color="dark">
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
                Lecture
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <div className="flex flex-col items-start gap-4">
                  <Body as="p" size="large" priority="secondary" color="light">
                    These are the principles that guide my thinking and doing as
                    a freelance UX Designer:
                  </Body>
                  <Body as="p" size="large" priority="secondary" color="light">
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

          <Accordion.Item
            value="item-3"
            color="redCandy"
            className="lg:h-[600px]"
          >
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Heart
                className="text-contrast-secondary-dark opacity-60"
                width={75}
                height={75}
              />
              <Heading className="lg:writing-vertical">Non-profit</Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <div className="flex flex-col items-start gap-4">
                  <Heading level="3" className="mb-4">
                    Since 2020
                  </Heading>
                  <Body as="p" size="large" priority="secondary">
                    In 2020 I co-founded the non-profit organization “Makers
                    League e.V.” in Esslingen, driving innovation and fostering
                    ideas in our local community.
                  </Body>
                  <Button>
                    <ArrowRight />
                    Website
                  </Button>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4" color="stone" className="lg:h-[600px]">
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Bolt
                className="text-contrast-secondary-dark opacity-60"
                width={75}
                height={75}
              />
              <Heading color="dark" className="lg:writing-vertical">
                Freelancing
              </Heading>
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" size="large" priority="secondary" color="dark">
                  These are the principles that guide my thinking and doing as a
                  freelance UX Designer: Holistic approach • Challenging
                  assumptions • Learning by Doing • Viewing problems as
                  opportunities • Valueing collaboration • Being curious •
                  Life-centered Design | Empathy
                </Body>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-5" color="dark" className="lg:h-[600px]">
            <Accordion.Trigger className="flex items-center gap-5 sm:gap-10 lg:flex-col-reverse">
              <Phone
                className="text-contrast-secondary-light opacity-60"
                width={75}
                height={75}
              />
              <Heading color="light" className="lg:writing-vertical">
                Sideprojects
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
