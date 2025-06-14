import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import { HTMLProps, JSX } from "react";
import { Heading } from "../../design-system/Heading/Heading";
import { ContentBox } from "../ContentBox/ContentBox";
import { Link } from "../Link/Link";
import { Markdown, MarkdownProps } from "../Markdown/Markdown";
import { Note } from "../Note/Note";
import { NumberHeading } from "../NumberHeading/NumberHeading";
import { Quote } from "../Quote/Quote";
import { MdxButton } from "../MdxButton/MdxButton";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

interface Props extends Omit<MarkdownProps, "children"> {
  source: MDXRemoteProps["source"];
}

export const MDXContent = ({
  source,
  color = "dark",
  size = "normal",
  family = "sans",
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
              className="h-auto w-full"
              sizes="100vw"
            />
            <figcaption className="text-right text-base">
              {child.props.title}
            </figcaption>
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
          className="h-auto w-full"
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
    a: (props: HTMLProps<HTMLAnchorElement>) => (
      <Link href={props.href ?? ""} external={props.target === "_blank"}>
        {props.children}
      </Link>
    ),
    NumberHeading,
    ContentBox,
    Quote,
    Note,
    Button: MdxButton,
    ButtonGroup,
  };

  return (
    <Markdown color={color} size={size} family={family} className={className}>
      <MDXRemote source={source} components={components as any} />
    </Markdown>
  );
};
