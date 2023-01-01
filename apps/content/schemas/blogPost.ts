import { defineField, defineType } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blogpost',
  type: 'document',
  initialValue: {
    author: 'Katharina Clasen'
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'image',
      title: 'Titelbild',
      type: 'image',
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required(),
        })
      ],
    }),
    defineField({
      name: 'author',
      title: 'Autor:in',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD.MM.YYYY',
      }
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }]
        }
      ],
    }),
    defineField({
      name: 'topics',
      title: 'Themen',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }]
        }
      ],
    }),
    defineField({
      name: 'content',
      title: 'Inhalt',
      type: 'markdown',
      validation: Rule => Rule.required(),
    })
  ]
});