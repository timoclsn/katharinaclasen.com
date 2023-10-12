import { cx } from "class-variance-authority";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { draftMode } from "next/headers";
import Script from "next/script";
import { ReactNode } from "react";
import { DraftModeBanner } from "../components/DraftModeBanner/DraftModeBanner";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import { createGenerateMetadata, ogImage } from "../lib/metadata";
import { getMetadata } from "../lib/queries";
import "../styles/global.css";

export const generateMetadata = createGenerateMetadata(async () => {
  const { title, description } = await getMetadata(
    "3c9f2256-cc4a-4e79-bfa7-4dcda1263376",
  );
  return {
    metadataBase: new URL("https://katharinaclasen.com"),
    title: {
      default: title,
      template: "%s • Katharina Clasen",
    },
    description,
    icons: "/favicon.png",
    openGraph: {
      type: "website",
      title,
      url: "/",
      siteName: "Katharina Clasen",
      description,
      images: {
        url: ogImage(),
        alt: title,
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
    alternates: {
      types: {
        "application/rss+xml": "/rss.xml",
      },
    },
    other: {
      "theme-color": "#FFFFFF",
    },
  };
});

const serifFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--serif-font",
});

const sansFont = Source_Sans_3({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--sans-font",
});

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const isDraftMode = draftMode().isEnabled;
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
          "[&:has(.contact-page)]:bg-background-pink-candy [&:has(.contact-page)_.mobile-nav]:bg-background-pink-candy",
        )}
      >
        <body className="relative flex min-h-screen flex-col overflow-x-hidden">
          {isDraftMode && <DraftModeBanner />}
          <Navigation />
          <main id="skip" className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
