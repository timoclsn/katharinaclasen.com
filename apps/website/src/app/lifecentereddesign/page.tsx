import { MyLCDProjects } from "./MyLCDProjects/MyLCDProjects";
import { Header } from "./Header/Header";
import { LcdAccordion } from "./LcdAccordion/LcdAccordion";
import { LcdJourney } from "./LcdJourney/LcdJourney";
import { LcdPrinciples } from "./LcdPrinciples/LcdPrinciples";
import { LcdThinking } from "./LcdThinking/LcdThinking";
import { WhatIsLcd } from "./WhatIsLcd/WhatIsLcd";
import { Metadata } from "next";
import { getMetadata } from "../../lib/queries";

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, description } = await getMetadata(
    "43e8e79b-aac5-4043-b968-1f34b07a74c7"
  );
  return {
    title,
    description,
  };
};

const LcdPage = () => {
  return (
    <div className="lcd-page">
      <Header />
      <WhatIsLcd />
      {/* @ts-expect-error Server Component */}
      <MyLCDProjects />
      {/* @ts-expect-error Server Component */}
      <LcdPrinciples />
      <LcdJourney />
      {/* @ts-expect-error Server Component */}
      <LcdAccordion />
      <LcdThinking />
    </div>
  );
};

export default LcdPage;
