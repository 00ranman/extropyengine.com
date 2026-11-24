import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { LoopStrip } from "@/components/home-shop";
import {
  DeepDoors,
  DollarBeat,
  LandingHero,
  ReceiptBeat,
  WallBeat,
} from "@/components/home-landing";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Extropy Engine: Work, Written Down in Public" },
      {
        name: "description",
        content:
          "Somebody did the work and nobody wrote it down. The Extropy Engine is a public record where finished work gets counted, in the open, where anyone can check it. Everything is free. A dollar a month funds the test.",
      },
      { property: "og:title", content: "Extropy Engine: Work, Written Down in Public" },
      {
        property: "og:description",
        content:
          "A public record where finished work gets counted, in the open, where anyone can check it. Everything is free. The dollar funds the test.",
      },
    ],
  }),
});

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
      <LandingHero />
      <div id="loop" className="scroll-mt-24">
        <LoopStrip />
      </div>
      <ReceiptBeat />
      <WallBeat />
      <DollarBeat />
      <DeepDoors />
    </SiteShell>
  );
}
