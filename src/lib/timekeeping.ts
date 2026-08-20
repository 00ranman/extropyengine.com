/** Universal Times v4.2 — hydrogen-1 hyperfine, 1 420 405 751.768 Hz. */
export const HF = 1_420_405_751.768;
export const BB_SEC = 4.350639312e17;

/** System 1 — Solar Clock. Coordinates in the local day. Not durations. */
export const SOLAR = {
  daySec: 86_400,
  ticksPerDay: 100_000,
  loops: 10,
  arcsPerLoop: 100,
  ticksPerArc: 100,
} as const;

/**
 * System 2 — Universal Duration. Powers of the H-1 period.
 * Pulse 10^11 … Epoch 10^17. Same meaning on every planet.
 */
export const DUR_UNITS = [
  { name: "GQ", exp: 9, talk: "~0.70 s" },
  { name: "Pulse", exp: 11, talk: "~70 s" },
  { name: "Wave", exp: 12, talk: "~12 min" },
  { name: "Tide", exp: 13, talk: "~2 hr" },
  { name: "Spin", exp: 14, talk: "~20 hr" },
  { name: "Current", exp: 15, talk: "~8 days" },
  { name: "Season", exp: 16, talk: "~81 days" },
  { name: "Epoch", exp: 17, talk: "~2.2 yr" },
  { name: "Era", exp: 20, talk: "~2,230 yr" },
  { name: "Age", exp: 22, talk: "~223,000 yr" },
  { name: "Eon", exp: 24, talk: "~22.3 Myr" },
] as const;

export const DUR_NAMES = DUR_UNITS.map((u) => u.name);
export const DUR_EXP = DUR_UNITS.map((u) => u.exp);

export const CAL = { dpm: 40, m10l: 6, m10n: 5, cyc: 5 };

export function isLeap(y: number) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

export function daysInYear(y: number) {
  return CAL.dpm * 9 + (isLeap(y) ? CAL.m10l : CAL.m10n);
}

export function dayOfYear(d: Date) {
  const jan1 = new Date(d.getFullYear(), 0, 1);
  return Math.floor((d.getTime() - jan1.getTime()) / 86_400_000) + 1;
}

export function utDate(doy: number, y: number) {
  let r = doy;
  for (let m = 1; m <= 10; m++) {
    const md = m <= 9 ? CAL.dpm : isLeap(y) ? CAL.m10l : CAL.m10n;
    if (r <= md) return { month: m, day: r };
    r -= md;
  }
  return { month: 10, day: 1 };
}

export function cycleDay(d: Date) {
  return ((dayOfYear(d) - 1) % CAL.cyc) + 1;
}

export type DurationTick = {
  name: string;
  value: number;
  seconds: number;
  frac: number;
};

export function unitSeconds(name: string) {
  const u = DUR_UNITS.find((x) => x.name === name);
  if (!u) return 0;
  return Math.pow(10, u.exp) / HF;
}

export function sinceBB(date = new Date()) {
  return BB_SEC + date.getTime() / 1000;
}

/** Cascaded remainders, Epoch → Pulse. */
export function durationNow(date = new Date()): DurationTick[] {
  let rem = sinceBB(date);
  const out: DurationTick[] = [];
  for (let i = DUR_UNITS.length - 1; i >= 0; i--) {
    const seconds = Math.pow(10, DUR_UNITS[i].exp) / HF;
    const value = Math.floor(rem / seconds);
    rem %= seconds;
    out.push({ name: DUR_UNITS[i].name, value, seconds, frac: rem / seconds });
  }
  return out.reverse();
}

/** System 1 coordinates: t:L:AA:TT */
export function solarLat(date = new Date()) {
  const { daySec, ticksPerDay, arcsPerLoop, ticksPerArc } = SOLAR;
  const sec =
    date.getHours() * 3600 +
    date.getMinutes() * 60 +
    date.getSeconds() +
    date.getMilliseconds() / 1000;
  const dayFrac = sec / daySec;
  const exactTicks = dayFrac * ticksPerDay;
  const totalTicks = Math.floor(exactTicks);
  const loopSize = arcsPerLoop * ticksPerArc;
  const loop = Math.floor(totalTicks / loopSize);
  const arc = Math.floor((totalTicks % loopSize) / ticksPerArc);
  const tick = totalTicks % ticksPerArc;
  return {
    loop,
    arc,
    tick,
    tickRem: exactTicks - totalTicks,
    dayFrac,
    loopFrac: dayFrac,
    arcFrac: (totalTicks % loopSize) / loopSize,
    tickFrac: (totalTicks % ticksPerArc) / ticksPerArc,
    totalTicks,
    stamp: `t:${loop}:${String(arc).padStart(2, "0")}:${String(tick).padStart(2, "0")}`,
  };
}

/** System 3 — raw H-1 periods since cosmological t:0. */
export function quantsSinceBB(date = new Date()) {
  return sinceBB(date) * HF;
}

export function formatQuant(n: number) {
  const [m, e] = n.toExponential(3).split("e");
  return `${m} × 10^${Number(e)}`;
}

export function formatSpan(seconds: number) {
  if (seconds < 90) return `${seconds.toFixed(1)} sec`;
  if (seconds < 7200) return `${(seconds / 60).toFixed(1)} min`;
  if (seconds < 172800) return `${(seconds / 3600).toFixed(2)} hr`;
  if (seconds < 63_072_000) return `${(seconds / 86400).toFixed(1)} days`;
  return `${(seconds / 31_556_952).toFixed(2)} yr`;
}

export function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export const HOLIDAYS: Record<number, Record<number, string>> = {
  1: { 1: "New Cycle" },
  3: { 1: "Equinox" },
  5: { 1: "Mid-Year" },
  7: { 1: "Solstice" },
  9: { 40: "Year End" },
};

export const UT_DAY_NAMES = ["Tue", "Wed", "Fri", "Sat", "Sun"] as const;
