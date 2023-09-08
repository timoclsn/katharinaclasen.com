import { defineField, defineType } from "sanity";

export const quote = defineType({
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) =>
        Rule.custom((author, context) => {
          // @ts-expect-error
          const text = context.document.text;
          if (!author && text) return "Required";
          return true;
        }),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule) =>
        Rule.custom((text, context) => {
          // @ts-expect-error
          const author = context.document.author;
          if (!text && author) return "Required";
          return true;
        }),
    }),
  ],
});
