import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { directorySubmit, podcast, subscribeApps } from "@/content/podcast";
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

function preferredIds() {
  if (typeof navigator === "undefined") return [] as string[];
  const ua = navigator.userAgent;
  const apple = /iPhone|iPad|iPod|Macintosh/.test(ua);
  const android = /Android/.test(ua);
  if (apple) return ["apple", "overcast", "pocketcasts", "castro"];
  if (android) return ["pocketcasts", "antennapod", "addict"];
  return ["pocketcasts", "apple"];
}

function Subscribe() {
  const [copied, setCopied] = useState(false);
  const [fav, setFav] = useState<string[]>([]);

  useEffect(() => {
    setFav(preferredIds());
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

  const ranked = [...subscribeApps].sort((a, b) => {
    const ia = fav.indexOf(a.id);
    const ib = fav.indexOf(b.id);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  return (
    <div id="subscribe" className="space-y-4">
      <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">Add this show</p>
      <p>
        Tap the app you actually use. It should open with this feed already loaded. If nothing
        happens, the app isn’t installed — copy the RSS and paste it in the app’s “add by URL.”
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {ranked.map((app) => (
          <a
            key={app.id}
            href={app.href}
            className="flex items-baseline justify-between gap-3 border border-primary/35 px-4 py-3 font-mono text-[12px] tracking-[0.14em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-ink"
          >
            <span>{app.label}</span>
            <span className="text-[9px] tracking-[0.16em] text-dim normal-case">{app.hint}</span>
          </a>
        ))}
        <button
          type="button"
          className="flex items-baseline justify-between gap-3 border border-primary bg-primary/15 px-4 py-3 font-mono text-[12px] tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink sm:col-span-2"
          onClick={copyFeed}
        >
          <span>{copied ? "Copied" : "Copy RSS link"}</span>
          <span className="truncate text-[9px] tracking-normal normal-case text-dim">
            {podcast.feedUrl}
          </span>
        </button>
      </div>
      <p className="text-sm text-dim">
        Spotify and YouTube don’t take a raw RSS tap from a listener. Submit the same feed once
        (you), then those buttons can be added.
      </p>
      <div className="flex flex-wrap gap-2">
        {directorySubmit.map((d) => (
          <a
            key={d.href}
            href={d.href}
            target="_blank"
            rel="noreferrer"
            className="border border-fg/20 px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-dim uppercase hover:border-primary hover:text-primary"
            title={d.note}
          >
            {d.label}
          </a>
        ))}
      </div>
    </div>
  );
}

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

  useEffect(() => {
    fetch("/podcast/index.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { episodes: [] }))
      .then((data) => setEpisodes(Array.isArray(data.episodes) ? data.episodes : []))
      .catch(() => setEpisodes([]));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#subscribe") return;
    document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [episodes]);

  return (
    <EssayLayout backTo="/" backLabel="Home" kicker="RSS" title={podcast.title}>
      <p>{podcast.description}</p>
      <Subscribe />

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
