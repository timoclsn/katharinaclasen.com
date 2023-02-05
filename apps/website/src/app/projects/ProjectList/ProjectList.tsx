"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CalendarDays, Contact } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArticlePreview } from "../../../components/ArticlePreview/ArticlePreview";
import { Heading } from "../../../design-system/Heading/Heading";
import { context } from "../../../lib/projects";
import { Projects } from "../page";

interface Props {
  projects: Projects;
}

export const ProjectList = ({ projects }: Props) => {
  const [listRef] = useAutoAnimate<HTMLUListElement>();
  const searchParams = useSearchParams();
  const serviceFilter = searchParams.get("service");
  const topicFilter = searchParams.get("topic");
  const sort = searchParams.get("sort");

  const filteredProjects = projects
    .filter((project) => {
      if (!serviceFilter) return true;
      return project.services?.some(
        (service) => service.title === serviceFilter
      );
    })
    .filter((project) => {
      if (!topicFilter) return true;
      if (!project.topics) return false;
      return project.topics.some((service) => service.title === topicFilter);
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
        <ul
          ref={listRef}
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
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <Heading>No Projects found…</Heading>
      )}
    </div>
  );
};
