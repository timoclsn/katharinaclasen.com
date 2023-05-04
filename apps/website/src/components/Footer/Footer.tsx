import Link from "next/link";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { data } from "./data";

export const Footer = () => {
  return (
    <footer className="bg-background-dark pb-36 pt-20 text-contrast-primary-light">
      <Container inset>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {data.map((column, idx) => (
            <div key={idx}>
              <Link
                href={column.link}
                className="transition-opacity hover:opacity-80"
              >
                <Heading as="h2" level="4" color="light" className="mb-4">
                  {column.title}
                </Heading>
              </Link>
              <ul className="flex flex-col gap-3">
                {column.links.map((link, idx) => {
                  return (
                    <li key={idx}>
                      <Link
                        href={link.link}
                        className="flex items-center gap-2 text-contrast-secondary-light transition-opacity hover:opacity-80 [&>svg]:h-[20px] [&>svg]:w-[20px]"
                      >
                        {link.icon}
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
