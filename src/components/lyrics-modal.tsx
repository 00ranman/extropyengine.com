import { useEffect } from "react";

export function LyricsModal({
  title,
  lyrics,
  onClose,
}: {
  title: string;
  lyrics?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-bg/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lyrics-title"
        className="max-h-[min(82dvh,40rem)] w-full max-w-lg overflow-hidden border border-primary/35 bg-bg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-primary/15 px-4 py-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">Lyrics</p>
            <h2 id="lyrics-title" className="font-brand mt-1 text-xl tracking-[0.06em] text-fg uppercase">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-lg text-dim hover:text-primary"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="max-h-[min(68dvh,32rem)] overflow-y-auto px-4 py-4">
          {lyrics ? (
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-muted">{lyrics}</pre>
          ) : (
            <p className="text-sm leading-relaxed text-dim">
              Lyrics for this title are not on this site yet. Do not invent them from the title.
              The title is the title. The lyrics are the lyrics. Mixing those is the failure mode.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
