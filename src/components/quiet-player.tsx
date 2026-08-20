import { useEffect, useRef, useState } from "react";

const SRC = "/audio/evolution-not-revolution.mp3";
const TARGET = 0.18;

function fadeVolume(el: HTMLAudioElement, to: number, ms: number) {
  const from = el.volume;
  const t0 = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - t0) / ms);
    el.volume = from + (to - from) * t;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function QuietPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.volume = 0;
      void el.play().then(() => fadeVolume(el, TARGET, 2000));
      setPlaying(true);
    } else {
      fadeVolume(el, 0, 450);
      window.setTimeout(() => el.pause(), 450);
      setPlaying(false);
    }
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnded = () => setPlaying(false);
    el.addEventListener("ended", onEnded);
    const onToggle = () => toggle();
    window.addEventListener("ee-quiet-play", onToggle);
    return () => {
      el.removeEventListener("ended", onEnded);
      window.removeEventListener("ee-quiet-play", onToggle);
    };
  }, []);

  return (
    <div className="fixed right-3 bottom-3 z-40 max-w-[min(100%-1.5rem,280px)] border border-primary/18 bg-bg/90 px-3 py-2 backdrop-blur-md">
      <audio ref={audioRef} src={SRC} preload="none" />
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center gap-2.5 text-left"
        aria-label={playing ? "Pause Evolution, Not Revolution" : "Play Evolution, Not Revolution, quietly"}
      >
        <span className="flex size-8 shrink-0 items-center justify-center border border-primary/30 text-xs text-primary">
          {playing ? "‖" : "▶"}
        </span>
        <span className="min-w-0">
          <span className="block text-[9px] tracking-[0.2em] text-dim uppercase">Quiet play</span>
          <span className="block truncate font-display text-[13px] leading-tight">Evolution, Not Revolution</span>
        </span>
      </button>
    </div>
  );
}