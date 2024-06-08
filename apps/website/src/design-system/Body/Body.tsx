import { cva, VariantProps } from "cva";
import { ReactNode } from "react";

const validElements = ["h1", "h2", "h3", "h4", "p", "span", "strong"] as const;

const bodyVariants = cva({
  base: "antialiased",
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
type ElementType = HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement;

interface ComponentProps {
  children: ReactNode;
  as?: (typeof validElements)[number];
  className?: string;
  ref?: React.RefObject<ElementType>;
}

export type BodyProps = ComponentProps & BodyVariants;

export const Body = ({
  children,
  as: Element = "span",
  priority = "primary",
  family = "sans",
  size = "normal",
  weight = "normal",
  color = "dark",
  style,
  className,
  ref,
}: BodyProps) => {
  return (
    <Element
      className={bodyVariants({
        priority,
        family,
        size,
        weight,
        color,
        style,
        className,
      })}
      ref={ref}
    >
      {children}
    </Element>
  );
};
