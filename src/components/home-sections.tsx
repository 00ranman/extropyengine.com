import { useState } from "react";
import { X } from "lucide-react";
import {
  albums,
  artistLinks,
  book,
  earlierEditions,
  papers,
  singles,
  socials,
  suite,
  type Paper,
  type SuiteApp,
} from "@/content/site";
import { Btn, SectionTitle, StatusPill } from "@/components/ui-bits";

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

export function SuiteSection() {
  const [active, setActive] = useState<SuiteApp | null>(null);

  return (
    <section id="suite" className="border-t border-primary/12 px-[8vw] py-[90px]">
      <SectionTitle className="mb-3 text-center">The App Suite</SectionTitle>
      <p className="mx-auto mb-12 max-w-xl text-center text-[15px] leading-relaxed text-muted">
        The Extropy Engine is not one app — it is a constellation. Some are shipped. Some are in
        build. Some are still on the napkin. Hover any tile to feel it. Click to open the spec.
      </p>
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3.5 md:grid-cols-3 xl:grid-cols-4">
        {suite.map((app) => (
          <button
            key={app.name}
            type="button"
            onClick={() => setActive(app)}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
              e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
            }}
            className="group relative overflow-hidden rounded-md border border-primary/14 bg-linear-to-br from-[rgb(28_18_12_/_0.55)] to-[rgb(12_8_6_/_0.65)] p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/55 hover:shadow-[0_16px_40px_rgb(255_90_31_/_0.14)]"
          >
            <span className="tile-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            <StatusPill status={app.status} className="mb-3" />
            <div className="font-display mb-2 text-[17px] leading-snug tracking-[0.03em]">{app.name}</div>
            <p className="text-xs leading-relaxed text-[#a89e8e]">{app.blurb}</p>
          </button>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-5">
          <button
            type="button"
            className="absolute inset-0 bg-[rgb(6_4_2_/_0.78)] backdrop-blur-md"
            aria-label="Close"
            onClick={() => setActive(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative max-h-[85vh] w-full max-w-[560px] overflow-y-auto rounded-[10px] border border-primary/32 bg-linear-to-br from-[rgb(28_20_14_/_0.96)] to-[rgb(14_10_8_/_0.98)] px-9 py-10 shadow-[0_30px_80px_rgb(0_0_0_/_0.6)]"
          >
            <button
              type="button"
              className="absolute top-3.5 right-4 text-[#a89e8e] hover:text-primary"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <X className="size-7" />
            </button>
            <StatusPill status={active.status} className="mb-4 text-[10px]" />
            <h3 className="font-display mb-1.5 text-[26px] font-bold tracking-[0.04em]">{active.name}</h3>
            <p className="mb-5 font-mono text-[11px] tracking-[0.2em] text-primary uppercase">{active.tag}</p>
            <p className="mb-6 text-sm leading-relaxed text-muted">{active.body}</p>
            {active.repo ? (
              <a
                href={active.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-primary/40 px-[18px] py-2.5 font-mono text-[11px] tracking-[0.22em] uppercase transition-all hover:border-primary hover:bg-primary hover:text-ink"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
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
            rel="noreferrer"
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
