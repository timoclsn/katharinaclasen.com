import { Icon } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Heading } from "../../design-system/Heading/Heading";
import { Tag, TagProps } from "../../design-system/Tag/Tag";

interface Props {
  title: string;
  titleImage: {
    url: string;
    alt: string;
  };
  metaData?: Array<{
    icon: Icon;
    text: string;
  }>;
  tags?: Array<{
    outline: TagProps["outline"];
    text: string;
  }>;
}

export const ArticlePreview = ({
  title,
  titleImage,
  metaData,
  tags,
}: Props) => {
  return (
    <div>
      <Image
        src={titleImage.url}
        alt={titleImage.alt}
        width={500}
        height={500}
        sizes="100vw, (min-width: 768px) 50vw"
        className="mb-8 h-auto w-full rounded-6xl"
      />
      <Heading className="mb-6">{title}</Heading>
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
      {tags && (
        <div className="mt-12 flex flex-wrap items-center gap-1">
          {tags.map((tag, idx) => (
            <Tag outline={tag.outline} size="normal" key={idx}>
              {tag.text}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};
