import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) =>
        rule
          .required()
          .error('A slug is required to generate a page on the website'),
    }),

    defineField({
      name: 'highlightedContent',
      type: 'text',
      title: 'Highlighted text',
    }),
    defineField({
      name: 'content',
      title: 'Rest of text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
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
          },
          styles: [],
        }),
      ],
    }),
  ],
})
