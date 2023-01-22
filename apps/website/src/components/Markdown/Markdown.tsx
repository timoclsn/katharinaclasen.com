import { cva, VariantProps } from "class-variance-authority";

export const markdownVariants = cva("font-sans prose", {
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
  },
});

interface Props extends VariantProps<typeof markdownVariants> {
  children: string;
  className?: string;
}

export const Markdown = ({
  children,
  color = "dark",
  size = "normal",
  className,
}: Props) => {
  return (
    <div
      className={markdownVariants({ color, size, className })}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
