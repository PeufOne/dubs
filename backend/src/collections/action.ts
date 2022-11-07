import type { CollectionConfig } from 'payload/types'

export const Action: CollectionConfig = {
  slug: 'action',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      minLength: 3,
      maxLength: 120,
    },
    {
      name: 'desciption',
      type: 'richText',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'action',
    },
    {
      name: 'resource',
      type: 'relationship',
      relationTo: 'resource',
    },
  ],
}
