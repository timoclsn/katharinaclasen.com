"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export const NavigationLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  return (
    <Link href={href} className={`${isActive ? "underline" : ""}`}>
      {children}
    </Link>
  );
};
