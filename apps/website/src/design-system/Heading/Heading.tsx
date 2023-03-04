import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const validElements = ["h1", "h2", "h3", "h4", "span"] as const;
type ValidElements = (typeof validElements)[number];

const headingVariants = cva("font-serif antialiased font-semilight", {
  variants: {
    color: {
      dark: "text-contrast-primary-dark",
      light: "text-contrast-primary-light",
    },
    level: {
      "1": "text-5xl sm:text-7xl",
      "2": "text-3xl sm:text-5xl",
      "3": "text-2xl sm:text-3xl",
      "4": "text-lg sm:text-2xl",
      "5": "text-base",
    },
  },
});

type HeadingVariants = VariantProps<typeof headingVariants>;
interface CompoenntProps {
  children: ReactNode;
  as?: ValidElements;
  title?: string;
  className?: string;
}

type Props = CompoenntProps & HeadingVariants;

export const Heading = forwardRef<HTMLHeadingElement & HTMLSpanElement, Props>(
  ({ children, as, level = "2", color = "dark", title, className }, ref) => {
    const Element = as ? as : (`h${level}` as ValidElements);
    return (
      <Element
        title={title}
        className={headingVariants({ color, level, className })}
        ref={ref}
      >
        {children}
      </Element>
    );
  }
);

Heading.displayName = "Heading";
