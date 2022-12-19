import Link from "next/link";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Navigation = () => {
  return (
    <nav role="navigation">
      <a href="#skip" className="sr-only">
        Skip to content
      </a>
      <ul className="flex gap-10">
        <li className="flex-1">
          <Link href="/">Katharina Clasen</Link>
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
          <NavigationLink href="/contact">Contact</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};
