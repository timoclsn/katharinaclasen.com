import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import { serifFont } from "../lib/fonts";
import "../styles/global.css";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={`${serifFont.className} min-h-screen`}>
      <head></head>
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <main id="skip" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
