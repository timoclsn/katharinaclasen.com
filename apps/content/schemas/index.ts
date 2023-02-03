import { accordion } from "./accordion";
import { accordionItem } from "./accordionItem";
import { blogPost } from "./blogPost";
import { cardGrid } from "./cardGrid";
import { cardGridItem } from "./cardGridItem";
import { carousel } from "./carousel";
import { client } from "./client";
import { metadata } from "./metaData";
import { project } from "./project";
import { quote } from "./quote";
import { service } from "./service";
import { textSnippet } from "./text";
import { topic } from "./topic";

export const schemaTypes = [
  client,
  project,
  blogPost,
  service,
  topic,
  accordionItem,
  accordion,
  cardGridItem,
  cardGrid,
  quote,
  carousel,
  textSnippet,
  metadata,
];
