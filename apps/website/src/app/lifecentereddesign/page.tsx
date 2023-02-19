import { createGenerateMetadata } from "../../lib/metadata";
import { getMetadata } from "../../lib/queries";
import { Header } from "./Header/Header";
import { LcdAccordion } from "./LcdAccordion/LcdAccordion";
import { LcdJourney } from "./LcdJourney/LcdJourney";
import { LcdPrinciples } from "./LcdPrinciples/LcdPrinciples";
import { LcdThinking } from "./LcdThinking/LcdThinking";
import { MyLCDProjects } from "./MyLCDProjects/MyLCDProjects";
import { WhatIsLcd } from "./WhatIsLcd/WhatIsLcd";

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "43e8e79b-aac5-4043-b968-1f34b07a74c7"
  );
  return {
    title,
    description,
    other: {
      "theme-color": "#E2E5F5",
    },
  };
});

const LcdPage = () => {
  return (
    <div className="lcd-page">
      {/* @ts-expect-error Server Component */}
      <Header />
      {/* @ts-expect-error Server Component */}
      <WhatIsLcd />
      {/* @ts-expect-error Server Component */}
      <MyLCDProjects />
      {/* @ts-expect-error Server Component */}
      <LcdPrinciples />
      {/* @ts-expect-error Server Component */}
      <LcdJourney />
      {/* @ts-expect-error Server Component */}
      <LcdAccordion />
      {/* @ts-expect-error Server Component */}
      <LcdThinking />
    </div>
  );
};

export default LcdPage;
