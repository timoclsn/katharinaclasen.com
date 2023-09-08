import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Section } from "../../../components/Section/Section";
import {
  getService,
  getServiceTopics,
  getTextSnippet,
} from "../../../lib/queries";
import { AboutMyServicesCard } from "./AboutMyServicesCard";
import uiDesignImg from "./ui-design.png";

const uxResearchId = "1b47fa99-2dde-4150-bf5f-51ecab11fe59";
const uxDesignId = "1a76253b-1bb2-485c-ace8-bf95a2f0ca5d";
const uiDesignId = "a01649bf-92e5-494f-ac6f-8db56650e7b8";

export const AboutMyServices = async () => {
  const { content } = await getTextSnippet(
    "54c41198-0d5c-4060-9164-6ad34d2bd7d9",
  );

  const uxResearch = await getService(uxResearchId);
  const uxResearchTopics = await getServiceTopics(uxResearchId);

  const uxDesign = await getService(uxDesignId);
  const uxDesignTopics = await getServiceTopics(uiDesignId);

  const uiDesign = await getService(uiDesignId);
  const uiDesignTopics = await getServiceTopics(uiDesignId);
  return (
    <Section id="about-my-services" color="secondary">
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex-1 pb-24">
          <MDXContent source={content} />
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
          id="ux-research"
          color="lilac"
          service={uxResearch}
          topics={uxResearchTopics}
          quoteColor="lilcaExtreme"
        />
        <AboutMyServicesCard
          id="ux-design"
          color="lilac"
          service={uxDesign}
          topics={uxDesignTopics}
          quoteColor="sun"
        />
        <AboutMyServicesCard
          id="ui-design"
          color="primary"
          service={uiDesign}
          topics={uiDesignTopics}
        />
      </div>
    </Section>
  );
};
