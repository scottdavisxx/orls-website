import {defineField, defineType} from 'sanity'
import {title, blurb, imageAndAltText, cta} from '../sharedFields'
import {ComponentIcon} from '@sanity/icons'

export const threeColCardsTall = defineType({
  name: 'threeColCardsTall',
  title: 'Three Column Tall Cards',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    title,
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            imageAndAltText,
            cta,
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: 'Three Column Tall Cards',
        subtitle: title || 'No title set',
      }
    },
  },
})
