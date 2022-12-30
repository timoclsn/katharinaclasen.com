import { HomeAccordion } from "./HomeAccordion/HomeAccordion";
import { Header } from "./Header/Header";
import { LcdTeaser } from "./LcdTeaser/LcdTeaser";
import { MyClients } from "../../components/MyClients/MyClients";

const Home = async () => {
  return (
    <>
      <Header />
      <HomeAccordion />
      <LcdTeaser />
      {/* @ts-expect-error Server Component */}
      <MyClients />
    </>
  );
};

export default Home;
