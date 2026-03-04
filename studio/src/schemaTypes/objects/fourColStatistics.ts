import {defineField, defineType} from 'sanity'
import {title} from '../sharedFields'
import {BarChartIcon} from '@sanity/icons'

export const fourColStatistics = defineType({
  name: 'fourColStatistics',
  title: 'Four Column Statistics',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'sideTitle',
      title: 'Side Title',
      type: 'string',
      description: 'e.g. "Did you know?"',
    }),
    defineField({
      name: 'sideBlurb',
      title: 'Side Blurb',
      type: 'text',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {sideTitle: 'sideTitle'},
    prepare({sideTitle}) {
      return {
        title: 'Four Column Statistics',
        subtitle: sideTitle || 'No title set',
      }
    },
  },
})
