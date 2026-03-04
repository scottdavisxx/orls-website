import {defineField, defineType} from 'sanity'
import {title, imageAndAltText} from '../sharedFields'
import {ComponentIcon} from '@sanity/icons'

export const threeColEventCards = defineType({
  name: 'threeColEventCards',
  title: 'Three Column Event Cards',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'bgTexture',
      title: 'Show Background Texture',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'cards',
      title: 'Event Cards',
      type: 'array',
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
            imageAndAltText,
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'object',
              fields: [
                {name: 'label', title: 'Label', type: 'string'},
                {name: 'href', title: 'URL', type: 'string'},
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {heading: 'heading'},
    prepare({heading}) {
      return {
        title: 'Three Column Event Cards',
        subtitle: heading || 'No heading set',
      }
    },
  },
})
