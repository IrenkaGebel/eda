import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'forCollaborators',
  title: 'forCollaborators',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'page title',
      type: 'string',
    }),

    defineField({
      name: 'introduction',
      title: 'introduction',
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
      name: 'partOne',
      title: 'partOne',
      type: 'object',
      fields: [
        { title: 'headingOne', name: 'headingOne', type: 'string' },
        {
          name: 'contentOne',
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
        },
      ],
    }),
  ],
})
