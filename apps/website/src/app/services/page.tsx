import { Differentiators } from "./Differentiators/Differentiators";
import { Header } from "./Header/Header";
import Image from "next/image";
import wireframesImg from "./wireframes.png";
import { ServicesAccordion } from "./ServicesAccordion/ServicesAccordion";
import { AboutMyServices } from "./AboutMyServices/AboutMyServices";
import { Metadata } from "next";
import { getMetadata } from "../../lib/queries";

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, description } = await getMetadata(
    "75ef70cb-03db-478a-a5f6-c20899229f73"
  );
  return {
    title,
    description,
  };
};

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* @ts-expect-error Server Component */}
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
      {/* @ts-expect-error Server Component */}
      <AboutMyServices />
      {/* @ts-expect-error Server Component */}
      <ServicesAccordion />
    </div>
  );
};

export default ServicesPage;
