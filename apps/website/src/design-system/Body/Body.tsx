import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const validElements = ["h1", "h2", "h3", "h4", "p", "span", "strong"] as const;

const bodyVariants = cva("font-sans antialiased", {
  variants: {
    size: {
      normal: "text-base",
      large: "text-2xl",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
    special: {
      true: "font-serif",
    },
  },
});

type BodyVariants = VariantProps<typeof bodyVariants>;

interface ComponentProps {
  children: ReactNode;
  as?: typeof validElements[number];
  className?: string;
}

type Props = ComponentProps & BodyVariants;

type ElementType = HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement;

export const Body = forwardRef<ElementType, Props>(
  (
    {
      children,
      as: Element = "span",
      size = "normal",
      weight = "normal",
      special,
      className,
    },
    ref
  ) => {
    return (
      <Element
        className={bodyVariants({ size, weight, special, className })}
        ref={ref}
      >
        {children}
      </Element>
    );
  }
);

Body.displayName = "Body";
