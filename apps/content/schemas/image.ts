import { defineField, defineType } from 'sanity';

export const image = defineType({
  name: 'customImage',
  title: 'Bild',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ]
});