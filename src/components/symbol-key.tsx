import { Link } from "@tanstack/react-router";
import { symbolKey } from "@/content/symbol-key";

export function SymbolKeyStrip() {
  return (
    <section
      id="key"
      className="border-b border-primary/20 bg-surface px-[8vw] py-8 max-md:px-[6vw]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">{symbolKey.kicker}</p>
            <h2 className="font-display mt-2 text-[clamp(22px,3vw,32px)] tracking-[0.04em] text-fg">
              {symbolKey.title}
            </h2>
          </div>
          <Link
            to="/key"
            className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase hover:text-primary"
          >
            Full key →
          </Link>
        </div>
        <p className="mb-5 max-w-3xl font-mono text-[13px] leading-relaxed text-muted">{symbolKey.formula}</p>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {symbolKey.mint.map((row) => (
            <div key={row.id} className="border border-primary/16 px-3 py-3">
              <dt className="font-mono text-[12px] tracking-[0.12em] text-primary">
                {row.glyph}
                <span className="ml-2 text-dim">{row.name}</span>
              </dt>
              <dd className="mt-1 text-[13px] leading-relaxed text-muted">{row.is}</dd>
              <dd className="mt-1 text-[12px] text-dim">{row.isNot}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[12px] text-dim">
          ℱ is falsifiability. F is not. w · E is a dot product, not a product called weighted emergence.{" "}
          <Link to="/key" className="text-primary hover:underline">
            Rest of the letters
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export function SymbolKeyFull() {
  return (
    <>
      <p className="font-mono text-[13px] text-primary">{symbolKey.formula}</p>
      <p>{symbolKey.lead}</p>
      <h2 className="font-display pt-6 text-2xl tracking-[0.04em] text-fg">Inside the mint</h2>
      <dl className="space-y-5">
        {symbolKey.mint.map((row) => (
          <div key={row.id} id={row.id} className="scroll-mt-24">
            <dt className="font-mono text-[12px] tracking-[0.12em] text-primary">
              {row.glyph} — {row.name}
            </dt>
            <dd className="mt-1">{row.is}</dd>
            <dd className="mt-1 text-dim">{row.isNot}</dd>
          </div>
        ))}
      </dl>
      <h2 className="font-display pt-8 text-2xl tracking-[0.04em] text-fg">Same alphabet, other jobs</h2>
      <dl className="space-y-5">
        {symbolKey.other.map((row) => (
          <div key={row.id} id={row.id} className="scroll-mt-24">
            <dt className="font-mono text-[12px] tracking-[0.12em] text-primary">
              {row.glyph} — {row.name}
            </dt>
            <dd className="mt-1">{row.is}</dd>
            <dd className="mt-1 text-dim">{row.isNot}</dd>
          </div>
        ))}
      </dl>
      <p className="pt-6 text-sm text-dim">
        Glossary is the long dictionary. This page is the stop-sign for mixed letters.{" "}
        <Link to="/glossary" className="text-primary hover:underline">
          Glossary
        </Link>
        .
      </p>
    </>
  );
}
