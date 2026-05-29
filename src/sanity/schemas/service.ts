import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Select an icon for this service.',
      options: {
        list: [
          { title: 'Printer', value: 'Printer' },
          { title: 'Pen Tool', value: 'PenTool' },
          { title: 'Image', value: 'Image' },
          { title: 'Layers', value: 'Layers' },
          { title: 'Box', value: 'Box' },
          { title: 'Layout', value: 'Layout' },
          { title: 'Palette', value: 'Palette' },
          { title: 'Monitor', value: 'Monitor' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
