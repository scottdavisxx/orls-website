import {defineField, defineType} from 'sanity'
import {title} from '../sharedFields'
import {ListIcon} from '@sanity/icons'

export const numberedList = defineType({
  name: 'numberedList',
  title: 'Numbered List',
  type: 'object',
  icon: ListIcon,
  fields: [
    title,
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'number',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [{type: 'block'}],
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
        title: title || 'Numbered List',
        subtitle: 'Numbered List',
        media: (
          <img
            src="/static/numberedList.png"
            alt="Numbered List"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
