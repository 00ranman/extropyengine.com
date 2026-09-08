import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/web3/governance")({
  head: () => ({
    meta: [{ title: "Governance — Extropy Engine" }],
  }),
  component: Page,
});

function Page() {
  return (
    <EssayLayout backTo="/web3" backLabel="Web3" kicker="Governance" title="Voice is not a wallet">
      <p>
        Token-weighted votes were the bag wearing a gavel. Whoever bought the number ran the room.
        That is not governance. That is a sale.
      </p>
      <p>
        Here a room (a DFAO) can vote local knobs. It cannot cash standing out. IT is this
        proposal, clipped, burned in the tally. Extra years do not buy extra votes. XP does not
        weight the gavel.{" "}
        <Link to="/key" hash="it" className="text-primary hover:underline">
          IT
        </Link>
        .
      </p>
      <p>
        Named cases run without a meeting. Smart contracts — not crypto, no pool.{" "}
        <Link to="/smart-contracts" className="text-primary hover:underline">
          That page
        </Link>
        . Planetary mint rules stay planetary. If a room votes a bag, they forked.
      </p>
      <p>
        <Link to="/dfao" className="text-primary hover:underline">
          DFAO
        </Link>
        {" · "}
        <Link to="/hoa" className="text-primary hover:underline">
          Neighborhood
        </Link>
      </p>
    </EssayLayout>
  );
}
