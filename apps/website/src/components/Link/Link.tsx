import { cx } from "class-variance-authority";
import NextLink from "next/link";
import { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, external, className }, ref) => {
    const styles = cx("underline hover:opacity-80", className);
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
  }
);

Link.displayName = "Link";
