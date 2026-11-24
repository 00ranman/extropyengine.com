/**
 * The visitor's answer to the music offer.
 *
 * The landing page never plays music and never mounts the player. When a
 * visitor leaves the landing page for anywhere else on the site, they get
 * asked once: yes or no, do you want the music on. The answer is remembered
 * in localStorage, and the player only exists after a yes.
 */
export type MusicConsent = "unknown" | "yes" | "no";

const KEY = "music-consent";

let current: MusicConsent | null = null;
const listeners = new Set<() => void>();

export function getMusicConsent(): MusicConsent {
  if (current !== null) return current;
  if (typeof window === "undefined") return "unknown";
  try {
    const v = window.localStorage.getItem(KEY);
    current = v === "yes" || v === "no" ? v : "unknown";
  } catch {
    current = "unknown";
  }
  return current;
}

export function setMusicConsent(v: Exclude<MusicConsent, "unknown">) {
  current = v;
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn());
}

export function subscribeMusicConsent(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
