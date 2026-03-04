import {defineField, defineType} from 'sanity'
import {title} from '../sharedFields'
import {BarChartIcon} from '@sanity/icons'

export const statisticsTwoCol = defineType({
  name: 'statisticsTwoCol',
  title: 'Statistics Two Column',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    title,
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
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: 'Statistics Two Column',
        subtitle: title || 'No title set',
      }
    },
  },
})
