import { cx } from "cva";
import NextLink from "next/link";
import { ReactNode, RefObject } from "react";

interface Props {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  ref?: RefObject<HTMLAnchorElement>;
}

export const Link = ({ children, href, external, className, ref }: Props) => {
  const styles = cx("underline hover:opacity-80 transition-opacity", className);
  return (
    <NextLink
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className={styles}
      ref={ref}
    >
      {children}
    </NextLink>
  );
};
