import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/tokenomics/it")({
  head: () => ({
    meta: [
      { title: "IT — Extropy Engine" },
      {
        name: "description",
        content: "IT is this-proposal standing. Clip to 1. Burns in the tally. Not XP times a gavel.",
      },
    ],
  }),
  component: ItPage,
});

function ItPage() {
  return (
    <EssayLayout backTo="/tokenomics" backLabel="Tokenomics" kicker="IT" title="This proposal, then it burns">
      <p>
        IT is not a pile you sit on. It is this-proposal standing. Same shape as L at the till. Born
        when a case is open. Burned in the tally. You cannot buy it with cash or with XP.
      </p>
      <p className="font-mono text-[14px] text-primary">
        IT = clip(H_gov · S_gov · κ · CT_W · β_gov, 0, 1)
      </p>
      <p>
        Not XP · G. That would let world standing buy extra gavels. Clip to 1 means twenty years
        here and two years here can both sit at full voice. Extra years do not mint extra votes.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">Why not 5% on a bag</h2>
      <p>
        A leaked pile is still a pile. Half a gavel after a quiet year is still a gavel. Live CT
        already idle-leaks at 1%. That is the anti-fossil clock. Governance work mints XP and can
        move CT. It does not mint a second meter.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">The knobs</h2>
      <p>
        H_gov — how hard standing counts. Default 1. Park to 0 and it is one DID, one nullifier.
        S_gov — you in this room. 0 if you are not. Party to the dispute: 0. β_gov — the lane this
        case asked for. Tourists do not vote a city rule unless a signed case says so.
      </p>
      <p>
        Named cases still run without a meeting. That is{" "}
        <Link to="/smart-contracts" className="text-primary hover:underline">
          smart contracts
        </Link>
        . IT is the unnamed case. Planetary grammar is not an IT vote.
      </p>
      <p>
        <a href="/docs/IT.md" className="text-primary hover:underline">
          IT.md
        </a>
        {" · "}
        <Link to="/math" className="text-primary hover:underline">
          Math
        </Link>
      </p>
    </EssayLayout>
  );
}
