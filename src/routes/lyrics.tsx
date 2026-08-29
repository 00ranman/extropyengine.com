import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { LyricsModal } from "@/components/lyrics-modal";
import { PlayHere } from "@/components/play-here";
import { albumCards, masterSongs, singleCards } from "@/content/music";

export const Route = createFileRoute("/lyrics")({
  head: () => ({
    meta: [
      { title: "Lyrics — Lladnaros" },
      {
        name: "description",
        content:
          "Master list of Lladnaros tracks by album and single. Lyrics where they are on this site. Do not invent lyrics from a title. Do not mix songs.",
      },
    ],
  }),
  component: LyricsPage,
});

function LyricsPage() {
  const [open, setOpen] = useState<{ title: string; lyrics?: string; src?: string } | null>(null);
  const transcribed = useMemo(() => masterSongs.filter((s) => s.lyrics).length, []);

  return (
    <SiteShell>
      <article className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
        <Link
          to="/"
          hash="music"
          className="mb-8 inline-block font-mono text-[11px] tracking-[0.22em] text-dim uppercase transition-colors hover:text-primary"
        >
          ← Music
        </Link>
        <p className="mb-3 font-mono text-[11px] tracking-[0.28em] text-primary uppercase">Catalog</p>
        <h1 className="font-brand mb-6 text-[clamp(32px,5vw,56px)] leading-none tracking-[0.08em] text-fg uppercase">
          Lyrics
        </h1>
        <p className="mb-4 max-w-2xl font-mono text-[14px] leading-relaxed text-muted">
          Album, then singles. Hover a tile. Open the box. If it says not transcribed, do not invent
          them from the name. Mixing one song’s argument with another song’s title is the failure
          mode.
        </p>
        <p className="mb-4 max-w-2xl font-mono text-[14px] leading-relaxed text-dim">
          Irrelevance (Is the Killshot) is track 9 on Unf*ck the World for a Dollar. That is the
          album, not the book. It used to circulate as Evolution, Not Revolution. Same recording.
        </p>
        <p className="mb-12 font-mono text-[12px] tracking-[0.08em] text-dim">
          {transcribed}/{masterSongs.length} transcribed ·{" "}
          <a href="/docs/LYRICS.md" className="text-primary hover:underline">
            Plain markdown
          </a>
          {" · "}
          <a
            href="https://lyricsondemand.com/lladnaros"
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LyricsOnDemand
          </a>
        </p>

        {albumCards.map((album) => (
          <section key={album.title} className="mb-14">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-fg/10 pb-3">
              <h2 className="font-brand text-xl tracking-[0.08em] text-fg uppercase">{album.title}</h2>
              <p className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
                {album.year}
                {album.kind === "ep" ? " · EP" : " · album"} · {album.songs.length}
              </p>
            </div>
            <div className="grid gap-px bg-fg/8 sm:grid-cols-2 lg:grid-cols-3">
              {album.songs.map((s) => (
                <SongTile
                  key={s.slug}
                  n={s.n}
                  title={s.title}
                  lyrics={s.lyrics}
                  src={s.src}
                  onOpen={() => setOpen({ title: s.title, lyrics: s.lyrics, src: s.src })}
                />
              ))}
            </div>
          </section>
        ))}

        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-fg/10 pb-3">
            <h2 className="font-brand text-xl tracking-[0.08em] text-fg uppercase">Singles</h2>
            <p className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">{singleCards.length}</p>
          </div>
          <div className="grid gap-px bg-fg/8 sm:grid-cols-2 lg:grid-cols-3">
            {singleCards.map((s) => (
              <SongTile
                key={s.slug}
                title={s.title}
                lyrics={s.lyrics}
                src={s.src}
                onOpen={() => setOpen({ title: s.title, lyrics: s.lyrics, src: s.src })}
              />
            ))}
          </div>
        </section>
      </article>
      {open ? (
        <LyricsModal title={open.title} lyrics={open.lyrics} src={open.src} onClose={() => setOpen(null)} />
      ) : null}
    </SiteShell>
  );
}

function SongTile({
  n,
  title,
  lyrics,
  src,
  onOpen,
}: {
  n?: number;
  title: string;
  lyrics?: string;
  src?: string;
  onOpen: () => void;
}) {
  return (
    <div className="glitch-tile flex min-h-24 flex-col items-start justify-between gap-3 bg-bg p-4 text-left">
      <div className="flex w-full items-start justify-between gap-3">
        <span className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
          {n ? String(n).padStart(2, "0") : "single"}
          <span className="text-faint"> · </span>
          {lyrics ? "lyrics" : "not transcribed"}
        </span>
        {src ? <PlayHere src={src} tiny /> : null}
      </div>
      <button type="button" onClick={onOpen} className="glitch-name text-left text-[15px] leading-snug text-fg">
        {title}
      </button>
    </div>
  );
}
