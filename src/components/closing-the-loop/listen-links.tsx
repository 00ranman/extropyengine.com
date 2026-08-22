import type { ListenLinks as Links } from "@/content/closing-the-loop/types";

export function ListenLinks({
  links,
  compact = false,
}: {
  links: Links;
  compact?: boolean;
}) {
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
