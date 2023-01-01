import { CalendarDays, Contact, Link2 } from "lucide-react";
import Image from "next/image";
import { z } from "zod";
import { Body } from "../../../design-system/Body/Body";
import { Button } from "../../../design-system/Button/Button";
import { Container } from "../../../design-system/Container/Container";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import { queryContent } from "../../../lib/sanity";
import { serialize } from "next-mdx-remote/serialize";
import { MDXContent } from "../../../components/MDXContent/MDXContent";

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
        <Image
          src={project.image.url}
          alt={project.image.alt}
          width={500}
          height={500}
          sizes="100vw"
          className="mb-8 h-auto w-full rounded-6xl"
          priority
        />
        {(project.services || project.topics) && (
          <div className="mb-8 flex flex-wrap items-center gap-1">
            {project.services?.map((service, idx) => {
              return (
                <Tag size="normal" key={idx}>
                  {service.title}
                </Tag>
              );
            })}
            {project.topics?.map((topic, idx) => {
              return (
                <Tag size="normal" outline="dash" key={idx}>
                  {topic.title}
                </Tag>
              );
            })}
          </div>
        )}
        <Heading level="1" className="mb-8">
          {project.title}
        </Heading>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
          <div className="flex items-center gap-2">
            <Contact className="text-contrast-secondary-dark" />
            <Body weight="medium">{project.client}</Body>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="text-contrast-secondary-dark" />
            <Body weight="medium">{new Date(project.date).getFullYear()}</Body>
          </div>
        </div>
        {project.website && (
          <Button href={project.website} external className="mt-12">
            <Link2 />
            Website
          </Button>
        )}
        <div className="prose mx-auto mt-32 max-w-none text-contrast-secondary-dark">
          <MDXContent {...mdxContent} />
        </div>
      </Container>
    </article>
  );
};

export default ProjectPage;
