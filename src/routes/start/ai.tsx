import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/start/ai")({
  component: () => <Navigate to="/start" hash="ai" />,
});
