import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  BookHero,
  EnterStrip,
  FollowSection,
  Manifesto,
  MusicSection,
  PapersSection,
  EngineSection,
} from "@/components/home-sections";
import { SymbolKeyStrip } from "@/components/symbol-key";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <SiteShell>
      <EnterStrip />
      <BookHero />
      <SymbolKeyStrip />
      <MusicSection />
      <Manifesto />
      <PapersSection />
      <EngineSection />
      <FollowSection />
    </SiteShell>
  );
}
