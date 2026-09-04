import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { MyceliumHud } from "@/components/mycelium-hud";

export const Route = createFileRoute("/rho")({
  head: () => ({
    meta: [
      { title: "Fiat residual — Extropy Engine" },
      {
        name: "description",
        content:
          "HUD for ρ: published till totals of burned EP versus cash that still rang. Mycelium, not a bag. Demo until doors publish.",
      },
    ],
  }),
  component: RhoPage,
});

function RhoPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Index" title="Fiat residual">
      <p>
        Not a bag. A heads-up. Each till may publish window totals: how much spark was accepted, how
        much cash still printed. ρ is the share the overlay touched. Sum those vertices and the
        fungus is just the picture of that sum.
      </p>
      <div className="pt-4">
        <MyceliumHud />
      </div>
      <p className="pt-4 text-sm text-muted">
        Live mesh is not on this website. This slider stands in for published door indexes until
        they exist. No who. Optional ZKP over the count. Math:{" "}
        <a href="/docs/METER-MATH.md" className="text-primary hover:underline">
          meter math §7b
        </a>
        .
      </p>
      <p className="pt-3">
        <Link to="/key" className="text-primary hover:underline">
          Letter key
        </Link>
        <span className="text-faint"> · </span>
        <Link to="/" hash="engine" className="text-primary hover:underline">
          Shop view
        </Link>
      </p>
    </EssayLayout>
  );
}
