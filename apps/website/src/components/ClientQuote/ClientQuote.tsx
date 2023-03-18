import { cva, VariantProps } from "class-variance-authority";
import { Body, BodyProps } from "../../design-system/Body/Body";

const quoteVariants = cva("border-l-4 pl-3", {
  variants: {
    color: {
      salmon: "border-background-salmon",
      sun: "border-background-sun",
      lilcaExtreme: "border-background-lilac-extreme",
    },
  },
});

export interface ClientQuoteProps extends VariantProps<typeof quoteVariants> {
  text: string;
  author: string;
  size?: BodyProps["size"];
}

export const ClientQuote = ({
  text,
  author,
  size = "large",
  color = "salmon",
}: ClientQuoteProps) => {
  return (
    <div className={quoteVariants({ color })}>
      <Body as="p" family="serif" size={size} style="italic" className="mb-3">
        {text}
      </Body>
      <p className="font-sans text-sm text-contrast-secondary-dark">{author}</p>
    </div>
  );
};
