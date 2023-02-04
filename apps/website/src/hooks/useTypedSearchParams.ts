import { z } from "zod";

export const useTypedSearchParams = <TSchema extends z.ZodTypeAny>(
  searchParams: unknown,
  schema: TSchema
) => {
  return schema.parse(searchParams) as z.infer<TSchema>;
};
