import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/start/money")({
  component: () => <Navigate to="/start" hash="money" />,
});
