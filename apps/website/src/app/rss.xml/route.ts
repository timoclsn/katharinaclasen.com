import { Feed } from "feed";
import { groq } from "next-sanity";
import { z } from "zod";
import { markdownToHtml } from "../../lib/markdown";
import { queryContent } from "../../lib/sanity";

const name = "Katharina Clasen";
const email = "katharina@katharinaclasen.com";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;
  const buildUrl = (path: string) => `${origin}${path}`;

  const feed = new Feed({
    title: `${name} | Blog`,
    description: "My personal Blog",
    id: buildUrl(""),
    link: buildUrl(""),
    language: "en",
    favicon: `${buildUrl("")}/favicon.png`,
    copyright: name,
    feedLinks: {
      rss: `${buildUrl("")}/rss.xml`,
    },
    author: {
      name: name,
      email: email,
      link: buildUrl(""),
    },
  });

  const blogPosts = await queryContent(
    groq`
        *[_type == 'blogPost']
        {
          title,
          'slug': slug.current,
          date,
          content,
        }
      `,
    z.array(
      z.object({
        title: z.string(),
        slug: z.string(),
        date: z.string(),
        content: z.string(),
      }),
    ),
    {
      cache: "dynamic",
    },
  );

  blogPosts.forEach((blogPost) => {
    feed.addItem({
      title: blogPost.title,
      id: buildUrl(`/blog/${blogPost.slug}`),
      link: buildUrl(`/blog/${blogPost.slug}`),
      content: markdownToHtml(blogPost.content),
      author: [
        {
          name,
          email,
          link: buildUrl(""),
        },
      ],
      date: new Date(blogPost.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
