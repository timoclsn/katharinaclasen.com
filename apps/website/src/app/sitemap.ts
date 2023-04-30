import { groq } from "next-sanity";
import { queryContent } from "../lib/sanity";
import { z } from "zod";

const sitemap = async () => {
  const origin = "https://katharinaclasen.com";
  const buildUrl = (path: string) => `${origin}${path}`;

  const pages = [
    "/",
    "/about",
    "/projects",
    "/services",
    "/lifecentereddesign",
    "/blog",
    "/contact",
    "/imprint",
    "/privacy-policy",
  ];

  const projects = await queryContent(
    groq`
      *[_type == 'project']
      {
        'slug': slug.current,
      }
    `,
    z.array(
      z.object({
        slug: z.string(),
      })
    ),
    {
      cache: "dynamic",
    }
  );

  projects.forEach((project) => {
    pages.push(`/projects/${project.slug}`);
  });

  const blogPosts = await queryContent(
    groq`
      *[_type == 'blogPost']
      {
        'slug': slug.current,
      }
    `,
    z.array(
      z.object({
        slug: z.string(),
      })
    ),
    {
      cache: "dynamic",
    }
  );

  blogPosts.forEach((blogPost) => {
    pages.push(`/blog/${blogPost.slug}`);
  });

  return pages.map((page) => ({
    url: buildUrl(page),
    lastModified: new Date(),
  }));
};

export default sitemap;
