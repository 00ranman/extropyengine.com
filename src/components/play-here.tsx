import { useEffect, useState } from "react";
import { getBed, isPlayingPath, toggleSrc } from "@/lib/audio-bed";

export function PlayHere({ src, tiny }: { src: string; tiny?: boolean }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = getBed();
    if (!el) return;
    const sync = () => setOn(isPlayingPath(src));
    sync();
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("ended", sync);
    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("ended", sync);
    };
  }, [src]);
  return (
    <button
      type="button"
      className={
        tiny
          ? "play-here font-mono text-[10px] tracking-[0.08em] text-accent uppercase hover:underline"
          : "play-here flex-1 py-2.5 text-center font-mono text-[10px] tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary hover:text-ink"
      }
      onClick={() => toggleSrc(src, false)}
    >
      {on ? "Pause" : tiny ? "Play" : "Play here"}
    </button>
  );
}
