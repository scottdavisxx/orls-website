import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [
        {type: 'heroBanner'},
        {type: 'subnav'},
        {type: 'titleAndSubtitle'},
        {type: 'textWithLogo'},
        {type: 'imageWithText'},
        {type: 'twoColInfo'},
        {type: 'twoColInfoWithImage'},
        {type: 'twoColInfoWithCard'},
        {type: 'twoColBulletsWithCTAs'},
        {type: 'threeColToggle'},
        {type: 'threeColExpandingCards'},
        {type: 'threeColEventCards'},
        {type: 'threeColCtas'},
        {type: 'threeColCircleImage'},
        {type: 'threeColCards'},
        {type: 'threeColCardsTall'},
        {type: 'statisticsTwoCol'},
        {type: 'fourColStatistics'},
        {type: 'oneColInfo'},
        {type: 'numberedList'},
        {type: 'leadership'},
        {type: 'introBlade'},
        {type: 'ctaWithMediaCard'},
        {type: 'ctaWithCard'},
        {type: 'cardGrid'},
        {type: 'calendar'},
      ],
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/studio/array-type#efb1fe03459d
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName:string) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
  ],
})
