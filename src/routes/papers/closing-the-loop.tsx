import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ClosingLoopPaper } from "@/components/closing-the-loop/paper";

export const Route = createFileRoute("/papers/closing-the-loop")({
  component: ClosingTheLoop,
  head: () => ({
    meta: [
      { title: "Closing the Loop — Extropy Engine" },
      {
        name: "description",
        content:
          "A systems audit of signal, story, and recursion in the Lladnaros catalog. Randall Gossett, August 2026. Recast of Signal, Loop, and Story.",
      },
    ],
  }),
});

function ClosingTheLoop() {
  return (
    <SiteShell>
      <ClosingLoopPaper />
    </SiteShell>
  );
}
