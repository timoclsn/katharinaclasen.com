import { ReactNode } from "react";
import { Heading } from "../../design-system/Heading/Heading";

interface Props {
  children: ReactNode;
  number: number;
}

export const NumberHeading = ({ children, number }: Props) => {
  return (
    <div className="not-prose mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-8">
      <div className="flex h-[80px] w-[80px]  flex-none items-center justify-center rounded-full bg-background-stone sm:h-[120px] sm:w-[120px]">
        <Heading as="span" level="2">
          {number}
        </Heading>
      </div>
      <Heading level="2">{children}</Heading>
    </div>
  );
};
