import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/charter")({
  component: CharterPage,
  head: () => ({
    meta: [
      { title: "Distributed Charter — Extropy Engine" },
      {
        name: "description",
        content:
          "Process charter. Claim to vertex to XP and CT to L to EP. Not payroll. Not the Codex.",
      },
    ],
  }),
});

function CharterPage() {
  return (
    <EssayLayout
      backTo="/"
      backLabel="Extropy Engine"
      kicker="Process document"
      title="Distributed charter"
    >
      <p>
        The short page was the wrong artifact. The chain is in the long file.
      </p>
      <p>
        <a href="/docs/DISTRIBUTED_CHARTER.md" className="text-primary hover:underline">
          Full text (markdown)
        </a>
        <span className="text-faint"> · </span>
        <a href="/docs/Distributed_Charter.pdf" className="text-primary hover:underline">
          PDF
        </a>
        <span className="text-faint"> · </span>
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">The chain this file unpacks</h2>
      <p>
        Work in the world. Edge packager writes a claim (boundary, evidence, mapper version,
        proposed ΔS). Other edge can refuse. Vertex on a causal DAG. XP may move as global
        standing. CT may move as standing at this door. H and CT make L on this ticket. EP = XP × L
        burns in that sale. Cash still prints. Later evidence can burn status without erasing
        history. Standing leaks. None of it lists.
      </p>
      <p>
        Staff are not paid in EP. Distributors are not paid in EP. Wages and invoices stay tender.
        XP and CT can exist on the same people. A spark can knock pennies off a ticket at a till
        that opted in. Mixing those sentences is how a regulator hears a security.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Inside the long file</h2>
      <p>
        Lose-conditions. Two computers (classical mint, edge models). Faces (SignalFlow is the
        mouth, LocalFlow is an errand skin). Every letter and clock. One job walked slowly. XP-only
        / CT-only / both / neither. The payroll mistake. Vertices, late burn, stranger-close as
        convergence. MICRO through PLANETARY, firms, hierarchies, care rooms. Pocket bootstrap.
        Howey-shaped aim without pretending to be a lawyer. What stays unfrozen so a better mesh can
        win. What to attack first.
      </p>
      <p>
        Codex v2.1 still owns the signed letters. This is the process. If the markdown and a chatbot
        summary disagree, the markdown wins.
      </p>
    </EssayLayout>
  );
}
