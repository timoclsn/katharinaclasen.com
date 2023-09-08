import { defineField, defineType } from "sanity";

export const topic = defineType({
  name: "topic",
  title: "Thema",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
    }),
  ],
});
