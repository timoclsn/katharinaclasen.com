import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";
import projectsImg from "./assets/hero.png";
import memojiImg from "./assets/memoji.png";
import serviceUiDesign from "./assets/service-ui-design.png";
import serviceUxDesignImg from "./assets/service-ux-design.png";
import serviceUxResearchImg from "./assets/service-ux-research.png";

export const Header = () => {
  return (
    <section className="bg-background-secondary pb-28 pt-40">
      <Container inset>
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="flex w-full flex-col items-start gap-10 md:w-2/3">
            <Heading level="1">
              <Tag size="xxl">UX Design</Tag> for lasting positive{" "}
              <Tag size="xxl">experiences</Tag>
            </Heading>
            <div className="flex items-center justify-center gap-6">
              <Image
                src={memojiImg}
                alt="Memoji of Katharina Clasen"
                priority
                placeholder="blur"
              />
              <Body size="large" className="text-contrast-secondary-dark">
                Hi! I am a freelance UX Designer with 10+ years experience
                working with companies of all sizes on their digitization
                projects.
              </Body>
            </div>
            <Button>
              <ArrowRight />
              More about me
            </Button>
            <div className="flex w-full flex-col gap-6">
              <div className="flex justify-between gap-2">
                <div className="relative">
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
                <div className="relative">
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
                <div className="relative">
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
              </div>
              <div className="self-end">
                <Button style="text" size="large">
                  <ArrowRight />
                  Services
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
            />
            <Button className="absolute top-8 right-8">
              <ArrowRight />
              Find more projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
