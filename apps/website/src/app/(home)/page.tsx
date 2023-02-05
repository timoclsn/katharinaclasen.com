import { HomeAccordion } from "./HomeAccordion/HomeAccordion";
import { Header } from "./Header/Header";
import { LcdTeaser } from "./LcdTeaser/LcdTeaser";
import { MyClients } from "../../components/MyClients/MyClients";
import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "theme-color": "#F9F7F6",
  },
};

const Home = async () => {
  return (
    <div className="home-page">
      <Header />
      {/* @ts-expect-error Server Component */}
      <HomeAccordion />
      <LcdTeaser />
      {/* @ts-expect-error Server Component */}
      <MyClients />
    </div>
  );
};

export default Home;
