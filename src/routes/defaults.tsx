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
      <p>
        λ = 0.15. 10-day notice. β allow-list: CAT on-duty, asked domain band, signed if-then
        between two rooms. House may only narrow. 10-day notice.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">Class strip vs identity</h2>
      <p>
        A vertex is two envelopes. The class strip is public: class, mapper, ΔS, buckets, evidence
        hashes, state, parent vertex ids. Scouring that by class is not a LOOK. Identity is a ZKP
        (yes or no). Photo bytes and WHO stay sealed. DID, GPS, exact clock, or pictures in the
        strip is a lose-condition. Buckets, or it does not list.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">Review LOOK — the asterisk</h2>
      <p>
        Task type, not a class, not a third watcher. Envelope A (class strip) is public. Envelope B
        binds a signer without putting WHO on the row. Ordinary looking stays blind slices. Diary
        stays shut. If this web’s published trigger fires, a Review LOOK may see the packet that
        hashes to what they committed — not the rest of either PSLL. Result is a new vertex: holds /
        another slice / burn-claim. Original row does not edit. F still applies. Hub vertices route
        to a curator LOOK. Trigger is graph facts only (contest/burn cites, cited-harm band, or this
        DFAO opens dispute). Not an LLM vibe. Not a crawl. Not the identity 7-of-12 door. No
        planetary N. Until a web publishes a number: room vote or curator, not auto-unveil on one
        salty child.
      </p>
      <h2 className="font-display pt-4 text-2xl text-fg">This house</h2>
      <p>
        H_cap is Auto from this door’s signed cash. Training: remainder 0 until 10 days of
        signed tickets (two 5-day weeks). Then clip(0.5 × cash_in / cash_out, 0, 1). No slider. No Off on the
        register. Unplug is Off. S default 1 until this door has history. Fake-proof / spite cut S
        for 5 days.
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
