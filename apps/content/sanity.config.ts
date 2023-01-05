import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
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
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({ type: 'philosophy', title: 'Philosophy', S, context }),
            orderableDocumentListDeskItem({ type: 'differentiator', title: 'Differentiator', S, context }),
            ...S.documentTypeListItems().filter((item) => !['philosophy', 'differentiator'].includes(item.getId()!))
          ])
      },
    }),
    visionTool(),
    markdownSchema(),
    media(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
})
