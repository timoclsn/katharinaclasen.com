import { VariantProps } from "class-variance-authority";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import { HTMLProps } from "react";
import { Heading } from "../../design-system/Heading/Heading";
import { InfoBox } from "../InfoBox/InfoBox";
import { markdownVariants } from "../Markdown/Markdown";

interface Props extends VariantProps<typeof markdownVariants> {
  source: MDXRemoteProps["source"];
  className?: string;
}

export const MDXContent = ({
  source,
  color = "dark",
  size = "normal",
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
    h1: (props: HTMLProps<HTMLHeadingElement>) => (
      <Heading level="1" color={color}>
        {props.children!}
      </Heading>
    ),
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
    <div className={markdownVariants({ color, size, className })}>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={source} components={components} />
    </div>
  );
};
