import { ProjectsTeaser } from "../../../components/ProjectsTeaser/ProjectsTeaser";
import { getProjects } from "../../../lib/queries";

export const HighlightedProjects = async () => {
  const projects = await getProjects();
  const filteredProjects = projects.filter((project) => project.highlight);
  if (filteredProjects.length === 0) return null;
  return (
    <ProjectsTeaser title="My Project Highlights" projects={filteredProjects} />
  );
};
