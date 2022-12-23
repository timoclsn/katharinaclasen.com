import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";
import NextLink from "next/link";

const buttonVariants = cva(
  [
    "font-sans",
    "font-medium",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "hover:opacity-80",
    "disabled:opacity-60",
  ],
  {
    variants: {
      style: {
        solid: "",
        outline: "",
        text: "",
      },
      color: {
        dark: "",
        white: "",
      },
      size: {
        normal: [
          "text-base",
          "leading-6",
          "[&>svg]:w-[16px]",
          "[&>svg]:h-[16px]",
        ],
        large: [
          "text-2xl",
          "leading-8",
          "[&>svg]:w-[24px]",
          "[&>svg]:h-[24px]",
        ],
      },
    },

    compoundVariants: [
      {
        style: "solid",
        color: "dark",
        class: ["bg-background-dark text-contrast-primary-light", "px-6 py-3"],
      },
      {
        style: "solid",
        color: "white",
        class: [
          "bg-background-primary text-contrast-primary-dark",
          "px-6 py-3",
        ],
      },
      {
        style: "outline",
        color: "dark",
        class: [
          "ring-2 ring-contrast-primary-dark text-contrast-primary-dark",
          "px-6 py-3",
        ],
      },
      {
        style: "outline",
        color: "white",
        class: [
          "ring-2 ring-contrast-primary-white text-contrast-primary-white",
          ,
          "px-6 py-3",
        ],
      },
      {
        style: "text",
        color: "dark",
        class: ["text-contrast-primary-dark"],
      },
      {
        style: "text",
        color: "white",
        class: ["text-contrast-primary-white"],
      },
    ],
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type Link = typeof NextLink;

interface ComponentProps {
  children: ReactNode;
  as?: "button" | "a" | Link;
}

type ConditionalProps =
  | {
      type?: "button" | "submit" | "reset";
      onClick?: () => void;
      disabled?: boolean;
      href?: never;
      external?: never;
    }
  | {
      href: string;
      external?: boolean;
      type?: never;
      onClick?: never;
      disabled?: never;
    };

type Props = ComponentProps & ConditionalProps & ButtonVariants;

export const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  (
    {
      children,
      as,
      size = "normal",
      style = "solid",
      color = "dark",
      type = "button",
      onClick,
      disabled,
      href,
      external,
    },
    ref
  ) => {
    const Element = as ? as : href ? "a" : "button";
    return (
      <Element
        className={buttonVariants({ size, style, color })}
        type={Element === "button" ? type : undefined}
        onClick={onClick}
        disabled={disabled}
        // @ts-expect-error
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        ref={ref}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";
