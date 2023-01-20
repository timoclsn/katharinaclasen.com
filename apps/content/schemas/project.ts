import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projekt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "image",
      title: "Titelbild",
      type: "image",
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "border",
          title: "Border",
          type: "boolean",
        }),
      ],
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Self-employment",
            value: "selfEmployment",
          },
          {
            title: "Sideproject",
            value: "sideproject",
          },
          {
            title: "Non-profit",
            value: "nonProfit",
          },
          {
            title: "Lecture",
            value: "lecture",
          },
          {
            title: "Employment",
            value: "employment",
          },
        ],
      },
    }),
    defineField({
      name: "client",
      title: "Kunde",
      type: "reference",
      to: [{ type: "client" }],
      hidden: ({ document }) => {
        return document?.context === "sideproject";
      },
    }),
    defineField({
      name: "date",
      title: "Datum",
      type: "date",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD.MM.YYYY",
      },
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
    }),
    defineField({
      name: "externalLink",
      title: "External Link",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          validation: (Rule) =>
            Rule.custom((label, context) => {
              // @ts-expect-error
              const href = context.document.externalLink.href;
              if (!label && href)
                return "Label and Link can only be used together.";
              return true;
            }),
        }),
        defineField({
          name: "href",
          title: "URL",
          type: "url",
          validation: (Rule) =>
            Rule.custom((href, context) => {
              // @ts-expect-error
              const label = context.document.externalLink.label;
              if (!href && label)
                return "Label and Link can only be used together.";
              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    }),
    defineField({
      name: "topics",
      title: "Themen",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "topic" }],
        },
      ],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "markdown",
    }),
    defineField({
      name: "content",
      title: "Inhalt",
      type: "markdown",
      options: {
        imageUrl: (imageAsset) => imageAsset.url,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
