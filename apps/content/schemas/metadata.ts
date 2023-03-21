import { defineField, defineType } from "sanity";

export const metadata = defineType({
  name: "metadata",
  title: "Metadata",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ogTitle",
      title: "OG Title",
      type: "string",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
    }),
  ],
});
