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
import { Clients } from "./MyClients";

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
  clients: Clients;
}

export const MyClientsCarousel = ({ clients }: Props) => {
  const {
    selectedItem,
    selectedItemIndex,
    setSelectedIndex,
    direction,
    nextItem,
    prevItem,
  } = useCarousel(clients);

  return (
    <div>
      <ul className="mb-16 flex flex-wrap gap-2">
        {clients.map((client, idx) => {
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
                  prepend={
                    <Image
                      src={client.logo}
                      alt={`Logo of company ${client.shortName}`}
                      width={50}
                      height={50}
                    />
                  }
                >
                  {client.shortName}
                </Tag>
              </button>
            </li>
          );
        })}
      </ul>

      <Card color="primary" className="flex h-[600px]">
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
              <div className="flex-1 overflow-y-auto">
                <Image
                  src={selectedItem.logo}
                  alt={`Logo of company ${selectedItem.shortName}`}
                  width={50}
                  height={50}
                  className="mb-10 h-[40px] w-auto"
                />

                <Heading level="3" className="mb-6">
                  {selectedItem.name || selectedItem.shortName}
                </Heading>
                <MDXContent
                  MDXRemoteProps={selectedItem.description}
                  size="large"
                />
                {(selectedItem.caseStudy || selectedItem.website) && (
                  <div className="mt-16 flex flex-col gap-6 sm:flex-row">
                    {selectedItem.caseStudy && (
                      <Button href={selectedItem.caseStudy}>
                        <Files />
                        Case study
                      </Button>
                    )}
                    {selectedItem.website && (
                      <Button
                        style="outline"
                        href={selectedItem.website}
                        external
                      >
                        <Link2 />
                        {`${selectedItem.shortName} website`}
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col items-start justify-center">
                <div className="overflow-y-auto">
                  {selectedItem.quote && (
                    <Quote
                      text={selectedItem.quote.text}
                      author={selectedItem.quote.author}
                    />
                  )}
                </div>
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
