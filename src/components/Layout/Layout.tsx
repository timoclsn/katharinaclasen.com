import Script from "next/script";
import { ReactNode } from "react";
import { Favicons } from "../Favicons/Favicons";
import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Seo } from "../Seo/Seo";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  slug?: string;
  previewImage?: string;
}

export const Layout = ({
  children,
  title,
  description,
  slug,
  previewImage,
}: Props) => {
  const defaultTitle = "Katharina Clasen";
  const pageTitle = !title ? defaultTitle : `${title}  |  ${defaultTitle}`;
  const pageDescription = description ? description : "Katharina Clasen";
  slug = slug ? `/${slug}` : "";
  const pagePreviewImage = previewImage ? previewImage : "og-image.png";
  return (
    <>
      <Script data-no-cookie data-api="/_hive" src="/bee.js" />
      <Seo
        title={pageTitle}
        description={pageDescription}
        slug={slug}
        previewImage={pagePreviewImage}
      />
      <Favicons />
      <Navigation />
      <main id="skip" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
};
