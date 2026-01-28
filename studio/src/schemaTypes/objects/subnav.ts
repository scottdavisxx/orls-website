import { defineType, defineField } from "sanity";
import { cta } from "../sharedFields";

export const subnav = defineType({
  name: 'subnav',
  title: 'Subnav',
  type: 'object',
  fields: [
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: cta.fields, 
        }
      ],
    }),
  ],
})