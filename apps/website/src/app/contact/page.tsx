import { Metadata } from "next";
import { ContactMe } from "./ContactMe/ContactMe";
import { Header } from "./Header/Header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Katharina Clasen",
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <ContactMe />
    </div>
  );
};

export default ContactPage;
