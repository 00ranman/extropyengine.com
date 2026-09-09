import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/defaults")({
  head: () => ({
    meta: [
      { title: "Defaults — Extropy Engine" },
      {
        name: "description",
        content: "H_cap, λ, β, leaks. Who may change them. Publish before the first live till.",
      },
    ],
  }),
  component: DefaultsPage,
});

function DefaultsPage() {
  return (
    <EssayLayout backTo="/docs" backLabel="Docs" kicker="Defaults" title="The published numbers">
      <p>
        Humans will ask. “The MACRO publishes it” is only an answer if the numbers exist. Raw file
        for scrapers:{" "}
        <a href="/docs/DEFAULTS.md" className="text-primary hover:underline">
          /docs/DEFAULTS.md
        </a>
        .
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">Planetary (fork to change)</h2>
      <p>XP mint shape. XP leak 0.99ⁿ. CT idle leak 0.99ⁿ on that web. Cash-out of standing: forbidden. Ordinary MICRO close targets 0.01–1 XP. EP this sale cannot exceed line × H_cap.</p>
      <h2 className="font-display pt-4 text-2xl text-fg">Web W</h2>
      <p>λ = 0.15. Eight-week notice. β allow-list: CAT on-duty, asked domain band, signed if-then between two rooms. House may only narrow.</p>
      <h2 className="font-display pt-4 text-2xl text-fg">This house</h2>
      <p>
        H_cap is Auto from this door’s signed cash. Training: remainder 0 until 40 days of
        signed tickets. Then clip(0.5 × cash_in / cash_out, 0, 1). No slider. No Off on the
        register. Unplug is Off. S default 1 until this door has history. Fake-proof / spite cut S
        for 14 days.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">IT is not a leak clock</h2>
      <p>
        H_gov default 1. 0 = one DID, one nullifier. S_gov = 1 if you are in the room. Party to the
        dispute: 0. Full write-up:{" "}
        <Link to="/key" hash="it" className="text-primary hover:underline">
          letter key
        </Link>
        .
      </p>
      <p>
        <Link to="/math" className="text-primary hover:underline">
          Math
        </Link>
        {" · "}
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        {" · "}
        <Link to="/docs" className="text-primary hover:underline">
          All docs
        </Link>
      </p>
    </EssayLayout>
  );
}
