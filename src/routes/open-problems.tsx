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
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">LocalFlow is the errand face</h2>
        <p>
          LocalFlow replaces the pile: Uber, Lyft, DoorDash, Grubhub, plus the run you don’t have a
          car for. Post it. Someone nearby does it. You confirm. No platform fee, no surge. Users
          never have to say XP.
        </p>
        <p>
          That confirmation closes a loop. It is not how the score is invented. You do not type in
          how much a lawn is worth.
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
      <section className="space-y-3 border border-primary/20 bg-primary/4 p-5">
        <div className="text-[10px] tracking-[0.28em] text-primary uppercase">Current answer</div>
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">SignalFlow is the protocol</h2>
        <p>
          You talk to SignalFlow. It talks to the assistant you already trust — ChatGPT, Claude,
          Gemini, or a model on your own hardware — plus your PSLL. It looks at the task, the
          duration, before/after evidence on the DAG, and proposes a provisional ΔS. If-then. The
          other side has to agree.
        </p>
        <p>
          Company login means company tether. Own hardware is how you stay unknown. A
          network-hosted model is a later idea, not a product today. MICRO overselling is real.
          SignalFlow plus evidence plus late burn is how we live with it, not a claim that people
          will not try.
        </p>
        <p>
          <a
            href="https://github.com/00ranman/extropy-engine/tree/main/packages/signalflow"
            className="text-primary hover:underline"
          >
            packages/signalflow on GitHub →
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
