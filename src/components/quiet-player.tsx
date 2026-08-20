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
      if ((e.target as HTMLElement | null)?.closest?.("[data-quiet-toggle]")) return;
      startBed();
    };

    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("ended", sync);
    el.addEventListener("canplay", startBed);
    window.addEventListener("pointerdown", onGesture, true);
    window.addEventListener("keydown", onGesture, true);
    window.addEventListener("touchstart", onGesture, true);

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("ended", sync);
      el.removeEventListener("canplay", startBed);
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
      className="fixed right-3 bottom-3 z-50 flex size-11 items-center justify-center border border-primary/25 bg-bg/90 text-sm text-primary backdrop-blur-md hover:border-primary/50"
      aria-label={playing ? "Pause" : "Play"}
    >
      {playing ? "‖" : "▶"}
    </button>
  );
}