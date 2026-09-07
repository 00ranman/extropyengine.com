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
  { href: "/key#xp", letter: "XP", name: "World standing", leak: "0.99ⁿ · ~1%" },
  { href: "/key#ct", letter: "CT", name: "Community standing", leak: "0.97ⁿ · ~3%" },
  { href: "/tokenomics/it", letter: "IT", name: "Governance weight", leak: "0.95ⁿ · ~5% idle" },
  { href: "/key#ep", letter: "EP", name: "Till spark", leak: "Dies on the ticket" },
  { href: "/key#cat", letter: "CAT", name: "Skill record", leak: "Off the mint" },
  { href: "/key#l", letter: "L", name: "This ticket", leak: "H_cap · S · κ · CT · β" },
] as const;

function TokenomicsHub() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Tokenomics" title="Meters, not bags">
      <p>
        Tokenomics here means how the meters couple. Not an exchange. Nothing lists. You cannot
        send standing to a friend. You cannot cash it out. If you came from crypto, that is the
        disclaimer. Then read the letters.
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
        Full names:{" "}
        <Link to="/key" className="text-primary hover:underline">
          letter key
        </Link>
        . Defaults:{" "}
        <a href="/docs/DEFAULTS.md" className="text-primary hover:underline">
          DEFAULTS.md
        </a>
        .
      </p>
    </EssayLayout>
  );
}
