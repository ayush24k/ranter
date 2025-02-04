import { type } from "os";
import { z } from "zod";

export const getPostInput = z.object({
 content: z.string()
})

export type GetPostInputType = z.infer<typeof getPostInput>

export const getFeedInput = z.object({
  limit: z.number().optional(),
  cursor: z.object({
    id: z.string(),
    createdAt: z.date()
  }).optional(),
})

export type GetFeedInputType = z.infer<typeof getFeedInput>
