import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'colophon',
  title: 'Colophon',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'page title',
      type: 'string',
    }),

    defineField({
      name: 'info',
      title: 'info',
      type: 'array',
      of: [
        defineArrayMember({
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
              {
                title: 'Underline',
                value: 'underline',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
    }),
    defineField({
      title: 'typeUsed',
      name: 'typeUsed',
      type: 'string',
    }),
    defineField({
      title: 'revision',
      name: 'revision',
      type: 'string',
    }),
  ],
})
