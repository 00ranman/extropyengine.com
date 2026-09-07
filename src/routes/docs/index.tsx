import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { docsIndex, docsPages, docsFiles, docsPapers, earlierDocs } from "@/content/site";

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
      <p>
        Live letters first. Then every engine page, every working file, every paper on this box.
        Codex v2.1 is still the last signed Codex. If a PDF fights the letter key, the key wins.
      </p>
      <h2>Live letters</h2>
      <div className="space-y-3">
        {docsIndex.map((doc) => (
          <DocLink key={doc.href} href={doc.href} title={doc.title} note={doc.note} />
        ))}
      </div>
      <h2>Engine pages</h2>
      <div className="space-y-3">
        {docsPages.map((doc) => (
          <DocLink key={doc.href} href={doc.href} title={doc.title} note={doc.note} />
        ))}
      </div>
      <h2>Working files</h2>
      <div className="space-y-3">
        {docsFiles.map((doc) => (
          <DocLink key={doc.href} href={doc.href} title={doc.title} note={doc.note} />
        ))}
      </div>
      <h2>Papers and PDFs</h2>
      <div className="space-y-3">
        {docsPapers.map((doc) => (
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
          Neighborhood MESO →
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
