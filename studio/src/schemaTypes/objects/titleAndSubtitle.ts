import {defineType} from 'sanity'
import {titleOne, titleTwo} from '../sharedFields'
import {BlockContentIcon} from '@sanity/icons'

export const titleAndSubtitle = defineType({
  name: 'titleAndSubtitle',
  title: 'Title and Subtitle',
  type: 'object',
  icon: BlockContentIcon,
  fields: [titleOne, titleTwo],
  preview: {
    select: {titleOne: 'titleOne'},
    prepare({titleOne}) {
      return {
        title: 'Title and Subtitle',
        subtitle: titleOne || 'No title set',
      }
    },
  },
})
