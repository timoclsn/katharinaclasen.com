import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

const validElements = ["h1", "h2", "h3", "h4", "p", "span", "strong"] as const;

const sizes = {
  medium: "text-base",
  large: "text-2xl",
} as const;

const weights = {
  normal: "font-normal",
  bold: "font-bold",
} as const;

interface Props {
  children: ReactNode;
  as?: typeof validElements[number];
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  className?: string;
}

type ElementType = HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement;

export const Text = forwardRef<ElementType, Props>(
  (
    {
      children,
      as: Element = "span",
      size = "medium",
      weight = "normal",
      className,
    },
    ref
  ) => {
    const styles = clsx("font-sans", sizes[size], weights[weight], className);
    return (
      <Element className={styles} ref={ref}>
        {children}
      </Element>
    );
  }
);

Text.displayName = "Text";
