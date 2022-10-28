import { ReactNode } from "react";
import "../styles/global.css";
import "@fontsource/source-serif-4/variable.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head></head>
      <body className="font-serif">{children}</body>
    </html>
  );
}
