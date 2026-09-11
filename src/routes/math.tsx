import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/math")({
  head: () => ({
    meta: [
      { title: "Math — Extropy Engine" },
      {
        name: "description",
        content: "The letters that are not tokens. Mint formula, Auto H, three leaks.",
      },
    ],
  }),
  component: MathPage,
});

function MathPage() {
  return (
    <EssayLayout backTo="/tokenomics" backLabel="Tokenomics" kicker="Math" title="The other letters">
      <p>
        Tokens are five: XP, CT, IT, EP, CAT. Everything below is how those numbers are born,
        clipped, or leaked. Honorary mentions. Not a sixth bag.

      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">The mint</h2>
      <p className="font-mono text-[14px] text-primary">
        XP = R × F × ΔS × (w · E) × log(1/Tₛ)
      </p>
      <ul className="list-none space-y-2 p-0">
        <li>
          <Link to="/key" hash="r" className="text-primary hover:underline">
            R
          </Link>{" "}
          — rarity of the action class. Not how famous you are.
        </li>
        <li>
          <Link to="/key" hash="f" className="text-primary hover:underline">
            F
          </Link>{" "}
          — repeats pay less.
        </li>
        <li>
          <Link to="/key" hash="delta-s" className="text-primary hover:underline">
            ΔS
          </Link>{" "}
          — bits-equivalent proxy inside a declared boundary. Not SI social heat.
        </li>
        <li>
          <Link to="/key" hash="w-dot-e" className="text-primary hover:underline">
            w · E
          </Link>{" "}
          — eight-domain weights times this loop’s effort.
        </li>
        <li>
          <Link to="/key" hash="ts" className="text-primary hover:underline">
            Tₛ
          </Link>{" "}
          — slam window. Instant close mints zero.
        </li>
      </ul>

      <h2 id="house" className="font-display scroll-mt-24 pt-4 text-2xl text-fg">
        This ticket
      </h2>
      <p className="font-mono text-[14px] text-primary">
        L = clip(H_cap · S · κ · CT_W · β, 0, 1)
        <br />
        EP = XP · L + λ · L
      </p>
      <ul className="list-none space-y-2 p-0">
        <li>H_cap — this till this window. Auto from signed cash. Training remainder 0 for 10 days (two 5-day weeks).</li>
        <li>S — you at this house.</li>
        <li>κ — 1 on the language. 0 if they left it.</li>
        <li>β — CAT / on-duty this ticket.</li>
        <li>λ — small floor so leaked XP cannot erase a real local L. Default 0.15.</li>
        <li>
          <Link to="/key" hash="l" className="text-primary hover:underline">
            L
          </Link>{" "}
          — the product. Not a token.
        </li>
      </ul>

      <h2 id="leaks" className="font-display scroll-mt-24 pt-4 text-2xl text-fg">
        Three leaks
      </h2>
      <p>
        XP 0.99ⁿ. CT 0.99ⁿ idle on that web. n is idle 10-day counts. IT is not a leak clock. It is recomputed each proposal
        and burned in the tally.
      </p>
      <p>
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        {" · "}
        <Link to="/defaults" className="text-primary hover:underline">
          Defaults
        </Link>
        {" · "}
        <Link to="/key" hash="it" className="text-primary hover:underline">
          IT
        </Link>
        {" · "}
        <a href="/docs/DEFAULTS.md" className="text-primary hover:underline">
          DEFAULTS.md
        </a>
        {" · "}
        <a href="/docs/IT.md" className="text-primary hover:underline">
          IT.md
        </a>
        {" · "}
        <a href="/docs/METER-MATH.md" className="text-primary hover:underline">
          Meter math
        </a>
      </p>
    </EssayLayout>
  );
}
