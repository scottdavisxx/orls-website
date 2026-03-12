import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

/**
 * Clubs View block. Displays clubs filtered by taxonomy type.
 * Supports filtering by either Club Type (DQhM7Q) or Enrichment Type (tntDws).
 */
export const clubsView = defineType({
  name: 'clubsView',
  title: 'Clubs View',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Section heading',
      type: 'string',
      description: 'Optional heading for the clubs section.',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Optional subheading for the clubs section.',
    }),
    defineField({
      name: 'taxonomyType',
      title: 'Taxonomy Type',
      type: 'string',
      description: 'Select which taxonomy to filter clubs by',
      options: {
        list: [
          { title: 'Club Type', value: 'DQhM7Q' },
          { title: 'Enrichment Type', value: 'tntDws' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      taxonomyType: 'taxonomyType',
      heading: 'heading',
    },
    prepare({ taxonomyType, heading }) {
      const taxonomyLabel = taxonomyType === 'DQhM7Q' ? 'Club Type' : 'Enrichment Type'
      return {
        title: heading || 'Clubs View',
        subtitle: `Filtered by: ${taxonomyLabel}`,
        media: UsersIcon,
      }
    },
  },
})
