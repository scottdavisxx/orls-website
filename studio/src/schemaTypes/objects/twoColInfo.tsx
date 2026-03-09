import {defineField, defineType} from 'sanity'
import {title} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const twoColInfo = defineType({
  name: 'twoColInfo',
  title: 'Two Column Info (Tuition)',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    title,
    defineField({
      name: 'headerBlurb',
      title: 'Header Blurb',
      type: 'text',
    }),
    defineField({
      name: 'items',
      title: 'Tuition Items',
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
            defineField({
              name: 'subtitle',
              title: 'Subtitle / Grade Range',
              type: 'string',
            }),
            defineField({
              name: 'detail',
              title: 'Detail / Amount',
              type: 'text',
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
        title: title || 'Two Column Info (Tuition)',
        subtitle: 'Two Column Info (Tuition)',
        media: (
          <img
            src="/static/twoColInfo.png"
            alt="Two Column Info (Tuition)"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
