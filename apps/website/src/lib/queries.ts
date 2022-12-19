import { q } from "groqd";
import { runQuery } from "./sanity";

export const queryPersons = async () => {
  return await runQuery(
    q(
      "*",
      q.filter("_type == 'person'"),
      q.grab({
        fullName: q.string(),
        portrait: ["portrait.asset._ref", q.string()],
        portraitAlt: ["portrait.alt", q.string()],
      }),
      q.slice(0, 150)
    )
  );
};