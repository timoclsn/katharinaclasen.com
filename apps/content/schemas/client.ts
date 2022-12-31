import { defineField, defineType } from 'sanity';

export const client = defineType({
  name: 'client',
  title: 'Kunden',
  type: 'document',
  preview: {
    select: {
      title: 'shortName',
    }
  },
  fields: [
    defineField({
      name: 'shortName',
      title: 'Kurzer Name',
      description: 'Kurzer Name, der z.B. in den Tags benutzt wird.',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Vollständiger Firmenname.',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Logo des Kunden',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      description: 'Beschreibung der Tätigkeit für den Kunden.',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'website',
      title: 'Website',
      description: 'URL der Website des Kunden.',
      type: 'url',
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      description: 'Slug zu einer Case Study des Kunden',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Zitat',
      description: 'Zitate des Kunden.',
      type: 'reference',
      to: [{ type: 'quote' }]
    }),
  ],
})