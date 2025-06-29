import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    标题: z.string(),
    描述: z.string(),
    // Transform string to Date object
    发布时间: z.coerce.date(),
    更新日期: z.coerce.date().optional(),
    图片: z.string().optional(),
  }),
});

export const collections = { blog };
