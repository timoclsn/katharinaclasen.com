import { defineField, defineType } from "sanity";
import { backgroundColors } from "../lib/colors";

export const metadata = defineType({
  name: "metadata",
  title: "Metadata",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "ogImageTitle",
      title: "OG Image Title",
      type: "string",
    }),
    defineField({
      name: "ogImageBackgroundColor",
      title: "OG Image Background Color",
      type: "string",
      options: {
        list: [...backgroundColors],
      },
    }),
    defineField({
      name: "ogImageImage",
      title: "OG Image Image",
      type: "image",
    }),
  ],
});
