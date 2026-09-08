import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/web3/loop")({
  head: () => ({
    meta: [{ title: "The loop — Extropy Engine" }],
  }),
  component: Page,
});

function Page() {
  return (
    <EssayLayout backTo="/web3" backLabel="Web3" kicker="The tx" title="Not a mempool">
      <p>
        A tx here is a signed vertex: actor, loop id, parent hashes, evidence pointer, state. The
        other edge countersigns. That pair is settlement. Cost is holding the claim while a later
        vertex can still burn it. No gas.
      </p>
      <p>
        <code>OPEN</code> — work posted.
        <br />
        <code>DONE</code> — someone did it.
        <br />
        <code>CONFIRM</code> — the other edge, not you, signs it happened.
        <br />
        <code>BURN</code> — new vertex. The old row stays. The graph does not edit.
      </p>
      <p>
        Instant self-confirm is worthless on purpose. Slam-shut mints zero in the kernel. The mesh
        package will not let the same box CONFIRM its own DONE.
      </p>
      <p>
        Meters sit on top of this wire. They do not become a coin because two boxes talked.{" "}
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        .
      </p>
      <p>
        <Link to="/web3/node" className="text-primary hover:underline">
          Clone a node →
        </Link>
      </p>
    </EssayLayout>
  );
}
