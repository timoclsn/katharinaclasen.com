import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const cardVariants = cva("", {
  variants: {
    inset: {
      true: "px-8 py-10",
    },
    color: {
      blueExtreme: "bg-background-blue-extreme",
      redCandy: "bg-background-red-candy",
      stone: "bg-background-stone",
      dark: "bg-background-dark",
    },
  },
});

interface Props extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, inset, color, className }: Props) => {
  return (
    <div className={cardVariants({ inset, color, className })}>{children}</div>
  );
};
