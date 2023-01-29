import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const tagVariants = cva(
  "font-sans font-medium inline-flex items-center justify-center",
  {
    variants: {
      outline: {
        solid: "border-solid rounded-full",
        dash: "border-dashed rounded-full",
        none: "border-none",
      },
      color: {
        dark: "border-outline-normal-dark text-contrast-primary-dark [&>svg]:text-contrast-secondary-dark",
        light:
          "border-outline-normal-light text-contrast-primary-light [&>svg]:text-contrast-secondary-light",
      },
      state: {
        deselected: null,
        selected: null,
      },
      size: {
        normal: "text-base gap-2 [&>svg]:w-[16px] [&>svg]:h-[16px] border-2",
        large:
          "text-lg sm:text-2xl gap-2 [&>svg]:w-[20px] [&>svg]:h-[20px] border-3",
        xl: "text-xl sm:text-3xl gap-2 [&>svg]:w-[24px] [&>svg]:h-[24px] border-3",
        xxl: "text-3xl sm:text-5xl gap-2 [&>svg]:w-[32px] [&>svg]:h-[32px] border-4",
      },
      align: {
        baseline: "align-baseline",
        bottom: "align-bottom",
      },
    },

    compoundVariants: [
      {
        state: "deselected",
        color: "dark",
        className: "text-contrast-secondary-dark",
      },
      {
        state: "selected",
        color: "dark",
        className: "border-contrast-primary-dark",
      },
      {
        state: "deselected",
        color: "light",
        className: "text-contrast-secondary-light",
      },
      {
        state: "selected",
        color: "light",
        className: "border-contrast-primary-light",
      },
      {
        outline: ["solid", "dash"],
        size: "normal",
        className: "px-4 py-1",
      },
      {
        outline: ["solid", "dash"],
        size: ["large", "xl", "xxl"],
        className: "px-4 py-1 sm:px-6 sm:py-2",
      },
    ],
  }
);

type TagVariants = VariantProps<typeof tagVariants>;

const prependVariants = cva(
  "font-serif font-normal rounded-full flex items-center justify-center text-contrast-primary-dark [&>img]:w-auto leading-none",
  {
    variants: {
      color: {
        dark: "bg-background-primary",
        light: "bg-background-secondary",
      },
      size: {
        normal: "text-base [&>img]:h-[14px] px-3 py-0.5",
        large: "tetx-base [&>img]:h-[16px] px-3 py-1",
        xl: "text-base [&>img]:h-[16px] px-4 py-1.5",
        xxl: "text-3xl [&>img]:h-[24px] px-4 py-2",
      },
    },
  }
);

interface ComponentProps {
  children: ReactNode;
  prepend?: number | ReactNode;
}

export type TagProps = ComponentProps & TagVariants;

export const Tag = ({
  children,
  outline = "solid",
  color = "dark",
  state,
  size = "normal",
  align = "baseline",
  prepend,
}: TagProps) => {
  return (
    <span className={tagVariants({ outline, color, state, size, align })}>
      {prepend !== undefined && (
        <div className={prependVariants({ size, color })}>
          {prepend}
          {typeof prepend === "number" && "."}
        </div>
      )}
      {children}
    </span>
  );
};
