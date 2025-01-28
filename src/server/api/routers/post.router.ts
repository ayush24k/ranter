import { createTRPCRouter, protectedProcedure } from "../trpc";
import { getPostInput } from "./post.input";

export const postRouter = createTRPCRouter({
  createProcedure: protectedProcedure.input(getPostInput).mutation(async ({input, ctx}) => {
    const post = await ctx.db.post.create({
      data: {
        content: input.content,
        userId: ctx.session.user.id
      }
    })
    return post;
  }),
})
