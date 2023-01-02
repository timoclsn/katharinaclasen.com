import { MyClients } from "../../components/MyClients/MyClients";
import { AboutAccordion } from "./AboutAccordion/AboutAccordion";
import { AboutMe } from "./AboutMe/AboutMe";
import { Header } from "./Header/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <AboutAccordion />
      {/* @ts-expect-error Server Component */}
      <MyClients />
    </>
  );
};

export default AboutPage;
