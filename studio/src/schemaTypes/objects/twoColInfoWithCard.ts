import {defineField, defineType} from 'sanity'
import {title, subtitle, blurb, imageAndAltText} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const twoColInfoWithCard = defineType({
  name: 'twoColInfoWithCard',
  title: 'Two Column Info with Card',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    subtitle,
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}],
    }),
    imageAndAltText,
    defineField({
      name: 'bg',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Dark Blue', value: 'dark-blue'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'photoSide',
      title: 'Photo Side',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'right',
    }),
  ],
  preview: {
    select: {heading: 'heading', media: 'imageAndAltText.image'},
    prepare({heading, media}) {
      return {
        title: heading || 'Two Column Info with Card',
        subtitle: 'Two Column Info with Card',
        media,
      }
    },
  },
})
