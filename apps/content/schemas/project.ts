import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
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
      title: 'Bild',
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
      name: 'client',
      title: 'Kunde',
      type: 'reference',
      to: [{ type: 'client' }],
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
      name: 'website',
      title: 'Website',
      type: 'url',
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