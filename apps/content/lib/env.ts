import { z } from "zod";

const envVarSchema = z.string().min(1);

const envSchema = z.object({
  // Server

  // Sanity
  SANITY_STUDIO_DRAFT_MODE_SECRET: envVarSchema,
  SANITY_STUDIO_SANITY_PROJECT_ID: envVarSchema,
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.input<typeof envSchema> {}
  }
}
