import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import projectsImg from "./assets/hero.png";
import memojiImg from "./assets/memoji.png";
import serviceUiDesign from "./assets/service-ui-design.png";
import serviceUxDesignImg from "./assets/service-ux-design.png";
import serviceUxResearchImg from "./assets/service-ux-research.png";

export const Header = () => {
  return (
    <section className="py-28">
      <Container inset>
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="flex w-full flex-col items-start gap-10 md:w-2/3">
            <Heading level="1" className="!leading-[1.1]">
              <Tag size="xxl" align="bottom">
                UX Design
              </Tag>{" "}
              for lasting positive{" "}
              <Tag size="xxl" align="bottom">
                experiences
              </Tag>
            </Heading>
            <div className="flex items-center justify-center gap-6">
              <Image
                src={memojiImg}
                alt="Memoji of Katharina Clasen"
                priority
                placeholder="blur"
              />
              <Body as="p" size="large" priority="secondary">
                Hi! I am a freelance UX Designer with 10+ years experience
                working with companies of all sizes on their digitization
                projects.
              </Body>
            </div>
            <Button href="/about">
              <ArrowRight />
              More about me
            </Button>
            <div className="flex w-full flex-col gap-6">
              <div className="flex justify-between gap-2">
                <Link href="/services#ux-research" className="hover:opacity-80">
                  <div className="relative overflow-hidden rounded-4xl">
                    <Image
                      src={serviceUxResearchImg}
                      alt="Pattern of Icons"
                      priority
                      placeholder="blur"
                    />
                    <Heading
                      as="h2"
                      level="4"
                      className="absolute bottom-2 w-full text-center"
                    >
                      UX Research
                    </Heading>
                  </div>
                </Link>
                <Link href="/services#ux-design" className="hover:opacity-80">
                  <div className="relative overflow-hidden rounded-4xl border-2 border-outline-light-dark">
                    <Image
                      src={serviceUxDesignImg}
                      alt="Mobile app wireframes"
                      priority
                      placeholder="blur"
                    />
                    <Heading
                      as="h2"
                      level="4"
                      className="absolute bottom-2 w-full text-center"
                    >
                      UX Design
                    </Heading>
                  </div>
                </Link>
                <Link href="/services#ui-design" className="hover:opacity-80">
                  <div className="relative overflow-hidden rounded-4xl">
                    <Image
                      src={serviceUiDesign}
                      alt="Hand holding a mockup iPhone"
                      priority
                      placeholder="blur"
                    />
                    <Heading
                      as="h2"
                      level="4"
                      className="absolute bottom-2 w-full text-center"
                    >
                      UI Design
                    </Heading>
                  </div>
                </Link>
              </div>
              <div className="self-end">
                <Button style="text" size="large" href="/services">
                  <ArrowRight />
                  All Services
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={projectsImg}
              alt="Hand holding a iPhone with a app design"
              priority
              placeholder="blur"
              className="h-full w-full rounded-6xl object-cover"
            />
            <Button href="/projects" className="absolute top-8 right-8">
              <ArrowRight />
              Find more projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
