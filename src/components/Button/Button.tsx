import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const button = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "leading-none",
    "px-6",
    "py-4",
    "whitespace-nowrap",
  ],
  {
    variants: {
      size: {
        medium: [
          "text-base",
          "leading-6",
          "[&>svg]:w-[20px]",
          "[&>svg]:h-[20px]",
        ],
        large: [
          "text-2xl",
          "leading-8",
          "[&>svg]:w-[25px]",
          "[&>svg]:h-[25px]",
        ],
      },
    },
  }
);

type ButtonProps = VariantProps<typeof button>;

interface ComponentProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  external?: boolean;
}

type Props = ComponentProps & ButtonProps;

export const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  (
    {
      children,
      size = "medium",
      type = "button",
      onClick,
      disabled,
      href,
      external,
    },
    ref
  ) => {
    const Element = href ? "a" : "button";
    return (
      <Element
        className={button({ size })}
        type={Element === "button" ? type : undefined}
        onClick={onClick}
        disabled={disabled}
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
