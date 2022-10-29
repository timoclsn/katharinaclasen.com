import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

const validElements = ["h1", "h2", "h3", "h4", "span"] as const;
type ValidElements = typeof validElements[number];

const levels = {
  "1": "text-3xl sm:text-7xl",
  "2": "text-4xl",
  "3": "text-xl sm:text-3xl",
  "4": "text-2xl",
} as const;

interface Props {
  children: ReactNode;
  as?: ValidElements;
  level?: keyof typeof levels;
  title?: string;
  className?: string;
}

export const Heading = forwardRef<HTMLHeadingElement & HTMLSpanElement, Props>(
  ({ children, as, level = "2", title, className }, ref) => {
    const Element = as ? as : (`h${level}` as ValidElements);
    const styles = clsx("font-serif font-bold", levels[level], className);
    return (
      <Element title={title} className={styles} ref={ref}>
        {children}
      </Element>
    );
  }
);

Heading.displayName = "Heading";
