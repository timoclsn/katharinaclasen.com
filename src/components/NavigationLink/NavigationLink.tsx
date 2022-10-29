import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export const NavigationLink = ({ children, href }: Props) => {
  const { pathname } = useRouter();
  const isActive = pathname.includes(href);
  return (
    <Link href={href} className={`${isActive ? "underline" : ""}`}>
      {children}
    </Link>
  );
};
