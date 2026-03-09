import {defineField, defineType} from 'sanity'
import {blurb, imageAndAltText, bgColor} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const twoColInfoWithImage = defineType({
  name: 'twoColInfoWithImage',
  title: 'Two Column Info with Image',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'With Borders', value: 'with-borders'},
          {title: 'Without Borders', value: 'without-borders'},
        ],
        layout: 'radio',
      },
    }),
    bgColor,
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    blurb,
    imageAndAltText,
    defineField({
      name: 'card',
      title: 'Bio Card',
      type: 'object',
      fields: [
        defineField({
          name: 'cardTitle',
          title: 'Card Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cardSubtitle',
          title: 'Card Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'bio',
          title: 'Bio',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'imageAndAltText.image'},
    prepare({title, media}) {
      return {
        title: title || 'Two Column Info with Image',
        subtitle: 'Two Column Info with Image',
        media,
      }
    },
  },
})
