import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
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
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'showcaseAbout',
      title: 'Showcase about',
      description: 'This is how you access the about page from home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'about' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseForCollaborators',
      title: 'Showcase for collaborators',
      description:
        'This is how you access the for collaborators page from home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'forCollaborators' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseColophon',
      title: 'Showcase colophon',
      description: 'This is how you access the colophon from home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'forCollaborators' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseiszsziStudio',
      title: 'Showcase isz szi studio',
      description:
        'This is how you access isz szi studio projects from home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'iszsziStudio' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseSketches',
      title: 'Showcase sketches',
      description: 'This is how you access sketchesfrom home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'Sketches' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'projects' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
