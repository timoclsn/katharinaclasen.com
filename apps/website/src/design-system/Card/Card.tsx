import { cva, VariantProps } from "cva";
import { forwardRef, ReactNode } from "react";
import { backgroundColorsMap } from "../../lib/colors";

const cardVariants = cva({
  base: "rounded-3xl sm:rounded-5xl relative",
  variants: {
    inset: {
      normal: "px-6 py-8 sm:px-8 sm:py-10",
      large: "p-6 sm:p-16",
    },
    color: {
      ...backgroundColorsMap,
    },
    border: {
      true: "ring-2 ring-outline-light-dark ring-inset",
    },
  },
});

export interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
  customColor?: string;
  id?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { children, inset, color = "dark", border, className, customColor, id },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        id={id}
        className={cardVariants({
          inset,
          color: !customColor ? color : undefined,
          border,
          className,
        })}
        style={{
          backgroundColor: customColor,
        }}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
