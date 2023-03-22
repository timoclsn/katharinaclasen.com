import Image from "next/image";
import { createGenerateMetadata, ogImage } from "../../lib/metadata";
import { getMetadata } from "../../lib/queries";
import { AboutMyServices } from "./AboutMyServices/AboutMyServices";
import { Differentiators } from "./Differentiators/Differentiators";
import { Header } from "./Header/Header";
import { ServicesAccordion } from "./ServicesAccordion/ServicesAccordion";
import wireframesImg from "./wireframes.png";

export const generateMetadata = createGenerateMetadata(async () => {
  const {
    title,
    description,
    ogImageTitle,
    ogImageImage,
    ogImageBackgroundColor,
  } = await getMetadata("75ef70cb-03db-478a-a5f6-c20899229f73");
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      url: "https://katharinaclasen.com/services",
      siteName: "Katharina Clasen",
      description,
      images: {
        url: ogImage({
          overline: `${title} • Katharina Clasen`,
          headline: ogImageTitle,
          image: ogImageImage,
          backgroundColor: ogImageBackgroundColor,
        }),
        alt: title,
        width: 1200,
        height: 630,
      },
    },
  };
});

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
