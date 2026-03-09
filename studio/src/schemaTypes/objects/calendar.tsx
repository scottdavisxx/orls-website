import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const calendar = defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'object',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'iframeUrl',
      title: 'Calendar Embed URL',
      type: 'url',
      description: 'Google Calendar or other iframe embed URL',
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'Calendar',
        subtitle: 'Calendar',
        media: (
          <img
            src="/static/calendar.png"
            alt="Calendar"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
