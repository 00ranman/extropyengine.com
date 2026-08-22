import { createFileRoute } from "@tanstack/react-router";
import { ClosingLoopPaper } from "@/components/closing-the-loop/paper";

export const Route = createFileRoute("/print/closing-the-loop")({
  component: PrintClosingTheLoop,
});

function PrintClosingTheLoop() {
  return <ClosingLoopPaper print />;
}
