import { usePathname } from "next/navigation";

export const useActiveLink = () => {
  const pathname = usePathname();
  return (href: string) => pathname === href || pathname?.includes(`${href}/`);
};