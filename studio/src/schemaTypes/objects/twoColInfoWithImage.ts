import {defineField, defineType} from 'sanity'
import {title, blurb, imageAndAltText} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const twoColInfoWithImage = defineType({
  name: 'twoColInfoWithImage',
  title: 'Two Column Info with Image',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    title,
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
        title: 'Two Column Info with Image',
        subtitle: title || 'No title set',
        media,
      }
    },
  },
})
