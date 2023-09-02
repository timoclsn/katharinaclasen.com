import { MyClients } from "../../components/MyClients/MyClients";
import { createGenerateMetadata } from "../../lib/metadata";
import { BlogTeaser } from "./BlogTeaser/BlogTeaser";
import { Header } from "./Header/Header";
import { HomeAccordion } from "./HomeAccordion/HomeAccordion";
import { LcdTeaser } from "./LcdTeaser/LcdTeaser";

export const generateMetadata = createGenerateMetadata(async () => ({
  other: {
    "theme-color": "#F9F7F6",
  },
}));

const Home = async () => {
  return (
    <div className="home-page">
      <Header />
      <HomeAccordion />
      <LcdTeaser />
      <BlogTeaser />
      <MyClients />
    </div>
  );
};

export default Home;
