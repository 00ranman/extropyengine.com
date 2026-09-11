import { createFileRoute } from "@tanstack/react-router";
import { PapersSection } from "@/components/home-sections";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/papers/")({ component: PapersPage });

function PapersPage() {
  return (
    <SiteShell>
      <PapersSection />
    </SiteShell>
  );
}
