import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    period: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { work };
