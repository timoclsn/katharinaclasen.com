import { CalendarDays, Contact } from "lucide-react";
import { groq } from "next-sanity";
import { z } from "zod";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Container } from "../../../design-system/Container/Container";
import { createGenerateMetadata, ogImage } from "../../../lib/metadata";
import { context, contexts } from "../../../lib/projects";
import { queryContent } from "../../../lib/sanity";

export const generateMetadata = createGenerateMetadata(async ({ params }) => {
  const { slug } = params;
  const project = await queryContent(
    groq`
      *[_type == 'project' && slug.current == '${slug}'][0]
      {
        title,
        summary,
        date,
        context,
        'client': client->shortName,
        'image': image.asset->url,
      }
    `,
    z.object({
      title: z.string(),
      summary: z.string().nullable(),
      date: z.string(),
      context: z.enum(contexts),
      client: z.string().nullable(),
      image: z.string(),
    }),
  );
  return {
    title: project.title,
    description: project.summary || "Project by Katharina Clasen",
    openGraph: {
      type: "website",
      title: project.title,
      authors: "Katharina Clasen",
      url: `https://katharinaclasen.com/projects/${slug}`,
      publishedTime: project.date,
      modifiedTime: project.date,
      siteName: "Katharina Clasen",
      description: project.summary || "Project by Katharina Clasen",
      images: {
        url: ogImage({
          overline: "Project • Katharina Clasen",
          headline: project.title,
          image: project.image,
          client: context(project.context, project.client || ""),
          date: new Date(project.date).getFullYear().toString(),
        }),
        alt: project.title,
        width: 1200,
        height: 630,
      },
    },
  };
});

export const generateStaticParams = async () => {
  const projects = await queryContent(
    groq`
      *[_type == 'project']
      {
        'slug': slug.current
      }`,
    z.array(
      z.object({
        slug: z.string(),
      }),
    ),
  );

  return projects.map((project) => ({
    slug: project.slug,
  }));
};

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = params;
  const project = await queryContent(
    groq`
      *[_type == 'project' && slug.current == '${slug}'][0]
      {
        _id,
        title,
        image{'url': asset->url, alt, border},
        context,
        'client': client->shortName,
        date,
        period,
        externalLink{label, href},
        services[]->{title},
        topics[]->{title},
        content
      }
    `,
    z.object({
      _id: z.string(),
      title: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
        border: z.boolean().nullable(),
      }),
      context: z.enum(contexts),
      client: z.string().nullable(),
      date: z.string(),
      period: z.string().nullable(),
      externalLink: z
        .object({
          label: z.string(),
          href: z.string(),
        })
        .nullable(),
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
  );

  return (
    <article className="py-20 sm:py-32">
      <Container size="small" inset>
        <ArticleHeader
          title={project.title}
          titleImage={project.image}
          metaData={[
            {
              icon: Contact,
              text: context(project.context, project.client || ""),
            },
            {
              icon: CalendarDays,
              text: project.period
                ? project.period
                : new Date(project.date).getFullYear().toString(),
            },
          ]}
          tags={[
            ...(project.services
              ? project.services.map(
                  (service) =>
                    ({
                      outline: "solid",
                      text: service.title,
                    }) as const,
                )
              : []),
            ...(project.topics
              ? project.topics.map(
                  (topic) =>
                    ({
                      outline: "dash",
                      text: topic.title,
                    }) as const,
                )
              : []),
          ]}
          externalLink={project.externalLink || undefined}
        />
        <MDXContent
          source={project.content}
          size="large"
          color="dark"
          className="mx-auto mt-32"
        />
      </Container>
    </article>
  );
};

export default ProjectPage;
