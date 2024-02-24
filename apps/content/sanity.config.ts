import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { markdownSchema } from "sanity-plugin-markdown";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import "./lib/env";
import { schemaTypes } from "./schemas";

const { SANITY_STUDIO_DRAFT_MODE_SECRET, SANITY_STUDIO_SANITY_PROJECT_ID } =
  process.env;

const URL = "https://katharinaclasen.com";

export default defineConfig({
  name: "default",
  title: "katharinaclasen-com",

  projectId: SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: "production",

  document: {
    productionUrl: async (prev, context) => {
      const { getClient, document } = context;
      const client = getClient({ apiVersion: "2023-05-31" });

      if (document._type === "blogPost") {
        const slug = await client.fetch(
          `*[_type == 'blogPost' && _id == '${document._id}'][0].slug.current`
        );

        const params = new URLSearchParams();
        params.set("secret", SANITY_STUDIO_DRAFT_MODE_SECRET);
        params.set("slug", `/blog/${slug}`);

        return `${URL}/api/draft?${params}`;
      }

      if (document._type === "project") {
        const slug = await client.fetch(
          `*[_type == 'project' && _id == '${document._id}'][0].slug.current`
        );

        const params = new URLSearchParams();
        params.set("secret", SANITY_STUDIO_DRAFT_MODE_SECRET);
        params.set("slug", `/projects/${slug}`);

        return `${URL}/api/draft?${params}`;
      }

      return prev;
    },
  },

  plugins: [
    deskTool(),
    visionTool(),
    markdownSchema(),
    media(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
});
