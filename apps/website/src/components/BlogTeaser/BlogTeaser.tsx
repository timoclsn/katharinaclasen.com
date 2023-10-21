import { format } from "date-fns";
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import Link from "next/link";
import readingTime from "reading-time";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { BlogPost } from "../../lib/queries";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { Section } from "../Section/Section";

interface Props {
  title: string;
  description: string;
  blogPosts: Array<BlogPost>;
}

export const BlogTeaser = async ({ title, description, blogPosts }: Props) => {
  const blogPostsToDisplay = blogPosts.slice(0, 2);
  return (
    <Section id="blog" color="primary">
      <Heading as="h2" level="1" className="mb-6">
        {title}
      </Heading>
      <Body as="p" size="large" priority="secondary" className="mb-16">
        {description}
      </Body>
      <ul className="grid grid-cols-1 gap-x-14 gap-y-28 md:grid-cols-2">
        {blogPostsToDisplay.map((blogPost) => {
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
