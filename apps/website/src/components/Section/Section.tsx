import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { Container } from "../../design-system/Container/Container";
import { backgroundColorsMap } from "../../lib/colors";

const sectionVariants = cva("py-32", {
  variants: {
    color: {
      ...backgroundColorsMap,
    },
  },
});

interface Props extends VariantProps<typeof sectionVariants> {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, color, className }: Props) => {
  return (
    <section id={id} className={sectionVariants({ color, className })}>
      <Container inset>{children}</Container>
    </section>
  );
};