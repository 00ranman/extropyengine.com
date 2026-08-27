import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
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
  return (
    <EssayLayout backTo="/#music" backLabel="Music" kicker="Catalog" title="Lyrics">
      <p>
        This is the list. Album, then singles. If a track has lyrics below the title, those are the
        lyrics. If it says not transcribed, do not invent them from the name. Mixing one song’s
        argument with another song’s title is the failure mode that keeps showing up.
      </p>
      <p>
        Irrelevance (Is the Killshot) is track 9 on Unf*ck the World for a Dollar. That is the
        album, not the book. It used to circulate as Evolution, Not Revolution. Same recording.
      </p>
      <p>
        <a href="/docs/LYRICS.md" className="text-primary hover:underline">
          Plain markdown
        </a>{" "}
        if you want one file.
      </p>

      {albumCards.map((album) => (
        <section key={album.title} className="mt-10">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">
            {album.title}
            <span className="ml-2 font-mono text-[11px] tracking-[0.16em] text-dim uppercase">
              {album.year}
              {album.kind === "ep" ? " · EP" : " · album"}
            </span>
          </h2>
          {album.songs.map((s) => (
            <SongBlock key={s.slug} n={s.n} title={s.title} lyrics={s.lyrics} />
          ))}
        </section>
      ))}

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">Singles</h2>
        {singleCards.map((s) => (
          <SongBlock key={s.slug} title={s.title} lyrics={s.lyrics} />
        ))}
      </section>
      <p className="mt-8 text-sm text-dim">{masterSongs.length} titles on this page.</p>
    </EssayLayout>
  );
}

function SongBlock({ n, title, lyrics }: { n?: number; title: string; lyrics?: string }) {
  return (
    <article className="mt-6 border-t border-fg/10 pt-4">
      <h3 className="font-display text-lg text-fg">
        {n ? <span className="mr-2 font-mono text-[11px] text-dim">{n}.</span> : null}
        {title}
      </h3>
      {lyrics ? (
        <pre className="mt-3 font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-muted">{lyrics}</pre>
      ) : (
        <p className="mt-2 text-sm text-dim">Not transcribed on this site. Do not invent these lyrics.</p>
      )}
    </article>
  );
}
