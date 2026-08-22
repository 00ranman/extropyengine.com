import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { type Essay, type EssayBlock } from "@/content/essays";

export function EssayLayout({
  backTo,
  backLabel,
  kicker,
  title,
  children,
}: {
  backTo: string;
  backLabel: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20">
        <Link
          to={backTo}
          className="mb-8 inline-block text-[11px] tracking-[0.22em] text-dim uppercase transition-colors hover:text-primary"
        >
          ← {backLabel}
        </Link>
        {kicker ? (
          <div className="mb-3 text-[11px] tracking-[0.28em] text-primary uppercase">{kicker}</div>
        ) : null}
        <h1 className="font-display mb-8 text-[clamp(28px,4vw,46px)] leading-[1.15] tracking-[0.03em]">
          {title}
        </h1>
        <div className="space-y-5 text-[15px] leading-[1.8] text-muted">{children}</div>
      </article>
    </SiteShell>
  );
}

function Block({ block }: { block: EssayBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{block.text}</h2>
    );
  }
  if (block.type === "h3") {
    return <h3 className="font-display pt-2 text-xl tracking-[0.03em] text-fg">{block.text}</h3>;
  }
  if (block.type === "ol") {
    return (
      <ol className="my-3 list-decimal space-y-2.5 pl-6 marker:text-primary">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="my-3 list-disc space-y-2.5 pl-6 marker:text-primary">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-2 border-primary/50 pl-4 text-fg italic">{block.text}</blockquote>
    );
  }
  return <p>{block.text}</p>;
}

export function EssayPage({ essay }: { essay: Essay }) {
  return (
    <EssayLayout backTo="/start" backLabel="All Entry Paths" kicker={essay.pathLabel} title={essay.title}>
      {essay.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
      {essay.failHref ? (
        <p>
          <Link to={essay.failHref} className="text-primary hover:underline">
            See the full list of open problems →
          </Link>
        </p>
      ) : null}
      <nav className="flex flex-wrap gap-3 border-t border-primary/15 pt-8 text-[11px] tracking-[0.18em] uppercase">
        <Link to="/start/money" className="text-dim hover:text-primary">
          Money
        </Link>
        <Link to="/start/ai" className="text-dim hover:text-primary">
          AI
        </Link>
        <Link to="/start/governance" className="text-dim hover:text-primary">
          Governance
        </Link>
        <Link to="/start/physics" className="text-dim hover:text-primary">
          Physics
        </Link>
        <Link to="/glossary" className="text-dim hover:text-primary">
          Glossary
        </Link>
        <Link to="/mvt" className="text-dim hover:text-primary">
          Try It
        </Link>
        <Link to="/" className="text-dim hover:text-primary">
          Main Site
        </Link>
      </nav>
    </EssayLayout>
  );
}
