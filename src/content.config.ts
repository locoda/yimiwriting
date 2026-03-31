import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    magazine: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    category: z.string(),
    genre: z.enum(['fiction', 'non-fiction', 'poetry']),
    external: z.string().optional(),
  }),
});

export const collections = {
  work: workCollection,
};
