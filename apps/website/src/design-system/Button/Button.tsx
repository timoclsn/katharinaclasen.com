import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef, ReactNode } from "react";

const styles = cva(
  "font-sans font-medium inline-flex items-center justify-center gap-2 transition-transform ease-in duration-100 will-change-transform disabled:opacity-60",
  {
    variants: {
      style: {
        solid: "hover:scale-105 active:scale-95",
        outline: "ring-2 ring-inset hover:scale-105 active:scale-95",
        text: "hover:opacity-80",
      },
      color: {
        dark: null,
        light: null,
      },
      size: {
        normal: "text-base leading-6 [&>svg]:w-[16px] [&>svg]:h-[16px]",
        large: "text-2xl leading-8 [&>svg]:w-[24px] [&>svg]:h-[24px]",
      },
    },
    compoundVariants: [
      {
        style: "solid",
        color: "dark",
        className: "bg-background-dark text-contrast-primary-light px-6 py-3",
      },
      {
        style: "solid",
        color: "light",
        className: "bg-background-primary text-contrast-primary-dark px-6 py-3",
      },
      {
        style: "outline",
        color: "dark",
        className:
          "ring-contrast-primary-dark text-contrast-primary-dark px-6 py-3",
      },
      {
        style: "outline",
        color: "light",
        className:
          "ring-contrast-primary-light text-contrast-primary-light px-6 py-3",
      },
      {
        style: "text",
        color: "dark",
        className: "text-contrast-primary-dark",
      },
      {
        style: "text",
        color: "light",
        className: "text-contrast-primary-light",
      },
    ],
  },
);

type Styles = VariantProps<typeof styles>;

interface ComponentProps {
  children: ReactNode;
  className?: string;
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

export type ButtonProps = ComponentProps & ConditionalProps & Styles;

export const Button = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      size = "normal",
      style = "solid",
      color = "dark",
      type = "button",
      onClick,
      disabled,
      href,
      external,
      className,
    },
    ref,
  ) => {
    const Element = href ? Link : "button";
    return (
      <Element
        className={styles({ size, style, color, className })}
        type={Element === "button" ? type : undefined}
        onClick={onClick}
        disabled={disabled}
        href={href || ""}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        ref={ref}
      >
        {children}
      </Element>
    );
  },
);

Button.displayName = "Button";
