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
          "How XP, CT, L, and EP couple. Till spark is not payroll. No bag. Fork if you can measure better.",
      },
    ],
  }),
});

function CharterPage() {
  return (
    <EssayLayout
      backTo="/"
      backLabel="Extropy Engine"
      kicker="Not the Codex"
      title="Distributed charter"
    >
      <p>
        Follow-along for the causal chain. Not a company filing. Not a verdict machine. Letters stay
        as on the key. Full text also lives as markdown for upload:{" "}
        <a href="/docs/DISTRIBUTED_CHARTER.md" className="text-primary hover:underline">
          DISTRIBUTED_CHARTER.md
        </a>
        .
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Lose-conditions</h2>
      <p>
        No liquidity of standing. No transfer of meters as bags. No frozen constant as the
        territory. No ninth letter. No Engine cage. If a fork lists XP, they left.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Two computers</h2>
      <p>
        Classical logic runs mint, clip, leak, burn, sliders. Models at the edge package claims.
        They do not become the ledger. Looking at a graph to hunt WHO still writes a vertex.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">The coupling</h2>
      <p className="font-mono text-[13px] text-fg">
        XP = R × F × ΔS × (w · E) × log(1/Tₛ)
        <br />
        L = clip(H · CT_d · β, 0, 1)
        <br />
        EP = XP × L
      </p>
      <p>
        Tₛ zeros a slam. F eats repeats. XP leaks 0.99ⁿ. EP dies when the ticket dies. Cash still
        rings. Staff are not paid in EP. A video that says they are is wrong as payroll and only
        accidentally right as a long ρ story.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">XP only / CT only / both</h2>
      <p>
        XP is mesh standing from a closed loop. CT is whether <em>this</em> door can plan around
        you. Both when the same work is a global loop and this room’s node. Neither when H is parked
        or the other edge refused. Sam’s Club CT does not pay the laundromat.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Ledger</h2>
      <p>
        A claim is a vertex with parents. History is not erased. Late burn is a new edge. Convergence
        is stranger closes and leakage terms showing up, not eleven people ordered to agree.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Rooms</h2>
      <p>
        A DFAO votes local CT and H. It cannot vote cash-out. Firms keep wages as wages. Care rooms
        track volunteer loops; the person being fed does not have to mint. A hierarchy can score
        maintenance loops. It does not put targeting on the mint.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Law-shaped, not a lawyer</h2>
      <p>
        Aimed away from a Howey bag: no sale of XP, no listed EP, spark burns, cash is still tender.
        A discount is still economic. Tax and stored-value law are country desks. If a state treats
        it as money, park H at 0. Do not add an order book to “comply.”
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Bootstrap</h2>
      <p>
        Pockets, not a census. Cash works for holdouts. The next door copies a mapper. You need
        rooms that close honest loops, not a majority of saints. A better mesh is allowed to win.
      </p>

      <p className="pt-4 text-sm">
        <Link to="/key" className="text-primary hover:underline">
          Key
        </Link>
        <span className="text-faint"> · </span>
        <a href="/docs/METER-MATH.md" className="text-primary hover:underline">
          Meter math
        </a>
        <span className="text-faint"> · </span>
        <Link to="/papers/liquidity-and-decay" className="text-primary hover:underline">
          Liquidity paper
        </Link>
        <span className="text-faint"> · </span>
        <Link to="/instead" className="text-primary hover:underline">
          Instead
        </Link>
      </p>
    </EssayLayout>
  );
}
