import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const markdownVariants = cva(
  "prose font-normal prose-headings:font-semilight",
  {
    variants: {
      color: {
        light:
          "text-contrast-secondary-light prose-headings:text-contrast-primary-light",
        dark: "text-contrast-secondary-dark prose-headings:text-contrast-primary-dark",
      },
      size: {
        normal: "text-base leading-6",
        large: "text-2xl leading-8",
      },
      family: {
        sans: "font-sans prose-headings:font-serif",
        serif: "font-serif prose-headings:font-serif",
      },
    },
  }
);

export interface MarkdownProps extends VariantProps<typeof markdownVariants> {
  children: string | ReactNode;
  className?: string;
}

export const Markdown = ({
  children,
  color = "dark",
  size = "normal",
  family = "sans",
  className,
}: MarkdownProps) => {
  return (
    <div
      className={markdownVariants({ color, size, family, className })}
      {...(typeof children === "string"
        ? { dangerouslySetInnerHTML: { __html: children } }
        : { children })}
    />
  );
};