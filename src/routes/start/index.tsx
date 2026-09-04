import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { DoorBriefs, DoorGrid } from "@/components/doors";
import { startIntro } from "@/content/essays";

export const Route = createFileRoute("/start/")({
  component: StartHere,
  head: () => ({
    meta: [
      { title: "Which problem is yours? — Extropy Engine" },
      {
        name: "description",
        content:
          "Why reward systems are broken. Why AI alignment fails. Why institutions drift. What if the useful part is measurable.",
      },
    ],
  }),
});

function StartHere() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" title={startIntro.title}>
      <p>{startIntro.lead}</p>
      <div className="pt-6">
        <DoorGrid />
      </div>
      <DoorBriefs />
      <div className="flex flex-wrap gap-3 pt-10 text-[11px] tracking-[0.18em] uppercase">
        <Link to="/key" className="text-dim hover:text-primary">
          Letters
        </Link>
        <Link to="/faq" className="text-dim hover:text-primary">
          FAQ
        </Link>
        <Link to="/instead" className="text-dim hover:text-primary">
          Instead
        </Link>
        <Link to="/mvt" className="text-dim hover:text-primary">
          Run it
        </Link>
      </div>
    </EssayLayout>
  );
}
