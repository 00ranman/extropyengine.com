import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { entryPaths } from "@/content/essays";
import {
  albums,
  artistLinks,
  book,
  earlierEditions,
  engineGit,
  engineLoop,
  engineTokens,
  engineViews,
  papers,
  singles,
  socials,
  type Paper,
} from "@/content/site";
import { Btn, SectionTitle, StatusPill } from "@/components/ui-bits";

export function EnterStrip() {
  return (
    <section
      id="enter"
      className="border-b border-primary/15 bg-primary/4 px-[8vw] py-10 max-md:px-[6vw] max-md:py-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-primary uppercase">Enter</p>
            <h2 className="font-display mt-2 text-[clamp(22px,3vw,32px)] tracking-[0.04em] text-fg">
              Four doors. Pick the glitch.
            </h2>
          </div>
          <Link
            to="/start"
            className="text-[11px] tracking-[0.2em] text-dim uppercase hover:text-primary"
          >
            All paths →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {entryPaths.map((path) => (
            <Link
              key={path.id}
              to={path.href}
              className="block border border-primary/18 bg-bg/40 p-4 transition-colors hover:border-primary"
            >
              <div className="mb-2 text-[10px] tracking-[0.24em] text-primary uppercase">
                {path.id === "A" ? "Money" : path.id === "B" ? "AI" : path.id === "C" ? "Governance" : "Physics"}
              </div>
              <p className="font-display text-[15px] leading-snug text-fg">{path.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookHero() {
  return (
    <section id="book" className="grid items-center gap-14 px-[8vw] py-20 max-md:gap-10 max-md:px-[6vw] max-md:py-10 md:grid-cols-2 md:gap-16">
      <div className="order-2 md:order-1">
        <div className="mb-4 text-[11px] tracking-[0.35em] text-primary uppercase">The Book</div>
        <h1 className="font-display mb-5 text-[clamp(32px,5vw,64px)] leading-[1.1] tracking-[0.04em]">
          {book.title}
        </h1>
        <p className="mb-5 text-sm tracking-[0.18em] text-accent uppercase [text-shadow:0_0_18px_rgb(34_211_238_/_0.25)]">
          {book.tagline}
        </p>
        <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-muted">
          {book.byline} {book.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-3">
          <Btn href={book.pdf} primary download>
            Download PDF
          </Btn>
          <Btn href={book.epub} primary download>
            Download EPUB
          </Btn>
          <Btn href={book.audio} primary external>
            Listen (Audiobook)
          </Btn>
        </div>
        <p className="text-sm text-muted">
          <a href={book.tip} target="_blank" rel="noreferrer" className="text-primary hover:underline">
            Tap here to send $1
          </a>{" "}
          — donate a dollar to the author. Entirely optional. The book is free.
        </p>
      </div>
      <div className="order-1 flex justify-center md:order-2">
        <img
          src={book.cover}
          alt="Unf*ck the World for a Dollar book cover"
          className="w-full max-w-[420px] border-[3px] border-[#1a1a1a] shadow-[0_0_60px_rgb(255_90_31_/_0.15),0_0_120px_rgb(120_40_200_/_0.08)]"
        />
      </div>
    </section>
  );
}

export function MusicSection() {
  return (
    <section id="music" className="border-t border-primary/12 px-[8vw] py-20">
      <SectionTitle className="mb-3">The Music</SectionTitle>
      <p className="mb-12 max-w-xl text-[15px] text-muted">
        Systems theory disguised as sound. Each track is a recursive loop about reality and entropy
        reduction. Three albums, one EP, and counting.
      </p>
      <div className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {albums.map((album) => (
          <article
            key={album.title}
            className="flex flex-col gap-3 border border-primary/12 bg-primary/2 p-[18px] transition-colors hover:border-primary/35"
          >
            <img
              src={album.art}
              alt={album.title}
              className="aspect-square w-full self-center object-cover"
              crossOrigin="anonymous"
            />
            <div className="mb-1 text-[11px] tracking-[0.3em] text-accent">
              {album.year}
              {album.kind === "ep" ? " · EP" : ""}
            </div>
            <h3 className="font-display text-lg tracking-[0.06em]">{album.title}</h3>
            <p className="mb-2 text-xs text-dim">
              {album.tracks} tracks · {album.blurb}
            </p>
            <MusicLinks links={album.links} />
          </article>
        ))}
      </div>

      <h3 className="font-display mb-2 text-center text-[clamp(20px,2.8vw,28px)] tracking-[0.06em] text-primary [text-shadow:0_0_16px_rgb(255_90_31_/_0.3)]">
        Singles
      </h3>
      <p className="mb-8 text-center text-sm tracking-[0.05em] text-dim">
        Standalone tracks. Hover for what each one is about.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {singles.map((track) => (
          <article
            key={track.title}
            className="group relative flex flex-col overflow-hidden border border-primary/18 bg-[rgb(20_12_8_/_0.55)] transition-all duration-250 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_24px_rgb(255_90_31_/_0.18)]"
          >
            <div
              className="relative aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${track.art})` }}
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/92 p-5 text-center text-[13px] leading-snug text-fg opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-focus-within:opacity-100">
                {track.desc}
              </div>
            </div>
            <div className="px-3.5 pt-3 pb-2">
              <div className="mb-1 text-[11px] tracking-[0.2em] text-accent">
                {track.year} · SINGLE
              </div>
              <div className="font-display text-[15px] leading-tight">{track.title}</div>
            </div>
            {track.links ? <MusicLinks links={track.links} /> : null}
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {artistLinks.map((link) => (
          <Btn key={link.href} href={link.href} external>
            {link.label}
          </Btn>
        ))}
      </div>
    </section>
  );
}

function MusicLinks({ links }: { links: { spotify: string; apple: string; youtube: string } }) {
  return (
    <div className="mt-auto flex gap-1.5 border-t border-primary/10 p-2.5">
      {[
        ["Spotify", links.spotify],
        ["Apple", links.apple],
        ["YT Music", links.youtube],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex-1 border border-primary/25 py-1.5 text-center text-[10px] tracking-[0.1em] uppercase transition-all hover:border-primary hover:bg-primary hover:text-ink"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export function Manifesto() {
  return (
    <section className="border-t border-accent/15 bg-linear-to-b from-bg/95 to-[rgb(120_40_200_/_0.03)] px-[8vw] py-20 text-center">
      <h2 className="font-display mb-5 text-[clamp(24px,3vw,38px)] tracking-[0.06em] text-accent [text-shadow:0_0_20px_rgb(34_211_238_/_0.2)]">
        Everything turns to fungus eventually.
      </h2>
      <p className="mx-auto mb-4 max-w-xl text-[15px] leading-loose text-muted">
        Concrete cracks. Empires compost. Mycelium runs the network the towers forgot they were
        standing on. The book is the field guide. The music is the soundtrack.
      </p>
      <p className="mt-6 text-xs tracking-[0.15em] text-[#666]">
        Built by Randall Gossett. Original conspirator: Perplexity Computer. This remake: Grok
        Build.
      </p>
    </section>
  );
}

function isOnSitePage(href: string) {
  return href.startsWith("/") && !/\.pdf($|\?)/i.test(href);
}

function PaperCard({ paper }: { paper: Paper }) {
  const sameTab = isOnSitePage(paper.href);
  const linkProps = sameTab
    ? {}
    : { target: "_blank" as const, rel: "noreferrer" };

  if (paper.academia) {
    return (
      <div className="flex flex-col border border-primary/18 bg-[rgb(20_12_8_/_0.45)] transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_12px_28px_rgb(255_90_31_/_0.12)]">
        <a href={paper.href} {...linkProps} className="block px-[22px] pt-[22px] pb-[18px]">
          <div className="mb-2.5 font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
            {paper.tag}
          </div>
          <h3 className="font-display text-base leading-snug font-normal tracking-[0.02em]">
            {paper.title}
          </h3>
        </a>
        <a
          href={paper.academia}
          target="_blank"
          rel="noreferrer"
          className="border-t border-primary/18 px-[22px] py-3 font-mono text-[11px] tracking-[0.18em] text-primary uppercase hover:bg-primary/8"
        >
          ↳ Read on Academia
        </a>
      </div>
    );
  }
  return (
    <a
      href={paper.href}
      {...linkProps}
      className="block border border-primary/18 bg-[rgb(20_12_8_/_0.45)] px-[22px] py-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-[rgb(40_18_10_/_0.6)] hover:shadow-[0_12px_28px_rgb(255_90_31_/_0.12)]"
    >
      <div className="mb-2.5 font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
        {paper.tag}
      </div>
      <h3 className="font-display text-base leading-snug font-normal tracking-[0.02em]">
        {paper.title}
      </h3>
    </a>
  );
}

export function PapersSection() {
  return (
    <section id="papers" className="border-t border-primary/12 px-[8vw] py-20">
      <SectionTitle className="mb-3 text-center">The Papers</SectionTitle>
      <p className="mx-auto mb-10 max-w-xl text-center text-[15px] leading-relaxed text-muted">
        Recursive entropy reduction in writing. Frameworks, formulas, and field notes from the long
        argument with reality.
      </p>
      <div className="mx-auto grid max-w-[1100px] gap-[18px] md:grid-cols-2">
        {papers.map((paper) => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </div>

      <div id="earlier-editions" className="mx-auto mt-16 max-w-[1100px] border-t border-primary/10 pt-12">
        <h3 className="font-display mb-2 text-center text-[clamp(20px,2.6vw,28px)] tracking-[0.08em]">
          Earlier editions
        </h3>
        <p className="mx-auto mb-8 max-w-lg text-center text-sm text-dim">
          Superseded specs. Still readable. Codex v2.1 and Universal Times v4.2 are current.
        </p>
        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {earlierEditions.map((paper) => (
            <PaperCard key={paper.title} paper={paper} />
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3.5">
        <Btn href="https://rgossett1.academia.edu/research#papers" external>
          All Papers on Academia →
        </Btn>
        <Btn href="https://github.com/00ranman" external>
          Source on GitHub →
        </Btn>
      </div>
    </section>
  );
}

export function EngineSection() {
  return (
    <section id="engine" className="border-t border-primary/12 px-[8vw] py-[90px] max-md:px-[6vw]">
      <span id="suite" className="sr-only" />
      <SectionTitle className="mb-3 text-center">How it runs</SectionTitle>
      <p className="mx-auto mb-12 max-w-xl text-center text-[15px] leading-relaxed text-muted">
        Not a pile of apps. One loop. Two faces. A DAG under the floor. Archived experiments are
        off this page on purpose.
      </p>

      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        {(["consumer", "merchant"] as const).map((key) => {
          const view = engineViews[key];
          return (
            <div key={key} className="border border-primary/16 bg-surface/40 px-5 py-6">
              <p className="font-mono text-[10px] tracking-[0.24em] text-primary uppercase">{view.kicker}</p>
              <h3 className="font-display mt-2 text-xl tracking-[0.04em]">{view.title}</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {view.lines.map((line, i) => (
                  <li key={line} className="flex gap-3">
                    <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-10 max-w-5xl border border-accent/18 px-5 py-6">
        <p className="font-mono text-[10px] tracking-[0.24em] text-accent uppercase">Under the floor</p>
        <h3 className="font-display mt-2 text-xl tracking-[0.04em]">Mint, then maybe burn</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dim">
          Every confirm writes a vertex. Parents are causal, not a block. XP at close is
          provisional. Thirty days later it settles or it is destroyed. That window is the
          anti-collusion device, not a slogan.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {engineLoop.map((step) => (
            <div key={step.code} className="border border-fg/10 px-4 py-4">
              <div className="font-brand text-lg tracking-[0.08em] text-fg">{step.code}</div>
              <p className="mt-2 text-xs leading-relaxed text-dim">{step.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {engineTokens.map((tok) => (
            <div key={tok.t} className="flex gap-3 text-sm">
              <span className="shrink-0 font-mono text-[11px] tracking-[0.16em] text-primary">{tok.t}</span>
              <span className="text-muted">{tok.d}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <p className="font-mono text-[10px] tracking-[0.24em] text-dim uppercase">On git, today</p>
        <h3 className="font-display mt-2 text-xl tracking-[0.04em]">What is code vs napkin</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dim">
          Kernel is MIT, TypeScript, Docker. Happy path is real. Adversarial path is the current
          build. Older standalone repos were archived into the monorepo or retired. They are not
          listed here.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {engineGit.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="block border border-primary/14 p-5 transition-colors hover:border-primary/50"
            >
              <StatusPill status={item.status} className="mb-3" />
              <div className="font-display text-[17px] tracking-[0.03em]">{item.name}</div>
              <p className="mt-2 text-xs leading-relaxed text-dim">{item.note}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        <div className="border border-primary/16 px-5 py-6">
          <p className="font-mono text-[10px] tracking-[0.24em] text-primary uppercase">A node</p>
          <h3 className="font-display mt-2 text-xl tracking-[0.04em]">Bring your own machine</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Clone the engine. Compose up. Run the happy-path script. Handshake a peer from a laptop
            if you want to see two machines talk. That is a node. Not a product. Equipment you
            already have.
          </p>
          <pre className="mt-4 overflow-x-auto border border-fg/10 bg-bg px-3 py-3 font-mono text-[11px] leading-relaxed text-dim">
            {`git clone https://github.com/00ranman/extropy-engine
cd extropy-engine
docker compose up --build -d
./scripts/test-happy-path.sh`}
          </pre>
        </div>
        <div className="border border-primary/16 px-5 py-6">
          <p className="font-mono text-[10px] tracking-[0.24em] text-primary uppercase">A DFAO</p>
          <h3 className="font-display mt-2 text-xl tracking-[0.04em]">Two to seven people</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Post tasks. Confirm when they land. That is a MICRO DFAO. Validators are just the people
            doing the work. You do not wait for a priesthood. Density in a zone is the actual
            constraint. Start small, locally, with something boring.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-dim">
            The node kit is a prototype idea for the rest: a modular box — compute, signed local
            log, optional sensor — that plugs in so you do not have to babysit Docker. Not shipping.
            Not a drop. If you can run the commands, you do not need the box.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap gap-3">
        <Btn href="https://github.com/00ranman/extropy-engine" external>
          Monorepo
        </Btn>
        <Btn href="/docs/Extropy_Codex_v2.1_Comprehensive.pdf">Codex v2.1</Btn>
        <Btn href="/open-problems">Open problems</Btn>
      </div>
    </section>
  );
}

export function FollowSection() {
  return (
    <section
      id="follow"
      className="border-t border-accent/15 bg-linear-to-b from-bg/95 to-primary/4 px-[8vw] py-20 text-center"
    >
      <h2 className="font-display mb-5 text-[clamp(26px,3.5vw,42px)] tracking-[0.08em] text-primary [text-shadow:0_0_20px_rgb(255_90_31_/_0.3)]">
        Follow me everywhere.
      </h2>
      <p className="mx-auto mb-9 max-w-xl text-[15px] leading-relaxed text-muted">
        I don't run on a schedule. I move when I see the opportunity and bring order to the chaos
        when it matters. No newsletter, no performance. Just follow me on every platform, turn on
        notifications, and you'll catch it when it drops. I'll be more valuable than anything else
        in your feed. That's not ego — that's just extropy. If talk-to-text writes entropy or
        lad-narrows,{" "}
        <a href="/say" className="text-primary hover:underline">
          teach the phone the names
        </a>
        .
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="me noreferrer"
            className="border border-primary/25 bg-primary/4 px-[22px] py-3 font-mono text-[11px] font-bold tracking-[0.25em] uppercase transition-all hover:border-primary hover:bg-primary hover:text-ink hover:shadow-[0_0_24px_rgb(255_90_31_/_0.4)]"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export function DocsBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-primary bg-ink px-3 py-2 text-center text-[13px] font-semibold text-fg">
      CODEX 2.1
      <a href="/docs" className="ml-1.5 text-primary hover:underline">
        Read the docs →
      </a>
      <button
        type="button"
        className="float-right ml-3 text-dim hover:text-fg"
        aria-label="Dismiss"
        onClick={() => setHidden(true)}
      >
        ✕
      </button>
    </div>
  );
}
