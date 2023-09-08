import { format } from "date-fns";
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { groq } from "next-sanity";
import Link from "next/link";
import readingTime from "reading-time";
import { z } from "zod";
import { ArticlePreview } from "../../../components/ArticlePreview/ArticlePreview";
import { Section } from "../../../components/Section/Section";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Heading } from "../../../design-system/Heading/Heading";
import { queryContent } from "../../../lib/sanity";

export const BlogTeaser = async () => {
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
      } | order(date desc)[0..1]
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
            }),
          )
          .nullable(),
        topics: z
          .array(
            z.object({
              title: z.string(),
            }),
          )
          .nullable(),
        content: z.string(),
      }),
    ),
  );
  return (
    <Section id="blog" color="primary">
      <Heading as="h2" level="1" className="mb-6">
        Blog
      </Heading>
      <Body as="p" size="large" priority="secondary" className="mb-16">
        Irregular writing on UX Design, Life-centered Design, and more...
      </Body>
      <ul className="grid grid-cols-1 gap-x-14 gap-y-28 md:grid-cols-2">
        {blogPosts.map((blogPost) => {
          const stats = readingTime(blogPost.content);
          return (
            <li key={blogPost._id}>
              <Link
                href={`/blog/${blogPost.slug}`}
                className="transition-opacity hover:opacity-80"
              >
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
                            }) as const,
                        )
                      : []),
                    ...(blogPost.topics
                      ? blogPost.topics.map(
                          (topic) =>
                            ({
                              outline: "dash",
                              text: topic.title,
                            }) as const,
                        )
                      : []),
                  ]}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex md:justify-end">
        <Button href="/blog" className="mt-16" style="solid">
          <ArrowRight />
          More Blog Posts
        </Button>
      </div>
    </Section>
  );
};
