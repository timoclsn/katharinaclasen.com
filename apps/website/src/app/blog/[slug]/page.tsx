import { format } from "date-fns";
import { CalendarDays, Clock, User } from "lucide-react";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import { z } from "zod";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Container } from "../../../design-system/Container/Container";
import { queryContent } from "../../../lib/sanity";

export const generateStaticParams = async () => {
  const blogPosts = await queryContent(
    "*[_type == 'blogPost']{'slug': slug.current}",
    z.array(
      z.object({
        slug: z.string(),
      })
    )
  );

  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
};

interface Props {
  params: {
    slug: string;
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = params;
  const result = await queryContent(
    `*[_type == 'blogPost' && slug.current == '${slug}']{_id, title, 'image': {'url': image.asset->url, 'alt': image.alt}, author, date, services[]->{title}, topics[]->{title}, content}`,
    z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
        }),
        author: z.string(),
        date: z.string(),
        services: z
          .array(
            z.object({
              title: z.string(),
            })
          )
          .nullable(),
        topics: z
          .array(
            z.object({
              title: z.string(),
            })
          )
          .nullable(),
        content: z.string(),
      })
    )
  );
  const blogPost = result[0];
  const mdxContent = await serialize(blogPost.content, {
    mdxOptions: {
      development: false, // Needed because of bug in mdx lib when using next.js 13 (https://github.com/hashicorp/next-mdx-remote/issues/307)
    },
  });
  const stats = readingTime(blogPost.content);

  return (
    <article className="py-40">
      <Container size="small" inset>
        <ArticleHeader
          title={blogPost.title}
          titleImage={blogPost.image}
          metaData={[
            {
              icon: User,
              text: blogPost.author,
            },
            {
              icon: Clock,
              text: `${Math.ceil(stats.minutes)} min`,
            },
            {
              icon: CalendarDays,
              text: format(new Date(blogPost.date), "LLLL dd, yyyy"),
            },
          ]}
          tags={[
            ...(blogPost.services
              ? blogPost.services.map(
                  (service) =>
                    ({
                      outline: "solid",
                      text: service.title,
                    } as const)
                )
              : []),
            ...(blogPost.topics
              ? blogPost.topics.map(
                  (topic) =>
                    ({
                      outline: "dash",
                      text: topic.title,
                    } as const)
                )
              : []),
          ]}
        />
        <div className="prose mx-auto mt-32 max-w-none text-contrast-secondary-dark">
          <MDXContent {...mdxContent} />
        </div>
      </Container>
    </article>
  );
};

export default BlogPostPage;