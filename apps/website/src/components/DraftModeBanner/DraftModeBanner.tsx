import { Feather, XCircle } from "lucide-react";
import Link from "next/link";
import { Container } from "../../design-system/Container/Container";

export const DraftModeBanner = () => {
  return (
    <section className="bg-background-dark">
      <Container
        inset
        className="flex items-center justify-between gap-4 py-4 font-serif italic text-contrast-primary-light"
      >
        <div className="flex items-center justify-center gap-2">
          <Feather size={18} />
          Draft Mode
        </div>
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
