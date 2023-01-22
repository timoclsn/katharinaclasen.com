import { VariantProps } from "class-variance-authority";
import { MDXContentVariants } from "../MDXContent/MDXContent";

interface Props extends VariantProps<typeof MDXContentVariants> {
  children: string;
  className?: string;
}

export const Markdown = ({ children, color, size, className }: Props) => {
  return (
    <div
      className={MDXContentVariants({ color, size, className })}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
