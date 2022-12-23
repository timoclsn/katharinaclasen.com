import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const tagVariants = cva(
  "font-sans font-medium flex items-center justify-center",
  {
    variants: {
      outline: {
        solid: "border-solid rounded-full",
        dash: "border-dashed rounded-full",
        none: "border-none px-0 py-0",
      },
      color: {
        dark: "border-outline-normal-dark text-contrast-primary-dark [&>svg]:text-contrast-secondary-dark",
        light:
          "border-outline-normal-light text-contrast-primary-light [&>svg]:text-contrast-secondary-light",
      },
      state: {
        deselected: "",
        selected: "",
      },
      size: {
        normal: "gap-2 [&>svg]:w-[16px] [&>svg]:h-[16px] px-4 py-1 border-2",
        large:
          "text-2xl gap-2 [&>svg]:w-[20px] [&>svg]:h-[20px] px-6 py-2 border-3",
        xl: "text-3xl gap-2 [&>svg]:w-[24px] [&>svg]:h-[24px] px-6 py-2 border-3",
        xxl: "text-5xl gap-2 [&>svg]:w-[32px] [&>svg]:h-[32px] px-6 py-2 border-4",
      },
    },

    compoundVariants: [
      {
        state: "deselected",
        color: "dark",
        class: "text-contrast-secondary-dark",
      },
      {
        state: "selected",
        color: "dark",
        class: "border-contrast-primary-dark",
      },
      {
        state: "deselected",
        color: "light",
        class: "text-contrast-secondary-light",
      },
      {
        state: "selected",
        color: "light",
        class: "border-contrast-primary-light",
      },
    ],
  }
);

const numberVaraints = cva(
  "font-serif font-normal rounded-full flex items-center justify-center px-2",
  {
    variants: {
      color: {
        dark: "text-contrast-primary-dark",
        light: "text-contrast-primary-light bg-background-secondary",
      },
      size: {
        normal: "text-base",
        large: "tetx-base",
        xl: "text-base",
        xxl: "text-3xl",
      },
    },
  }
);

type TagVariants = VariantProps<typeof tagVariants>;

interface ComponentProps {
  children: ReactNode;
  number?: number;
}

type Props = ComponentProps & TagVariants;

export const Tag = ({
  children,
  outline = "solid",
  color = "dark",
  state,
  size = "normal",
  number,
}: Props) => {
  return (
    <div className={tagVariants({ outline, color, state, size })}>
      {number !== undefined && (
        <div className={numberVaraints({ size, color })}>{number}.</div>
      )}
      {children}
    </div>
  );
};
