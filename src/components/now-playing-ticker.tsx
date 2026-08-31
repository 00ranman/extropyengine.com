import { useEffect, useRef, useState } from "react";
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

function Dot() {
  return <span className="mx-6 text-primary/70">·</span>;
}

function CrackGlass() {
  return (
    <svg className="ticker-cracks" viewBox="0 0 1200 48" preserveAspectRatio="none" aria-hidden>
      <g fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.7" strokeLinejoin="miter">
        <path d="M0 22 L80 18 L140 28 L210 8 L280 30 L360 14 L430 26 L520 6 L610 32 L700 12 L790 28 L880 10 L970 24 L1060 16 L1200 22" />
        <path d="M210 8 L230 40 M360 14 L340 46 M520 6 L545 44 M700 12 L680 48 M880 10 L910 42" />
        <path d="M140 28 L160 2 M430 26 L410 0 M610 32 L640 0 M790 28 L770 2" stroke="rgba(34,211,238,0.35)" />
        <path d="M280 30 L300 0 M970 24 L990 46" stroke="rgba(255,90,31,0.4)" />
      </g>
    </svg>
  );
}

export function NowPlayingTicker() {
  const [hidden, setHidden] = useState(false);
  const [holding, setHolding] = useState(true);
  const [codexSlide, setCodexSlide] = useState(true);
  const [snap, setSnap] = useState(() => bedSnapshot());
  const [reduce, setReduce] = useState(false);
  const [glitch, setGlitch] = useState<"idle" | "static" | "glass">("idle");
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rafRef = useRef(0);
  const seenSrc = useRef<string | null>(null);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    getBed();
    setSnap(bedSnapshot());
    return subscribeBed(() => setSnap(bedSnapshot()));
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setHolding(false), HOLD_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (hidden || reduce) return;
    let t = 0;
    let mode: "idle" | "static" | "glass" = "idle";
    const schedule = () => {
      const wait =
        mode === "idle"
          ? 9000 + Math.random() * 13000
          : mode === "static"
            ? 320 + Math.random() * 480
            : 1700 + Math.random() * 1900;
      t = window.setTimeout(() => {
        mode = mode === "idle" ? "static" : mode === "static" ? "glass" : "idle";
        setGlitch(mode);
        schedule();
      }, wait);
    };
    schedule();
    return () => window.clearTimeout(t);
  }, [hidden, reduce]);

  const song = catalogBySrc(snap.src);
  const lyrics = linesOf(song.lyrics);

  useEffect(() => {
    if (holding) return;
    if (seenSrc.current === null) {
      seenSrc.current = snap.src;
      return;
    }
    if (seenSrc.current !== snap.src) {
      seenSrc.current = snap.src;
      setCodexSlide(false);
    }
  }, [holding, snap.src]);

  useEffect(() => {
    if (hidden || holding || reduce) return;

    const track = trackRef.current;
    const frame = frameRef.current;
    if (!track || !frame) return;

    xRef.current = 0;
    track.style.transform = "translateX(0)";
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const el = getBed();
      const remaining =
        el && el.duration && Number.isFinite(el.duration)
          ? Math.max(0.4, el.duration - el.currentTime)
          : 180;
      const distance = Math.max(1, track.scrollWidth - frame.clientWidth);
      const leftPx = Math.max(0, distance - xRef.current);
      const speed = leftPx / remaining;
      xRef.current += speed * dt;
      if (xRef.current > distance) xRef.current = distance;
      track.style.transform = `translateX(${-xRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hidden, holding, reduce, snap.src, song.title, codexSlide]);

  useEffect(() => {
    document.body.style.paddingBottom = hidden ? "" : "2.75rem";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className="now-ticker no-print fixed right-0 bottom-0 left-0 z-40 flex items-center gap-2 overflow-hidden border-t border-primary py-2 pr-[4.75rem] pl-3 text-[13px] font-semibold text-fg"
      data-glitch={reduce ? "idle" : glitch}
    >
      <div className="ticker-fx ticker-static" aria-hidden />
      <div className="ticker-fx ticker-glass" aria-hidden>
        <CrackGlass />
      </div>
      <div ref={frameRef} className="ticker-copy relative z-10 min-w-0 flex-1 overflow-hidden">
        {holding || reduce ? (
          <p className="truncate text-center tracking-[0.14em]">
            {holding ? (
              <>
                CODEX 2.1{" "}
                <Link to="/docs" className="text-primary hover:underline">
                  Read the docs →
                </Link>
              </>
            ) : (
              <>
                <span className="font-display tracking-[0.08em] text-primary">{song.title}</span>
                {song.album ? <span className="ml-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">{song.album}</span> : null}
              </>
            )}
          </p>
        ) : (
          <div ref={trackRef} className="flex w-max items-center whitespace-nowrap will-change-transform">
            {codexSlide ? (
              <span className="inline-flex w-[calc(100vw-6rem)] shrink-0 items-center justify-center tracking-[0.14em]">
                CODEX 2.1{" "}
                <Link to="/docs" className="ml-1.5 text-primary hover:underline">
                  Read the docs →
                </Link>
              </span>
            ) : null}
            <span className="inline-flex items-baseline px-8 font-display text-[15px] tracking-[0.08em] text-primary">
              {song.title}
              {song.album ? (
                <span className="ml-3 font-mono text-[11px] font-normal tracking-[0.16em] text-accent uppercase">
                  {song.album}
                </span>
              ) : null}
            </span>
            {lyrics.map((line, i) => (
              <span key={`${i}-${line.slice(0, 24)}`} className="inline-flex items-center font-mono text-[12px] font-normal tracking-[0.04em] text-fg">
                <Dot />
                {line}
              </span>
            ))}
            <span className="px-16 text-dim">·</span>
          </div>
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
