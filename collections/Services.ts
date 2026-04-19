import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['number', 'name', 'category', 'startingPrice'],
    group: 'Content',
  },
  access: {
    read: () => true, // Public read — cached by Next.js ISR
  },
  fields: [
    {
      name: 'number',
      type: 'text',
      required: true,
      label: 'Display Number',
      admin: { description: 'e.g. 01, 02, 03' },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: ['CACI', 'Facials', 'Massage', 'Lash & Brow', 'Nails', 'Packages'],
    },
    {
      name: 'tagline',
      type: 'textarea',
      required: true,
      label: 'Short description (shown on hover)',
      admin: { description: 'Keep under 120 characters.' },
    },
    {
      name: 'startingPrice',
      type: 'text',
      required: true,
      label: 'Starting Price',
      admin: { description: 'e.g. £55' },
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      admin: { description: 'e.g. 60 mins' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured service',
      defaultValue: false,
    },
  ],
}
