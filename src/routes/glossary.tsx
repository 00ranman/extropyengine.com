import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { glossarySections } from "@/content/essays";

export const Route = createFileRoute("/glossary")({ component: Glossary });

function Glossary() {
  return (
    <EssayLayout backTo="/start" backLabel="Start Here" title="Glossary">
      <p>
        Canonical v3.1.2. Operational definitions: how each term functions inside the system. Where
        prior drafts disagree, v3.1.2 is canonical.
      </p>
      {glossarySections.map((section) => (
        <section key={section.heading} className="space-y-4 pt-4">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{section.heading}</h2>
          <dl className="space-y-5">
            {section.entries.map((entry) => (
              <div key={entry.term}>
                <dt className="mb-1 font-mono text-[12px] tracking-[0.12em] text-primary">{entry.term}</dt>
                <dd>{entry.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </EssayLayout>
  );
}
