import { defineField, defineType } from "sanity";

export const accordion = defineType({
  name: "accordion",
  title: "Accordion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "accordionItem" }],
        },
      ],
    }),
  ],
});
