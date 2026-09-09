import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { closedGaps, liveGaps, gapCounts } from "@/content/open-gaps";

export const Route = createFileRoute("/open-problems")({ component: OpenProblems });

function OpenProblems() {
  const liveSections = [...new Set(liveGaps.map((p) => p.section))];
  return (
    <EssayLayout backTo="/start" backLabel="Enter" title="Open Problems">
      <p>
        {gapCounts.live} live gaps ({gapCounts.open} open, {gapCounts.narrowed} specified but
        untested). {gapCounts.closed} old questions scratched because they were the wrong shape.
        A system that hides failure conditions is a religion.
      </p>
      <p>
        Engineering backlog still lives in{" "}
        <a
          href="https://github.com/00ranman/extropy-engine/blob/main/docs/GAPS.md"
          className="text-primary hover:underline"
        >
          docs/GAPS.md
        </a>
        . Codex v2.1 stays frozen. This page is the public list as of 7 Sep 2026.
      </p>

      <section className="space-y-3 border border-primary/20 bg-primary/4 p-5">
        <div className="text-[10px] tracking-[0.28em] text-primary uppercase">Current answer</div>
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">LocalFlow is the errand face</h2>
        <p>
          Post it. Someone nearby does it. You confirm. That closes a loop. You do not type how
          much a lawn is worth.
        </p>
      </section>
      <section className="space-y-3 border border-primary/20 bg-primary/4 p-5">
        <div className="text-[10px] tracking-[0.28em] text-primary uppercase">Current answer</div>
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">SignalFlow is the protocol mouth</h2>
        <p>
          It proposes ΔS from the model you trust plus evidence. Lookers attach later, in parts.
          Smart contracts run the named case after that. Models do not become the ledger.
        </p>
      </section>

      {liveSections.map((section) => (
        <section key={section} className="space-y-4 pt-4">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{section}</h2>
          {liveGaps
            .filter((p) => p.section === section)
            .map((p) => (
              <article key={p.title} className="border border-primary/15 p-5">
                <div className="mb-2 text-[10px] tracking-[0.28em] text-primary uppercase">
                  {p.status}
                </div>
                <h3 className="font-display mb-2 text-xl text-fg">{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
        </section>
      ))}

      <section className="space-y-4 pt-4">
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">Scratched</h2>
        {closedGaps.map((p) => (
          <article key={p.title} className="border border-primary/15 p-5 opacity-80">
            <div className="mb-2 text-[10px] tracking-[0.28em] text-primary uppercase">closed</div>
            <h3 className="font-display mb-2 text-xl text-fg">{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </section>
    </EssayLayout>
  );
}
