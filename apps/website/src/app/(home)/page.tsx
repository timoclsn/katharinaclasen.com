import { HomeAccordion } from "./HomeAccordion/HomeAccordion";
import { Header } from "./Header/Header";
import { LcdTeaser } from "./LcdTeaser/LcdTeaser";

const Home = async () => {
  return (
    <>
      <Header />
      <HomeAccordion />
      <LcdTeaser />
    </>
  );
};

export default Home;
