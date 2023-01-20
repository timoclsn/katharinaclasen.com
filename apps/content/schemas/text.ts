import { defineField, defineType } from "sanity";

export const textSnippet = defineType({
  name: "textSnippet",
  title: "Text Snippet",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
      options: {
        imageUrl: (imageAsset) => imageAsset.url,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
