import { ContactMe } from "./ContactMe/ContactMe";
import { Header } from "./Header/Header";

export const metadata = {
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
