import { defineField, defineType } from "sanity";

export const cardGrid = defineType({
  name: "cardGrid",
  title: "Card Grid",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cardGridItem" }],
        },
      ],
    }),
    defineField({
      name: "quotes",
      title: "Quotes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "quote" }],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
});
