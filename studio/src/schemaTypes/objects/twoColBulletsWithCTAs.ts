import {defineField, defineType} from 'sanity'
import {title, cta} from '../sharedFields'
import {ListIcon} from '@sanity/icons'

export const twoColBulletsWithCTAs = defineType({
  name: 'twoColBulletsWithCTAs',
  title: 'Two Column Bullets with CTAs',
  type: 'object',
  icon: ListIcon,
  fields: [
    title,
    defineField({
      name: 'leftBullets',
      title: 'Left Bullets',
      type: 'array',
      of: [{type: 'object', fields: [{name: 'text', title: 'Text', type: 'string', validation: (Rule) => Rule.required()}]}],
    }),
    defineField({
      name: 'rightBullets',
      title: 'Right Bullets',
      type: 'array',
      of: [{type: 'object', fields: [{name: 'text', title: 'Text', type: 'string', validation: (Rule) => Rule.required()}]}],
    }),
    cta,
    defineField({
      name: 'cta2',
      title: 'Second CTA',
      type: 'object',
      fields: [
        defineField({name: 'href', title: 'Link URL', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'buttonText', title: 'Button Text', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'newTab', title: 'Open in new Tab?', type: 'boolean'}),
      ],
    }),
    defineField({
      name: 'showIcon',
      title: 'Show Icon',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: 'Two Column Bullets with CTAs',
        subtitle: title || 'No title set',
      }
    },
  },
})
