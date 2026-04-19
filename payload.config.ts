import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Services } from './collections/Services'
import { Pricing, Team, Testimonials, Bookings } from './collections/Content'

export default buildConfig({
  // ── Server URL ─────────────────────────────────────────────────────────────
  serverURL: process.env.PAYLOAD_URL ?? 'http://localhost:3001',

  // ── Admin ──────────────────────────────────────────────────────────────────
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— Urban Beauty CMS',
    },
  },

  // ── Collections ────────────────────────────────────────────────────────────
  collections: [
    Services,
    Pricing,
    Team,
    Testimonials,
    Bookings,
    // Built-in Users collection
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email', group: 'System' },
      fields: [
        { name: 'name', type: 'text' },
      ],
    },
    // Media library
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
          { name: 'card',    width: 400,  height: 533, position: 'centre' },
          { name: 'hero',    width: 1800, height: 1200, position: 'centre' },
          { name: 'thumb',   width: 300,  height: 300,  position: 'centre' },
        ],
        adminThumbnail: 'thumb',
        mimeTypes: ['image/*'],
      },
      admin: { group: 'System' },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Alt Text',
          admin: {
            description: 'Describe the image for screen readers and SEO. Be specific.',
          },
        },
      ],
    },
  ],

  // ── Editor ─────────────────────────────────────────────────────────────────
  editor: lexicalEditor({}),

  // ── Database ───────────────────────────────────────────────────────────────
  // MongoDB Atlas (free tier works great for this)
  db: mongooseAdapter({
    url: process.env.DATABASE_URI ?? 'mongodb://localhost/urban-beauty',
  }),

  // ── Secret ─────────────────────────────────────────────────────────────────
  secret: process.env.PAYLOAD_SECRET ?? 'change-this-in-production',

  // ── CORS — allow Next.js frontend ─────────────────────────────────────────
  cors: [
    'http://localhost:3000',
    'https://www.urbanbeautysalon.co.uk',
  ],

  // ── TypeScript output ──────────────────────────────────────────────────────
  typescript: {
    outputFile: '../urban-beauty/types/payload-generated.ts',
  },
})
