import { useEffect, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { researchLog } from "@/content/podcast";
import { getBed, isPlayingPath, toggleSrc } from "@/lib/audio-bed";

export const Route = createFileRoute("/podcast/log")({
  head: () => ({
    meta: [{ title: "Extropy Engine — Research Log" }],
    links: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: researchLog.title,
        href: researchLog.feedPath,
      },
    ],
  }),
  component: ResearchLogPage,
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
    <li className="border border-primary/16 px-4 py-4">
      <div className="font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
        {new Date(ep.pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        {ep.duration ? ` · ${ep.duration}` : ""}
      </div>
      <h3 className="font-display mt-1 text-lg tracking-[0.03em] text-fg">{ep.title}</h3>
      {ep.summary ? <p className="mt-2 text-sm leading-relaxed text-muted">{ep.summary}</p> : null}
      <button
        type="button"
        className="mt-3 inline-flex items-center border border-primary bg-primary/15 px-5 py-2.5 font-mono text-[13px] font-bold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink"
        onClick={() => toggleSrc(ep.src, false)}
      >
        {here ? "Pause" : "Play here"}
      </button>
    </li>
  );
}

function ResearchLogPage() {
  const [episodes, setEpisodes] = useState<Episode[] | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/podcast-log/index.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { episodes: [] }))
      .then((data) => setEpisodes(Array.isArray(data.episodes) ? data.episodes : []))
      .catch(() => setEpisodes([]));
  }, []);

  const copyFeed = async () => {
    try {
      await navigator.clipboard.writeText(researchLog.feedUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <EssayLayout backTo="/podcast" backLabel="Podcast" kicker="Automated RSS" title={researchLog.title}>
      <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">{researchLog.tagline}</p>
      <p className="mt-4">{researchLog.description}</p>
      <p className="mt-4 text-sm text-dim">
        This is not the talk show. The signed feed is{" "}
        <Link to="/podcast" className="text-primary hover:underline">
          /podcast
        </Link>
        .
      </p>

      <div id="subscribe" className="mt-8 space-y-3">
        <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">Submit this URL</p>
        <button
          type="button"
          className="flex w-full items-baseline justify-between gap-3 border border-primary bg-primary/15 px-4 py-3 font-mono text-[12px] tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink"
          onClick={copyFeed}
        >
          <span>{copied ? "Copied" : "Copy RSS"}</span>
          <span className="truncate text-[9px] tracking-normal normal-case text-dim">{researchLog.feedUrl}</span>
        </button>
        <p className="text-sm text-dim">
          Spotify, YouTube Podcasts, and Apple Podcasts Connect each get a new show with that feed. They do
          not inherit the other listing.
        </p>
      </div>

      <h2 className="font-display pt-8 text-2xl tracking-[0.04em] text-fg">Log</h2>
      {episodes === null ? (
        <p className="text-sm text-dim">Loading…</p>
      ) : episodes.length === 0 ? (
        <p className="text-sm text-muted">
          No episode on the site yet. Drop the M4A in the Drive inbox named Research Log Podcast. When it is
          published here, this shelf fills and the RSS updates.
        </p>
      ) : (
        <ul className="space-y-4">
          {episodes.map((ep) => (
            <EpisodeRow key={ep.src} ep={ep} />
          ))}
        </ul>
      )}
    </EssayLayout>
  );
}
