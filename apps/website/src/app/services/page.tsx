import { Differentiators } from "./Differentiators/Differentiators";
import { Header } from "./Header/Header";

const ServicesPage = () => {
  return (
    <>
      <Header />
      {/* @ts-expect-error Server Component */}
      <Differentiators />
    </>
  );
};

export default ServicesPage;
