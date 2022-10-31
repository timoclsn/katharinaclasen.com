import { z } from "zod";
import { sanityDocumentSchema } from "./sanity";

export const animalSchema = sanityDocumentSchema.extend({
  name: z.string(),
});
