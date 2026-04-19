import type { CollectionConfig } from 'payload'

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const Pricing: CollectionConfig = {
  slug: 'pricing',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['category', 'name', 'duration', 'price'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Facials',     value: 'facial'  },
        { label: 'Massage',     value: 'massage' },
        { label: 'CACI',        value: 'caci'    },
        { label: 'Nails',       value: 'nails'   },
        { label: 'Lash & Brow', value: 'lash'    },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      admin: { description: 'e.g. 60 mins' },
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: { description: 'e.g. £55' },
    },
  ],
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['order', 'name', 'role'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Job Title / Role',
      admin: { description: 'e.g. Senior Therapist & CACI Specialist' },
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
      admin: { description: 'Short bio shown on team card. Keep under 140 characters.' },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Display Order',
      defaultValue: 1,
    },
  ],
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'treatment', 'rating'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Client Name',
      admin: { description: 'e.g. Sarah M. (first name + initial only for privacy)' },
    },
    {
      name: 'treatment',
      type: 'text',
      required: true,
      label: 'Treatment & Status',
      admin: { description: 'e.g. CACI Facelift · Regular Client' },
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      defaultValue: 5,
      min: 1,
      max: 5,
    },
  ],
}

// ─── Bookings (form submissions) ──────────────────────────────────────────────
export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['createdAt', 'firstName', 'lastName', 'treatment', 'status'],
    group: 'Enquiries',
  },
  access: {
    read: ({ req }) => Boolean(req.user), // Admin only
    create: () => true,                   // API route can create
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'treatment',
      type: 'text',
      required: true,
    },
    {
      name: 'preferredDate',
      type: 'text',
    },
    {
      name: 'preferredTime',
      type: 'text',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending',   value: 'pending'   },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Completed', value: 'completed' },
      ],
    },
  ],
  timestamps: true,
}
