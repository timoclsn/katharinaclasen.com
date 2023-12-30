"use client";

import { cva, cx } from "cva";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "../../design-system/Container/Container";
import { useActiveLink } from "../../hooks/useActiveLink";
import { useIsScrolled } from "../../hooks/useIsScrolled";
import styles from "./Navigation.module.css";

const title = "Katharina Clasen";

const items = [
  {
    label: "About",
    href: "/about",
    highlighted: false,
  },
  {
    label: "Projects",
    href: "/projects",
    highlighted: false,
  },
  {
    label: "Services",
    href: "/services",
    highlighted: false,
  },
  {
    label: "Life-centered Design",
    href: "/lifecentereddesign",
    highlighted: false,
  },
  {
    label: "Blog",
    href: "/blog",
    highlighted: false,
  },
  {
    label: "Contact",
    href: "/contact",
    highlighted: true,
  },
] as const;

const navigationLinkVariants = cva({
  base: "font-sans hover:opacity-80 transition-opacity",
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

const mobileNavigationLinkVariants = cva({
  base: "font-serif text-2xl sm:text-4xl w-full text-center py-4 hover:opacity-80 transition-opacity",
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

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = useActiveLink();
  const isScrolled = useIsScrolled(60);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    if (isScrolled) {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#FFFFFF");
    }
  }, [isScrolled]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className={cx(
        `sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-background-primary" : ""
        }`,
      )}
    >
      <Container inset>
        <nav role="navigation" className="py-4 sm:py-6">
          <a href="#skip" className="sr-only">
            Skip to content
          </a>

          <div className="flex items-center justify-between">
            {/* Home Link */}
            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-20 font-sans text-2xl font-medium text-contrast-primary-dark transition-opacity hover:opacity-80"
            >
              {title}
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-10 lg:flex">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={navigationLinkVariants({
                      active: isActive(item.href),
                      highlighted: item.highlighted,
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button*/}
            <button
              type="button"
              className={cx(
                "relative z-20 h-8 w-8 text-contrast-secondary-dark transition-opacity hover:opacity-80 focus:outline-none lg:hidden",
                styles.menuIcon,
              )}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">
                {isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              </span>
              <Menu data-hide={isMenuOpen} />
              <X data-hide={!isMenuOpen} />
            </button>

            {/* Mobile Menu */}
            <div
              data-open={isMenuOpen}
              className={cx(
                "mobile-nav fixed left-full top-0 z-10 h-screen w-full bg-background-primary lg:hidden",
                styles.mobileMenu,
              )}
            >
              <Container inset className="h-full w-full">
                <ul className="flex h-full flex-col items-center justify-center gap-2 sm:gap-4">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className={mobileNavigationLinkVariants({
                        active: isActive(item.href),
                        highlighted: item.highlighted,
                      })}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};
