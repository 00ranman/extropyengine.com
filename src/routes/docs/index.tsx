import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { docsIndex } from "@/content/site";

export const Route = createFileRoute("/docs/")({ component: Docs });

function Docs() {
  return (
    <EssayLayout backTo="/" backLabel="Lladnaros" title="Docs">
      <p>Tech spec 3.1.2 and companion papers. Source of truth for the Extropy Engine.</p>
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
      <p className="pt-2">
        <Link to="/glossary" className="text-primary hover:underline">
          Glossary →
        </Link>
      </p>
    </EssayLayout>
  );
}
