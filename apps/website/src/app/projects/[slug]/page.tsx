import { CalendarDays, Contact } from "lucide-react";
import { serialize } from "next-mdx-remote/serialize";
import { z } from "zod";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Container } from "../../../design-system/Container/Container";
import { queryContent } from "../../../lib/sanity";

export const generateStaticParams = async () => {
  const projects = await queryContent(
    "*[_type == 'project']{'slug': slug.current}",
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
    `*[_type == 'project' && slug.current == '${slug}']{_id, title, 'image': {'url': image.asset->url, 'alt': image.alt}, 'client': client->name, date, website, services[]->{title}, topics[]->{title}, content}`,
    z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
        }),
        client: z.string(),
        date: z.string(),
        website: z.string().url().nullable(),
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
    <article className="py-40">
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
              text: new Date(project.date).getFullYear().toString(),
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
          website={project.website || undefined}
        />
        <div className="prose mx-auto mt-32 max-w-none text-contrast-secondary-dark">
          <MDXContent {...mdxContent} />
        </div>
      </Container>
    </article>
  );
};

export default ProjectPage;