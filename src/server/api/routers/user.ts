import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc';
import { db } from '@/server/db';

export const userRouter = createTRPCRouter({
  setWalletAddress: protectedProcedure
    .input(z.object({ walletAddress: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return db.user.update({
        where: {
          id: ctx.session.user.id
        },
        data: {
          walletAddress: input.walletAddress
        }
      });
    }),
  get: protectedProcedure.query(({ ctx }) => {
    return db.user.findUnique({
      where: {
        id: ctx.session.user.id
      }
    });
  }),
  getProjects: publicProcedure.query(({ ctx }) => {
    if (!ctx.session) return null;

    return db.project.findMany({
      where: {
        userId: ctx.session.user.id
      }
    });
  })
});
