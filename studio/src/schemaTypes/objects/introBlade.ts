import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const introBlade = defineType({
  name: 'introBlade',
  title: 'Intro Blade',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'titles',
      title: 'Titles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required()}],
        },
      ],
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'buttonText', title: 'Button Text', type: 'string', validation: (Rule: any) => Rule.required()},
            {name: 'link', title: 'Link URL', type: 'string', validation: (Rule: any) => Rule.required()},
          ],
        },
      ],
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      description: 'Decorative background',
    }),
  ],
  preview: {
    select: {titles: 'titles'},
    prepare({titles}) {
      const first = titles?.[0]?.title
      return {
        title: 'Intro Blade',
        subtitle: first || 'No titles set',
      }
    },
  },
})
