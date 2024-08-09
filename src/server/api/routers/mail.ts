import { MailService } from '@defibuilder/sdk';

import { env } from '@/env';

import { createTRPCRouter, protectedProcedure } from '../trpc';

export const mailRouter = createTRPCRouter({
  isSubscribed: protectedProcedure.query(async ({ ctx }) => {
    const userMail = ctx.session.user.email;

    if (userMail) {
      const response = await MailService.isEmailSubscribed(userMail, env.MAILCHIMP_API_KEY);
      return response.data?.subscribed ?? false;
    }
    return false;
  }),
  subscribe: protectedProcedure.mutation(async ({ ctx }) => {
    const appTag = 'Modular Builder';
    const userMail = ctx.session.user.email;

    if (userMail) {
      const response = await MailService.subscribeEmail(userMail, appTag, env.MAILCHIMP_API_KEY);
      return response.data?.subscribed ?? false;
    }
    return false;
  })
});
