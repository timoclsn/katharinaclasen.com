import { CalendarDays, Contact, Feather } from "lucide-react";
import Link from "next/link";
import { Heading } from "../../design-system/Heading/Heading";
import { context } from "../../lib/projects";
import { Project } from "../../lib/queries";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { Section } from "../Section/Section";

interface Props {
  title: string;
  projects: Array<Project>;
}

export const ProjectsTeaser = ({ title, projects }: Props) => {
  return (
    <Section id="projects-teaser" color="primary">
      <Heading as="h2" level="1" className="mb-16">
        {title}
      </Heading>
      <ul className="grid grid-cols-1 gap-x-14 gap-y-28 md:grid-cols-2">
        {projects.map((project) => {
          return (
            <li key={project._id}>
              <Link
                href={`/projects/${project.slug}`}
                className="transition-opacity hover:opacity-80"
              >
                <ArticlePreview
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
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
