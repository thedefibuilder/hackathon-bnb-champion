/* eslint-disable unicorn/prevent-abbreviations */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string(),
  },
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    DATABASE_URL: z.string().url(),
    FONTS_KEY: z.string(),
  },
  runtimeEnv: {
    // Client
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    // Server
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    FONTS_KEY: process.env.FONTS_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
