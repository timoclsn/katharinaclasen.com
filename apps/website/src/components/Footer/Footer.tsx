import Link from "next/link";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { data } from "./data";

export const Footer = () => {
  return (
    <footer className="bg-background-dark pt-20 pb-36 text-contrast-primary-light">
      <Container inset>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {data.map((column, idx) => (
            <div key={idx}>
              <Heading as="h2" level="4" className="mb-4">
                {column.title}
              </Heading>
              <ul className="flex flex-col gap-3">
                {column.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 [&>svg]:h-[20px] [&>svg]:w-[20px]"
                  >
                    {link.icon}
                    <Link
                      href={link.link}
                      className="text-contrast-secondary-light"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
