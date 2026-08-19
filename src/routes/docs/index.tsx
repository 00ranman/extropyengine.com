import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { docsIndex, earlierDocs } from "@/content/site";

export const Route = createFileRoute("/docs/")({ component: Docs });

function Docs() {
  return (
    <EssayLayout backTo="/" backLabel="Lladnaros" title="Docs">
      <p>Codex v2.0 is the current specification. Companion papers sit underneath.</p>
      <div className="space-y-3">
        {docsIndex.map((doc) => (
          <a
            key={doc.href}
            href={doc.href}
            target="_blank"
            rel="noreferrer"
            className="block border border-primary/18 p-5 transition-all hover:border-primary"
          >
            <div className="font-display text-lg text-fg">{doc.title}</div>
            <div className="text-sm text-dim">{doc.note}</div>
          </a>
        ))}
      </div>
      <h2>Earlier editions</h2>
      <p>Superseded specs. Still readable.</p>
      <div className="space-y-3">
        {earlierDocs.map((doc) => (
          <a
            key={doc.href}
            href={doc.href}
            target="_blank"
            rel="noreferrer"
            className="block border border-primary/12 p-5 text-muted transition-all hover:border-primary hover:text-fg"
          >
            <div className="font-display text-lg">{doc.title}</div>
            <div className="text-sm text-dim">{doc.note}</div>
          </a>
        ))}
      </div>
      <p className="pt-2">
        <Link to="/glossary" className="text-primary hover:underline">
          Glossary →
        </Link>
      </p>
    </EssayLayout>
  );
}