import { groq } from "next-sanity";
import { z } from "zod";
import { queryContent } from "../../lib/sanity";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;
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
    )
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
    )
  );

  blogPosts.forEach((blogPost) => {
    pages.push(`/blog/${blogPost.slug}`);
  });

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${buildUrl(page)}</loc>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
