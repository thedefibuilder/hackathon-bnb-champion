import { z } from "zod";

import { featureNames } from "@/lib/features";
import { moduleNames } from "@/lib/modules";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const projectRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        chainId: z.number(),
        contracts: z.record(z.enum(moduleNames), z.set(z.enum(featureNames))),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = await ctx.db.project.create({
        data: {
          name: input.name,
          chain: {
            connectOrCreate: {
              where: {
                chainId: input.chainId,
              },
              create: {
                chainId: input.chainId,
              },
            },
          },
          contracts: {
            createMany: {
              data: Object.entries(input.contracts).map(
                ([moduleName, featureNames]) => ({
                  moduleName,
                  featureNames: [...featureNames],
                }),
              ),
            },
          },
        },
      });

      return id;
    }),
});
