import { Differentiators } from "./Differentiators/Differentiators";
import { Header } from "./Header/Header";
import Image from "next/image";
import wireframesImg from "./wireframes.png";
import { ServicesAccordion } from "./ServicesAccordion/ServicesAccordion";
import { AboutMyServices } from "./AboutMyServices/AboutMyServices";

const ServicesPage = () => {
  return (
    <>
      <Header />
      {/* @ts-expect-error Server Component */}
      <Differentiators />
      <Image
        src={wireframesImg}
        alt="Image of hand drawn wireframes on a desk."
        className="h-[320px] w-full object-cover"
        sizes="100vw"
        priority
      />
      <AboutMyServices />
      {/* @ts-expect-error Server Component */}
      <ServicesAccordion />
    </>
  );
};

export default ServicesPage;
