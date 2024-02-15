import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'contact',
        title: 'Contact',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    defineField({
      name: 'WorkExperience',
      title: 'WorkExperience',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'titleIszszi',
        title: 'TitleIszszi',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'bioIszszi',
        title: 'BioIszszi',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
          name: 'contactIszszi',
          title: 'ContactIszszi',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      defineField({
        name: 'WorkExperienceIszszi',
        title: 'WorkExperienceIszszi',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
  ],
})