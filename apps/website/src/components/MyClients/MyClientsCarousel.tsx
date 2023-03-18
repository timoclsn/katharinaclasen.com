"use client";

import { Files, Link2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";
import { Carousel } from "../Carousel/Carousel";
import { Markdown } from "../Markdown/Markdown";
import { ClientQuote } from "../ClientQuote/ClientQuote";
import { Clients } from "./MyClients";

interface Props {
  clients: Clients;
}

export const MyClientsCarousel = ({ clients }: Props) => {
  return (
    <Carousel
      items={clients}
      tag={({ item: client, selected }) => (
        <Tag
          size="xl"
          outline="solid"
          state={selected ? "selected" : "deselected"}
          prepend={
            <Image
              src={client.logo}
              alt={`Logo of company ${client.shortName}`}
              width={100}
              height={16}
            />
          }
        >
          {client.shortName}
        </Tag>
      )}
    >
      {({ item: client }) => (
        <div className="flex h-full w-full flex-col gap-12 overflow-y-auto lg:flex-row">
          <div className="flex-1">
            <Image
              src={client.logo}
              alt={`Logo of company ${client.shortName}`}
              className="mb-10 h-[40px] w-auto"
              height={40}
              width={250}
            />

            <Heading level="3" className="mb-6">
              {client.name || client.shortName}
            </Heading>
            <Markdown size="normal">{client.description}</Markdown>
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
              <ClientQuote
                size="normal"
                text={client.quote.text}
                author={client.quote.author}
              />
            )}
          </div>
        </div>
      )}
    </Carousel>
  );
};
