import {defineType} from 'sanity'
import {title, blurb, imageAndAltText, cta} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const ctaWithMediaCard = defineType({
  name: 'ctaWithMediaCard',
  title: 'CTA with Media Card',
  type: 'object',
  icon: DocumentIcon,
  fields: [title, blurb, imageAndAltText, cta],
  preview: {
    select: {title: 'title', media: 'imageAndAltText.image'},
    prepare({title, media}) {
      return {
        title: 'CTA with Media Card',
        subtitle: title || 'No title set',
        media,
      }
    },
  },
})
