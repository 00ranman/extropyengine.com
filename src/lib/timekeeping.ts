/** Universal Times v4.2 — hydrogen-1 hyperfine, 1 420 405 751.768 Hz. */
export const HF = 1_420_405_751.768;
export const BB_SEC = 4.350639312e17;

/** System 1 — Solar Clock. Coordinates in the local day. Not durations.
 * A tick is 1/100 000 of THIS planet's solar day. Same length everywhere on
 * that rock. The SI leftover past 24 h (leap seconds, 86400.002, rotation
 * drift) is inside the tick. There is no leap second. daySec is an Earth-now
 * translation for machines that still count SI, not the definition.
 * Mars divides a Martian solar day. Face looks the same. Ticks run slower. */
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

/** Solar calendar: 5-day weeks. 73 weeks. No months. No leap day.
 * 100 000 ticks already ate the fraction past 24 h SI. Seasons are orbit
 * marks (solar longitude), not intercalation. 2026 is a pointer to the
 * inherited revolution count, not physics. */
export const CAL = {
  week: 5,
  weeks: 73,
} as const;

export function daysInYear(_y?: number) {
  return CAL.weeks * CAL.week;
}

export function dayOfYear(d: Date) {
  const jan1 = new Date(d.getFullYear(), 0, 1);
  return Math.floor((d.getTime() - jan1.getTime()) / 86_400_000) + 1;
}

export type UtStamp = {
  week: number;
  day: number;
  doy: number;
};

export function utDate(doy: number, _y?: number): UtStamp {
  const span = CAL.weeks * CAL.week;
  const clamped = Math.min(Math.max(doy, 1), span);
  const week = Math.ceil(clamped / CAL.week);
  const day = ((clamped - 1) % CAL.week) + 1;
  return { week, day, doy: clamped };
}

export function weeksInYear(_y?: number) {
  return CAL.weeks;
}

export function daysInWeek(_week?: number, _y?: number) {
  return CAL.week;
}

export function cycleDay(d: Date) {
  return ((dayOfYear(d) - 1) % CAL.week) + 1;
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

/** Fine units from unix (ms-precise). Coarse units include the cosmological offset. */
export function durationNow(date = new Date()): DurationTick[] {
  const unix = date.getTime() / 1000;
  const out: DurationTick[] = [];
  for (let i = DUR_UNITS.length - 1; i >= 0; i--) {
    const seconds = Math.pow(10, DUR_UNITS[i].exp) / HF;
    const phase = unix / seconds;
    let frac = phase - Math.floor(phase);
    if (frac < 0) frac += 1;
    const value =
      seconds >= 86_400
        ? Math.floor(BB_SEC / seconds + phase)
        : Math.floor(phase);
    out.push({ name: DUR_UNITS[i].name, value, seconds, frac });
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

/** Ten of the smaller word is one of the next. Pulse → Wave → Tide → Spin. */
export function durationBits(date = new Date()) {
  const unix = date.getTime() / 1000;
  const pulseSec = Math.pow(10, 11) / HF;
  const inPulse = unix / pulseSec;
  const pulseInWave = inPulse % 10;
  const waveInTide = (inPulse / 10) % 10;
  const tideInSpin = (inPulse / 100) % 10;
  return {
    pulseInWave,
    waveInTide,
    tideInSpin,
    phrase: sayPulses(pulseInWave),
  };
}

function sayPulses(n: number) {
  if (n < 0.2) return "a fresh wave";
  if (Math.abs(n - 5) < 0.35) return "half a wave";
  if (n < 1.35) return "a pulse";
  if (n < 8.4) return `${Math.round(n)} pulses`;
  if (n < 9.6) return "nearly a wave";
  return "a wave";
}

export function doyFromUt(week: number, day: number) {
  return (week - 1) * CAL.week + day;
}

const J2000_MS = Date.UTC(2000, 0, 1, 12, 0, 0);

/** Apparent geocentric ecliptic longitude of the Sun, degrees. Enough to land the four orbit marks on a day. */
export function solarLongitudeDeg(ms: number) {
  const d = (ms - J2000_MS) / 86_400_000;
  const L = ((280.46 + 0.9856474 * d) % 360 + 360) % 360;
  const g = (((357.528 + 0.9856003 * d) % 360) * Math.PI) / 180;
  return ((L + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) % 360 + 360) % 360;
}

export const ORBIT_MARKS = [
  { lon: 0, name: "March equinox", short: "Eq" },
  { lon: 90, name: "June solstice", short: "Sol" },
  { lon: 180, name: "September equinox", short: "Eq" },
  { lon: 270, name: "December solstice", short: "Sol" },
] as const;

export type OrbitMark = {
  lon: number;
  name: string;
  short: string;
  doy: number;
  week: number;
  day: number;
};

function lonForwardContains(from: number, to: number, target: number) {
  const span = (to - from + 360) % 360;
  const off = (target - from + 360) % 360;
  return off <= span || off === 0;
}

/** Four actual orbit events this Gregorian year. Not week-starts. Local civil day. */
export function orbitMarksForYear(year: number): OrbitMark[] {
  const out: OrbitMark[] = [];
  for (const spec of ORBIT_MARKS) {
    let hitDoy = 0;
    for (let doy = 1; doy <= 366; doy++) {
      const a = new Date(year, 0, doy, 0, 0, 0).getTime();
      const b = new Date(year, 0, doy, 23, 59, 59).getTime();
      if (new Date(a).getFullYear() !== year) break;
      if (lonForwardContains(solarLongitudeDeg(a), solarLongitudeDeg(b), spec.lon)) {
        hitDoy = doy;
        break;
      }
    }
    if (!hitDoy) continue;
    const ut = utDate(hitDoy, year);
    out.push({
      lon: spec.lon,
      name: spec.name,
      short: spec.short,
      doy: hitDoy,
      week: ut.week,
      day: ut.day,
    });
  }
  return out;
}

/** Civil marks. Week 1 day 1. Last day of the year. Not seasons. */
export const HOLIDAYS = {
  newCycle: { week: 1, day: 1, label: "New Cycle" },
  yearEnd: { label: "Year End" },
} as const;

export const UT_DAY_NAMES = ["Tue", "Wed", "Fri", "Sat", "Sun"] as const;
