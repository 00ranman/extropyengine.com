import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { bedSnapshot, getBed, seekBed, subscribeBed } from "@/lib/audio-bed";
import { catalogBySrc } from "@/content/music";

const HOLD_MS = 7000;

function linesOf(raw?: string) {
  if (!raw) return [];
  return raw
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

function timing(duration: number) {
  const dur = duration > 1 ? duration : 180;
  const intro = Math.min(8, dur * 0.07);
  const span = Math.max(1, dur - intro - Math.min(6, dur * 0.04));
  return { intro, span };
}

/** Map playback time to a lyric line. No official LRC for this catalog — lock to the file clock. */
function lineIndex(lines: string[], t: number, duration: number) {
  if (!lines.length) return -1;
  const { intro, span } = timing(duration);
  if (t < intro) return -1;
  return Math.min(lines.length - 1, Math.max(0, Math.floor(((t - intro) / span) * lines.length)));
}

function timeForLine(i: number, lines: string[], duration: number) {
  const { intro, span } = timing(duration);
  const n = Math.max(1, lines.length);
  const clamped = Math.min(n - 1, Math.max(0, i));
  return intro + ((clamped + 0.08) / n) * span;
}

export function NowPlayingTicker() {
  const [hidden, setHidden] = useState(false);
  const [holding, setHolding] = useState(true);
  const [snap, setSnap] = useState(() => bedSnapshot());
  const [reduce, setReduce] = useState(false);
  const [flicker, setFlicker] = useState(false);
  const [manual, setManual] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const resumeAt = useRef(0);
  const drag = useRef<{ x: number; sl: number } | null>(null);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    getBed();
    setSnap(bedSnapshot());
    return subscribeBed(() => setSnap(bedSnapshot()));
  }, []);

  useEffect(() => {
    if (hidden || snap.paused) return;
    const id = window.setInterval(() => setSnap(bedSnapshot()), 200);
    return () => window.clearInterval(id);
  }, [hidden, snap.paused]);

  useEffect(() => {
    const t = window.setTimeout(() => setHolding(false), HOLD_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (hidden || reduce || snap.paused) {
      setFlicker(false);
      return;
    }
    let t = 0;
    let on = false;
    const schedule = () => {
      const wait = on ? 180 + Math.random() * 280 : 8000 + Math.random() * 14000;
      t = window.setTimeout(() => {
        on = !on;
        setFlicker(on);
        schedule();
      }, wait);
    };
    schedule();
    return () => window.clearTimeout(t);
  }, [hidden, reduce, snap.paused]);

  useEffect(() => {
    document.body.style.paddingBottom = hidden ? "" : "2.75rem";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [hidden]);

  const song = catalogBySrc(snap.src);
  const lines = linesOf(song.lyrics);
  const clockIndex = lineIndex(lines, snap.currentTime, snap.duration);
  const active = manual != null ? manual : clockIndex;

  useEffect(() => {
    setManual(null);
  }, [snap.src]);

  useEffect(() => {
    if (manual == null) return;
    if (Date.now() < resumeAt.current) return;
    if (clockIndex === manual) setManual(null);
  }, [clockIndex, manual]);

  useEffect(() => {
    const el = stripRef.current;
    if (!el || holding || hidden) return;
    const node = el.querySelector<HTMLElement>(`[data-line="${Math.max(0, active)}"]`);
    if (!node) return;
    const left = node.offsetLeft - el.clientWidth / 2 + node.offsetWidth / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: reduce ? "auto" : "smooth" });
  }, [active, holding, hidden, reduce, snap.src]);

  if (hidden) return null;

  const jump = (i: number) => {
    if (!lines.length) return;
    const next = Math.min(lines.length - 1, Math.max(0, i));
    setHolding(false);
    setManual(next);
    resumeAt.current = Date.now() + 4000;
    seekBed(timeForLine(next, lines, snap.duration));
  };

  const onWheel = (e: React.WheelEvent) => {
    const el = stripRef.current;
    if (!el || !lines.length) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (!delta) return;
    e.preventDefault();
    jump(active + (delta > 0 ? 1 : -1));
  };

  return (
    <div
      className="now-ticker no-print fixed right-0 bottom-0 left-0 z-40 flex items-center gap-1 overflow-hidden border-t border-primary py-2 pr-[3.4rem] pl-2 text-[13px] font-semibold text-fg"
      data-glitch={flicker && !reduce && !snap.paused ? "flicker" : "idle"}
    >
      <button
        type="button"
        className="ticker-copy relative z-10 shrink-0 px-1 text-lg leading-none text-dim hover:text-fg disabled:opacity-25"
        aria-label="Previous line"
        disabled={holding || !lines.length || active <= 0}
        onClick={() => jump((active < 0 ? 0 : active) - 1)}
      >
        ‹
      </button>
      <div className="ticker-copy relative z-10 min-w-0 flex-1 overflow-hidden">
        {holding ? (
          <p className="truncate text-center tracking-[0.14em]">
            CODEX 2.1{" "}
            <Link to="/docs" className="text-primary hover:underline">
              Read the docs →
            </Link>
          </p>
        ) : lines.length ? (
          <div
            ref={stripRef}
            className="ticker-strip flex items-center gap-8 overflow-x-auto px-2"
            onWheel={onWheel}
            onPointerDown={(e) => {
              drag.current = { x: e.clientX, sl: stripRef.current?.scrollLeft ?? 0 };
            }}
            onPointerMove={(e) => {
              if (!drag.current || !stripRef.current) return;
              if (Math.abs(e.clientX - drag.current.x) < 4) return;
              stripRef.current.scrollLeft = drag.current.sl - (e.clientX - drag.current.x);
            }}
            onPointerUp={(e) => {
              const start = drag.current;
              drag.current = null;
              if (!start || !lines.length) return;
              const dx = e.clientX - start.x;
              if (Math.abs(dx) > 36) jump((active < 0 ? 0 : active) + (dx < 0 ? 1 : -1));
            }}
            onPointerCancel={() => {
              drag.current = null;
            }}
          >
            {lines.map((line, i) => (
              <button
                key={`${i}-${line.slice(0, 24)}`}
                type="button"
                data-line={i}
                className={`ticker-line shrink-0 snap-center font-mono text-[13px] font-normal tracking-[0.04em] ${i === active ? "text-fg" : "text-dim"}`}
                onClick={() => jump(i)}
              >
                {line}
              </button>
            ))}
          </div>
        ) : (
          <p className="truncate text-center tracking-[0.14em]">
            <span className="font-display tracking-[0.08em] text-primary">{song.title}</span>
            {song.album ? (
              <span className="ml-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">{song.album}</span>
            ) : null}
          </p>
        )}
      </div>
      <button
        type="button"
        className="ticker-copy relative z-10 shrink-0 px-1 text-lg leading-none text-dim hover:text-fg disabled:opacity-25"
        aria-label="Next line"
        disabled={holding || !lines.length || active >= lines.length - 1}
        onClick={() => jump((active < 0 ? -1 : active) + 1)}
      >
        ›
      </button>
      <Link to="/docs" className="ticker-copy relative z-10 hidden shrink-0 font-mono text-[10px] tracking-[0.14em] text-primary uppercase hover:underline sm:inline">
        Docs
      </Link>
      <button
        type="button"
        className="ticker-copy relative z-10 shrink-0 pr-1 text-dim hover:text-fg"
        aria-label="Dismiss"
        onClick={() => setHidden(true)}
      >
        ✕
      </button>
    </div>
  );
}
