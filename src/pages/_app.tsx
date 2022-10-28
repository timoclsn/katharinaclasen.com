import "@fontsource/source-serif-4/variable.css";
import { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
