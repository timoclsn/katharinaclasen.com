"use client";

import { AnimatePresence, m, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Files, Link2 } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Card } from "../../design-system/Card/Card";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";
import { useCarousel } from "../../hooks/useCarousel";
import { MDXContent } from "../MDXContent/MDXContent";
import { Quote } from "../Quote/Quote";
import { Projects } from "./MyLCDProjects";

const variants: Variants = {
  enter: (direction: number) => ({
    x: `${direction * 100}%`,
  }),
  center: { x: 0 },
  exit: (direction: number) => ({
    x: `${direction * -100}%`,
  }),
};

interface Props {
  projects: Projects;
}

export const MyLCDProjectsCarousel = ({ projects }: Props) => {
  const {
    selectedItem,
    selectedItemIndex,
    setSelectedIndex,
    direction,
    nextItem,
    prevItem,
  } = useCarousel(projects);

  return (
    <div>
      <ul className="mb-16 flex flex-wrap gap-2">
        {projects.map((project, idx) => {
          const selected = idx === selectedItemIndex;
          return (
            <li key={idx}>
              <button
                onClick={() => setSelectedIndex(idx)}
                className="hover:opacity-80"
              >
                <Tag
                  size="xl"
                  outline="solid"
                  state={selected ? "selected" : "deselected"}
                  prepend={idx + 1}
                >
                  {project.title}
                </Tag>
              </button>
            </li>
          );
        })}
      </ul>

      <Card color="primary" className="flex h-[600px] overflow-y-auto">
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={prevItem}>
          <ArrowLeft />
        </button>
        <div className="relative flex-1 overflow-x-hidden">
          <AnimatePresence initial={false} custom={direction()}>
            <m.div
              className="absolute flex h-full w-full flex-col gap-12 bg-background-primary py-16 lg:flex-row"
              key={selectedItemIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction()}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
            >
              <div className="flex-1">
                <Heading level="3" className="mb-6">
                  {selectedItem.title}
                </Heading>
                {selectedItem.summary && (
                  <MDXContent
                    MDXRemoteProps={selectedItem.summary}
                    size="large"
                  />
                )}
                <div className="mt-16 flex flex-col gap-6 sm:flex-row">
                  {selectedItem.slug && (
                    <Button href={`/projects/${selectedItem.slug}`}>
                      <Files />
                      Case study
                    </Button>
                  )}
                  {selectedItem.externalLink && (
                    <Button
                      style="outline"
                      href={selectedItem.externalLink.href}
                      external
                    >
                      <Link2 />
                      {selectedItem.externalLink.label}
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-center">
                <Image
                  src={selectedItem.image.url}
                  alt={selectedItem.image.alt}
                  width={500}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
            </m.div>
          </AnimatePresence>
        </div>
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={nextItem}>
          <ArrowRight />
        </button>
      </Card>
    </div>
  );
};
