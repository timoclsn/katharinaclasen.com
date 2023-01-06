import { defineField } from "sanity";
import { backgroundColors, colors } from "../lib/colors";
import { illustrations } from "../lib/illustration";

export const cardGridItemGroups = [
  {
    name: "content",
    title: "Content",
  },
  {
    name: "content2",
    title: "Content 2",
  },
  {
    name: "visual",
    title: "Visual",
  },
];

export const cardGridItemFields = [
  defineField({
    name: "illustration",
    title: "Illustration",
    type: "string",
    options: {
      list: illustrations,
    },
    group: "content",
  }),
  defineField({
    name: "title",
    title: "Titel",
    type: "string",
    group: "content",
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "text",
    group: "content",
  }),
  defineField({
    name: "button",
    title: "Button",
    type: "object",
    fields: [
      defineField({
        name: "label",
        title: "Label",
        type: "string",
        validation: (Rule) =>
          Rule.custom((label, context) => {
            // @ts-expect-error
            const href = context.document.button.href;
            if (!label && href) return "Required!";
            return true;
          }),
      }),
      defineField({
        name: "href",
        title: "Link",
        type: "string",
        validation: (Rule) =>
          Rule.custom((href, context) => {
            // @ts-expect-error
            const label = context.document.button.label;
            if (!href && label) return "Required!";
            return true;
          }),
      }),
    ],
    group: "content",
  }),
  defineField({
    name: "illustration2",
    title: "Illustration 2",
    type: "string",
    options: {
      list: illustrations,
    },
    group: "content2",
  }),
  defineField({
    name: "title2",
    title: "Titel 2",
    type: "string",
    group: "content2",
  }),
  defineField({
    name: "description2",
    title: "Description 2",
    type: "text",
    group: "content2",
  }),
  defineField({
    name: "button2",
    title: "Button 2",
    type: "object",
    fields: [
      defineField({
        name: "label2",
        title: "Label 2",
        type: "string",
        validation: (Rule) =>
          Rule.custom((label2, context) => {
            // @ts-expect-error
            const href2 = context.document.button2.href2;
            if (!label2 && href2) return "Required!";
            return true;
          }),
      }),
      defineField({
        name: "href2",
        title: "Link 2",
        type: "string",
        validation: (Rule) =>
          Rule.custom((href2, context) => {
            // @ts-expect-error
            const label2 = context.document.button2.label2;
            if (!href2 && label2) return "Required!";
            return true;
          }),
      }),
    ],
    group: "content2",
  }),
  defineField({
    name: "backgroundColor",
    title: "Background Color",
    type: "string",
    options: {
      list: [...backgroundColors],
    },
    group: "visual",
  }),
  defineField({
    name: "customBackgroundColor",
    title: "Custom Background Color",
    type: "string",
    group: "visual",
  }),
  defineField({
    name: "color",
    title: "Color",
    type: "string",
    options: {
      list: [...colors],
    },
    group: "visual",
  }),
  defineField({
    name: "border",
    title: "Border",
    type: "boolean",
    group: "visual",
  }),
  defineField({
    name: "backgroundImage",
    title: "Background Image",
    type: "image",
    fields: [
      defineField({
        name: "alt",
        title: "Alt Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    ],
    group: "visual",
  }),
  defineField({
    name: "image",
    title: "Image",
    type: "image",
    fields: [
      defineField({
        name: "alt",
        title: "Alt Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    ],
    group: "visual",
  }),
];
