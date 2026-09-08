import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { liveGaps } from "@/content/open-gaps";

export const Route = createFileRoute("/build")({
  head: () => ({
    meta: [
      { title: "Build — Extropy Engine" },
      {
        name: "description",
        content:
          "The git is the network. Clone it. Close a loop. Building the missing pieces is posted work.",
      },
    ],
  }),
  component: BuildPage,
});

const world = liveGaps.filter((g) => g.section === "Has to happen in the world");

function BuildPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Call" title="The git is the network">
      <p>
        Open source. Distributed ledger. You can already write a signed vertex. Two boxes,
        OPEN → DONE → CONFIRM, later BURN. That is a loop. The meters (XP, CT, the till spark)
        sit in the kernel. A grocery drawer is not ringing in the wild yet. The work of making
        that drawer real is still work. Post it. Someone nearby does it. Both edges sign.
      </p>
      <p>
        Clone:{" "}
        <a href="https://github.com/00ranman/extropy-engine" className="text-primary hover:underline">
          github.com/00ranman/extropy-engine
        </a>
        . Then <code>node packages/mesh/demo.mjs</code>.{" "}
        <Link to="/web3/node" className="text-primary hover:underline">
          Two boxes
        </Link>
        .
      </p>
      <h2 className="font-display pt-4 text-[22px] tracking-[0.04em] text-fg">What's needed</h2>
      <ul className="list-disc space-y-3 pl-5">
        {world.map((g) => (
          <li key={g.title}>
            <strong className="text-fg">{g.title}.</strong> {g.body}
          </li>
        ))}
        <li>
          <strong className="text-fg">Strangers on the mesh.</strong> Two boxes that are not
          Randall’s. Ugly discovery is enough. QR later.
        </li>
        <li>
          <strong className="text-fg">Household closes.</strong> HomeFlow chores as the first
          boring loop. Both edges in one house.
        </li>
      </ul>
      <p>
        Full list:{" "}
        <Link to="/open-problems" className="text-primary hover:underline">
          open problems
        </Link>
        . Hostile spec for door one:{" "}
        <a href="/docs/DOOR-DUPLICATE-DATA.md" className="text-primary hover:underline">
          duplicate data
        </a>
        .
      </p>
      <p>
        Do not farm a bag. There isn’t one. Close something that happened. If it leaked, burn it.
      </p>
    </EssayLayout>
  );
}
