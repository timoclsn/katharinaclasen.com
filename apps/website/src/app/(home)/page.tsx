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
      {/* @ts-expect-error Server Component */}
      <Header />
      {/* @ts-expect-error Server Component */}
      <HomeAccordion />
      {/* @ts-expect-error Server Component */}
      <LcdTeaser />
      {/* @ts-expect-error Server Component */}
      <BlogTeaser />
      {/* @ts-expect-error Server Component */}
      <MyClients />
    </div>
  );
};

export default Home;
