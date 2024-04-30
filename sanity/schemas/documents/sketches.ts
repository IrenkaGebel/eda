import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'sketches',
  title: 'sketches',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'referenceToProject',
      title: 'Reference to Project',
      type: 'reference',
      to: [{ type: 'project' }],
    }),
    defineField({
      name: 'sketchesInfo',
      title: 'sketches Info',
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
      type: 'image',
      icon: ImageIcon,
      name: 'coverImage',
      title: 'coverImage',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
      fields: [
        defineField({
          title: 'Caption',
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on caption if not set',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'object',
      title: 'Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'linkImage',
      title: 'Link Image',
      type: 'image',
    }),
  ],
})
