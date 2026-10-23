import { createFileRoute, redirect } from "@tanstack/react-router";

// Parked Oct 22, 2026: the dollar ask stays down until the live Stripe
// links replace the sandbox ones. The full page source is in git history
// (commit 83b831f) and its copy still lives in src/content/dollar.ts.
export const Route = createFileRoute("/dollar")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
