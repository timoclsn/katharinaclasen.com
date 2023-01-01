import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { markdownSchema } from "sanity-plugin-markdown";
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
  ],

  schema: {
    types: schemaTypes,
  },
})
