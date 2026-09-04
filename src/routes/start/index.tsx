import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { DoorGrid } from "@/components/doors";
import { startIntro } from "@/content/essays";

export const Route = createFileRoute("/start/")({
  component: StartHere,
  head: () => ({
    meta: [
      { title: "Enter — Extropy Engine" },
      {
        name: "description",
        content:
          "Why reward systems are broken. Why AI alignment fails. Why institutions drift. What if value is measurable.",
      },
    ],
  }),
});

function StartHere() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" title={startIntro.title}>
      <p>{startIntro.lead}</p>
      <div className="pt-4">
        <DoorGrid />
      </div>
      <div className="flex flex-wrap gap-3 pt-6 text-[11px] tracking-[0.18em] uppercase">
        <Link to="/" hash="film" className="text-dim hover:text-primary">
          Watch
        </Link>
        <Link to="/faq" className="text-dim hover:text-primary">
          FAQ
        </Link>
        <Link to="/glossary" className="text-dim hover:text-primary">
          Glossary
        </Link>
        <Link to="/open-problems" className="text-dim hover:text-primary">
          Open Problems
        </Link>
        <Link to="/proof-layers" className="text-dim hover:text-primary">
          Proof Layers
        </Link>
      </div>
    </EssayLayout>
  );
}