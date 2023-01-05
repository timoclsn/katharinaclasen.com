import Link from "next/link";
import { Container } from "../../design-system/Container/Container";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Navigation = () => {
  return (
    <Container inset>
      <nav role="navigation" className="py-6">
        <a href="#skip" className="sr-only">
          Skip to content
        </a>
        <ul className="flex items-center gap-10">
          <li className="flex-1">
            <Link
              href="/"
              className="font-sans text-2xl font-medium text-contrast-primary-dark"
            >
              Katharina Clasen
            </Link>
          </li>
          <li>
            <NavigationLink href="/about">About</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/projects">Projects</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/services">Services</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/lifecentereddesign">
              Life-centered Design
            </NavigationLink>
          </li>
          <li>
            <NavigationLink href="/blog">Blog</NavigationLink>
          </li>
          <li>
            <NavigationLink highlighted href="/contact">
              Contact
            </NavigationLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
