import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { getFeedInput, getPostInput } from "./post.input";

export const postRouter = createTRPCRouter({
  createProcedure: protectedProcedure.input(getPostInput).mutation(async ({ input, ctx }) => {
    const post = await ctx.db.post.create({
      data: {
        content: input.content,
        userId: ctx.session.user.id
      }
    })
    return post;
  }),
  infiniteFeedProcedure: publicProcedure.input(getFeedInput).query(async ({ input: { limit = 10, cursor }, ctx }) => {
    const infinitePost = await ctx.db.post.findMany({
      take: limit + 1,
      cursor: cursor ? { createdAt_id: cursor } : undefined,
      orderBy: [{ createdAt: "desc" }, { id: "desc" }]
    })
  })
})
