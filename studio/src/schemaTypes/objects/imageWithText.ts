import {defineType} from 'sanity'
import {title, blurb, imageAndAltText} from '../sharedFields'
import {ImageIcon} from '@sanity/icons'

export const imageWithText = defineType({
  name: 'imageWithText',
  title: 'Image with Text',
  type: 'object',
  icon: ImageIcon,
  fields: [title, blurb, imageAndAltText],
  preview: {
    select: {title: 'title', media: 'imageAndAltText.image'},
    prepare({title, media}) {
      return {
        title: 'Image with Text',
        subtitle: title || 'No title set',
        media,
      }
    },
  },
})
