import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

// "2025-08" (year and month) or "2005" (year only).
const yearMonth = z.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, "Use YYYY or YYYY-MM");

// One entry per school or job. Both the home page timeline and the
// resume page read from src/data/timeline.yaml.
const timeline = defineCollection({
  loader: file("src/data/timeline.yaml"),
  schema: ({ image }) =>
    z.object({
      kind: z.enum(["work", "education"]),
      org: z.string(),
      role: z.string().optional(),
      location: z.string().optional(),
      start: yearMonth.optional(),
      // Leave `end` out for a current position; it renders as "Present".
      end: yearMonth.optional(),
      summary: z.string().optional(),
      // Longer detail shown on the resume page only.
      details: z.string().optional(),
      url: z.url().optional(),
      logo: image().optional(),
    }),
});

export const collections = { timeline };
