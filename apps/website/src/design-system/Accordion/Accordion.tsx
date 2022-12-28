"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, cx, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import styles from "./Accordion.module.css";

export const Accordion = ({
  className,
  ...props
}: AccordionPrimitive.AccordionSingleProps) => {
  return (
    <AccordionPrimitive.Root
      className="flex flex-col gap-3 lg:flex-row"
      {...props}
    />
  );
};

const itemVariants = cva(
  "rounded-4xl flex flex-col lg:flex-row lg:data-[state=open]:flex-1 px-10 py-8 gap-10",
  {
    variants: {
      color: {
        blueExtreme: "bg-background-blue-extreme",
        redCandy: "bg-background-red-candy",
        stone: "bg-background-stone",
        dark: "bg-background-dark",
      },
    },
  }
);

Accordion.Item = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionItemProps & VariantProps<typeof itemVariants>
>(({ className, color = "blueExtreme", ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      className={itemVariants({ color, className })}
      {...props}
      ref={ref}
    />
  );
});

Accordion.Item.displayName = "AccordionItem";

Accordion.Trigger = forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Trigger
      className={cx("flex-none", className)}
      {...props}
      ref={ref}
    />
  );
});

Accordion.Trigger.displayName = "AccordionTrigger";

Accordion.Content = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      className={cx(styles.AccordionContent, className)}
      {...props}
      ref={ref}
    />
  );
});

Accordion.Content.displayName = "AccordionContent";
