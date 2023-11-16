import { z } from "zod";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { createGenerateMetadata, ogImage } from "../../lib/metadata";
import { getMetadata, getProjects } from "../../lib/queries";
import { HighlightedProjects } from "./HighlightedProjects/HighlightedProjects";
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
  const filteredProjects = projects.filter((project) => !project.hidden);

  const services = Array.from(
    new Set(
      filteredProjects
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
      filteredProjects
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
      <HighlightedProjects />
      <Container inset>
        <div className="mb-20">
          <Heading className="mb-6 max-w-2xl">
            Have a look at my projects, and filter them by:
          </Heading>
          <ProjectFilter services={services} topics={topics} />
        </div>
        <ProjectList projects={filteredProjects} filter={filter} sort={sort} />
      </Container>
    </div>
  );
};

export default ProjectsPage;
