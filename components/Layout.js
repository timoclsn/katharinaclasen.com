import Head from "next/head";

export function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  );
}
