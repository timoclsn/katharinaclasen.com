import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import { getTextSnippet } from "../../../lib/queries";
import projectsImg from "./hero.png";
import memojiImg from "./memoji.png";
import serviceUiDesign from "./service-ui-design.png";
import serviceUxDesignImg from "./service-ux-design.png";
import serviceUxResearchImg from "./service-ux-research.png";

export const Header = async () => {
  const { content } = await getTextSnippet(
    "32e5e0f0-a6fc-444f-96c5-86119e3f2204"
  );
  return (
    <section className="overflow-hidden bg-background-secondary py-20 sm:py-32">
      <Container inset>
        <div className="flex flex-col gap-14 lg:flex-row">
          <div className="flex w-full flex-col items-start gap-10 lg:w-3/5">
            <Heading level="1" className="!leading-[1.2]">
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
                className="h-auto w-[100px] animate-in fade-in slide-in-from-left-1/3 duration-500 ease-in-out"
              />
              <Body as="p" size="large" priority="secondary">
                {content}
              </Body>
            </div>
            <Button href="/about">
              <ArrowRight />
              More about me
            </Button>
            <div className="flex w-full flex-col gap-6">
              <div className="flex gap-2">
                <a
                  href="/services#ux-research"
                  className="group relative flex-1 overflow-hidden rounded-3xl transition-opacity hover:opacity-80 sm:rounded-4xl"
                >
                  <Image
                    src={serviceUxResearchImg}
                    alt="Pattern of Icons"
                    priority
                    className="h-auto w-full"
                  />
                  <Heading
                    as="h2"
                    level="4"
                    className="absolute bottom-2 w-full px-2 text-center transition-transform duration-100 ease-in group-hover:-translate-y-1 group-hover:scale-105 group-active:-translate-y-1 group-active:scale-95"
                  >
                    UX Research
                  </Heading>
                </a>
                <a
                  href="/services#ux-design"
                  className="group relative flex-1 overflow-hidden rounded-3xl transition-opacity hover:opacity-80 sm:rounded-4xl"
                >
                  <Image
                    src={serviceUiDesign}
                    alt="Hand holding a mockup iPhone"
                    priority
                    className="h-auto w-full"
                  />
                  <Heading
                    as="h2"
                    level="4"
                    className="absolute bottom-2 w-full text-center transition-transform duration-100 ease-in group-hover:-translate-y-1 group-hover:scale-105 group-active:-translate-y-1 group-active:scale-95"
                  >
                    UX Design
                  </Heading>
                </a>
                <a
                  href="/services#ui-design"
                  className="group relative flex-1 overflow-hidden rounded-3xl border-2 border-outline-light-dark transition-opacity hover:opacity-80 sm:rounded-4xl"
                >
                  <Image
                    src={serviceUxDesignImg}
                    alt="Mobile app wireframes"
                    priority
                    className="h-auto w-full"
                  />
                  <Heading
                    as="h2"
                    level="4"
                    className="absolute bottom-2 w-full text-center transition-transform duration-100 ease-in group-hover:-translate-y-1 group-hover:scale-105 group-active:-translate-y-1 group-active:scale-95"
                  >
                    UI Design
                  </Heading>
                </a>
              </div>
              <div className="self-end">
                <Button style="text" size="large" href="/services">
                  <ArrowRight />
                  All Services
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:w-2/5">
            <Image
              src={projectsImg}
              alt="Hand holding a iPhone with a app design"
              priority
              className="aspect-4/3 h-full w-full rounded-3xl object-cover sm:rounded-6xl lg:aspect-auto"
            />
            <Button
              href="/projects"
              className="absolute bottom-4 right-4 sm:top-8 sm:right-8 sm:bottom-auto"
            >
              <ArrowRight />
              Find more projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
