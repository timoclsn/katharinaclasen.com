import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { backgroundColorsMap } from "../../lib/colors";

const cardVariants = cva("rounded-5xl relative", {
  variants: {
    inset: {
      true: "px-8 py-10",
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
}

export const Card = ({
  children,
  inset,
  color,
  border,
  className,
  customColor,
}: CardProps) => {
  return (
    <div
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
};
