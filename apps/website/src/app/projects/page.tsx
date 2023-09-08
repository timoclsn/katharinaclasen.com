import { groq } from "next-sanity";
import { Suspense } from "react";
import { z } from "zod";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { createGenerateMetadata, ogImage } from "../../lib/metadata";
import { contexts } from "../../lib/projects";
import { getMetadata } from "../../lib/queries";
import { queryContent } from "../../lib/sanity";
import { ProjectFilter } from "./ProjectFilter/ProjectFilter";
import { ProjectList } from "./ProjectList/ProjectList";

export const runtime = "edge";

export const generateMetadata = createGenerateMetadata(async () => {
  const {
    title,
    description,
    ogImageTitle,
    ogImageImage,
    ogImageBackgroundColor,
  } = await getMetadata("74d12002-8c85-433c-ab61-e5680554813c");
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      url: "/projects",
      siteName: "Katharina Clasen",
      description,
      images: {
        url: ogImage({
          overline: `${title} • Katharina Clasen`,
          headline: ogImageTitle,
          image: ogImageImage,
          backgroundColor: ogImageBackgroundColor,
        }),
        alt: title,
        width: 1200,
        height: 630,
      },
    },
  };
});

export type Projects = Awaited<ReturnType<typeof getProjects>>;

const getProjects = async () => {
  return await queryContent(
    groq`
      *[_type == 'project']
      {
        _id,
        title,
        'slug': slug.current,
        image{'url': asset->url, alt, border},
        context,
        'client': client->shortName,
        date,
        period,
        services[]->{title},
        topics[]->{title}
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
        context: z.enum(contexts),
        client: z.string().nullable(),
        date: z.string(),
        period: z.string().nullable(),
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
      }),
    ),
  );
};

export type Filter = z.infer<typeof filterSchema>;
const filterSchema = z.object({
  service: z.coerce.string().optional(),
  topic: z.coerce.string().optional(),
});

export type Sort = z.infer<typeof sortSchema>["sort"];
const sortSchema = z.object({
  sort: z.coerce.string().optional(),
});

interface Props {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

const ProjectsPage = async ({ searchParams = {} }: Props) => {
  const filter = filterSchema.parse(searchParams);
  const { sort } = sortSchema.parse(searchParams);

  const projects = await getProjects();

  const services = Array.from(
    new Set(
      projects
        .map((project) => {
          return project.services
            ? project.services.map((service) => service.title)
            : [];
        })
        .flat(),
    ),
  );

  const topics = Array.from(
    new Set(
      projects
        .map((project) => {
          return project.topics
            ? project.topics.map((topic) => topic.title)
            : [];
        })
        .flat(),
    ),
  );

  return (
    <div className="py-20 sm:py-32">
      <Container inset>
        <div className="mb-20">
          <Heading className="mb-6 max-w-2xl">
            Have a look at my projects, and filter them by:
          </Heading>
          <Suspense fallback={<div>Loading filters...</div>}>
            <ProjectFilter services={services} topics={topics} />
          </Suspense>
        </div>
        <ProjectList projects={projects} filter={filter} sort={sort} />
      </Container>
    </div>
  );
};

export default ProjectsPage;
