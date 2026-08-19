import { createFileRoute } from "@tanstack/react-router";
import { EssayPage } from "@/components/essay-layout";
import { essays } from "@/content/essays";

export const Route = createFileRoute("/start/ai")({ component: Page });

function Page() {
  return <EssayPage essay={essays.ai} />;
}
