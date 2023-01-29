import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "../../../components/Link/Link";
import { Markdown } from "../../../components/Markdown/Markdown";
import { Section } from "../../../components/Section/Section";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";

export const ContactMe = () => {
  return (
    <Section id="contact-me" color="primary">
      <Container size="small">
        <Heading className="mb-8">Contact me</Heading>
        <Markdown family="serif" size="large" className="mb-14">
          <p>To get in touch you may:</p>
          <ul className="pl-0">
            <li className="list-none">
              💌 Send me an{" "}
              <Link href="mailto:hello@katharinaclasen.com">email</Link>{" "}
              (hello@katharinaclasen.com)
            </li>
            <li className="list-none">
              📞{" "}
              <Link href="" external>
                Book a call
              </Link>
            </li>
            <li className="list-none">
              💬 Stay in touch on{" "}
              <Link href="" external>
                LinkedIn
              </Link>{" "}
              or{" "}
              <Link href="" external>
                Instagram
              </Link>
            </li>
          </ul>
        </Markdown>
        <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
          <Button>
            <Phone />
            Book a call
          </Button>
          <Button style="text">
            <Mail />
            Email me
          </Button>
          <Button style="text">
            <Instagram />
            Instagram
          </Button>
          <Button style="text">
            <Linkedin />
            LinkedIn
          </Button>
        </div>
      </Container>
    </Section>
  );
};
