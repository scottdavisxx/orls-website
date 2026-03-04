import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const threeColCtas = defineType({
  name: 'threeColCtas',
  title: 'Three Column CTAs',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'cards',
      title: 'CTA Cards',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: 'object',
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
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Three Column CTAs',
        subtitle: 'Inquire, Explore, Apply cards',
      }
    },
  },
})
