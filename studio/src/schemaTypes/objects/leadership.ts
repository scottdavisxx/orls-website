import {defineField, defineType} from 'sanity'
import {title, imageAndAltText} from '../sharedFields'
import {UsersIcon} from '@sanity/icons'

export const leadership = defineType({
  name: 'leadership',
  title: 'Leadership',
  type: 'object',
  icon: UsersIcon,
  fields: [
    title,
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            imageAndAltText,
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: 'Leadership',
        subtitle: title || 'No title set',
      }
    },
  },
})
