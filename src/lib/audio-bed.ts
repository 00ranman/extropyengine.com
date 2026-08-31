import { localAudioBySlug, masterSongs } from "@/content/music";

export const BED_SRC = "/audio/irrelevance-is-the-killshot.mp3";
export const BED_VOLUME = 0.18;
const TIME_KEY = "ee-bed-t";
const SRC_KEY = "ee-audio-src";
const PAUSE_KEY = "ee-bed-paused";

/** Paper order from Closing the Loop. Remainder of /audio follows catalog, then leftovers. */
const PAPER_SLUGS = [
  "kill-the-arc",
  "no-filter-no-bs",
  "no-ones-lying",
  "inside-the-machine",
  "cult-of-disagreement",
  "syntax-sabotage",
  "a-little-free",
  "the-real-magic",
  "what-is-god",
  "blueprint",
  "clap-if-youre-programmed",
  "coordinates",
  "the-glitch-was-me",
  "civilizational-facepalm",
  "and-thats-how",
] as const;

function uniq(paths: string[]) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of paths) {
    if (!p || seen.has(p)) continue;
    seen.add(p);
    out.push(p);
  }
  return out;
}

export function bedPlaylist() {
  const paper = uniq(PAPER_SLUGS.map((slug) => localAudioBySlug[slug]).filter(Boolean));
  const used = new Set<string>([BED_SRC, ...paper]);
  const rest: string[] = [];
  for (const s of masterSongs) {
    if (s.src && !used.has(s.src)) {
      rest.push(s.src);
      used.add(s.src);
    }
  }
  for (const src of uniq(Object.values(localAudioBySlug))) {
    if (!used.has(src)) rest.push(src);
  }
  return [BED_SRC, ...paper.filter((p) => p !== BED_SRC), ...rest];
}

function nextSrc(current: string) {
  const q = bedPlaylist();
  const i = q.indexOf(current);
  if (i === -1) return q[0] ?? BED_SRC;
  return q[(i + 1) % q.length];
}

let audio: HTMLAudioElement | null = null;
let fadedIn = false;
let fadeGen = 0;
let switching = false;
export let userPaused = false;

function fadeVolume(el: HTMLAudioElement, to: number, ms: number) {
  const id = ++fadeGen;
  const from = el.volume;
  if (ms <= 0 || from === to) {
    el.volume = to;
    return;
  }
  const t0 = performance.now();
  const tick = (now: number) => {
    if (id !== fadeGen) return;
    const t = Math.min(1, (now - t0) / ms);
    el.volume = from + (to - from) * t;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function pathOf(el: HTMLAudioElement) {
  const raw = el.getAttribute("data-src") || el.currentSrc || el.src || BED_SRC;
  try {
    return new URL(raw, window.location.origin).pathname;
  } catch {
    return raw;
  }
}

function saveTime() {
  if (!audio || switching || typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(TIME_KEY, String(audio.currentTime));
  sessionStorage.setItem(SRC_KEY, pathOf(audio));
}

function whenReady(el: HTMLAudioElement) {
  if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const ok = () => {
      drop();
      resolve();
    };
    const err = () => {
      drop();
      reject(new Error("audio error"));
    };
    const drop = () => {
      el.removeEventListener("canplay", ok);
      el.removeEventListener("error", err);
    };
    el.addEventListener("canplay", ok);
    el.addEventListener("error", err);
  });
}

export function getBed() {
  if (typeof window === "undefined") return null;
  if (!audio) {
    let initial = BED_SRC;
    try {
      userPaused = sessionStorage.getItem(PAUSE_KEY) === "1";
      initial = sessionStorage.getItem(SRC_KEY) || BED_SRC;
    } catch {
      /* ignore */
    }
    audio = new Audio(initial);
    audio.preload = "auto";
    audio.setAttribute("playsinline", "");
    audio.setAttribute("data-src", initial);
    audio.loop = false;
    audio.volume = 0;
    const restore = () => {
      if (switching) return;
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
    audio.addEventListener("ended", () => {
      if (!audio || switching || userPaused) return;
      void playSrc(nextSrc(pathOf(audio)), false, { fadeMs: 800 });
    });
  }
  return audio;
}

export function startBed() {
  if (userPaused || switching) return;
  const el = getBed();
  if (!el || !el.paused) return;
  void el.play().then(() => {
    if (fadedIn) {
      fadeVolume(el, BED_VOLUME, 120);
    } else {
      fadeVolume(el, BED_VOLUME, 2800);
      fadedIn = true;
    }
  }).catch(() => {
    /* wait for a gesture */
  });
}

export async function playSrc(
  src: string,
  loop = false,
  opts: { fadeMs?: number } = {},
) {
  const el = getBed();
  if (!el) return;
  userPaused = false;
  switching = true;
  fadeGen += 1;
  try {
    sessionStorage.setItem(PAUSE_KEY, "0");
    sessionStorage.setItem(SRC_KEY, src);
  } catch {
    /* ignore */
  }

  const current = pathOf(el);
  if (current !== src) {
    el.pause();
    el.loop = loop;
    el.src = src;
    el.setAttribute("data-src", src);
    try {
      sessionStorage.removeItem(TIME_KEY);
    } catch {
      /* ignore */
    }
    try {
      await whenReady(el);
    } catch {
      switching = false;
      const nxt = nextSrc(src);
      if (nxt !== src) void playSrc(nxt, false, opts);
      return;
    }
    try {
      el.currentTime = 0;
    } catch {
      /* ignore */
    }
  } else {
    el.loop = loop;
  }

  const fadeMs = opts.fadeMs ?? 180;
  el.volume = Math.min(el.volume, 0.04);
  fadedIn = true;
  try {
    await el.play();
    fadeVolume(el, BED_VOLUME, fadeMs);
  } catch {
    try {
      await whenReady(el);
      await el.play();
      fadeVolume(el, BED_VOLUME, fadeMs);
    } catch {
      /* autoplay block */
    }
  }
  switching = false;
}

export function toggleSrc(src: string, loop = false) {
  const el = getBed();
  if (!el) return;
  if (!el.paused && pathOf(el) === src) {
    toggleBed();
    return;
  }
  void playSrc(src, loop);
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
    void el.play().then(() => {
      fadeVolume(el, BED_VOLUME, fadedIn ? 180 : 1600);
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
    fadeVolume(el, 0, 250);
    window.setTimeout(() => {
      if (userPaused) el.pause();
    }, 250);
  }
}

export function isBedPlaying() {
  return Boolean(audio && !audio.paused);
}

export function isPlayingPath(src: string) {
  return Boolean(audio && !audio.paused && pathOf(audio) === src);
}
