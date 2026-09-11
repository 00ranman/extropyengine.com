import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { CallToArms, EngineSection } from "@/components/home-sections";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/how-it-runs")({ component: HowItRunsPage });

function HowItRunsPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!id) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <SiteShell>
      <CallToArms />
      <EngineSection />
    </SiteShell>
  );
}
