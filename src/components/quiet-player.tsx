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
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const begin = () => {
      if (userPaused.current || !el.paused) return;
      el.muted = false;
      el.volume = 0;
      const attempt = el.play();
      if (!attempt) return;
      void attempt
        .then(() => {
          setPlaying(true);
          fadeVolume(el, TARGET, 2800);
        })
        .catch(() => {
          /* browser blocked — first gesture will retry */
        });
    };

    const onGesture = (e: Event) => {
      if (userPaused.current) return;
      if ((e.target as HTMLElement | null)?.closest?.("[data-quiet-toggle]")) return;
      begin();
    };

    const onEnded = () => setPlaying(false);
    el.addEventListener("ended", onEnded);
    el.addEventListener("canplay", begin);
    window.addEventListener("load", begin);
    window.addEventListener("pointerdown", onGesture, { capture: true });
    window.addEventListener("keydown", onGesture, { capture: true });
    window.addEventListener("touchstart", onGesture, { capture: true });
    begin();
    const id = window.setTimeout(begin, 400);

    return () => {
      window.clearTimeout(id);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("canplay", begin);
      window.removeEventListener("load", begin);
      window.removeEventListener("pointerdown", onGesture, { capture: true });
      window.removeEventListener("keydown", onGesture, { capture: true });
      window.removeEventListener("touchstart", onGesture, { capture: true });
    };
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      el.volume = 0;
      void el.play().then(() => {
        setPlaying(true);
        fadeVolume(el, TARGET, 1600);
      });
    } else {
      userPaused.current = true;
      fadeVolume(el, 0, 350);
      window.setTimeout(() => el.pause(), 350);
      setPlaying(false);
    }
  };

  return (
    <div className="fixed right-3 bottom-3 z-40">
      <audio ref={audioRef} src={SRC} autoPlay playsInline preload="auto" />
      <button
        type="button"
        onClick={toggle}
        data-quiet-toggle
        className="flex size-11 items-center justify-center border border-primary/25 bg-bg/90 text-sm text-primary backdrop-blur-md hover:border-primary/50"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? "‖" : "▶"}
      </button>
    </div>
  );
}