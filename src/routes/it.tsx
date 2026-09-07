import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/it")({
  beforeLoad: () => {
    throw redirect({ to: "/tokenomics/it" });
  },
});
