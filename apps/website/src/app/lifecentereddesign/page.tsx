import { MyLCDProjects } from "./MyLCDProjects/MyLCDProjects";
import { Header } from "./Header/Header";
import { LcdAccordion } from "./LcdAccordion/LcdAccordion";
import { LcdJourney } from "./LcdJourney/LcdJourney";
import { LcdPrinciples } from "./LcdPrinciples/LcdPrinciples";
import { LcdThinking } from "./LcdThinking/LcdThinking";
import { WhatIsLcd } from "./WhatIsLcd/WhatIsLcd";

export const metadata = {
  title: "Life-centered Design",
  description: "Life-centered Design from Katharina Clasen",
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
