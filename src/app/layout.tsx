import { Inter, Source_Serif_4 } from "@next/font/google";
import clsx from "clsx";
import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import "../styles/global.css";

const serifFont = Source_Serif_4({
  display: "optional",
  subsets: ["latin"],
  variable: "--serif-font",
});

const sansFont = Inter({
  display: "optional",
  subsets: ["latin"],
  variable: "--sans-font",
});

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={clsx(sansFont.variable, serifFont.variable, "min-h-screen")}
    >
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
