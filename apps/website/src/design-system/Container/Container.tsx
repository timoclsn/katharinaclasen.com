import { cva, VariantProps } from "cva";
import { ReactNode, RefObject } from "react";

const containerVariants = cva({
  base: "mx-auto w-full",
  variants: {
    size: {
      normal: "max-w-screen-2xl",
      small: "max-w-screen-lg",
    },
    inset: {
      true: "px-4 sm:px-8",
    },
  },
});

type ContainerVariants = VariantProps<typeof containerVariants>;

interface ComponentProps {
  children: ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
}

type Props = ComponentProps & ContainerVariants;

export const Container = ({
  children,
  size = "normal",
  inset,
  className,
  ref,
}: Props) => {
  return (
    <div className={containerVariants({ size, inset, className })} ref={ref}>
      {children}
    </div>
  );
};
