import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { Btn } from "@/components/ui-bits";
import { podcast } from "@/content/podcast";
import { getBed, isPlayingPath, toggleSrc } from "@/lib/audio-bed";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [{ title: "Extropy Engine — Podcast" }],
    links: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Extropy Engine",
        href: "/podcast/feed.xml",
      },
    ],
  }),
  component: PodcastPage,
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
      {ep.summary ? <p className="mt-2 text-sm leading-relaxed">{ep.summary}</p> : null}
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

function PodcastPage() {
  const [episodes, setEpisodes] = useState<Episode[] | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/podcast/index.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { episodes: [] }))
      .then((data) => setEpisodes(Array.isArray(data.episodes) ? data.episodes : []))
      .catch(() => setEpisodes([]));
  }, []);

  const copyFeed = async () => {
    try {
      await navigator.clipboard.writeText(podcast.feedUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <EssayLayout backTo="/" backLabel="Home" kicker="RSS" title={podcast.title}>
      <p>{podcast.description}</p>
      <p className="font-mono text-[13px] tracking-[0.04em] text-primary">{podcast.feedUrl}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Btn href={podcast.feedPath} external>
          Open RSS
        </Btn>
        <button
          type="button"
          className="border border-primary/40 px-4 py-2.5 font-mono text-[11px] tracking-[0.2em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-ink"
          onClick={copyFeed}
        >
          {copied ? "Copied" : "Copy RSS link"}
        </button>
      </div>
      <p className="text-sm text-dim">
        Apple Podcasts: Library → three dots → Follow a Show by URL. Pocket Casts, Overcast,
        AntennaPod, YouTube Music: paste the same link. Spotify wants a separate submit; the RSS is
        still the library.
      </p>

      <h2 className="font-display pt-6 text-2xl tracking-[0.04em] text-fg">Library</h2>
      {episodes === null ? (
        <p className="text-sm text-dim">Loading the shelf…</p>
      ) : episodes.length === 0 ? (
        <p>
          Nothing on the shelf yet. Drop an MP3 in <code className="text-primary">public/podcast/</code>{" "}
          on GitHub (date-slug.mp3) and push. The feed picks it up.
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
