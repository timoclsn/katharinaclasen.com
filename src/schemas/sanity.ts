import { z } from "zod";

export const sanityDocumentSchema = z.object({
  _createdAt: z.string(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.string(),
});
