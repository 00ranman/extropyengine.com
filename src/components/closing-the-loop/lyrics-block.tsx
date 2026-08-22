import type { Track } from "@/content/closing-the-loop/types";

export function LyricsBlock({ track }: { track: Track }) {
  const stanzas = track.lyrics.trim().split(/\n\s*\n/);

  return (
    <figure className="lyrics-sheet my-8 border border-primary/18 bg-surface">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 border-b border-primary/12 px-5 py-3 font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
        <span>
          {track.lyricsKind === "selected" ? "Selected lyrics" : "Lyrics"}
        </span>
        <span className="normal-case tracking-normal text-dim">
          Randall Gossett
        </span>
      </figcaption>
      <div className="border-l-2 border-primary px-5 py-6 sm:px-7">
        {track.lyricsNote ? (
          <p className="mb-5 font-mono text-[11px] leading-relaxed text-dim">
            {track.lyricsNote}
          </p>
        ) : null}
        <div className="space-y-5 font-display text-[1.05rem] leading-[1.55] text-muted italic sm:text-[1.12rem]">
          {stanzas.map((stanza, i) => (
            <p key={i} className="lyric-stanza whitespace-pre-wrap">
              {stanza.trim()}
            </p>
          ))}
        </div>
      </div>
    </figure>
  );
}
