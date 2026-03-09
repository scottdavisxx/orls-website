import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Dark Blue', value: 'dark-blue'},
        ],
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
        subtitle: 'Navigation',
        media: (
          <img
            src="/static/navigation.png"
            alt="Navigation"
            style={{width: '100%', height: 'auto', objectFit: 'cover'}}
          />
        ),
      }
    },
  },
})