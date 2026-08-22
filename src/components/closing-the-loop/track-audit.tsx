import type { Track } from "@/content/closing-the-loop/types";
import { ListenLinks } from "./listen-links";
import { LyricsBlock } from "./lyrics-block";

export function TrackAudit({ track }: { track: Track }) {
  return (
    <article
      id={track.slug}
      className="track-block pdf-break scroll-mt-28 border-t border-primary/12 pt-12 pb-4"
    >
      <header>
        <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">
          Track {String(track.n).padStart(2, "0")}
          <span className="mx-2 text-faint">/</span>
          {track.year}
          <span className="mx-2 text-faint">/</span>
          {track.release}
        </p>
        <h3 className="font-display mt-2 text-[2rem] leading-[1.15] tracking-[0.02em] text-balance text-fg sm:text-[2.2rem]">
          {track.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted italic">
          {track.thesis}
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
          {track.loopLabel}
        </p>
        <ListenLinks links={track.links} />
      </header>

      <LyricsBlock track={track} />

      <div className="space-y-5">
        {track.reading.map((p, i) => (
          <p
            key={i}
            className="text-[15px] leading-[1.8] text-pretty text-muted"
          >
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
