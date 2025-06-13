import { CalendarDays, Contact, Feather } from "lucide-react";
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Container } from "../../../design-system/Container/Container";
import { createGenerateMetadata, ogImage } from "../../../lib/metadata";
import { context } from "../../../lib/projects";
import { getProject, getProjects } from "../../../lib/queries";

export const generateMetadata = createGenerateMetadata(async ({ params }) => {
  const { slug } = await params;
  const project = await getProject(slug);
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
          image: project.image.url,
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
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <article className="py-20 sm:py-32">
      <Container size="small" inset>
        <ArticleHeader
          title={project.title}
          titleImage={project.image}
          metaData={[
            ...(project._id.startsWith("drafts.")
              ? [
                  {
                    icon: Feather,
                    text: "DRAFT",
                  },
                ]
              : []),
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
