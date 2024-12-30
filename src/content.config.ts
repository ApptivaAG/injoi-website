import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data" }),
  schema: ({ image }) => z.object({
    lang: z.enum(["de", "en", "fr", "it"]),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    layout: z.enum(["@layouts/Blog.astro"]),
  }),
});

export const collections = {
  blog: blogCollection,
};
