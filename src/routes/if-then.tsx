import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/if-then")({
  beforeLoad: () => {
    throw redirect({ to: "/smart-contracts" });
  },
});
