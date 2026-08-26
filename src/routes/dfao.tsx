import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { DFAO_NAME, dfaoPhases, dfaoScales } from "@/content/dfao";

export const Route = createFileRoute("/dfao")({ component: DfaoDoc });

function DfaoDoc() {
  return (
    <EssayLayout
      backTo="/#engine"
      backLabel="Engine"
      kicker="Protocol note"
      title="DFAO"
    >
      <p className="font-display text-lg tracking-[0.02em] text-fg">{DFAO_NAME}.</p>
      <p>
        Not “feedback-aware.” Not a DAO with extra letters. Fractal: a DFAO at one scale is made of
        DFAOs at the scale below. Same loop — post, do, confirm, mint or burn. Different default
        knobs.
      </p>
      <p>
        The protocol enum is <span className="font-mono text-fg">NANO → MICRO → MESO → MACRO → PLANETARY</span>.
        Those are labels for a suggested rule set. They are not fences. Nothing in the physics, and
        nothing in the type system, ejects you for having eight people in a MICRO. Seven was a
        shorthand that leaked onto this site as if it were a law. It is not.
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Scale is a suggestion</h2>
      <p>
        When you are about this size, call it this, and load this default rule set. If you outgrow
        the behavior, rename the scale and load the next defaults. You can override. The loop does
        not care what you named the room.
      </p>
      <div className="overflow-x-auto border border-primary/18">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
              <th className="border-b border-primary/20 px-3 py-2 font-normal">Scale</th>
              <th className="border-b border-primary/20 px-3 py-2 font-normal">Typical look</th>
              <th className="border-b border-primary/20 px-3 py-2 font-normal">Default knobs</th>
            </tr>
          </thead>
          <tbody>
            {dfaoScales.map((row) => (
              <tr key={row.scale}>
                <td className="border-b border-fg/10 px-3 py-3 align-top font-mono text-xs text-primary">
                  {row.scale}
                  <div className="mt-1 font-sans tracking-normal text-dim normal-case">{row.typical}</div>
                </td>
                <td className="border-b border-fg/10 px-3 py-3 align-top text-fg">{row.look}</td>
                <td className="border-b border-fg/10 px-3 py-3 align-top">{row.knobs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        A MICRO with twelve people is a MICRO that’s a bit large, not a protocol violation. A MICRO
        with forty-two is still a MICRO if it still behaves like a team. When it starts needing
        departments, that’s MESO.
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">What actually changes</h2>
      <p>Same confirmation loop at every scale. What scales:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Quorum — a count, or a percent of actives. Suggested, overridable.</li>
        <li>Deliberation window — hours at MICRO, days at MESO, longer above.</li>
        <li>Voting method — linear reputation, quadratic, or conviction.</li>
        <li>
          Binding — SHADOW DFAOs do not bind. HYBRID binds some things. ACTIVE binds under its own
          rules.
        </li>
        <li>
          Proposal threshold — roughly log(system size) × complexity × impact radius. Bigger rooms
          need a better reason to move the floor.
        </li>
        <li>Nesting — parent / child. A MACRO is DFAOs all the way down.</li>
      </ul>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Phases</h2>
      <dl className="space-y-3">
        {dfaoPhases.map((p) => (
          <div key={p.status}>
            <dt className="font-mono text-[12px] tracking-[0.12em] text-primary">{p.status}</dt>
            <dd>{p.note}</dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">How you start one</h2>
      <p>
        Post work. Someone does it. You confirm. That is already a DFAO. LocalFlow is the errand
        face so nobody has to say “protocol.” SignalFlow is how the ΔS gets proposed — you do not
        type in a score. One person is NANO. A crew is MICRO. When the crew grows a second crew, you
        nest. You do not wait for a priesthood, and you do not wait until you have exactly seven.
      </p>
      <p>
        Votes rewrite the DFAO they are cast in: settle window, decay rates, quorum. They do not
        rewrite the mesh. PLANETARY is the only room that hits everyone, and getting a vote through
        there is supposed to be hard. Defaults (including a ~30-day first settle window) are
        starting numbers, not axioms. There may yet be a floor: some XP and some IT always burn.
        That would be an axiom. It is not written in as one yet.
      </p>
      <p>
        Registry code lives in{" "}
        <a
          href="https://github.com/00ranman/extropy-engine/tree/main/packages/dfao-registry"
          className="text-primary hover:underline"
        >
          packages/dfao-registry
        </a>
        . Types:{" "}
        <a
          href="https://github.com/00ranman/extropy-engine/blob/main/packages/contracts/src/types.ts"
          className="text-primary hover:underline"
        >
          DFAOScale
        </a>
        . Implementation is incremental. The happy path loop is real. The org layer is specified
        and filling in.
      </p>
      <p>
        Plain file:{" "}
        <a href="/docs/DFAO_Mechanics.md" className="text-primary hover:underline">
          DFAO_Mechanics.md
        </a>
        .
      </p>
    </EssayLayout>
  );
}