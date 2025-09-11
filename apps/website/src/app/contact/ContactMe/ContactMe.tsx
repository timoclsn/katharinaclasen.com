import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "../../../components/Link/Link";
import { Markdown } from "../../../components/Markdown/Markdown";
import { Section } from "../../../components/Section/Section";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import {
  CALENDLY_URL,
  EMAIL,
  INSTAGRAL_URL,
  LINKEDIN_URL,
} from "../../../lib/contact";

export const ContactMe = () => {
  return (
    <Section id="contact-me" color="primary">
      <Container size="small">
        <Heading className="mb-8">Contact me</Heading>
        <Markdown family="serif" size="large" className="mb-14">
          <p>To get in touch you may:</p>
          <ul className="pl-0">
            <li className="list-none">
              💌 Send me an <Link href={`mailto:${EMAIL}`}>email</Link> ({EMAIL}
              )
            </li>
            <li className="list-none">
              📞{" "}
              <Link href={CALENDLY_URL} external>
                Book a call
              </Link>
            </li>
            <li className="list-none">
              💬 Stay in touch on{" "}
              <Link href={LINKEDIN_URL} external>
                LinkedIn
              </Link>{" "}
              or{" "}
              <Link href={INSTAGRAL_URL} external>
                Instagram
              </Link>
            </li>
          </ul>
        </Markdown>
        <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
          <Button href={CALENDLY_URL} external>
            <Phone />
            Book a call
          </Button>
          <Button style="text" href={`mailto:${EMAIL}`}>
            <Mail />
            Email me
          </Button>
          <Button style="text" href={INSTAGRAL_URL}>
            <Instagram />
            Instagram
          </Button>
          <Button style="text" href={LINKEDIN_URL}>
            <Linkedin />
            LinkedIn
          </Button>
        </div>
      </Container>
    </Section>
  );
};
