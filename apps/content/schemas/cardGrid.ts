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
    }),
    defineField({
      name: "item",
      title: "Item",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cardGridItem" }],
        },
      ],
    }),
  ],
});
