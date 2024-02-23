import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

const { DRAFT_MODE_SECRET } = process.env;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== DRAFT_MODE_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();
  redirect(slug);
};
