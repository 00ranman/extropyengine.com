import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { openProblems } from "@/content/essays";

export const Route = createFileRoute("/open-problems")({ component: OpenProblems });

function OpenProblems() {
  const sections = [...new Set(openProblems.map((p) => p.section))];
  return (
    <EssayLayout backTo="/start" backLabel="Start Here" title="Open Problems">
      <p>
        These are the places where this framework might break. Publishing them is deliberate. A
        system that hides its failure conditions is a religion. One that exposes them is engineering.
      </p>
      <p>
        The engineering backlog (65 items) lives in{" "}
        <a
          href="https://github.com/00ranman/extropy-engine/blob/main/docs/GAPS.md"
          className="text-primary hover:underline"
        >
          extropy-engine/docs/GAPS.md
        </a>
        . Codex v2.1 stays frozen for now — this page is the public reading of the gaps, not a new
        edition.
      </p>
      {sections.map((section) => (
        <section key={section} className="space-y-4 pt-4">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{section}</h2>
          {openProblems
            .filter((p) => p.section === section)
            .map((p) => (
              <article key={p.title} className="border border-primary/15 p-5">
                <div className="mb-2 text-[10px] tracking-[0.28em] text-primary uppercase">
                  {p.hardness}
                </div>
                <h3 className="font-display mb-2 text-xl text-fg">{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
        </section>
      ))}
    </EssayLayout>
  );
}
