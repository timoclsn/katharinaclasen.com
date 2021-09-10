import Head from "next/head";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

export function Layout({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script async data-no-cookie data-api="/_hive" src="/bee.js" />
      </Head>
      <main>{children}</main>
    </>
  );
}
