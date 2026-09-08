import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/web3")({
  head: () => ({
    meta: [
      { title: "Web3 as promised — Extropy Engine" },
      {
        name: "description",
        content:
          "Web3 failed because the unit was a bag. This is keys on a box, a signed loop, both edges, no gas. Clone it.",
      },
    ],
  }),
  component: Web3Hub,
});

function Web3Hub() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Web3" title="The thing they advertised">
      <p>
        Web3 was a true sentence with a stupid unit. The sentence: keys on your box, no landlord,
        settlement without a priest. The unit they shipped: a farmable number. Then they charged gas
        to worship it. Every tool had to speak bag. Votes became who held the bag. “Work” became who
        could print the bag. Cryptography was fine. The meter was a casino chip. That is why it was
        stupid. That is why it failed.
      </p>
      <p>
        This is that sentence with a different atom. The unit is a signed loop. Two boxes.
        Countersign. A later vertex can burn it. Standing does not leave your hand. No gas. Ethereum
        can stay a toy for people who want a bag. It does not get to be the measuring stick.
      </p>
      <p>
        Clone it today.{" "}
        <a href="https://github.com/00ranman/extropy-engine" className="text-primary hover:underline">
          github.com/00ranman/extropy-engine
        </a>
        . Then <code>node packages/mesh/demo.mjs</code>. Two processes, one loop, one burn.
      </p>
      <ul className="list-none space-y-2 p-0">
        <li>
          <Link to="/web3/node" className="text-primary hover:underline">
            Clone a node
          </Link>
          {" — "}two boxes, ugly discovery, usable today.
        </li>
        <li>
          <Link to="/web3/loop" className="text-primary hover:underline">
            The loop
          </Link>
          {" — "}OPEN, DONE, CONFIRM, BURN. That is the tx.
        </li>
        <li>
          <Link to="/web3/identity" className="text-primary hover:underline">
            Identity
          </Link>
          {" — "}key on the laptop. Looking writes a vertex.
        </li>
        <li>
          <Link to="/web3/governance" className="text-primary hover:underline">
            Governance
          </Link>
          {" — "}voice is this proposal. Not a wallet.
        </li>
        <li>
          <Link to="/web3/truth" className="text-primary hover:underline">
            Truth engine
          </Link>
          {" — "}both edges, append-only, proxy that can be attacked.
        </li>
      </ul>
      <p>
        Letters if you need them:{" "}
        <Link to="/key" className="text-primary hover:underline">
          /key
        </Link>
        . This section is the wire, not a second religion.
      </p>
    </EssayLayout>
  );
}
