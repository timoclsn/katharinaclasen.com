"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, cx } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { Body } from "../../design-system/Body/Body";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { backgroundColorsMap } from "../../lib/colors";
import { illustrationsMap } from "../../lib/illustrations/illustrations";
import { AccordeonItems } from "../../lib/queries";
import styles from "./Accordion.module.css";

const itemVariants = cva(
  "rounded-4xl flex flex-col lg:flex-row lg:data-[state=open]:flex-1",
  {
    variants: {
      backgroundColor: {
        ...backgroundColorsMap,
      },
    },
  }
);

interface Props {
  defaultValue?: number;
  items: AccordeonItems;
  itemsClassName?: string;
}

export const Accordion = ({
  defaultValue = 1,
  items,
  itemsClassName,
}: Props) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue={defaultValue.toString()}
      className="flex flex-col gap-3 lg:flex-row"
    >
      {items.map((item, idx) => {
        const {
          illustration,
          title,
          description,
          backgroundColor = "dark",
          color = "light",
          button,
        } = item;
        const Illustration = illustrationsMap[illustration];
        return (
          <AccordionPrimitive.Item
            key={idx}
            value={(idx + 1).toString()}
            className={itemVariants({
              backgroundColor,
              className: itemsClassName,
            })}
          >
            <AccordionPrimitive.Trigger className="flex flex-none items-center gap-5 px-10 py-8 sm:gap-10 lg:flex-col-reverse">
              <Illustration
                className={`opacity-60 ${
                  color === "dark"
                    ? "text-contrast-secondary-dark"
                    : "text-contrast-secondary-light"
                }`}
                width={75}
                height={75}
              />
              <Heading color={color} className="lg:writing-vertical">
                {title}
              </Heading>
            </AccordionPrimitive.Trigger>
            <AccordionPrimitive.Content
              className={cx(
                styles.AccordionContent,
                "overflow-hidden py-8 pr-10"
              )}
            >
              <div className="flex h-full flex-col lg:justify-end">
                <Body as="p" size="large" priority="secondary" color={color}>
                  {description}
                </Body>
                {button && (
                  <Button color={color} href={button.href} className="mt-4">
                    <ArrowRight />
                    {button.label}
                  </Button>
                )}
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        );
      })}
    </AccordionPrimitive.Root>
  );
};