import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const validElements = ["h1", "h2", "h3", "h4", "p", "span", "strong"] as const;

const bodyVariants = cva("antialiased", {
  variants: {
    priority: {
      primary: null,
      secondary: null,
      disabled: null,
    },
    family: {
      sans: "font-sans",
      serif: "font-serif",
    },
    size: {
      normal: "text-base",
      large: "text-2xl",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
    color: {
      dark: null,
      light: null,
    },
  },

  compoundVariants: [
    {
      priority: "primary",
      color: "dark",
      className: "text-contrast-primary-dark",
    },
    {
      priority: "primary",
      color: "light",
      className: "text-contrast-primary-light",
    },
    {
      priority: "secondary",
      color: "dark",
      className: "text-contrast-secondary-dark",
    },
    {
      priority: "secondary",
      color: "light",
      className: "text-contrast-secondary-light",
    },
    {
      priority: "disabled",
      color: "dark",
      className: "text-contrast-disabled-dark",
    },
    {
      priority: "disabled",
      color: "light",
      className: "text-contrast-disabled-light",
    },
  ],
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
      priority = "primary",
      family = "sans",
      size = "normal",
      weight = "normal",
      color = "dark",
      className,
    },
    ref
  ) => {
    return (
      <Element
        className={bodyVariants({
          priority,
          family,
          size,
          weight,
          color,
          className,
        })}
        ref={ref}
      >
        {children}
      </Element>
    );
  }
);

Body.displayName = "Body";
