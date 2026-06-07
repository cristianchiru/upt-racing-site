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
    years: z.string().optional(),
    tagline: z.string().optional(),
    coverImage: z.string(),

    // Highlight specs
    engine: z.string().optional(),
    weight: z.string().optional(),
    power: z.string().optional(),
    acceleration: z.string().optional(),

    // Structured specs
    dimensions: z.object({
      length: z.string().optional(),
      width: z.string().optional(),
      height: z.string().optional(),
      wheelbase: z.string().optional(),
      trackFront: z.string().optional(),
      trackRear: z.string().optional(),
    }).optional(),
    powertrain: z.object({
      engine: z.string().optional(),
      displacement: z.string().optional(),
      ecu: z.string().optional(),
      drivetrain: z.string().optional(),
    }).optional(),
    chassis: z.object({
      type: z.string().optional(),
      mass: z.string().optional(),
    }).optional(),
    suspension: z.object({
      front: z.string().optional(),
      rear: z.string().optional(),
    }).optional(),
    brakes: z.string().optional(),
    wheels: z.string().optional(),
    aerodynamics: z.string().optional(),
    bodywork: z.string().optional(),

    seasons: z.array(z.string()).optional(),
    team: z.array(z.string()).optional(),

    results: z.array(z.object({
      event: z.string(),
      location: z.string().optional(),
      placement: z.number(),
      year: z.number(),
    })).optional().default([]),

    // Legacy flat specs (kept for backward compat)
    specs: z.object({
      engine: z.string().optional(),
      power: z.string().optional(),
      weight: z.string().optional(),
      acceleration: z.string().optional(),
      topSpeed: z.string().optional(),
      wheelbase: z.string().optional(),
      suspension: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { news, cars };
