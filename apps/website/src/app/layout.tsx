import { DM_Sans, Source_Serif_4 } from "@next/font/google";
import { cx } from "class-variance-authority";
import Script from "next/script";
import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import "../styles/global.css";

const serifFont = Source_Serif_4({
  display: "optional",
  subsets: ["latin"],
  variable: "--serif-font",
});

const sansFont = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "optional",
  subsets: ["latin"],
  variable: "--sans-font",
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
        className={cx(sansFont.variable, serifFont.variable, "min-h-screen")}
      >
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicons/favicon.png" />
          <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-apple-touch.png"
          />
          <link rel="manifest" href="/favicons/manifest.webmanifest" />
        </head>
        <body className="flex min-h-screen flex-col gap-28">
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
