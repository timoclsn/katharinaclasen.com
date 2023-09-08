import "server-only";
import { z } from "zod";

const SANITY_PROJECT_ID = "dk9hv6ix";
const DATASET = "production";
const API_Version = "2022-12-21";

export const queryContent = async <TSchema extends z.ZodTypeAny>(
  query: string,
  schema: TSchema,
  options: {
    cache: "dynamic" | "ISR" | "static";
  } = {
    cache: "ISR",
  },
) => {
  const { cache } = options;

  const url = `https://${SANITY_PROJECT_ID}.api${
    cache === "dynamic" ? "cdn" : ""
  }.sanity.io/v${API_Version}/data/query/${DATASET}?query=${encodeURIComponent(
    query,
  )}`;

  const response = await fetch(url, {
    ...(cache === "dynamic"
      ? {
          cache: "no-store",
        }
      : {}),
    ...(cache === "ISR"
      ? {
          next: {
            revalidate: 60,
          },
        }
      : {}),
    ...(cache === "static"
      ? {
          cache: "force-cache",
        }
      : {}),
  });
  const data = await response.json();

  return schema.parse(data.result) as z.infer<TSchema>;
};
