import { createFileRoute } from "@tanstack/react-router";
import { BookHero } from "@/components/home-sections";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/book")({ component: BookPage });

function BookPage() {
  return (
    <SiteShell>
      <BookHero />
    </SiteShell>
  );
}
