import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const roadmap = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    pubDate: z.coerce.date(),
    section: z.enum(['milestones', 'upcoming']).default('milestones'),
    order: z.number(),
    progress: z.number().min(0).max(100).optional(),
    status: z.string().optional(),
  }),
});

export const collections = { blog, roadmap };
