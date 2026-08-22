import { parts } from "@/content/closing-the-loop/essays";
import { tracks } from "@/content/closing-the-loop/tracks";

const front = [
  { href: "#how-to-listen", label: "How to listen" },
  { href: "#abstract", label: "Abstract" },
  { href: "#method", label: "Method" },
  { href: "#system", label: "The catalog as one system" },
];

const back = [
  { href: "#findings", label: "What the system surfaces" },
  { href: "#unclosed", label: "What still does not close" },
  { href: "#limitations", label: "Limitations" },
  { href: "#sources", label: "Sources" },
];

export function Toc({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Contents" className="font-mono text-[12px]">
      <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-faint uppercase">
        Contents
      </p>
      <ol className="space-y-1.5 text-dim">
        {front.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              className="hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-5 space-y-4">
        {parts.map((part) => {
          const partTracks = tracks.filter((t) => t.part === part.id);
          return (
            <div key={part.id}>
              <a
                href={`#part-${part.id}`}
                onClick={onNavigate}
                className="text-fg hover:text-primary"
              >
                {part.roman}. {part.title}
              </a>
              <ol className="mt-1.5 space-y-1 pl-3 text-dim">
                {partTracks.map((t) => (
                  <li key={t.slug}>
                    <a
                      href={`#${t.slug}`}
                      onClick={onNavigate}
                      className="hover:text-primary"
                    >
                      {t.n}. {t.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
      <ol className="mt-5 space-y-1.5 border-t border-primary/12 pt-4 text-dim">
        {back.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              className="hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
