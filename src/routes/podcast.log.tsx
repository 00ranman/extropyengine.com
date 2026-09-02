import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast/log")({
  beforeLoad: () => {
    throw redirect({ to: "/research-pod" });
  },
});
