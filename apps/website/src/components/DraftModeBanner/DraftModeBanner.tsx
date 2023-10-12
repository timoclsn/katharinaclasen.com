import { XCircle } from "lucide-react";
import Link from "next/link";
import { Container } from "../../design-system/Container/Container";

export const DraftModeBanner = () => {
  return (
    <section className="bg-background-pink-candy">
      <Container
        inset
        className="flex items-center justify-between gap-4 py-4 font-serif italic text-contrast-primary-dark"
      >
        Draft Mode
        <Link
          href="/api/disable-draft"
          prefetch={false}
          className="hover:opacity-80"
        >
          <XCircle size={18} />
          <span className="sr-only">Disable draft mode</span>
        </Link>
      </Container>
    </section>
  );
};
