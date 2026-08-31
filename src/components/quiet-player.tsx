import { useEffect, useState } from "react";
import { getBed, isBedPlaying, startBed, toggleBed, userPaused } from "@/lib/audio-bed";

export function QuietPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = getBed();
    if (!el) return;
    const sync = () => setPlaying(!el.paused);
    sync();
    startBed();

    const onGesture = (e: Event) => {
      if (userPaused) return;
      if ((e.target as HTMLElement | null)?.closest?.("[data-quiet-toggle], .play-here")) return;
      startBed();
    };

    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("ended", sync);
    window.addEventListener("pointerdown", onGesture, true);
    window.addEventListener("keydown", onGesture, true);
    window.addEventListener("touchstart", onGesture, true);

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("ended", sync);
      window.removeEventListener("pointerdown", onGesture, true);
      window.removeEventListener("keydown", onGesture, true);
      window.removeEventListener("touchstart", onGesture, true);
    };
  }, []);

  return (
    <button
      type="button"
      data-quiet-toggle
      onClick={() => {
        toggleBed();
        setPlaying(isBedPlaying());
      }}
      className="no-print fixed right-3 bottom-3 z-50 flex size-14 items-center justify-center border border-primary/55 bg-bg/40 text-lg text-primary shadow-[0_0_14px_rgb(255_90_31_/_0.35)] backdrop-blur-sm [text-shadow:0_0_12px_rgb(255_90_31_/_0.8)] hover:border-primary hover:bg-bg/55 hover:shadow-[0_0_20px_rgb(255_90_31_/_0.5)]"
      aria-label={playing ? "Pause" : "Play"}
    >
      {playing ? "‖" : "▶"}
    </button>
  );
}