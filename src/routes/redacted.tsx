import { useEffect, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { redacted } from "@/content/podcast";
import { getBed, isPlayingPath, toggleSrc } from "@/lib/audio-bed";

export const Route = createFileRoute("/redacted")({
  head: () => ({
    meta: [
      { title: "Redacted — Extropy Engine" },
      { name: "description", content: redacted.description },
      { name: "robots", content: "noindex" },
    ],
    links: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: redacted.title,
        href: redacted.feedPath,
      },
    ],
  }),
  component: RedactedPage,
});

type Episode = {
  src: string;
  title: string;
  summary: string;
  pubDate: string;
  duration: string | null;
};

function EpisodeRow({ ep }: { ep: Episode }) {
  const [here, setHere] = useState(false);
  useEffect(() => {
    const el = getBed();
    if (!el) return;
    const sync = () => setHere(isPlayingPath(ep.src));
    sync();
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("ended", sync);
    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("ended", sync);
    };
  }, [ep.src]);
  return (
    <li className="border border-primary/16 px-4 py-5">
      <div className="font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
        {new Date(ep.pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        {ep.duration ? ` · ${ep.duration}` : ""}
      </div>
      <h3 className="font-display mt-1 text-xl tracking-[0.03em] text-fg">{ep.title}</h3>
      {ep.summary ? <p className="mt-2 text-sm leading-relaxed text-muted">{ep.summary}</p> : null}
      <button
        type="button"
        className="mt-4 inline-flex items-center border border-primary bg-primary/15 px-5 py-2.5 font-mono text-[13px] font-bold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink"
        onClick={() => toggleSrc(ep.src, false)}
      >
        {here ? "Pause" : "Play here"}
      </button>
    </li>
  );
}

function RedactedPage() {
  const [episodes, setEpisodes] = useState<Episode[] | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/podcast-redacted/index.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { episodes: [] }))
      .then((data) => setEpisodes(Array.isArray(data.episodes) ? data.episodes : []))
      .catch(() => setEpisodes([]));
  }, []);

  const copyFeed = async () => {
    try {
      await navigator.clipboard.writeText(redacted.feedUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-6 py-14 md:px-8 md:py-20">
        <Link
          to="/"
          className="mb-8 inline-block font-mono text-[11px] tracking-[0.22em] text-dim uppercase transition-colors hover:text-primary"
        >
          ← Home
        </Link>

        <p className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">Redacted</p>
        <h1 className="font-display mt-3 text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[0.03em] text-fg">
          Old meter
        </h1>
        <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-dim uppercase">{redacted.tagline}</p>
        <p className="mt-8 text-[15px] leading-[1.8] text-muted">{redacted.description}</p>

        <div id="subscribe" className="mt-8 space-y-3">
          <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">Trail RSS</p>
          <button
            type="button"
            className="flex w-full items-baseline justify-between gap-3 border border-primary bg-primary/15 px-4 py-3 font-mono text-[12px] tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink"
            onClick={copyFeed}
          >
            <span>{copied ? "Copied" : "Copy RSS"}</span>
            <span className="truncate text-[9px] tracking-normal normal-case text-dim">{redacted.feedUrl}</span>
          </button>
          <p className="text-sm text-dim">
            Not submitted to Spotify or Apple as a live show. Trail only. Live talk is{" "}
            <Link to="/podcast" className="text-primary hover:underline">
              /podcast
            </Link>
            .
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl tracking-[0.04em] text-fg">Parked</h2>
        {episodes === null ? (
          <p className="mt-4 text-sm text-dim">Loading…</p>
        ) : episodes.length === 0 ? (
          <p className="mt-4 text-sm text-dim">Nothing parked yet.</p>
        ) : (
          <ul className="mt-5 space-y-4">
            {episodes.map((ep) => (
              <EpisodeRow key={ep.src} ep={ep} />
            ))}
          </ul>
        )}
      </article>
    </SiteShell>
  );
}
