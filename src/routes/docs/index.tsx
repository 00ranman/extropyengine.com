import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { docsIndex, earlierDocs } from "@/content/site";

export const Route = createFileRoute("/docs/")({ component: Docs });

function isOnSitePage(href: string) {
  return href.startsWith("/") && !/\.pdf($|\?)/i.test(href);
}

function DocLink({
  href,
  title,
  note,
  muted,
}: {
  href: string;
  title: string;
  note: string;
  muted?: boolean;
}) {
  const sameTab = isOnSitePage(href);
  return (
    <a
      href={href}
      target={sameTab ? undefined : "_blank"}
      rel={sameTab ? undefined : "noreferrer"}
      className={
        muted
          ? "block border border-primary/12 p-5 text-muted transition-all hover:border-primary hover:text-fg"
          : "block border border-primary/18 p-5 transition-all hover:border-primary"
      }
    >
      <div className="font-display text-lg text-fg">{title}</div>
      <div className="text-sm text-dim">{note}</div>
    </a>
  );
}

function Docs() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" title="Docs">
      <p>Codex v2.1 is the current specification. Companion papers sit underneath.</p>
      <div className="space-y-3">
        {docsIndex.map((doc) => (
          <DocLink key={doc.href} href={doc.href} title={doc.title} note={doc.note} />
        ))}
      </div>
      <h2>Earlier editions</h2>
      <p>Superseded specs. Still readable.</p>
      <div className="space-y-3">
        {earlierDocs.map((doc) => (
          <DocLink
            key={doc.href}
            href={doc.href}
            title={doc.title}
            note={doc.note}
            muted
          />
        ))}
      </div>
      <p className="pt-2">
        <Link to="/hoa" className="text-primary hover:underline">
          Replace the HOA →
        </Link>
        {" · "}
        <Link to="/faq" className="text-primary hover:underline">
          FAQ →
        </Link>
        {" · "}
        <Link to="/glossary" className="text-primary hover:underline">
          Glossary →
        </Link>
      </p>
    </EssayLayout>
  );
}
