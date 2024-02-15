import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'forCollaborators',
  title: 'For Collaborators',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'collaborating',
      title: 'Collaborating',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
      defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'structure',
        title: 'Structure',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'Budget',
        title: 'budget',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
]
})