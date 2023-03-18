import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  author?: string;
}

export const Quote = ({ children, author }: Props) => {
  return (
    <figure className="not-prose">
      <blockquote className="inline-block border-l-8 border-background-secondary pl-4 font-medium italic text-contrast-primary-dark">
        <p className="before:content-['\201C'] after:content-['\201D']">
          {children}
        </p>
      </blockquote>
      {author && (
        <figcaption className="ml-2 inline-block text-base">{` – ${author}`}</figcaption>
      )}
    </figure>
  );
};
