import { defineField, defineType } from "sanity";

export const carousel = defineType({
  name: "carousel",
  title: "Carousel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
          to: [{ type: "client" }, { type: "project" }],
        },
      ],
    }),
  ],
});
