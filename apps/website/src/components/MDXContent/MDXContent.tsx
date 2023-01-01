"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Image from "next/image";
import { HTMLProps } from "react";
import { Heading } from "../../design-system/Heading/Heading";
import { InfoBox } from "../InfoBox/InfoBox";

const components = {
  img: (props: HTMLProps<HTMLImageElement>) => (
    <Image
      src={props.src!}
      alt={props.alt!}
      width={1000}
      height={1000}
      className="h-auto w-full rounded-6xl"
      sizes="100vw"
    />
  ),
  h2: (props: HTMLProps<HTMLHeadingElement>) => (
    <span className="not-prose">
      <Heading level="2">{props.children!}</Heading>
    </span>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <span className="not-prose">
      <Heading level="3">{props.children!}</Heading>
    </span>
  ),
  h4: (props: HTMLProps<HTMLHeadingElement>) => (
    <span className="not-prose">
      <Heading level="4">{props.children!}</Heading>
    </span>
  ),
  h5: (props: HTMLProps<HTMLHeadingElement>) => (
    <span className="not-prose">
      <Heading level="5">{props.children!}</Heading>
    </span>
  ),
  InfoBox,
};

export const MDXContent = (props: MDXRemoteProps) => {
  return <MDXRemote {...props} components={components} />;
};
