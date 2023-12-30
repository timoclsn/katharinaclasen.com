import { cx } from "cva";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className }: Props) => {
  return (
    <div
      className={cx(
        "flex w-full flex-col flex-wrap gap-4 sm:flex-row",
        className,
      )}
    >
      {children}
    </div>
  );
};
