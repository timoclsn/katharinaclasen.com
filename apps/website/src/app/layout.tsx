import { cx } from "class-variance-authority";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import { createGenerateMetadata } from "../lib/metadata";
import { getMetadata } from "../lib/queries";
import "../styles/global.css";
import { Providers } from "./Providers";

const serifFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--serif-font",
});

const sansFont = Source_Sans_3({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--sans-font",
});

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "3c9f2256-cc4a-4e79-bfa7-4dcda1263376"
  );
  return {
    title: {
      default: title,
      template: "%s | Katharina Clasen",
    },
    description,
    icons: "/favicon.png",
    openGraph: {
      type: "website",
      title,
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
      title,
      description,
      site: "@KatharinaClasen",
      creator: "@KatharinaClasen",
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "theme-color": "#FFFFFF",
    },
  };
});

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
          "[&:has(.home-page)]:bg-background-secondary [&:has(.home-page)_.mobile-nav]:bg-background-secondary",
          "[&:has(.about-page)]:bg-background-red-candy [&:has(.about-page)_.mobile-nav]:bg-background-red-candy",
          "[&:has(.services-page)]:bg-background-stone lg:[&:has(.services-page)]:!bg-background-primary [&:has(.services-page)_.mobile-nav]:bg-background-stone",
          "[&:has(.lcd-page)]:bg-background-ocean-foam [&:has(.lcd-page)_.mobile-nav]:bg-background-ocean-foam",
          "[&:has(.contact-page)]:bg-background-pink-candy [&:has(.contact-page)_.mobile-nav]:bg-background-pink-candy"
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
