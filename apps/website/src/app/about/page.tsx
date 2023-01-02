import { AboutAccordion } from "./AboutAccordion/AboutAccordion";
import { AboutMe } from "./AboutMe/AboutMe";
import { Header } from "./Header/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <AboutAccordion />
    </>
  );
};

export default AboutPage;
