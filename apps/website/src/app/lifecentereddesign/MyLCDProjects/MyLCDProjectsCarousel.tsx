"use client";

import { Files, Link2 } from "lucide-react";
import Image from "next/image";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { Carousel } from "../../../components/Carousel/Carousel";
import { Markdown } from "../../../components/Markdown/Markdown";
import { Button } from "../../../design-system/Button/Button";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import { Projects } from "./MyLCDProjects";

interface Props {
  projects: Projects;
}

export const MyLCDProjectsCarousel = ({ projects }: Props) => {
  return (
    <Carousel
      items={projects}
      tag={({ item: project, selected, index }) => (
        <Tag
          size="xl"
          outline="solid"
          state={selected ? "selected" : "deselected"}
          prepend={index + 1}
        >
          {project.title}
        </Tag>
      )}
    >
      {({ item: project }) => (
        <div className="flex h-full w-full flex-col gap-12 overflow-y-auto lg:flex-row">
          <div className="flex-1">
            <Heading level="3" className="mb-6">
              {project.title}
            </Heading>
            {project.summary && (
              <Markdown size="normal">{project.summary}</Markdown>
            )}
            <ButtonGroup className="mt-16">
              {project.externalLink && (
                <Button href={project.externalLink.href} external>
                  <Link2 />
                  {project.externalLink.label}
                </Button>
              )}
              {project.slug && (
                <Button href={`/projects/${project.slug}`} style="outline">
                  <Files />
                  Case study
                </Button>
              )}
            </ButtonGroup>
          </div>
          <div className="hidden flex-1 flex-col items-start justify-center lg:flex">
            <Image
              src={project.image.url}
              alt={project.image.alt}
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </Carousel>
  );
};
