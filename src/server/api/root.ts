import { contractRouter } from "./routers/contract";
import { mailRouter } from "./routers/mail";
import { projectRouter } from "./routers/project";
import { userRouter } from "./routers/user";
import { createCallerFactory, createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  user: userRouter,
  project: projectRouter,
  contract: contractRouter,
  mail: mailRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
