import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/instead")({
  head: () => ({
    meta: [
      { title: "Instead — Extropy Engine" },
      {
        name: "description",
        content:
          "Same tokenomics. Spark, not a carbon credit. Local desks, not a Treasury wipe. We do not play their markets.",
      },
    ],
  }),
  component: InsteadPage,
});

function InsteadPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="House rule" title="Instead of their markets">
      <p>
        We do not play their markets. No offset registry. No transferable tonne. No XP cashed into a
        Treasury. Tokenomics here means how the meters couple. A token as a bag is a lose-condition.
        The spark is EP. It dies when the ticket dies.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">How the box is actually split</h2>
      <p>
        Edge keeps sovereignty. The till, the MICRO, the desk — that room owns H, that DFAO owns how
        CT is scored <em>here</em>. Smart contracts are rails so you do not hire an executive caste
        to babysit the coupling. Classical computation runs the tokenomics: mint, leaks, sliders,
        burns. Models sit at the edge. They interpret and package a claim. They do not become the
        ledger. Looking at a graph to hunt WHO still writes a vertex.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Instead of a carbon credit</h2>
      <p>
        They sell a bag labelled 1 tCO₂e that you transfer and retire so a firm can wear a sticker.
        Additionality and permanence get gamed. Leakage walks off the boundary.
      </p>
      <p>
        Same tokenomics, different input. A carbon / kWh / leakage loop is posted with a declared
        boundary. Mapper M<sub>v</sub> turns the domain-native signal into ΔS. Unknown stays
        unknown. If ΔS > 0 the signed mint fires: XP = R × F × ΔS × (w · E) × log(1/Tₛ). Standing
        leaks. It does not list. A till that asked for this instrument can take a ZKP band into β.
        L is this-door CT against H. EP = XP × L burns in <em>that</em> sale.
      </p>
      <p>
        That spark is the better version of the job the credit pretends to do. Theater gets a late
        burn. F hits plant / unplant farms. A DFAO may vote the band into its door. Room modifier.
        Not Article 6. Not Verra with extra adjectives.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Instead of a debt-wipe speech</h2>
      <p>
        National debt is coupons, auctions, legislatures. The overlay does not delete principal. XP
        does not cash out. If a room mints standing into a sinking fund, they forked.
      </p>
      <p>
        Local first. Your zip, your city desk, your agency door. Same loop as a shop: claim this
        waste closed inside a boundary; leakage on the claim; both edges; standing for the work;
        appropriations still move in cash. A desk may publish window totals the same way a till
        publishes ρ — spark accepted versus dollars that still printed. That is a HUD of how noisy
        that desk was. It is not a retirement of Treasuries.
      </p>
      <p>
        Nations are a sum of published desks, not a planetary mint. If procurement and benefit rails
        stop paying for theater, the deficit <em>path</em> can change because less cash is set on
        fire. Principal still lives in their bond market. Edge sovereignty stays with the desk that
        published the vertex. A captured ministry that juiced H is the same capture problem as a
        captured shop.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Refuse</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Offset ticker with an Extropy sticker.</li>
        <li>XP as a sinking fund for any flag.</li>
        <li>One mapper for all federal outlays or all forests.</li>
        <li>An executive bureau that “runs the Engine” for the public.</li>
      </ul>

      <p className="pt-4 text-sm">
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        <span className="text-faint"> · </span>
        <a href="/docs/METER-MATH.md" className="text-primary hover:underline">
          Meter math
        </a>
        <span className="text-faint"> · </span>
        <Link to="/rho" className="text-primary hover:underline">
          ρ HUD
        </Link>
        <span className="text-faint"> · </span>
        <Link to="/start" className="text-primary hover:underline">
          Doors
        </Link>
      </p>
    </EssayLayout>
  );
}
