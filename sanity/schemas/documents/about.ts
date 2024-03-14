import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      title: 'page title',
      name: 'pageTitle',
      type: 'string',
    }),
    defineField({
      name: 'edaGroup',
      title: 'eda Group',
      type: 'object',
      fields: [
        { title: 'heading Eda', name: 'headingEda', type: 'string' },
        {
          name: 'bioEda',
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
          title: 'bio Eda',
        },
        { title: 'heading Contact', name: 'headingContact', type: 'string' },
        {
          name: 'contactEda',
          type: 'array',
          of: [
            defineArrayMember({
              lists: [],
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
          title: 'contact Eda',
        },
        { title: 'heading Work', name: 'headingWork', type: 'string' },
        {
          name: 'workEda',
          type: 'array',
          of: [
            defineArrayMember({
              lists: [],
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
          title: 'work Eda',
        },
      ],
    }),
    defineField({
      name: 'iszsziGroup',
      title: 'iszsziGroup',
      type: 'object',
      fields: [
        { name: 'headingIszszi', type: 'string', title: 'heading isz szi' },
        {
          name: 'bioIszszi',
          type: 'array',
          of: [
            defineArrayMember({
              lists: [],
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
          title: 'bio isz szi',
        },
        {
          name: 'headingContactIszszi',
          type: 'string',
          title: 'heading contact isz szi',
        },
        {
          name: 'contactIszszi',
          type: 'array',
          of: [
            defineArrayMember({
              lists: [],
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
          title: 'contact isz szi',
        },
        {
          name: 'headingWorkIszszi',
          type: 'string',
          title: 'heading work isz szi',
        },
        {
          name: 'workIszszi',
          type: 'array',
          of: [
            defineArrayMember({
              lists: [],
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
          title: 'work isz szi',
        },
      ],
    }),
  ],
})
