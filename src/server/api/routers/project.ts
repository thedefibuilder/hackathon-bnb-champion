import type { EFeatureName } from '@/lib/features';
import type { EModuleName } from '@/lib/modules';
import type { Abi, Address, Hex } from 'viem';

import { parseUnits } from 'viem';
import { z } from 'zod';

import { getChainConfig } from '@/lib/chains';
import { calculateTotalPrice, featureNames } from '@/lib/features';
import { moduleNames } from '@/lib/modules';
import { generateArtifactKey } from '@/lib/utils';
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';
import { db } from '@/server/db';
import {
  validateIsProjectOwner,
  validatePaymentTransaction,
  validateProjectLimit
} from '@/server/utils/project';

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        chainId: z.number(),
        contracts: z.record(z.enum(moduleNames), z.set(z.enum(featureNames))),
        checkout: z
          .object({
            paymentMethod: z.object({
              chainId: z.number(),
              currency: z.string(),
              currencyDecimals: z.number()
            }),
            txHash: z.string().optional()
          })
          .optional()
      })
    )
    .mutation(async ({ ctx, input }) => {
      const chain = getChainConfig(input.chainId);
      const paymentAmount = chain?.network.testnet ? 0 : calculateTotalPrice(input.contracts);

      if (paymentAmount > 0) {
        if (!input.checkout) {
          throw new Error('Missing payment information');
        }
        if (!input.checkout.txHash) {
          throw new Error('Missing transaction hash');
        }
        await validatePaymentTransaction(
          input.checkout.paymentMethod.chainId,
          input.checkout.paymentMethod.currency as Address,
          input.checkout.txHash as Hex,
          parseUnits(paymentAmount.toFixed(2), input.checkout.paymentMethod.currencyDecimals)
        );
      } else {
        // If project is free, check if user has reached the limit.
        await validateProjectLimit(ctx.session);
      }

      const { id } = await ctx.db.project.create({
        data: {
          name: input.name,
          paymentTxHash: input.checkout?.txHash,
          chain: {
            connectOrCreate: {
              where: {
                chainId: input.chainId
              },
              create: {
                chainId: input.chainId
              }
            }
          },
          contracts: {
            createMany: {
              data: Object.entries(input.contracts).map(([moduleName, featureNames]) => ({
                moduleName,
                featureNames: [...featureNames]
              }))
            }
          },
          user: {
            connect: {
              id: ctx.session.user.id
            }
          }
        }
      });

      return id;
    }),

  updateName: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        name: z.string().min(3)
      })
    )
    .mutation(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);

      const updatedProject = await ctx.db.project.update({
        where: { id: input.projectId },
        data: { name: input.name }
      });

      return {
        success: true,
        project: updatedProject
      };
    }),

  deleteProject: protectedProcedure
    .input(
      z.object({
        projectId: z.number()
      })
    )
    .mutation(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);

      await ctx.db.project.delete({
        where: { id: input.projectId },
        include: {
          contracts: true
        }
      });
    }),

  get: protectedProcedure
    .input(z.object({ projectId: z.number() }))
    .query(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);

      return db.project.findUnique({
        where: {
          id: input.projectId
        }
      });
    }),

  getChainId: protectedProcedure
    .input(z.object({ projectId: z.number() }))
    .query(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);

      const project = await ctx.db.project.findUnique({
        where: {
          id: input.projectId
        },
        select: {
          chainId: true
        }
      });

      return project?.chainId;
    }),

  getAllContracts: protectedProcedure
    .input(z.object({ projectId: z.number() }))
    .query(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);

      return ctx.db.contract.findMany({
        where: {
          projectId: input.projectId
        }
      });
    }),

  getContract: protectedProcedure
    .input(z.object({ projectId: z.number(), moduleName: z.enum(moduleNames) }))
    .query(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);
      const contract = await ctx.db.contract.findUnique({
        where: {
          projectId_moduleName: {
            projectId: input.projectId,
            moduleName: input.moduleName
          }
        },
        include: {
          artifact: true
        }
      });

      if (contract)
        return {
          moduleName: contract.moduleName as EModuleName,
          featuresNames: contract.featureNames as EFeatureName[],
          address: contract.address as Address | null,
          abi: contract.artifact?.abi as Abi | null,
          bytecode: contract.artifact?.bytecode as Hex | null
        };

      return null;
    }),

  setArtifacts: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        moduleName: z.enum(moduleNames),
        abi: z.array(z.any()),
        bytecode: z.string()
      })
    )
    .mutation(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);
      const contract = await ctx.db.contract.findUniqueOrThrow({
        where: {
          projectId_moduleName: {
            projectId: input.projectId,
            moduleName: input.moduleName
          }
        }
      });

      // If artifact already exists, skip
      if (contract.artifactKey) return;

      const artifactKey = generateArtifactKey(
        input.moduleName,
        contract.featureNames as EFeatureName[]
      );

      await ctx.db.contract.update({
        where: {
          projectId_moduleName: {
            projectId: input.projectId,
            moduleName: input.moduleName
          }
        },
        data: {
          artifact: {
            connectOrCreate: {
              where: {
                key: artifactKey
              },
              create: {
                key: artifactKey,
                abi: input.abi,
                bytecode: input.bytecode
              }
            }
          }
        }
      });
    }),

  setContractAddress: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        module: z.enum(moduleNames),
        address: z.string().length(42)
      })
    )
    .mutation(async ({ ctx, input }) => {
      await validateIsProjectOwner(ctx.session, input.projectId);
      return db.contract.update({
        where: {
          projectId_moduleName: {
            projectId: input.projectId,
            moduleName: input.module
          }
        },
        data: {
          address: input.address
        }
      });
    })
});
