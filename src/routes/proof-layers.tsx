import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { proofLayers } from "@/content/essays";

export const Route = createFileRoute("/proof-layers")({ component: ProofLayers });

function ProofLayers() {
  return (
    <EssayLayout backTo="/start" backLabel="Enter" title="Proof Layers">
      <p>
        Separate what exists from what is theoretical, planned, or speculative. If something here is
        wrong, that's a bug — report it.
      </p>
      {proofLayers.map((layer) => (
        <section key={layer.n} className="border border-primary/15 p-5">
          <div className="mb-2 text-[10px] tracking-[0.28em] text-primary uppercase">
            Layer {layer.n} · {layer.subtitle}
          </div>
          <h2 className="font-display mb-2 text-2xl text-fg">{layer.name}</h2>
          <p className="mb-3">{layer.body}</p>
          <ul className="list-disc space-y-1.5 pl-5">
            {layer.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </EssayLayout>
  );
}
