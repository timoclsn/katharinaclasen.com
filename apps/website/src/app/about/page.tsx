import { MyClients } from "../../components/MyClients/MyClients";
import { AboutAccordion } from "./AboutAccordion/AboutAccordion";
import { AboutMe } from "./AboutMe/AboutMe";
import { Header } from "./Header/Header";
import { MyPhilosophy } from "./MyPhilosophy/MyPhilosophy";

export const metadata = {
  title: "About",
  description: "About Katharina Clasen",
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
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
