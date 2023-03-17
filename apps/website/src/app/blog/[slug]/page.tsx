import { format } from "date-fns";
import { CalendarDays, Clock, User } from "lucide-react";
import { groq } from "next-sanity";
import readingTime from "reading-time";
import { z } from "zod";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Container } from "../../../design-system/Container/Container";
import { createGenerateMetadata } from "../../../lib/metadata";
import { queryContent } from "../../../lib/sanity";

export const generateMetadata = createGenerateMetadata(async ({ params }) => {
  const { slug } = params;
  const { title, summary, date } = await queryContent(
    groq`
      *[_type == 'blogPost' && slug.current == '${slug}'][0]
      {
        title,
        date,
        summary
      }
    `,
    z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string().nullable(),
    })
  );

  return {
    title,
    description: summary || "Blog post by Katharina Clasen",
    openGraph: {
      type: "article",
      title,
      authors: "Katharina Clasen",
      url: `https://katharinaclasen.com/${slug}`,
      publishedTime: date,
      modifiedTime: date,
      siteName: "Katharina Clasen",
      description: summary || "Blog post by Katharina Clasen",
      images: {
        url: "https://katharinaclasen.com/og-image.png",
        alt: "Website of Katharina Clasen",
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary || "Blog post by Katharina Clasen",
      site: "@KatharinaClasen",
      creator: "@KatharinaClasen",
    },
  };
});

export const generateStaticParams = async () => {
  const blogPosts = await queryContent(
    groq`
      *[_type == 'blogPost']
      {
        'slug': slug.current
      }
    `,
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
  const blogPost = await queryContent(
    groq`
      *[_type == 'blogPost' && slug.current == '${slug}'][0]
      {
        _id,
        'slug': slug.current,
        title,
        summary,
        image{'url': asset->url, alt, border},
        author,
        date,
        services[]->{title},
        topics[]->{title},
        content
      }
    `,
    z.object({
      _id: z.string(),
      slug: z.string(),
      title: z.string(),
      summary: z.string().nullable(),
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
  );

  const stats = readingTime(blogPost.content);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "BlogPosting",
      "@id": `https://katharinaclasen.com/${blogPost.slug}`,
    },
    headline: blogPost.title,
    image: [blogPost.image.url],
    datePublished: blogPost.date,
    dateModified: blogPost.date,
    author: {
      "@type": "Person",
      name: "Katharina Clasen",
    },
    publisher: {
      "@type": "Organization",
      name: "Katharina Clasen",
      logo: {
        "@type": "ImageObject",
        url: "/favicon.png",
      },
    },
    description: blogPost.summary || "Blog post by Katharina Clasen",
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <article className="py-20 sm:py-32">
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
          <MDXContent
            source={blogPost.content}
            color="dark"
            size="large"
            className="mx-auto mt-32"
          />
        </Container>
      </article>
    </>
  );
};

export default BlogPostPage;
