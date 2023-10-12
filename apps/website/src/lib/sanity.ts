import "server-only";

import { draftMode } from "next/headers";
import { z } from "zod";

const SANITY_PROJECT_ID = z.string().parse(process.env.SANITY_PROJECT_ID);
const SANITY_AUTH_TOKEN = z.string().parse(process.env.SANITY_AUTH_TOKEN);
const DATASET = "production";
const API_Version = "2023-10-12";

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

  let isDraftMode = false;
  try {
    isDraftMode = draftMode().isEnabled;
  } catch (error) {
    // Ignire error
  }

  const useCdn = !isDraftMode && cache === "dynamic";
  const perspective = isDraftMode ? "raw" : "published";

  const url = `https://${SANITY_PROJECT_ID}.api${
    useCdn ? "cdn" : ""
  }.sanity.io/v${API_Version}/data/query/${DATASET}?perspective=${perspective}&query=${encodeURIComponent(
    query,
  )}`;

  const cacheConfig = () => {
    if (isDraftMode || cache === "dynamic") {
      return {
        cache: "no-store",
      } as const;
    }

    if (cache === "static") {
      return {
        cache: "force-cache",
      } as const;
    }

    if (cache === "ISR") {
      return {
        next: {
          revalidate: 60,
        } as const,
      };
    }

    return {};
  };

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${SANITY_AUTH_TOKEN}`,
    },
    ...cacheConfig(),
  });

  const data = await response.json();
  return schema.parse(data.result) as z.infer<TSchema>;
};
