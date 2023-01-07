import Image from "next/image";
import { Body } from "../../../design-system/Body/Body";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { getService, getServiceTopics } from "../../../lib/queries";
import { AboutMyServicesCard } from "./AboutMyServicesCard";
import uiDesignImg from "./ui-design.png";

const uxResearchId = "1b47fa99-2dde-4150-bf5f-51ecab11fe59";
const uxDesignId = "1a76253b-1bb2-485c-ace8-bf95a2f0ca5d";
const uiDesignId = "a01649bf-92e5-494f-ac6f-8db56650e7b8";

export const AboutMyServices = async () => {
  const uxResearch = await getService(uxResearchId);
  const uxResearchTopics = await getServiceTopics(uxResearchId);

  const uxDesign = await getService(uxDesignId);
  const uxDesignTopics = await getServiceTopics(uiDesignId);

  const uiDesign = await getService(uiDesignId);
  const uiDesignTopics = await getServiceTopics(uiDesignId);
  return (
    <section className="bg-background-secondary py-32">
      <Container inset>
        <div className="lg_flex-row flex flex-col gap-12">
          <div className="flex-1 pb-24">
            <Heading className="mb-8">About my services</Heading>
            <Body as="p" priority="secondary">
              My services can best be summarized with the term User Experience
              Design. Starting from UX Research – either to discover new
              insights or to test and later optimize solutions – all the way to
              UI Design, including the creation of Design Systems. My clients
              get almost all the skills and knowledge they need for improving or
              developing new digital experiences from one source.
              <br />
              <br />
              This also means that my clients will only have one contact person
              for all these different topics. I combine a lot of interdepending
              skills and knowledge and therefore can accopmany them along the
              whole digital project and transfer knowledge from one part (e.g.
              the UX Research) to another (e.g. UX Design or UI Design). This is
              especially important in the often rather complex projects I am
              working on, because information can quickly get lost or it would
              at least be really time consuming to make sure that everybody is
              always on the same page.
              <br />
              <br />
              My clients also enjoy the high amoint of flexibility I bring to
              the table, as I can be added to their team only when they need my
              specific skillset and the amount of experience from different
              projects I offer. I am also happy to get the feedback that my work
              is of high quality and developers enjoy working with me as I am
              open to their feedback.
            </Body>
          </div>
          <div className="flex-1 pl-20 pr-20 lg:pl-0">
            <Image
              src={uiDesignImg}
              alt="Hands holding a iPad Pro showing a UI Design"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <AboutMyServicesCard
            color="lilac"
            service={uxResearch}
            topics={uxResearchTopics}
          />
          <AboutMyServicesCard
            color="lilac"
            service={uxDesign}
            topics={uxDesignTopics}
            quoteColor="sun"
          />
          <AboutMyServicesCard
            color="primary"
            service={uiDesign}
            topics={uiDesignTopics}
          />
        </div>
      </Container>
    </section>
  );
};
