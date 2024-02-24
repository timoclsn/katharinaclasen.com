import { z } from "zod";

const envVarSchema = z.string().min(1);

const envSchema = z.object({
  // Server

  // Draft mode
  DRAFT_MODE_SECRET: envVarSchema,

  // Sanity
  SANITY_PROJECT_ID: envVarSchema,
  SANITY_AUTH_TOKEN: envVarSchema,

  // Client

  // Vercel
  NEXT_PUBLIC_VERCEL_ENV: z
    .enum(["production", "preview", "development"])
    .optional(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.input<typeof envSchema> {}
  }
}
