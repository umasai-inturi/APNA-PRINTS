import { defineField, defineType } from 'sanity';

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the about section (e.g., "A Legacy of Quality")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description1',
      title: 'Description Paragraph 1',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description2',
      title: 'Description Paragraph 2',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
