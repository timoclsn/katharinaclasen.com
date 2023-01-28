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
}

export const ArticlePreview = ({
  title,
  titleImage,
  metaData,
  tags,
}: Props) => {
  return (
    <div className="@container">
      <div className="flex flex-col items-start gap-8 @5xl:flex-row">
        <Image
          src={titleImage.url}
          alt={titleImage.alt}
          width={500}
          height={500}
          sizes="100vw, (min-width: 768px) 50vw"
          className={`aspect-3/2 w-full rounded-6xl object-cover @5xl:w-1/3${
            titleImage.border ? " ring-2 ring-outline-light-dark" : ""
          }`}
        />
        <div className="flex-1">
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
      </div>
    </div>
  );
};
