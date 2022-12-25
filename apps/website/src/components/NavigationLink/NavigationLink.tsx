"use client";

import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const navigationLinkVariants = cva(null, {
  variants: {
    active: {
      true: "underline",
    },
    highlighted: {
      true: "font-medium text-contrast-primary-dark",
      false: "text-contrast-secondary-dark",
    },
  },
});

type NavigationLinkVariants = VariantProps<typeof navigationLinkVariants>;

interface ComponentProps {
  children: ReactNode;
  href: string;
}

type Props = ComponentProps & Omit<NavigationLinkVariants, "active">;

export const NavigationLink = ({
  children,
  href,
  highlighted = false,
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(href);
  return (
    <Link
      href={href}
      className={navigationLinkVariants({ active: isActive, highlighted })}
    >
      {children}
    </Link>
  );
};
