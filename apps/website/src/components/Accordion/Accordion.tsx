"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, cx, VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { Button } from "../../design-system/Button/Button";
import { Heading } from "../../design-system/Heading/Heading";
import { backgroundColorsMap } from "../../lib/colors";
import { illustrationsMap } from "../../lib/illustrations/illustrations";
import { AccordeonItems } from "../../lib/queries";
import { Markdown } from "../Markdown/Markdown";
import styles from "./Accordion.module.css";

const colorVariants = cva(null, {
  variants: {
    dark: {
      true: "text-contrast-secondary-dark",
      false: "text-contrast-secondary-light",
    },
  },
});

const itemVariants = cva(
  "rounded-3xl sm:rounded-4xl flex flex-col lg:flex-row lg:data-[state=open]:flex-1 lg:h-[600px]",
  {
    variants: {
      backgroundColor: {
        ...backgroundColorsMap,
      },
    },
  }
);

const triggerVariants = cva(
  "flex flex-none items-center gap-5 p-6 transition-opacity hover:opacity-80 sm:gap-10 sm:p-10 lg:flex-col-reverse",
  {
    variants: {
      size: {
        medium: null,
        large: "data-[state=open]:hidden",
      },
    },
  }
);

const contentVariants = cva("overflow-hidden p-6 sm:p-10", {
  variants: {
    size: {
      medium: "lg:pl-0",
      large: null,
    },
  },
});

interface Props extends VariantProps<typeof contentVariants> {
  defaultValue?: number;
  items: AccordeonItems;
}

export const Accordion = ({
  defaultValue = 1,
  items,
  size = "medium",
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
            className={itemVariants({ backgroundColor })}
          >
            <AccordionPrimitive.Trigger className={triggerVariants({ size })}>
              <Illustration
                className={colorVariants({
                  dark: color === "dark",
                  className: "opacity-60",
                })}
                width={size === "large" ? 125 : 75}
                height={size === "large" ? 125 : 75}
              />
              <Heading color={color} className="lg:writing-vertical text-start">
                {title}
              </Heading>
            </AccordionPrimitive.Trigger>
            <AccordionPrimitive.Content
              className={cx(
                "w-full",
                styles.AccordionContent,
                contentVariants({ size })
              )}
            >
              <div className="flex h-full flex-col items-start overflow-auto">
                {size === "large" && (
                  <>
                    <div className="flex w-full justify-center">
                      <Illustration
                        className={colorVariants({
                          dark: color === "dark",
                          className:
                            "mb-4 h-3/4 w-3/4 max-w-[400px] opacity-60 lg:mb-0",
                        })}
                      />
                    </div>
                    <Heading color={color}>{title}</Heading>
                  </>
                )}
                <Markdown size="normal" color={color} className="mt-auto">
                  {description}
                </Markdown>
                {button && (
                  <Button color={color} href={button.href} className="mt-10">
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
