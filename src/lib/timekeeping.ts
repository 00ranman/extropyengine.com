/** Hydrogen 21cm hyperfine frequency (Hz) — Universal Times v4.2. */
export const HF = 1_420_405_751.768;
export const BB_SEC = 4.350639312e17;

/** Solar day subdivided into exactly 100,000 ticks. */
export const SOLAR = {
  daySec: 86_400,
  ticksPerDay: 100_000,
  loops: 10,
  arcsPerLoop: 100,
  ticksPerArc: 100,
} as const;

export const DUR_UNITS = [
  { name: "GQ", exp: 9 },
  { name: "Wave", exp: 11 },
  { name: "Pulse", exp: 12 },
  { name: "Tide", exp: 13 },
  { name: "Spin", exp: 14 },
  { name: "Current", exp: 15 },
  { name: "Season", exp: 16 },
  { name: "Cycle", exp: 17 },
  { name: "Epoch", exp: 18 },
  { name: "Era", exp: 20 },
  { name: "Age", exp: 22 },
  { name: "Eon", exp: 24 },
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

/** Cascaded hydrogen duration — Eon down to GQ, like h:m:s remainders. */
export function durationNow(date = new Date()): DurationTick[] {
  let rem = sinceBB(date);
  const out: DurationTick[] = [];
  for (let i = DUR_UNITS.length - 1; i >= 0; i--) {
    const seconds = Math.pow(10, DUR_UNITS[i].exp) / HF;
    const value = Math.floor(rem / seconds);
    rem = rem % seconds;
    out.push({
      name: DUR_UNITS[i].name,
      value,
      seconds,
      frac: rem / seconds,
    });
  }
  return out.reverse();
}

export function solarLat(date = new Date()) {
  const { daySec, ticksPerDay, arcsPerLoop, ticksPerArc } = SOLAR;
  const ms = date.getMilliseconds();
  const sec =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + ms / 1000;
  const dayFrac = sec / daySec;
  const totalTicks = Math.floor(dayFrac * ticksPerDay);
  const loopSize = arcsPerLoop * ticksPerArc;
  return {
    loop: Math.floor(totalTicks / loopSize),
    arc: Math.floor((totalTicks % loopSize) / ticksPerArc),
    tick: totalTicks % ticksPerArc,
    dayFrac,
    loopFrac: totalTicks / ticksPerDay,
    arcFrac: (totalTicks % loopSize) / loopSize,
    tickFrac: (totalTicks % ticksPerArc) / ticksPerArc,
    totalTicks,
  };
}

export function quantsSinceBB(date = new Date()) {
  return Math.floor(sinceBB(date) / (Math.pow(10, 9) / HF));
}

export function formatQuant(n: number) {
  return n.toLocaleString("en-US");
}

export function formatSpan(seconds: number) {
  if (seconds < 90) return `${seconds.toFixed(2)} sec`;
  if (seconds < 7200) return `${(seconds / 60).toFixed(2)} min`;
  if (seconds < 172800) return `${(seconds / 3600).toFixed(2)} hr`;
  if (seconds < 63_072_000) return `${(seconds / 86400).toFixed(2)} days`;
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
