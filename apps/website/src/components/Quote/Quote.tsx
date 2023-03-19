import { ReactNode } from "react";
import { Body, BodyProps } from "../../design-system/Body/Body";

interface Props {
  children: ReactNode;
  author?: string;
  size?: BodyProps["size"];
}

export const Quote = ({ children, author, size = "large" }: Props) => {
  return (
    <div className="not-prose flex flex-col items-center justify-center">
      <div className="mt-12 mb-4 border-b-8 border-background-pink-candy text-9xl leading-[0] text-contrast-primary-dark before:content-['\201C']" />
      <figure className="max-w-[90%] sm:max-w-[80%]">
        <blockquote>
          <Body as="p" family="serif" style="italic" size={size} align="center">
            {children}
          </Body>
        </blockquote>
        <figcaption className="mt-4 text-center text-base">{` - ${author} -`}</figcaption>
      </figure>
    </div>
  );
};
