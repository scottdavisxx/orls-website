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
    select: {title: 'titleOne'},
    prepare({title}) {
      return {
        title: title || 'Title and Subtitle',
        subtitle: 'Title and Subtitle',
        media: (
          <img
            src="/static/titleAndSubtitle.png"
            alt="Title and Subtitle"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
