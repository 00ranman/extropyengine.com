import { useEffect, useState } from "react";
import type { ListenLinks as Links } from "@/content/closing-the-loop/types";
import { getBed, isPlayingPath, toggleSrc } from "@/lib/audio-bed";

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
    <p
      className={
        compact
          ? "font-mono text-sm text-dim"
          : "mt-3 font-mono text-[13px] tracking-[0.08em] text-dim"
      }
    >
      {!compact && (
        <span className="mr-3 text-[10px] font-bold tracking-[0.22em] text-accent uppercase">
          Listen
        </span>
      )}
      {local ? (
        <span className="no-print">
          <button
            type="button"
            className="play-here text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            onClick={() => toggleSrc(local, false)}
          >
            {here ? "Pause" : "Play here"}
          </button>
          <span className="mx-2 text-faint" aria-hidden>
            ·
          </span>
        </span>
      ) : null}
      <a
        className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        href={links.spotify}
      >
        Spotify
      </a>
      <span className="mx-2 text-faint" aria-hidden>
        ·
      </span>
      <a
        className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        href={links.apple}
      >
        Apple Music
      </a>
      <span className="mx-2 text-faint" aria-hidden>
        ·
      </span>
      <a
        className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        href={links.youtube}
      >
        YouTube Music
      </a>
    </p>
  );
}