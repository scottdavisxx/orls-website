import {defineField, defineType} from 'sanity'
import {title, imageAndAltText} from '../sharedFields'
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
      // @ts-expect-error - Sanity array field 'of' is valid; type inference can miss it
      of: [
        {
          type: 'object',
          fields: [
            imageAndAltText,
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
