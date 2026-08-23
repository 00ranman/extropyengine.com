import { useEffect, useState } from "react";
import type { ListenLinks as Links } from "@/content/closing-the-loop/types";
import { getBed, isPlayingPath, toggleSrc } from "@/lib/audio-bed";

const services: { key: keyof Links; label: string }[] = [
  { key: "spotify", label: "Spotify" },
  { key: "apple", label: "Apple Music" },
  { key: "youtube", label: "YouTube Music" },
];

export function ListenLinks({
  links,
  local,
  compact = false,
}: {
  links: Links;
  local?: string;
  compact?: boolean;
}) {
  const [here, setHere] = useState(false);

  useEffect(() => {
    if (!local) return;
    const el = getBed();
    if (!el) return;
    const sync = () => setHere(isPlayingPath(local));
    sync();
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("ended", sync);
    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("ended", sync);
    };
  }, [local]);

  return (
    <div className={compact ? "mt-2 flex flex-wrap items-center gap-2" : "mt-4 flex flex-wrap items-center gap-2"}>
      {!compact && (
        <span className="mr-1 font-mono text-[10px] font-bold tracking-[0.22em] text-accent uppercase">
          Listen
        </span>
      )}
      {services.map((s) => (
        <a
          key={s.key}
          href={links[s.key]}
          className="listen-btn inline-flex items-center border border-primary/35 px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-ink"
        >
          {s.label}
        </a>
      ))}
      {local ? (
        <button
          type="button"
          className="play-here no-print inline-flex items-center border border-primary bg-primary/15 px-5 py-2.5 font-mono text-[13px] font-bold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink"
          onClick={() => toggleSrc(local, false)}
        >
          {here ? "Pause" : "Play here"}
        </button>
      ) : null}
    </div>
  );
}