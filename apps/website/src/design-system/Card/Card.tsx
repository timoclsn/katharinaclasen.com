import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { backgroundColorsMap } from "../../lib/colors";

const cardVariants = cva("rounded-5xl relative", {
  variants: {
    inset: {
      normal: "px-8 py-10",
      large: "p-16",
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

export const Card = ({
  children,
  inset,
  color = "dark",
  border,
  className,
  customColor,
  id,
}: CardProps) => {
  return (
    <div
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
};
