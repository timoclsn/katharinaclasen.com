import { Icon, Link2 } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag, TagProps } from "../../design-system/Tag/Tag";

interface Props {
  title: string;
  titleImage: {
    url: string;
    alt: string;
    border?: boolean | null;
  };
  metaData?: Array<{
    icon: Icon;
    text: string;
  }>;
  tags?: Array<{
    outline: TagProps["outline"];
    text: string;
  }>;
  externalLink?: {
    label: string | null;
    href: string | null;
  };
}

export const ArticleHeader = ({
  title,
  titleImage,
  metaData,
  tags,
  externalLink,
}: Props) => {
  return (
    <div>
      <Image
        src={titleImage.url}
        alt={titleImage.alt}
        width={500}
        height={500}
        sizes="100vw"
        className={`mb-8 h-auto w-full rounded-3xl sm:rounded-6xl${
          titleImage.border ? " ring-2 ring-outline-light-dark" : ""
        }`}
        priority
      />
      {tags && (
        <div className="mb-8 flex flex-wrap items-center gap-1">
          {tags.map((tag, idx) => (
            <Tag outline={tag.outline} size="normal" key={idx}>
              {tag.text}
            </Tag>
          ))}
        </div>
      )}
      <Heading level="1" className="mb-8">
        {title}
      </Heading>
      {metaData && (
        <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
          {metaData.map((data, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <data.icon className="text-contrast-secondary-dark" />
              <Body weight="medium">{data.text}</Body>
            </div>
          ))}
        </div>
      )}
      {externalLink?.label && externalLink.href && (
        <Button href={externalLink.href} external className="mt-12">
          <Link2 />
          {externalLink.label}
        </Button>
      )}
    </div>
  );
};
