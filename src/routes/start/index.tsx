import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { entryPaths, startIntro } from "@/content/essays";

export const Route = createFileRoute("/start/")({ component: StartHere });

function StartHere() {
  return (
    <EssayLayout backTo="/" backLabel="Lladnaros" title={startIntro.title}>
      <p>{startIntro.lead}</p>
      <div className="space-y-4 pt-2">
        {entryPaths.map((path) => (
          <Link
            key={path.id}
            to={path.href}
            className="block border border-primary/18 bg-[rgb(20_12_8_/_0.45)] p-5 transition-all hover:-translate-y-0.5 hover:border-primary"
          >
            <div className="mb-2 text-[10px] tracking-[0.28em] text-primary uppercase">
              Entry Path {path.id}
            </div>
            <h2 className="font-display mb-2 text-xl text-fg">{path.title}</h2>
            <p className="text-sm text-muted">{path.blurb}</p>
            <div className="mt-3 text-[11px] tracking-[0.2em] text-primary uppercase">Enter →</div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-4 text-[11px] tracking-[0.18em] uppercase">
        <Link to="/glossary" className="text-dim hover:text-primary">
          Glossary
        </Link>
        <Link to="/open-problems" className="text-dim hover:text-primary">
          Open Problems
        </Link>
        <Link to="/proof-layers" className="text-dim hover:text-primary">
          Proof Layers
        </Link>
        <Link to="/mvt" className="text-dim hover:text-primary">
          Try It (MVT)
        </Link>
      </div>
    </EssayLayout>
  );
}
