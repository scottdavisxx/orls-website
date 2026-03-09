import { defineField, defineType } from 'sanity'
import { title, subtitle, imageAndAltText } from '../sharedFields'

export const threeColWithIcons = defineType({
  name: 'threeColWithIcons',
  title: 'Three Column with Icons',
  type: 'object',
  fields: [
    title,
    subtitle,
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      description: 'Items are shown in order: first two in column 1, next two in column 2, next two in column 3.',
      // @ts-expect-error - Sanity array field 'of' is valid; type inference can miss it
      of: [
        {
          type: 'object',
          fields: [
            imageAndAltText,
            defineField({
              name: 'title',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required().error('Label is required'),
            }),
          ],
          preview: {
            select: { title: 'title' },
            prepare({ title }: { title?: string }) {
              return { title: title || 'Untitled item' }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'items.0.imageAndAltText.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Three Column with Icons',
        subtitle: 'Three Column with Icons',
        media,
      }
    },
  },
})
