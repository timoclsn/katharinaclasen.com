import { CalendarDays, Contact } from "lucide-react";
import Link from "next/link";
import { ArticlePreview } from "../../../components/ArticlePreview/ArticlePreview";
import { AutoAnimate } from "../../../components/AutoAnimate/AutoAnimate";
import { Heading } from "../../../design-system/Heading/Heading";
import { context } from "../../../lib/projects";
import { Filter, Projects, Sort } from "../page";

interface Props {
  projects: Projects;
  filter?: Filter;
  sort?: Sort;
}

export const ProjectList = ({ projects, filter, sort }: Props) => {
  const filteredProjects = projects
    .filter((project) => {
      if (!filter?.service || filter.service === "all") return true;
      return project.services?.some(
        (service) => service.title === filter.service,
      );
    })
    .filter((project) => {
      if (!filter?.topic || filter.topic === "all") return true;
      if (!project.topics) return false;
      return project.topics.some((service) => service.title === filter.topic);
    })
    .sort((a, b) => {
      if (sort === "dateAsc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sort === "title") {
        return a.title.localeCompare(b.title);
      }
      // No sort or "dateDesc"
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div>
      {filteredProjects.length > 0 ? (
        <AutoAnimate
          as="ul"
          className="grid grid-cols-1 gap-x-14 gap-y-28 md:grid-cols-2"
        >
          {filteredProjects.map((project) => {
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
        </AutoAnimate>
      ) : (
        <Heading>No Projects found…</Heading>
      )}
    </div>
  );
};
