import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PullQuote = ({ children }: Props) => {
  return (
    <div className="not-prose mr-8 mb-8 sm:float-left sm:max-w-[50%] xl:-ml-32">
      <div className="mb-4 h-8 w-1/2 bg-background-secondary" />
      <p className="font-serif text-2xl font-semibold text-contrast-primary-dark sm:text-3xl">
        {children}
      </p>
    </div>
  );
};
