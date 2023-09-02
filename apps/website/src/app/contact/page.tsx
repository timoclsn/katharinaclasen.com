import { createGenerateMetadata, ogImage } from "../../lib/metadata";
import { getMetadata } from "../../lib/queries";
import { ContactMe } from "./ContactMe/ContactMe";
import { Header } from "./Header/Header";

export const generateMetadata = createGenerateMetadata(async () => {
  const {
    title,
    description,
    ogImageTitle,
    ogImageImage,
    ogImageBackgroundColor,
  } = await getMetadata("a7ffcb58-2923-453d-9de0-e3891de1b685");
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      url: "/contact",
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
    other: {
      "theme-color": "#F7E4F2",
    },
  };
});

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <ContactMe />
    </div>
  );
};

export default ContactPage;
