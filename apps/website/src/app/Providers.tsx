"use client";

import { LazyMotion } from "framer-motion";
import { ReactNode } from "react";

const loadFeatures = () =>
  import("../lib/motionFeatures").then((res) => res.default);

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
};
