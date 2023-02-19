import { MyClients } from "../../components/MyClients/MyClients";
import { createGenerateMetadata } from "../../lib/metadata";
import { getMetadata } from "../../lib/queries";
import { AboutAccordion } from "./AboutAccordion/AboutAccordion";
import { AboutMe } from "./AboutMe/AboutMe";
import { Header } from "./Header/Header";
import { MyPhilosophy } from "./MyPhilosophy/MyPhilosophy";

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "013e7d69-692f-41b5-9111-7de0b7d24376"
  );
  return {
    title,
    description,
    other: {
      "theme-color": "#FAEAE9",
    },
  };
});

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* @ts-expect-error Server Component */}
      <Header />
      {/* @ts-expect-error Server Component */}
      <AboutMe />
      {/* @ts-expect-error Server Component */}
      <AboutAccordion />
      {/* @ts-expect-error Server Component */}
      <MyClients />
      {/* @ts-expect-error Server Component */}
      <MyPhilosophy />
    </div>
  );
};

export default AboutPage;
