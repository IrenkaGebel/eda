import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'Collaborators',
  title: 'Collaborators',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'page title',
      type: 'string',
    }),

    defineField({
      name: 'intro',
      title: 'intro',
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
      name: 'parts',
      title: 'parts',
      type: 'object',
      fields: [
        { title: 'heading One', name: 'headingOne', type: 'string' },
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
        { title: 'heading Two', name: 'headingTwo', type: 'string' },
        {
          name: 'contentTwo',
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
        { title: 'heading Three', name: 'headingThree', type: 'string' },
        {
          name: 'contentThree',
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
        { title: 'heading Four', name: 'headingFour', type: 'string' },
        {
          name: 'contentFour',
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
