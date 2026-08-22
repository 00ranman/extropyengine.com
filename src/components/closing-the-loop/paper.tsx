import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { List, X } from "lucide-react";
import {
  abstract,
  artistLinks,
  findings,
  howToListen,
  limitations,
  meta,
  method,
  parts,
  sources,
  systemEssay,
  unclosed,
} from "@/content/closing-the-loop/essays";
import { tracks } from "@/content/closing-the-loop/tracks";
import { Btn } from "@/components/ui-bits";
import { ListenLinks } from "./listen-links";
import { Toc } from "./toc";
import { TrackAudit } from "./track-audit";

function Section({
  id,
  heading,
  paragraphs,
}: {
  id: string;
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} className="scroll-mt-28 py-8">
      <h2 className="font-display text-[clamp(26px,3.2vw,36px)] tracking-[0.04em] text-fg">
        {heading}
      </h2>
      <div className="mt-5 space-y-5">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[15px] leading-[1.8] text-pretty text-muted"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

export function ClosingLoopPaper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-bg text-fg">
      <div className="border-b border-primary/12 px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3">
          <Link
            to="/"
            hash="papers"
            className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase hover:text-primary"
          >
            ← The Papers
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 px-3 font-mono text-[11px] tracking-[0.16em] text-dim uppercase hover:text-primary lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open contents"
            >
              <List className="size-4" strokeWidth={1.75} />
              Contents
            </button>
            <Btn href="/docs/Closing_the_Loop.pdf" download>
              PDF
            </Btn>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-bg/80"
            aria-label="Close contents"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col border-r border-primary/20 bg-surface px-5 py-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-xl tracking-[0.04em] text-primary">
                Contents
              </p>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center hover:text-primary"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="size-5" strokeWidth={1.75} />
              </button>
            </div>
            <div className="overflow-y-auto">
              <Toc onNavigate={() => setOpen(false)} />
            </div>
          </aside>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="sticky top-14 hidden max-h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-primary/12 px-6 py-10 lg:block">
          <Toc />
        </aside>

        <main className="px-4 py-10 sm:px-8 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-[42rem]">
            <header id="cover" className="scroll-mt-28 pb-12">
              <p className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
                {meta.kind}
              </p>
              <h1 className="font-display mt-4 text-[clamp(40px,7vw,68px)] leading-[0.95] tracking-[0.03em] text-fg">
                {meta.title}
              </h1>
              <p className="font-display mt-5 max-w-[28rem] text-[clamp(20px,2.4vw,28px)] leading-snug text-pretty text-muted italic">
                {meta.subtitle}
              </p>
              <div className="mt-8 space-y-1 font-mono text-[13px] text-muted">
                <p className="text-fg">{meta.author}</p>
                <p className="text-accent">{meta.date}</p>
                <p className="pt-2 text-dim">
                  Recast of <em>{meta.predecessor}</em> ({meta.predecessorDate}
                  ). Same catalog. Different method. Still an audit.
                </p>
              </div>
              <div className="mt-8 border-t border-primary/15 pt-6">
                <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
                  The catalog
                </p>
                <ListenLinks links={artistLinks} />
              </div>
            </header>

            <Section
              id="how-to-listen"
              heading={howToListen.heading}
              paragraphs={howToListen.paragraphs}
            />
            <Section
              id="abstract"
              heading={abstract.heading}
              paragraphs={abstract.paragraphs}
            />
            <Section
              id="method"
              heading={method.heading}
              paragraphs={method.paragraphs}
            />
            <Section
              id="system"
              heading={systemEssay.heading}
              paragraphs={systemEssay.paragraphs}
            />

            {parts.map((part) => {
              const partTracks = tracks.filter((t) => t.part === part.id);
              return (
                <section
                  key={part.id}
                  id={`part-${part.id}`}
                  className="scroll-mt-28 pt-10"
                >
                  <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">
                    Part {part.roman}
                  </p>
                  <h2 className="font-display mt-2 text-[clamp(26px,3.2vw,36px)] tracking-[0.04em] text-fg">
                    {part.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-pretty text-muted italic">
                    {part.lede}
                  </p>
                  {partTracks.map((track) => (
                    <TrackAudit key={track.slug} track={track} />
                  ))}
                </section>
              );
            })}

            <Section
              id="findings"
              heading={findings.heading}
              paragraphs={findings.paragraphs}
            />
            <Section
              id="unclosed"
              heading={unclosed.heading}
              paragraphs={unclosed.paragraphs}
            />
            <Section
              id="limitations"
              heading={limitations.heading}
              paragraphs={limitations.paragraphs}
            />

            <section id="sources" className="scroll-mt-28 py-8">
              <h2 className="font-display text-[clamp(26px,3.2vw,36px)] tracking-[0.04em] text-fg">
                Sources
              </h2>
              <ol className="mt-6 list-decimal space-y-3 pl-5 text-[14px] leading-relaxed text-muted">
                {sources.map((s) => (
                  <li key={s} className="pl-1">
                    {s}
                  </li>
                ))}
              </ol>
            </section>

            <footer className="mt-16 border-t border-primary/15 pt-8 pb-16 font-mono text-[12px] tracking-[0.04em] text-dim">
              <p>Dead-Map Records · Independent preprint · {meta.date}</p>
              <p className="mt-2">
                Lyrics © Randall Gossett. Readings are interpretive proposals,
                offered to be broken.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
