import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  inset?: boolean;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, inset, className }, ref) => {
    const styles = clsx(
      "mx-auto max-w-screen-2xl w-full",
      inset && "px-6 sm:px-8",
      className
    );
    return (
      <div className={styles} ref={ref}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
