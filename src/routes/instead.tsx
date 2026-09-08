import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/instead")({
  head: () => ({
    meta: [
      { title: "Carbon, debt, coordination — Extropy Engine" },
      {
        name: "description",
        content:
          "Better carbon accounting than a credit. Better deficit path than a wipe speech. Same meters. Closed loops.",
      },
    ],
  }),
  component: InsteadPage,
});

function InsteadPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="The job" title="This does that job better">
      <p>
        Carbon credits leak. National books leak. Coordination leaks into meetings. This is a better
        economics, a better governance weight, and a better way to keep score of work that actually
        closed. Same meters everywhere. Standing does not cash out. The spark dies in the sale.
      </p>
      <p>
        Cash still rings while the graph is thin. That is how you stay honest. As doors publish spark
        versus dollars, ρ climbs. The old books get quieter because less cash is wasted on theater.
        That is the fix. Not a date on a flag.
      </p>
      <p>
        If the output of verification can be sold, verification becomes a mint for that sale. Keep
        the close coupled to decay. Paper:{" "}
        <Link to="/papers/liquidity-and-decay" className="text-primary hover:underline">
          Liquidity corrupts verification
        </Link>
        .
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Carbon</h2>
      <p>
        A credit is a bag labelled 1 tCO₂e that you transfer and retire so a firm can wear a
        sticker. Additionality and permanence get gamed. Leakage walks off the boundary. That is why
        the market keeps failing the thing it claims to measure.
      </p>
      <p>
        Here a carbon / kWh / leakage loop is posted with a declared boundary. Mapper M
        <sub>v</sub> turns the domain-native signal into ΔS. Unknown stays unknown. If ΔS is
        positive the mint fires: XP = R × F × ΔS × (w · E) × log(1/Tₛ). Standing leaks. A till that
        asked for this instrument can take a proof into β. L = clip(H_cap · S · κ · CT_W · β, 0, 1).
        EP = XP · L + λ · L burns in that sale.
      </p>
      <p>
        Theater gets a late burn. F hits plant-and-unplant farms. The job the credit pretended to do
        is a closed loop with leakage on the claim. That is the better credit.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Debt</h2>
      <p>
        National debt is coupons, auctions, legislatures. The overlay does not delete principal. XP
        does not become a sinking fund. If a room tries that, they forked.
      </p>
      <p>
        What it does fix is the path. Local desk first — zip, city, agency. Same loop as a shop:
        claim this waste closed inside a boundary; leakage on the claim; both edges; standing for
        the work; appropriations still move in cash. The desk publishes spark versus dollars the
        same way a till publishes ρ. When procurement stops paying for theater, less cash is set on
        fire. The deficit path changes because the noise drops. Principal still lives where it lives.
        Nations are a sum of published desks, not one planetary mint.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Coordination</h2>
      <p>
        Named cases run without a meeting. Smart contracts — not crypto, no pool. IT is this-proposal
        standing, clip to 1, burned in the tally. Extra years do not buy extra votes. That is better
        governance than a pile of voice or a twelve-person box that cannot show its work.
      </p>

      <p className="pt-4 text-sm">
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        <span className="text-faint"> · </span>
        <Link to="/defaults" className="text-primary hover:underline">
          Defaults
        </Link>
        <span className="text-faint"> · </span>
        <Link to="/rho" className="text-primary hover:underline">
          ρ HUD
        </Link>
      </p>
    </EssayLayout>
  );
}
