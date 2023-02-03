import { Source_Sans_3, Source_Serif_4 } from "@next/font/google";
import { cx } from "class-variance-authority";
import { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import "../styles/global.css";
import { Providers } from "./Providers";

const serifFont = Source_Serif_4({
  display: "optional",
  subsets: ["latin"],
  variable: "--serif-font",
});

const sansFont = Source_Sans_3({
  style: ["normal", "italic"],
  display: "optional",
  subsets: ["latin"],
  variable: "--sans-font",
});

const title = "Katharina Clasen";
const description = "Website of Katharina Clasen";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Katharina Clasen",
  },
  description,
  icons: "/favicon.png",
  openGraph: {
    type: "website",
    title: {
      default: title,
      template: "%s | Katharina Clasen",
    },
    url: "https://katharinaclasen.com",
    siteName: "Katharina Clasen",
    description,
    images: {
      url: "https://katharinaclasen.com/og-image.png",
      alt: "Website of Katharina Clasen",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: title,
      template: "%s | Katharina Clasen",
    },
    description,
    site: "@KatharinaClasen",
    creator: "@KatharinaClasen",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Script data-no-cookie data-api="/_hive" src="/bee.js" />
      <html
        lang="en"
        className={cx(
          sansFont.variable,
          serifFont.variable,
          "min-h-screen",
          "bg-background-primary",
          "[&:has(.home-page)_.mobile-nav]:bg-background-secondary [&:has(.home-page)]:bg-background-secondary",
          "[&:has(.about-page)]:bg-background-red-candy [&:has(.about-page)_.mobile-nav]:bg-background-red-candy",
          "[&:has(.services-page)]:bg-background-stone lg:[&:has(.services-page)]:!bg-background-primary [&:has(.services-page)_.mobile-nav]:bg-background-stone",
          "[&:has(.lcd-page)_.mobile-nav]:bg-background-ocean-foam [&:has(.lcd-page)]:bg-background-ocean-foam",
          "[&:has(.contact-page)_.mobile-nav]:bg-background-pink-candy [&:has(.contact-page)]:bg-background-pink-candy"
        )}
      >
        <body className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Providers>
            <Navigation />
            <main id="skip" className="flex-1">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
