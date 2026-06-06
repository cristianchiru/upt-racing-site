import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['technical', 'competition', 'team', 'media']),
    author: z.string(),
    coverImage: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

const cars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cars' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    coverImage: z.string(),
    specs: z.object({
      engine: z.string(),
      power: z.string(),
      weight: z.string(),
      acceleration: z.string(),
      topSpeed: z.string().optional(),
      wheelbase: z.string().optional(),
      suspension: z.string().optional(),
    }),
    results: z.array(z.object({
      event: z.string(),
      location: z.string(),
      placement: z.number(),
      year: z.number(),
    })),
  }),
});

export const collections = { news, cars };
