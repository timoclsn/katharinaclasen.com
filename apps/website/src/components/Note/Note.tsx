import { VariantProps, cva } from "cva";
import { ReactNode } from "react";

const variants = cva({
  base: "not-prose bg-background-secondary bg-[linear-gradient(transparent_calc(100%_-_1px),#CBCAC7)] bg-[length:1px_32px] px-6 py-8 sm:bg-[length:1px_40px] sm:py-10 sm:px-8 my-10",
  variants: {
    pull: {
      true: "md:float-left md:mr-8 md:mb-8 md:max-w-[50%] xl:-ml-32",
    },
  },
});

interface Props extends VariantProps<typeof variants> {
  children: ReactNode;
  source?: string;
}

export const Note = ({ children, source, pull }: Props) => {
  return (
    <div className={variants({ pull })}>
      <div className="my-2 h-4 w-[20%] bg-background-pink-candy sm:my-3" />
      <p className="font-serif text-xl italic leading-8 text-contrast-primary-dark sm:text-3xl sm:leading-10">
        {children}
      </p>
      {source && (
        <div className="flex justify-end text-lg font-[375] leading-8 text-contrast-secondary-dark sm:text-xl sm:leading-10">
          <p className="max-w-[50%]">{source}</p>
        </div>
      )}
    </div>
  );
};
