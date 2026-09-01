export function WatchTapes() {
  const tapes = [
    {
      kicker: "Music videos",
      title: "Lladnaros Music Videos",
      lead: "The unofficial videos. Playlist on @Lladnaros.",
      list: "PLDvyw8u2wal2a-d9dfjih8ewRqg5qbbMk",
      start: "3uNCVqirzTw",
    },
    {
      kicker: "Lyric videos",
      title: "Lyric Videos",
      lead: "Words on the picture. Same catalog, different cut.",
      list: "PLDvyw8u2wal23xqocgvMXxevRFFq8S1Kw",
      start: "2EZnlukCWfI",
    },
    {
      kicker: "XPlainers",
      title: "XPlainers",
      lead: "The arguments, said out loud.",
      list: "PLDvyw8u2wal1AnvXoTCL8StWzLdKzR8d_",
      start: "0t2VR9HFXzA",
    },
  ] as const;

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {tapes.map((tape) => (
        <div key={tape.list}>
          <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">{tape.kicker}</p>
          <h4 className="font-display mt-1 text-base tracking-[0.04em]">{tape.title}</h4>
          <p className="mt-1 text-xs leading-relaxed text-dim">{tape.lead}</p>
          <div className="mt-3 aspect-video w-full overflow-hidden border border-fg/12 bg-bg">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${tape.start}?list=${tape.list}&rel=0`}
              title={tape.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${tape.list}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-mono text-[10px] tracking-[0.16em] text-primary uppercase hover:underline"
          >
            Open playlist →
          </a>
        </div>
      ))}
    </div>
  );
}
