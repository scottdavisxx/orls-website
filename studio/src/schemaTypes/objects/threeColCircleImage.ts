import {defineField, defineType} from 'sanity'
import {title, imageAndAltText} from '../sharedFields'
import {UsersIcon} from '@sanity/icons'

export const threeColCircleImage = defineType({
  name: 'threeColCircleImage',
  title: 'Three Column Circle Images',
  type: 'object',
  icon: UsersIcon,
  fields: [
    title,
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'blurb',
              title: 'Blurb',
              type: 'text',
            }),
            imageAndAltText,
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'columns.0.imageAndAltText.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Three Column Circle Images',
        subtitle: 'Three Column Circle Images',
        media,
      }
    },
  },
})
