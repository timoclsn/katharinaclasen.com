import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const containerVariants = cva("mx-auto w-full", {
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
}

type Props = ComponentProps & ContainerVariants;

export const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, size = "normal", inset, className }, ref) => {
    return (
      <div className={containerVariants({ size, inset, className })} ref={ref}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
