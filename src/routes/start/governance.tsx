import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/start/governance")({
  component: () => <Navigate to="/start" hash="governance" />,
});
