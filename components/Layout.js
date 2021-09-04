import Head from "next/head";

export function Layout({ children, title, description }) {
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
