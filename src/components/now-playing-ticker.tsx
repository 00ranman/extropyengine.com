import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { bedSnapshot, getBed, subscribeBed } from "@/lib/audio-bed";
import { catalogBySrc } from "@/content/music";

const HOLD_MS = 7000;

function linesOf(raw?: string) {
  if (!raw) return [];
  return raw
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

/** Map playback time to a lyric line. No official LRC for this catalog — lock to the file clock. */
function lineAt(lines: string[], t: number, duration: number) {
  if (!lines.length) return null;
  const dur = duration > 1 ? duration : 180;
  const intro = Math.min(8, dur * 0.07);
  if (t < intro) return null;
  const span = Math.max(1, dur - intro - Math.min(6, dur * 0.04));
  const i = Math.min(lines.length - 1, Math.max(0, Math.floor(((t - intro) / span) * lines.length)));
  return { text: lines[i], next: lines[i + 1] ?? "" };
}

export function NowPlayingTicker() {
  const [hidden, setHidden] = useState(false);
  const [holding, setHolding] = useState(true);
  const [snap, setSnap] = useState(() => bedSnapshot());
  const [reduce, setReduce] = useState(false);
  const [flicker, setFlicker] = useState(false);

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

  if (hidden) return null;

  const song = catalogBySrc(snap.src);
  const lyric = holding ? null : lineAt(linesOf(song.lyrics), snap.currentTime, snap.duration);

  return (
    <div
      className="now-ticker no-print fixed right-0 bottom-0 left-0 z-40 flex items-center gap-2 overflow-hidden border-t border-primary py-2 pr-[4.75rem] pl-3 text-[13px] font-semibold text-fg"
      data-glitch={flicker && !reduce && !snap.paused ? "flicker" : "idle"}
    >
      <div className="ticker-copy relative z-10 min-w-0 flex-1 overflow-hidden">
        {holding ? (
          <p className="truncate text-center tracking-[0.14em]">
            CODEX 2.1{" "}
            <Link to="/docs" className="text-primary hover:underline">
              Read the docs →
            </Link>
          </p>
        ) : lyric ? (
          <p className="truncate text-center">
            <span className="font-mono text-[13px] font-normal tracking-[0.04em] text-fg">{lyric.text}</span>
            {lyric.next ? (
              <span className="ml-6 font-mono text-[12px] font-normal tracking-[0.04em] text-dim">{lyric.next}</span>
            ) : null}
          </p>
        ) : (
          <p className="truncate text-center tracking-[0.14em]">
            <span className="font-display tracking-[0.08em] text-primary">{song.title}</span>
            {song.album ? (
              <span className="ml-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">{song.album}</span>
            ) : null}
          </p>
        )}
      </div>
      <Link to="/docs" className="ticker-copy relative z-10 hidden shrink-0 font-mono text-[10px] tracking-[0.14em] text-primary uppercase hover:underline sm:inline">
        Docs
      </Link>
      <button
        type="button"
        className="ticker-copy relative z-10 shrink-0 text-dim hover:text-fg"
        aria-label="Dismiss"
        onClick={() => setHidden(true)}
      >
        ✕
      </button>
    </div>
  );
}
