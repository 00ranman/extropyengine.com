import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/tokenomics/it")({
  head: () => ({
    meta: [
      { title: "IT — Extropy Engine" },
      {
        name: "description",
        content: "IT is governance weight. 5% idle leak. Not a bag. You cannot buy it with XP.",
      },
    ],
  }),
  component: ItPage,
});

function ItPage() {
  return (
    <EssayLayout backTo="/tokenomics" backLabel="Tokenomics" kicker="IT" title="The gavel that rots">
      <p>
        IT is governance weight. Not Insight Token. Not a bag. Off the XP mint. You cannot buy it
        with cash. You cannot buy it with XP. You cannot send it to a friend.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">Why 5%</h2>
      <p>
        XP leaks ~1% of remaining per month. World standing should last if you keep closing loops.
        CT leaks ~3%. Transfer-burn is gone; that leak is the burn. IT leaks ~5% while idle. A seat
        that does not show up should empty before a year and a half. Half-life about 13.5 months at
        0.95ⁿ.
      </p>
      <p>Remaining after n months: IT × 0.95ⁿ. Idle means no voice-bearing close in the period.</p>
      <h2 className="font-display pt-4 text-2xl text-fg">How it moves</h2>
      <p>
        A room publishes which loops are voice-bearing: contesting a puff, teaching a mapper,
        looking at a graph (that writes a vertex), closing a governance case. Those closes mint IT.
        Unsettled claims do not. A vote uses remaining IT as weight. It does not spend IT. Leak is
        the only spend.
      </p>
      <p>
        Planetary grammar and cash-out are not IT votes. A shop cannot vote the XP mint slower. A
        room may not publish an IT leak gentler than 0.96 without a fork.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">What it is for</h2>
      <p>
        Named cases still run without a meeting. That is{" "}
        <Link to="/smart-contracts" className="text-primary hover:underline">
          smart contracts
        </Link>
        . IT is the weight when the case is not named yet.
      </p>
      <p>
        <a href="/docs/IT.md" className="text-primary hover:underline">
          IT.md
        </a>
        {" · "}
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
      </p>
    </EssayLayout>
  );
}
