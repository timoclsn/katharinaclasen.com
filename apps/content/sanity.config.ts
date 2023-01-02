import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { markdownSchema } from "sanity-plugin-markdown";
import { media } from 'sanity-plugin-media';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'katharinaclasen-com',

  projectId: 'dk9hv6ix',
  dataset: 'production',

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
})
