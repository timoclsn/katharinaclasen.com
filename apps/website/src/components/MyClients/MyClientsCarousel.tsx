"use client";

import { AnimatePresence, m, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Files, Link2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Card } from "../../design-system/Card/Card";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";
import { usePrevious } from "../../hooks/usePrevious";
import { urlForImage } from "../../lib/sanity";
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
  const [clientIndex, setClientIndex] = useState(0);

  const prevClientIndex = usePrevious(clientIndex);

  const isFirstClient = clientIndex === 0;
  const wasFristClient = prevClientIndex === 0;
  const isLastClient = clientIndex === clients.length - 1;
  const wasLastClient = prevClientIndex === clients.length - 1;

  const direction = () => {
    if (prevClientIndex === null) return 1;
    if (isFirstClient && wasLastClient) return 1;
    if (isLastClient && wasFristClient) return -1;
    return clientIndex > prevClientIndex ? 1 : -1;
  };

  const client = clients[clientIndex];

  const nextClient = () => {
    if (isLastClient) {
      setClientIndex(0);
    } else {
      setClientIndex(clientIndex + 1);
    }
  };

  const prevClient = () => {
    if (isFirstClient) {
      setClientIndex(clients.length - 1);
    } else {
      setClientIndex(clientIndex - 1);
    }
  };

  return (
    <div>
      <ul className="mb-16 flex flex-wrap gap-2">
        {clients.map((client, idx) => {
          const selected = idx === clientIndex;
          return (
            <li key={idx}>
              <button
                onClick={() => setClientIndex(idx)}
                className="hover:opacity-80"
              >
                <Tag
                  size="xl"
                  outline="solid"
                  state={selected ? "selected" : "deselected"}
                  prepend={
                    <Image
                      src={urlForImage(client.logo).url()}
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

      <Card color="primary" className="flex h-[600px] overflow-y-auto">
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={prevClient}>
          <ArrowLeft />
        </button>
        <div className="relative flex-1 overflow-x-hidden">
          <AnimatePresence initial={false} custom={direction()}>
            <m.div
              className="absolute flex h-full w-full flex-col gap-12 bg-background-primary py-16 lg:flex-row"
              key={clientIndex}
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
                <Image
                  src={urlForImage(client.logo).url()}
                  alt={`Logo of company ${client.shortName}`}
                  width={50}
                  height={50}
                  className="mb-10 h-[40px] w-auto"
                />

                <Heading level="3" className="mb-6">
                  {client.name || client.shortName}
                </Heading>
                <Body as="p" size="large" priority="secondary">
                  {client.description}
                </Body>
                {(client.caseStudy || client.website) && (
                  <div className="mt-16 flex flex-col gap-6 sm:flex-row">
                    {client.caseStudy && (
                      <Button href={client.caseStudy}>
                        <Files />
                        Case study
                      </Button>
                    )}
                    {client.website && (
                      <Button style="outline" href={client.website} external>
                        <Link2 />
                        {`${client.shortName} website`}
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col items-start justify-center">
                {client.quote && (
                  <div className="border-l-4 border-background-salmon pl-3">
                    <Body
                      as="p"
                      family="serif"
                      size="large"
                      style="italic"
                      className="mb-3"
                    >
                      {client.quote.text}
                    </Body>
                    <p className="font-sans text-sm text-contrast-secondary-dark">
                      {client.quote.author}
                    </p>
                  </div>
                )}
              </div>
            </m.div>
          </AnimatePresence>
        </div>
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={nextClient}>
          <ArrowRight />
        </button>
      </Card>
    </div>
  );
};
