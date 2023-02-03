import { format } from "date-fns";
import { CalendarDays, Clock, User } from "lucide-react";
import { Metadata } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import readingTime from "reading-time";
import { z } from "zod";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview";
import { Container } from "../../design-system/Container/Container";
import { getMetadata } from "../../lib/queries";
import { queryContent } from "../../lib/sanity";

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, description } = await getMetadata(
    "104cc2a8-c804-44a9-a8ff-2f195a85b8be"
  );
  return {
    title,
    description,
  };
};

const BlogPage = async () => {
  const blogPosts = await queryContent(
    groq`
      *[_type == 'blogPost']
      {
        _id,
        title,
        'slug': slug.current,
        image{'url': asset->url, alt, border},
        author,
        date,
        services[]->{title},
        topics[]->{title},
        content
      } | order(date desc)
    `,
    z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        slug: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
          border: z.boolean().nullable(),
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
  return (
    <div className="py-20 sm:py-32">
      <Container inset>
        <ul className="grid grid-cols-1 gap-14">
          {blogPosts.map((blogPost) => {
            const stats = readingTime(blogPost.content);
            return (
              <li key={blogPost._id}>
                <Link href={`/blog/${blogPost.slug}`}>
                  <ArticlePreview
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
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default BlogPage;
