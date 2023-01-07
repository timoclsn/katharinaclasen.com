import Image from "next/image";
import { MDXContent } from "../../../components/MDXContent/MDXContent";
import { Quote, QuoteProps } from "../../../components/Quote/Quote";
import { Card, CardProps } from "../../../design-system/Card/Card";
import { Heading } from "../../../design-system/Heading/Heading";
import { Tag } from "../../../design-system/Tag/Tag";
import { Service, ServiceTopics } from "../../../lib/queries";

interface Props {
  color?: CardProps["color"];
  quoteColor?: QuoteProps["color"];
  service: Service;
  topics?: ServiceTopics;
}

export const AboutMyServicesCard = ({
  color,
  quoteColor,
  service,
  topics,
}: Props) => {
  const { title, description, quote, image } = service;
  return (
    <Card color={color} inset className="relative overflow-hidden">
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="lg_flex-row relative flex flex-col gap-12">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col gap-6">
            <Heading level="3">{title}</Heading>
            {description && (
              <MDXContent MDXRemoteProps={description} className="max-w-none" />
            )}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col gap-10">
            {quote && (
              <Quote
                text={quote.text}
                author={quote.author}
                color={quoteColor}
              />
            )}
            {topics && (
              <ul className="flex flex-wrap gap-1">
                {topics.map((topic, idx) => (
                  <Tag key={idx} size="normal" outline="dash">
                    {topic.title}
                  </Tag>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
