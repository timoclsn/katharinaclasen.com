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
      large: "text-xl sm:text-2xl",
      xLarge: "text-2xl sm:text-3xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    style: {
      italic: "italic",
    },
    color: {
      dark: null,
      light: null,
    },
    align: {
      start: "text-start",
      center: "text-center",
      right: "text-end",
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
  as?: (typeof validElements)[number];
  className?: string;
}

export type BodyProps = ComponentProps & BodyVariants;

type ElementType = HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement;

export const Body = forwardRef<ElementType, BodyProps>(
  (
    {
      children,
      as: Element = "span",
      priority = "primary",
      family = "sans",
      size = "normal",
      weight = "normal",
      color = "dark",
      align = "start",
      style,
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
          style,
          align,
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
