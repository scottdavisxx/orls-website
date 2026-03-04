import {defineField, defineType} from 'sanity'
import {title, imageAndAltText} from '../sharedFields'
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Three Column Toggle',
        subtitle: 'Expandable image cards',
      }
    },
  },
})
