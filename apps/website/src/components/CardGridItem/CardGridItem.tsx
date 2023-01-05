import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Card, CardProps } from "../../design-system/Card/Card";
import { Heading } from "../../design-system/Heading/Heading";
import { illustrations, Illustrations } from "../../illustrations";

interface Props {
  illustration?: Illustrations;
  title?: string;
  description?: string;
  button?: {
    label: string;
    href: string;
  };
  illustration2?: Illustrations;
  title2?: string;
  description2?: string;
  button2?: {
    label: string;
    href: string;
  };
  backgroundColor?: CardProps["color"];
  customBackgroundColor?: CardProps["customColor"];
  color?: "dark" | "light";
  border?: CardProps["border"];
  backgroundImage?: {
    src: string;
    alt: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export const CardGridItem = ({
  illustration,
  title,
  description,
  button,
  illustration2,
  title2,
  description2,
  button2,
  backgroundColor = "dark",
  customBackgroundColor,
  color = "light",
  border = false,
  backgroundImage,
  image,
}: Props) => {
  const Illustration = illustration ? illustrations[illustration] : undefined;
  const Illustration2 = illustration2
    ? illustrations[illustration2]
    : undefined;
  const isTwoCards = illustration2 || title2 || description2 || button2;
  return (
    <li
      className={`w-full flex-grow ${
        isTwoCards ? "md:w-4/5 lg:w-2/4" : "md:w-2/5 lg:w-1/4"
      }`}
    >
      <Card
        color={backgroundColor}
        customColor={customBackgroundColor}
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
        <div
          className={`flex flex-col gap-16 px-8 pt-10 md:flex-row${
            image ? "" : " pb-10"
          }`}
        >
          <div className="flex flex-1 flex-col items-start gap-10">
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
          </div>
          {isTwoCards && (
            <div className="flex flex-1 flex-col items-start gap-10">
              {Illustration2 && (
                <Illustration2
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
                {title2 && (
                  <Heading level="3" color={color}>
                    {title2}
                  </Heading>
                )}
                {description2 && (
                  <Body as="p" priority="secondary" color={color}>
                    {description2}
                  </Body>
                )}
              </div>
              {button2 && (
                <Button color={color} href={button2.href}>
                  <ArrowRight />
                  {button2.label}
                </Button>
              )}
            </div>
          )}
        </div>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="h-auto w-full"
          />
        )}
      </Card>
    </li>
  );
};
