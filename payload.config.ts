import { buildConfig } from 'payload/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? '',
  mongoURL: process.env.MONGODB_URI ?? '',
  admin: {
    user: 'users',
  },
  editor: lexicalEditor({}),
  collections: [],
})
