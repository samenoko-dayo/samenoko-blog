import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string().optional(),
        date: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.object({
          name: z.string()
        })).optional()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**/*.md',
        prefix: '/'
      },
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional()
      })
    })
  },
})
