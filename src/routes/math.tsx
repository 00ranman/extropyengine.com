import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/math")({
  head: () => ({
    meta: [
      { title: "Math — Extropy Engine" },
      {
        name: "description",
        content: "The letters that are not tokens. Mint formula, house sliders, three leaks.",
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
        <li>H_cap — this till this week. Default 0.5. Auto from four-week cash.</li>
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
        XP 0.99ⁿ (~1%, half-life ~69 months). CT 0.99ⁿ while idle on that web — same keep; a close
        or a till spark resets n. IT 0.95ⁿ (~5%, ~13.5 months idle).
      </p>
      <p>
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        {" · "}
        <a href="/docs/DEFAULTS.md" className="text-primary hover:underline">
          Defaults
        </a>
        {" · "}
        <a href="/docs/METER-MATH.md" className="text-primary hover:underline">
          Meter math
        </a>
      </p>
    </EssayLayout>
  );
}
