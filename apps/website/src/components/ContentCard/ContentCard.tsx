import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Card, CardProps } from "../../design-system/Card/Card";
import { Heading } from "../../design-system/Heading/Heading";
import { illustrations, Illustrations } from "../../illustrations";

interface Props {
  backgroundColor?: CardProps["color"];
  color?: "dark" | "light";
  border?: CardProps["border"];
  illustration?: Illustrations;
  title?: string;
  description?: string;
  button?: {
    label: string;
    href: string;
  };
  backgroundImage?: {
    src: string;
    alt: string;
  };
}

export const ContentCard = ({
  backgroundColor = "dark",
  color = "light",
  border = false,
  illustration,
  title,
  description,
  button,
  backgroundImage,
}: Props) => {
  const Illustration = illustration ? illustrations[illustration] : undefined;
  return (
    <Card
      color={backgroundColor}
      border={border}
      className="relative h-full overflow-hidden"
    >
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="relative flex flex-col items-start gap-10 px-8 py-10">
        <>
          {Illustration && (
            <Illustration
              className={`opacity-60 ${
                color === "light"
                  ? "text-contrast-secondary-light"
                  : "text-contrast-secondary-dark"
              }`}
              width={75}
              height={75}
            />
          )}
          <div className="flex flex-col gap-3">
            {title && (
              <Heading level="3" color={color}>
                {title}
              </Heading>
            )}
            {description && (
              <Body as="p" priority="secondary" color={color}>
                {description}
              </Body>
            )}
          </div>
          {button && (
            <Button color={color} href={button.href}>
              <ArrowRight />
              {button.label}
            </Button>
          )}
        </>
      </div>
    </Card>
  );
};
