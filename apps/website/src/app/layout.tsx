import "@fontsource/dm-sans/400-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/source-serif-4/variable.css";
import Script from "next/script";
import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import "../styles/global.css";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Script data-no-cookie data-api="/_hive" src="/bee.js" />
      <html lang="en" className="min-h-screen">
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
        <body className="flex min-h-screen flex-col">
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
