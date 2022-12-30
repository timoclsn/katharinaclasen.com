"use client";

import { ArrowLeft, ArrowRight, Files, Link2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Card } from "../../design-system/Card/Card";
import { Container } from "../../design-system/Container/Container";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag } from "../../design-system/Tag/Tag";
import { clients } from "./clients";

export const MyClients = () => {
  const [clientIndex, setClientIndex] = useState(0);
  const client = clients[clientIndex];

  const logoPath = (shortName: string) =>
    `/clients/${shortName.toLowerCase().split(" ").join("-")}.png`;

  const nextClient = () => {
    if (clientIndex === clients.length - 1) {
      setClientIndex(0);
    } else {
      setClientIndex(clientIndex + 1);
    }
  };

  const prevClient = () => {
    if (clientIndex === 0) {
      setClientIndex(clients.length - 1);
    } else {
      setClientIndex(clientIndex - 1);
    }
  };

  return (
    <section className="bg-background-secondary py-32">
      <Container inset>
        <Heading as="h2" level="1" className="mb-6">
          My Clients
        </Heading>
        <Body as="p" size="large" priority="secondary" className="mb-16">
          Some of the clients I have or had the pleasure of working with
        </Body>
        <ul className="mb-16 flex flex-wrap gap-2">
          {clients.map((client, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => setClientIndex(idx)}
                  className="hover:opacity-80"
                >
                  <Tag
                    size="xl"
                    outline="solid"
                    state={idx === clientIndex ? "selected" : "deselected"}
                    prepend={
                      <Image
                        src={logoPath(client.shortName)}
                        alt={`Logo of ${client.shortName}`}
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

        <Card color="primary" className="flex">
          <button
            className="px-4 hover:opacity-80 lg:px-10"
            onClick={prevClient}
          >
            <ArrowLeft />
          </button>
          <div className="flex flex-1 flex-col gap-12 py-16 lg:flex-row">
            <div className="flex-1">
              <Image
                src={logoPath(client.shortName)}
                alt={`Logo of ${client.shortName}`}
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
          </div>
          <button
            className="px-4 hover:opacity-80 lg:px-10"
            onClick={nextClient}
          >
            <ArrowRight />
          </button>
        </Card>
      </Container>
    </section>
  );
};
