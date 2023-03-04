import { createGenerateMetadata } from "../../lib/metadata";
import { getMetadata } from "../../lib/queries";
import { ContactMe } from "./ContactMe/ContactMe";
import { Header } from "./Header/Header";

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "a7ffcb58-2923-453d-9de0-e3891de1b685"
  );
  return {
    title,
    description,
    other: {
      "theme-color": "#F7E4F2",
    },
  };
});

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* @ts-expect-error Server Component */}
      <Header />
      <ContactMe />
    </div>
  );
};

export default ContactPage;
