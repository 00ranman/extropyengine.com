import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/tokenomics")({
  head: () => ({
    meta: [
      { title: "Tokenomics — Extropy Engine" },
      {
        name: "description",
        content:
          "How the meters couple. Not bags. XP, CT, IT, EP, CAT. No exchange.",
      },
    ],
  }),
  component: TokenomicsHub,
});

const meters = [
  { href: "/key#xp", letter: "XP", name: "World standing", leak: "Leaks 0.99ⁿ. Does not cash out." },
  { href: "/key#ct", letter: "CT", name: "Community standing", leak: "Same number at compatible tills. Idle leak 0.99ⁿ. Stays on that web." },
  { href: "/tokenomics/it", letter: "IT", name: "This-proposal standing", leak: "clip(H_gov · S_gov · κ · CT · β_gov). Burns in the tally." },
  { href: "/key#ep", letter: "EP", name: "Till spark", leak: "Born and burned on that ticket." },
  { href: "/key#cat", letter: "CAT", name: "Skill record", leak: "Feeds β when on-duty. Off the mint." },
] as const;

function TokenomicsHub() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Tokenomics" title="Meters, not bags">
      <p>
        Tokenomics here means how the five meters couple. XP, CT, IT, EP, CAT. Not six. Not an
        exchange. Nothing lists. You cannot send standing to a friend. You cannot cash it out. If
        you came from crypto, that is the disclaimer. Then read the letters.
      </p>
      <ul className="list-none space-y-3 p-0">
        {meters.map((m) => (
          <li key={m.letter}>
            <Link to={m.href} className="text-primary hover:underline">
              {m.letter}
            </Link>
            {" — "}
            {m.name}. {m.leak}
          </li>
        ))}
      </ul>
      <p>
        Full names live on the{" "}
        <Link to="/key" className="text-primary hover:underline">
          letter key
        </Link>
        . The other letters — R, F, ΔS, the sliders, the leaks — are{" "}
        <Link to="/math" className="text-primary hover:underline">
          math
        </Link>
        , not tokens.
      </p>
    </EssayLayout>
  );
}
