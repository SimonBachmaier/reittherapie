import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seiten = defineCollection({
  loader: glob({ base: './src/content/seiten', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      siteTitle: z.string(),
      headerImage: image().optional(),
      image: image().optional(),
      headline: z.string().optional(),
      subheadline: z.string().optional(),
      textNextToImage: z.string().optional(),
      description: z.string().nullish(),
    }),
});

const leistungen = defineCollection({
  loader: glob({ base: './src/content/leistungen', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      siteTitle: z.string(),
      navigationOrder: z.number(),
      name: z.string().trim(),
      previewImage: image(),
      headerImage: image(),
      image: image(),
      headline: z.string(),
      subheadline: z.string().optional(),
      textNextToImage: z.string(),
    }),
});

const pferde = defineCollection({
  loader: glob({ base: './src/content/pferde', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      siteTitle: z.string(),
      navigationOrder: z.number(),
      name: z.string().trim(),
      description: z.string().trim(),
      headerImage: image(),
      image: image(),
      headline: z.string(),
      subheadline: z.string().optional(),
    }),
});

const interessantes = defineCollection({
  loader: glob({ base: './src/content/interessantes', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      siteTitle: z.string(),
      headerImage: image(),
      image: image(),
      headline: z.string(),
      subheadline: z.string().optional(),
    }),
});

export const collections = { seiten, leistungen, pferde, interessantes };
