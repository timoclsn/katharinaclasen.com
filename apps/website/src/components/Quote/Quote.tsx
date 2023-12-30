import { VariantProps, cva } from "cva";
import { ReactNode } from "react";

const variants = cva({
  base: "font-serif italic text-contrast-primary-dark text-center",
  variants: {
    size: {
      large: "text-xl sm:text-2xl",
      xLarge: "text-2xl sm:text-3xl",
    },
  },
});

interface Props extends VariantProps<typeof variants> {
  children: ReactNode;
  author?: string;
}

export const Quote = ({ children, author, size = "large" }: Props) => {
  return (
    <div className="not-prose my-10 flex flex-col items-center justify-center">
      <div className="mb-4 mt-12 border-b-8 border-background-pink-candy text-9xl leading-[0] text-contrast-primary-dark before:content-['\201C']" />
      <figure className="max-w-[90%] sm:max-w-[80%]">
        <blockquote>
          <p className={variants({ size })}>{children}</p>
        </blockquote>
        <figcaption className="mt-4 text-center text-base font-[375]">{` - ${author} -`}</figcaption>
      </figure>
    </div>
  );
};
