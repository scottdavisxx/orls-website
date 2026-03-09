import {defineArrayMember, defineType, defineField} from 'sanity'

export const blockContentTextOnly = defineType({
  title: 'Block Content (Simple - Text Only)',
  name: 'blockContentTextOnly',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Block Content (Simple - Text Only)',
        subtitle: 'Block Content (Simple - Text Only)',
        media: (
          <img
            src="/static/blockContentTextOnly.png"
            alt="Block Content (Simple - Text Only)"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})
