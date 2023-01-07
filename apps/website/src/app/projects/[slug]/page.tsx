import { CalendarDays, Contact } from "lucide-react";
import { serialize } from "next-mdx-remote/serialize";
import { z } from "zod";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Container } from "../../../design-system/Container/Container";
import { queryContent } from "../../../lib/sanity";

export const generateStaticParams = async () => {
  const projects = await queryContent(
    `
      *[_type == 'project']
      {
        'slug': slug.current
      }`,
    z.array(
      z.object({
        slug: z.string(),
      })
    )
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
  const result = await queryContent(
    `
      *[_type == 'project' && slug.current == '${slug}']
      {
        _id,
        title,
        image{'url': asset->url, alt, border},
        'client': client->shortName,
        date,
        period,
        externalLink{label, href},
        services[]->{title},
        topics[]->{title},
        content
      }
    `,
    z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
          border: z.boolean().nullable(),
        }),
        client: z.string(),
        date: z.string(),
        period: z.string().nullable(),
        externalLink: z.object({
          label: z.string().nullable(),
          href: z.string().nullable(),
        }),
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
  const project = result[0];
  const mdxContent = await serialize(project.content, {
    mdxOptions: {
      development: false, // Needed because of bug in mdx lib when using next.js 13 (https://github.com/hashicorp/next-mdx-remote/issues/307)
    },
  });

  return (
    <article className="py-28">
      <Container size="small" inset>
        <ArticleHeader
          title={project.title}
          titleImage={project.image}
          metaData={[
            {
              icon: Contact,
              text: project.client,
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
                    } as const)
                )
              : []),
            ...(project.topics
              ? project.topics.map(
                  (topic) =>
                    ({
                      outline: "dash",
                      text: topic.title,
                    } as const)
                )
              : []),
          ]}
          externalLink={project.externalLink}
        />
        <MDXContent
          MDXRemoteProps={mdxContent}
          color="dark"
          className="mx-auto mt-32 max-w-none"
        />
      </Container>
    </article>
  );
};

export default ProjectPage;
