import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { glossarySections } from "@/content/essays";

export const Route = createFileRoute("/glossary")({ component: Glossary });

function Glossary() {
  return (
    <EssayLayout backTo="/start" backLabel="Enter" title="Glossary">
      <p>
        Canonical against Extropy Codex v2.1 — the most recent signed Codex. Operational definitions:
        how each term functions inside the system. Where prior drafts disagree, Codex v2.1 is
        canonical. Letters first:{" "}
        <Link to="/key" className="text-primary hover:underline">
          /key
        </Link>
        . R is rarity. F is Frequency of Decay. ℱ is falsifiability. w · E is weighted emergence —
        the product, not a fifth letter.
      </p>
      {glossarySections.map((section) => (
        <section key={section.heading} className="space-y-4 pt-4">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{section.heading}</h2>
          <dl className="space-y-5">
            {section.entries.map((entry) => {
              const id =
                entry.id ??
                entry.term
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "");
              return (
                <div key={entry.term} id={id} className="scroll-mt-24">
                  <dt className="mb-1 font-mono text-[12px] tracking-[0.12em] text-primary">{entry.term}</dt>
                  <dd>{entry.def}</dd>
                </div>
              );
            })}
          </dl>
        </section>
      ))}
      <p className="pt-4 text-sm text-dim">
        Speech-to-text repair for the names:{" "}
        <Link to="/say" className="text-primary hover:underline">
          /say
        </Link>
        . Not in the menu.
      </p>
    </EssayLayout>
  );
}