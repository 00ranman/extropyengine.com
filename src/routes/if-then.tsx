import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/if-then")({
  head: () => ({
    meta: [
      { title: "If this, then that — Extropy Engine" },
      {
        name: "description",
        content:
          "Named cases that run when both edges signed. Not a liquidity pool. Not a manager caste.",
      },
    ],
  }),
  component: IfThenPage,
});

function IfThenPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Named cases" title="If this, then that">
      <p>
        People roll their eyes at “smart contract.” The useful object is older than a chain: a named
        case that runs when both edges already signed.
      </p>
      <p>
        If the cooler is empty and Tuesday is a standing order, reorder. If both edges accepted the
        claim, the mint gates may fire. If the four-week cash ratio is thin, H<sub>cap</sub> steps
        down. If the CAT on-duty bit is live, β is on for this ticket. If the bit is dark, β drops.
      </p>
      <p>
        Nobody in a conference room has to pretend that was a decision. A person is for the case the
        contract does not name yet. Then you write the new if-then. You do not mint a manager caste
        to babysit the named cases.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Why the listed version stays dumb</h2>
      <p>
        On a liquid chain the “then” is usually: move a bag. Every contract inherits the pool.
        Verification becomes a mint for that sale. People stop asking whether the loop closed and
        start asking whether the bag printed. That is the handicap. Not the if-then. The bag.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">What runs here</h2>
      <p>
        The “then” is not a transfer. Mint or refuse XP. Move or refuse CT<sub>W</sub>. Set
        H<sub>cap</sub> from published cash. Turn β on or off. Print cash collected and overlay
        touch. Park the overlay at 0. Standing does not list. EP dies on the ticket. So the contract
        can be about the dock and the till.
      </p>
      <p>
        Classical logic runs the named case. A model at the edge may package the claim. It does not
        become the ledger. Looking at a graph to hunt WHO still writes a vertex.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Rooms</h2>
      <p>
        A MICRO publishes the if-thens for its till and its posted tasks. A book publishes λ and the
        β allow-list. Planetary text does not price milk. Managers as people keep CATs: exceptions,
        dock truth, teaching a mapper. The class that exists only to be the decision on a named case
        is what the contract eats.
      </p>
      <p>
        Defaults:{" "}
        <a href="/docs/DEFAULTS.md" className="text-primary hover:underline">
          DEFAULTS.md
        </a>
        . Why a bag corrupts the claim:{" "}
        <Link to="/papers/liquidity-and-decay" className="text-primary hover:underline">
          Liquidity corrupts verification
        </Link>
        . Plain file:{" "}
        <a href="/docs/IF-THEN.md" className="text-primary hover:underline">
          IF-THEN.md
        </a>
        .
      </p>
    </EssayLayout>
  );
}
