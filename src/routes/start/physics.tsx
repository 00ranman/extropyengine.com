import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/start/physics")({
  component: () => <Navigate to="/start" hash="physics" />,
});
