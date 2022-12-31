import { defineField, defineType } from 'sanity';

export const quote = defineType({
  name: 'quote',
  title: 'Zitat',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ]
});