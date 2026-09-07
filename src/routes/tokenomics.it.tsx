import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tokenomics/it")({
  beforeLoad: () => {
    throw redirect({ to: "/key", hash: "it" });
  },
});
