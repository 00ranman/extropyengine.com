import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/web3/identity")({
  head: () => ({
    meta: [{ title: "Identity — Extropy Engine" }],
  }),
  component: Page,
});

function Page() {
  return (
    <EssayLayout backTo="/web3" backLabel="Web3" kicker="Identity" title="Key on the box">
      <p>
        First boot writes an Ed25519 key in your data folder. That is the node. Not a seed phrase
        that is also a hedge fund. Not a registrar. State, employer, and protocol team do not hold
        the pen.
      </p>
      <p>
        Selective disclosure at a door is the bartender asking one bit. The diary stays on the
        laptop. Looking at the graph to check a claim writes a vertex. Silent fetch is a detectable
        act. That is the opposite of a platform ingesting you for free.
      </p>
      <p>
        Import from Chess.com or a district is a hash you carry, not a two-way pipe into the DID.{" "}
        <Link to="/docs/CAT-LANES.md" className="text-primary hover:underline">
          CAT lanes
        </Link>
        .
      </p>
    </EssayLayout>
  );
}
