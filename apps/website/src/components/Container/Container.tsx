import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const containerVariants = cva("mx-auto max-w-screen-2xl w-full", {
  variants: {
    inset: {
      true: "px-6 sm:px-8",
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
  ({ children, inset, className }, ref) => {
    return (
      <div className={containerVariants({ inset, className })} ref={ref}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
