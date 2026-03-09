import {defineField, defineType} from 'sanity'
import {title, imageAndAltText, removePaddingTop} from '../sharedFields'
import {ComponentIcon} from '@sanity/icons'

export const threeColToggle = defineType({
  name: 'threeColToggle',
  title: 'Three Column Toggle',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            title,
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            imageAndAltText,
          ],
        },
      ],
    }),
    removePaddingTop,
  ],
  preview: {
    select: {
      title: 'cards.0.title',
      media: 'cards.0.imageAndAltText.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Three Column Toggle',
        subtitle: 'Three Column Toggle',
        media,
      }
    },
  },
})
