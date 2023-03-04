import { defineField, defineType } from 'sanity';
import { backgroundColors, colors } from '../lib/colors';
import { illustrations } from '../lib/illustration';

export const accordionItem = defineType({
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'document',
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "visual",
      title: "Visual",
    },
  ],
  fields: [
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
      type: "markdown",
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
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [...backgroundColors],
      },
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
  ]
});