const SRC = "/audio/evolution-not-revolution.mp3";
export const BED_VOLUME = 0.18;
const TIME_KEY = "ee-bed-t";
const PAUSE_KEY = "ee-bed-paused";

let audio: HTMLAudioElement | null = null;
let fadedIn = false;
export let userPaused = false;

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

function saveTime() {
  if (!audio || typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(TIME_KEY, String(audio.currentTime));
}

export function getBed() {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio(SRC);
    audio.preload = "auto";
    audio.setAttribute("playsinline", "");
    audio.loop = true;
    audio.volume = 0;
    try {
      userPaused = sessionStorage.getItem(PAUSE_KEY) === "1";
    } catch {
      /* ignore */
    }
    const restore = () => {
      try {
        const t = Number(sessionStorage.getItem(TIME_KEY) || 0);
        if (t > 0.5 && Number.isFinite(t) && t < (audio?.duration || 1e9)) {
          audio!.currentTime = t;
        }
      } catch {
        /* ignore */
      }
    };
    audio.addEventListener("loadedmetadata", restore);
    audio.addEventListener("timeupdate", saveTime);
  }
  return audio;
}

export function startBed() {
  if (userPaused) return;
  const el = getBed();
  if (!el || !el.paused) return;
  el.volume = fadedIn ? BED_VOLUME : 0;
  void el.play().then(() => {
    if (!fadedIn) {
      fadeVolume(el, BED_VOLUME, 2800);
      fadedIn = true;
    } else {
      el.volume = BED_VOLUME;
    }
  }).catch(() => {
    /* wait for a gesture */
  });
}

export function toggleBed() {
  const el = getBed();
  if (!el) return;
  if (el.paused) {
    userPaused = false;
    try {
      sessionStorage.setItem(PAUSE_KEY, "0");
    } catch {
      /* ignore */
    }
    el.volume = 0;
    void el.play().then(() => {
      fadeVolume(el, BED_VOLUME, 1600);
      fadedIn = true;
    });
  } else {
    userPaused = true;
    try {
      sessionStorage.setItem(PAUSE_KEY, "1");
    } catch {
      /* ignore */
    }
    saveTime();
    fadeVolume(el, 0, 350);
    window.setTimeout(() => {
      if (userPaused) el.pause();
    }, 350);
  }
}

export function isBedPlaying() {
  return Boolean(audio && !audio.paused);
}