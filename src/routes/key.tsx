import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { SymbolKeyFull } from "@/components/symbol-key";
import { symbolKey } from "@/content/symbol-key";

export const Route = createFileRoute("/key")({
  head: () => ({
    meta: [
      { title: "Letter key — Extropy Engine" },
      { name: "description", content: symbolKey.lead },
    ],
  }),
  component: KeyPage,
});

function KeyPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker={symbolKey.kicker} title={symbolKey.title}>
      <SymbolKeyFull />
    </EssayLayout>
  );
}
