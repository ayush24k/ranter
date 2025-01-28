import { z } from "zod";

export const getPostInput = z.object({
 content: z.string()
})

export type GetPostInputType = z.infer<typeof getPostInput>
