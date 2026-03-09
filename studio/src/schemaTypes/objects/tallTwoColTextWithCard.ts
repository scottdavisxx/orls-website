import {defineField, defineType} from 'sanity'
import {
  title,
  subtitle,
  blurb,
  cta,
  imageAndAltText,
} from '../sharedFields'

export const tallTwoColTextWithCard = defineType({
  name: 'tallTwoColTextWithCard',
  title: 'Tall Two Column Text with Card',
  type: 'object',
  fieldsets: [
    {
      name: 'leftColumn',
      title: 'Left Column',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'rightColumn',
      title: 'Right Column',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'ctaCard',
      title: 'CTA Card',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    // Top section (no fieldset)
    title,
    subtitle,
    // Left column
    defineField({
      ...title,
      name: 'leftColumnTitle',
      title: 'Title',
      fieldset: 'leftColumn',
    }),
    defineField({
      ...subtitle,
      name: 'leftColumnSubtitle',
      title: 'Subtitle',
      fieldset: 'leftColumn',
    }),
    // Right column
    defineField({
      ...title,
      name: 'rightColumnTitle',
      title: 'Title',
      fieldset: 'rightColumn',
    }),
    defineField({
      ...subtitle,
      name: 'rightColumnSubtitle',
      title: 'Subtitle',
      fieldset: 'rightColumn',
    }),
    // CTA card
    defineField({
      ...title,
      name: 'ctaCardTitle',
      title: 'Title',
      fieldset: 'ctaCard',
    }),
    defineField({
      ...blurb,
      name: 'ctaCardBlurb',
      title: 'Blurb',
      fieldset: 'ctaCard',
    }),
    defineField({
      name: 'ctaCardCtas',
      title: 'CTAs',
      type: 'array',
      of: [cta],
      fieldset: 'ctaCard',
    }),
    defineField({
      ...imageAndAltText,
      name: 'ctaCardImage',
      title: 'Image and Alt Text',
      fieldset: 'ctaCard',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'ctaCardImage.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Tall Two Column Text with Card',
        subtitle: 'Tall Two Column Text with Card',
        media,
      }
    },
  },
})
