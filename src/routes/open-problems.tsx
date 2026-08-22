import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { openProblems } from "@/content/essays";

export const Route = createFileRoute("/open-problems")({ component: OpenProblems });

function OpenProblems() {
  const sections = [...new Set(openProblems.map((p) => p.section))];
  return (
    <EssayLayout backTo="/start" backLabel="Enter" title="Open Problems">
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
      <section className="space-y-3 border border-primary/20 bg-primary/4 p-5">
        <div className="text-[10px] tracking-[0.28em] text-primary uppercase">Current answer</div>
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">LocalFlow</h2>
        <p>
          LocalFlow is the bootstrap. On the surface it is a free local driver/errand network: post
          a ride, a grocery run, a task. Someone nearby does it. You confirm. No platform fee, no
          surge. Users never see XP, EP, or DAG — it just looks like matchmaking.
        </p>
        <p>
          Underneath, that confirmation <em>is</em> validation. Client posts → LOOPOPEN. Driver
          finishes, client confirms → LOOPCLOSE and provisional XP. Thirty days, no dispute →
          confirmed. Two parties have to agree, so you cannot mint by yourself. The first
          “validators” are just people doing the work. The remaining problem is density: enough
          subscribers in the same zone to pick the tasks up.
        </p>
        <p>
          <a
            href="https://github.com/00ranman/extropy-engine/tree/main/packages/localflow"
            className="text-primary hover:underline"
          >
            packages/localflow on GitHub →
          </a>
        </p>
      </section>
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
