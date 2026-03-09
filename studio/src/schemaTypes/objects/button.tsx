import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'button',
  type: 'object',
  description: 'The button of the call to action',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Button Link',
      type: 'link',
      options: {collapsible: true, collapsed: false},
    }),
  ],
  options: {collapsible: true},
  preview: {
    select: {title: 'buttonText'},
    prepare({title}) {
      return {
        title: title || 'Button',
        subtitle: 'Button',
        media: (
          <img
            src="/static/button.png"
            alt="Button"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
