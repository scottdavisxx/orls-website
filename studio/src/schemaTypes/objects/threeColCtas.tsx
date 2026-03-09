import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const threeColCtas = defineType({
  name: 'threeColCtas',
  title: 'Three Column CTAs',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'cards',
      title: 'CTA Cards',
      type: 'array',
      validation: (Rule) => Rule.max(3),
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
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'cards.0.title'},
    prepare({title}) {
      return {
        title: title || 'Three Column CTAs',
        subtitle: 'Three Column CTAs',
        media: (
          <img
            src="/static/threeColCtas.png"
            alt="Three Column CTAs"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
