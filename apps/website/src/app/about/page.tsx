import { MyClients } from "../../components/MyClients/MyClients";
import { AboutAccordion } from "./AboutAccordion/AboutAccordion";
import { AboutMe } from "./AboutMe/AboutMe";
import { Header } from "./Header/Header";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <AboutMe />
      <AboutAccordion />
      {/* @ts-expect-error Server Component */}
      <MyClients />
    </div>
  );
};

export default AboutPage;
