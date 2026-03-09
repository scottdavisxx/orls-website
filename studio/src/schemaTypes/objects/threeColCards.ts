import {defineField, defineType} from 'sanity'
import {title, imageAndAltText, href} from '../sharedFields'
import {ComponentIcon} from '@sanity/icons'

export const threeColCards = defineType({
  name: 'threeColCards',
  title: 'Three Column Cards',
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
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            imageAndAltText,
            href,
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'cards.0.title',
      media: 'cards.0.imageAndAltText.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Three Column Cards',
        subtitle: 'Three Column Cards',
        media,
      }
    },
  },
})
