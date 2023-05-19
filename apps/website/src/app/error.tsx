"use client";

import { useEffect } from "react";
import { Section } from "../components/Section/Section";
import { Button } from "../design-system/Button/Button";
import { Heading } from "../design-system/Heading/Heading";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <Section>
      <Heading className="mb-8">500 – Something went wrong</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </Section>
  );
};

export default Error;
