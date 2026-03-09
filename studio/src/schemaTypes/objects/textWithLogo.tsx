import {defineType} from 'sanity'
import {title, blurb} from '../sharedFields'
import {TextIcon} from '@sanity/icons'

export const textWithLogo = defineType({
  name: 'textWithLogo',
  title: 'Text with Logo',
  type: 'object',
  icon: TextIcon,
  fields: [title, blurb],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'Text with Logo',
        subtitle: 'Text with Logo',
        media: (
          <img
            src="/static/textWithLogo.png"
            alt="Text with Logo"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
