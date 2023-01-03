import { CalendarDays, Clock, Contact, User } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview";
import { Container } from "../../design-system/Container/Container";
import { queryContent } from "../../lib/sanity";
import { format } from "date-fns";
import readingTime from "reading-time";

const BlogPage = async () => {
  const blogPosts = await queryContent(
    "*[_type == 'blogPost']{_id, title, 'slug': slug.current, 'image': {'url': image.asset->url, 'alt': image.alt}, author, date, services[]->{title}, topics[]->{title}, content} | order(date desc)",
    z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        slug: z.string(),
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
  return (
    <div className="py-28">
      <Container inset>
        <section className="py-20">
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
                          text: format(
                            new Date(blogPost.date),
                            "LLLL dd, yyyy"
                          ),
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
        </section>
      </Container>
    </div>
  );
};

export default BlogPage;
