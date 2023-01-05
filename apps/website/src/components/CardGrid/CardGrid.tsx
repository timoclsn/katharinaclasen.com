import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CardGrid = ({ children }: Props) => {
  return <ul className="flex flex-wrap justify-between gap-3">{children}</ul>;
};
