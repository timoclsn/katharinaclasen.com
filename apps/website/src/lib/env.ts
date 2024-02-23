import { z } from "zod";

const envSchema = z.object({
  DRAFT_MODE_SECRET: z.string().min(1),
  SANITY_PROJECT_ID: z.string().min(1),
  SANITY_AUTH_TOKEN: z.string().min(1),
  NEXT_PUBLIC_VERCEL_ENV: z.enum(["preview", "production"]).optional(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
