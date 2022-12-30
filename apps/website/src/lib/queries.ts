import { InferType, q } from "groqd";

export type Clients = InferType<typeof clientsQuery>;

export const clientsQuery = q(
  "*",
  q.filter("_type == 'client'"),
  q.order("name asc"),
  q.grab({
    shortName: q.string(),
    name: q.string().nullable(),
    logo: ["logo->image.asset._ref", q.string()],
    logoAlt: ["logo->alt", q.string()],
    description: q.string(),
    website: q.string().nullable(),
    caseStudy: q.string().nullable(),
    quoteText: ["quote->text", q.string().nullable()],
    quoteAutor: ["quote->author", q.string().nullable()]
  }),
);