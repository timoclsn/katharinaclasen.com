import { defineField, defineType } from 'sanity';

export const philosophy = defineType({
  name: 'philosophy',
  title: 'Philosophy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: ['primary', 'blueExtreme', 'redCandy', 'stone', 'dark', 'salmon', 'lilacExtreme', 'pinkCandy', 'mint']
      }
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: ['light', 'dark']
      }
    }),
    defineField({
      name: 'border',
      title: 'Border',
      type: 'boolean'
    }),
    defineField({
      name: 'illustration',
      title: 'Illustration',
      type: 'string',
      options: {
        list: ['bolt', 'hand', 'head', 'heart', 'phone', 'geometry']
      }
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string'
        }),
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        })
      ]
    }),
  ]
});