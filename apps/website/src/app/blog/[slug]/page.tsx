import { format } from "date-fns";
import { CalendarDays, Clock, Feather, User } from "lucide-react";
import readingTime from "reading-time";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { StructuredData } from "../../../components/StructuredData/StructuredData";
import { Container } from "../../../design-system/Container/Container";
import { createGenerateMetadata, ogImage } from "../../../lib/metadata";
import { getBlogPost, getBlogPosts } from "../../../lib/queries";

export const generateMetadata = createGenerateMetadata(async ({ params }) => {
  const { slug } = await params;
  const { title, summary, date, image, content } = await getBlogPost(slug);
  const stats = readingTime(content);

  return {
    title,
    description: summary || "Blog post by Katharina Clasen",
    openGraph: {
      type: "article",
      title,
      authors: "Katharina Clasen",
      url: `https://katharinaclasen.com/blog/${slug}`,
      publishedTime: date,
      modifiedTime: date,
      siteName: "Katharina Clasen",
      description: summary || "Blog post by Katharina Clasen",
      images: {
        url: ogImage({
          overline: "Blog • Katharina Clasen",
          headline: title,
          image: image.url,
          readingTime: `${Math.ceil(stats.minutes)} min`,
          date: format(new Date(date), "LLLL dd, yyyy"),
        }),
        alt: title,
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
  const blogPosts = await getBlogPosts();
  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
};

interface Props {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);
  const stats = readingTime(blogPost.content);
  return (
    <>
      <StructuredData type="Article">
        {{
          "@context": "https://schema.org",
          "@type": "Article",
          mainEntityOfPage: {
            "@type": "BlogPosting",
            "@id": `https://katharinaclasen.com/blog/${blogPost.slug}`,
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
        }}
      </StructuredData>
      <article className="py-20 sm:py-32">
        <Container size="small" inset>
          <ArticleHeader
            title={blogPost.title}
            titleImage={blogPost.image}
            metaData={[
              ...(blogPost._id.startsWith("drafts.")
                ? [
                    {
                      icon: Feather,
                      text: "DRAFT",
                    },
                  ]
                : []),
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
