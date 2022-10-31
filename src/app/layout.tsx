import { ReactNode } from "react";
import "../styles/global.css";
import "@fontsource/source-serif-4/variable.css";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className="min-h-screen">
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
