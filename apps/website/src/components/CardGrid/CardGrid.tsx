import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../../design-system/Button/Button";
import { Card } from "../../design-system/Card/Card";
import { Heading } from "../../design-system/Heading/Heading";
import { illustrationsMap } from "../../lib/illustrations/illustrations";
import { CardGridItems } from "../../lib/queries";
import { MDXContent } from "../MDXContent/MDXContent";

interface Props {
  items: CardGridItems;
}

export const CardGrid = ({ items }: Props) => {
  return (
    <ul className="flex flex-wrap justify-between gap-3">
      {items.map((item, idx) => {
        const {
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
        } = item;

        const Illustration = illustration
          ? illustrationsMap[illustration]
          : undefined;
        const Illustration2 = illustration2
          ? illustrationsMap[illustration2]
          : undefined;
        const isTwoCards = illustration2 || title2 || description2 || button2;
        return (
          <li
            key={idx}
            className={`w-full flex-grow ${
              isTwoCards ? "md:w-4/5 lg:w-2/4" : "md:w-2/5 lg:w-1/4"
            }`}
          >
            <Card
              color={backgroundColor}
              customColor={customBackgroundColor || undefined}
              border={border}
              className="relative flex h-full flex-col justify-between overflow-hidden"
            >
              {backgroundImage && (
                <Image
                  src={backgroundImage.url}
                  alt={backgroundImage.alt}
                  width={500}
                  height={500}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div
                className={`relative flex flex-col gap-16 px-8 pt-10 md:flex-row${
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
                      <MDXContent MDXRemoteProps={description} color={color} />
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
                        <MDXContent
                          MDXRemoteProps={description2}
                          color={color}
                        />
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
                  src={image.url}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="h-auto w-full"
                />
              )}
            </Card>
          </li>
        );
      })}
    </ul>
  );
};
