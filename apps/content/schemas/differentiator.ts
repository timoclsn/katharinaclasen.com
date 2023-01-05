import { orderRankField } from "@sanity/orderable-document-list";
import { defineType } from "sanity";
import { cardGridItemFields, cardGridItemGroups } from "../fields/cardGridItem";

export const differentiator = defineType({
  name: "differentiator",
  title: "Differentiator",
  type: "document",
  groups: [...cardGridItemGroups],
  fields: [orderRankField({ type: "differentiator" }), ...cardGridItemFields],
});
