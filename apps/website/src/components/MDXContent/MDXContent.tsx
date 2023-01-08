"use client";

import { cva, VariantProps } from "class-variance-authority";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Image from "next/image";
import { HTMLProps } from "react";
import { Heading } from "../../design-system/Heading/Heading";
import { InfoBox } from "../InfoBox/InfoBox";

const MDXContentVariants = cva("font-sans prose", {
  variants: {
    color: {
      light: "text-contrast-secondary-light",
      dark: "text-contrast-secondary-dark",
    },
    size: {
      normal: "text-base leading-6",
      large: "text-2xl leading-8",
    },
  },
});
interface Props extends VariantProps<typeof MDXContentVariants> {
  MDXRemoteProps: MDXRemoteProps;
  className?: string;
}

export const MDXContent = ({
  MDXRemoteProps,
  color,
  size,
  className,
}: Props) => {
  const components = {
    p: (props: HTMLProps<HTMLParagraphElement>) => {
      // If child is image and has title, strip p tag and wrap with figure tag
      const child = props.children as JSX.Element;
      if (child?.type?.name === "img" && child?.props?.title) {
        return (
          <figure>
            <Image
              src={child.props.src}
              alt={child.props.alt}
              width={1000}
              height={1000}
              className="h-auto w-full rounded-6xl"
              sizes="100vw"
            />
            <figcaption className="text-right">{child.props.title}</figcaption>
          </figure>
        );
      }
      return <p>{props.children}</p>;
    },
    img: (props: HTMLProps<HTMLImageElement>) => {
      return (
        <Image
          src={props.src!}
          alt={props.alt!}
          width={1000}
          height={1000}
          className="h-auto w-full rounded-6xl"
          sizes="100vw"
        />
      );
    },
    h2: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading level="2" color={color}>
        {props.children!}
      </Heading>
    ),
    h3: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading level="3" color={color}>
        {props.children!}
      </Heading>
    ),
    h4: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading level="4" color={color}>
        {props.children!}
      </Heading>
    ),
    h5: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading level="5" color={color}>
        {props.children!}
      </Heading>
    ),
    InfoBox,
  };

  return (
    <div className={MDXContentVariants({ color, size, className })}>
      <MDXRemote {...MDXRemoteProps} components={components} />
    </div>
  );
};
