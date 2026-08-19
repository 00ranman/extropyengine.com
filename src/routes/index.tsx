import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  BookHero,
  DocsBanner,
  FollowSection,
  Manifesto,
  MusicSection,
  PapersSection,
  SuiteSection,
} from "@/components/home-sections";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <SiteShell>
      <BookHero />
      <MusicSection />
      <Manifesto />
      <PapersSection />
      <SuiteSection />
      <FollowSection />
      <DocsBanner />
    </SiteShell>
  );
}
