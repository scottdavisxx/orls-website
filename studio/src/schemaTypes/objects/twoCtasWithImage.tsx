import { defineField, defineType } from "sanity";
import { ctaWithDescription, imageAndAltText, title, emphasizedText, textColor, blurb } from "../sharedFields";

export const twoCtasWithImage = defineType({
  name: 'twoCtasWithImage',
  title: 'Two CTAs with Image',
  type: 'object',
  fields: [
    title,
    emphasizedText,
    textColor,
    blurb,
    imageAndAltText,
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [ctaWithDescription],
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      description: 'Decorative background image (optional)',
    }),
  ],
  preview: {
    select: { title: 'title', media: 'imageAndAltText.image' },
    prepare({ title, media }) {
      return {
        title: 'Two CTAs with Image',
        subtitle: title || 'No title set',
        media,
      }
    },
  }
})