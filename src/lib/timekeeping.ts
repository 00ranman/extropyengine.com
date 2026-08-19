/** Hydrogen 21cm hyperfine frequency (Hz) — Universal Times v4.0. */
export const HF = 1_420_405_751.768;
export const BB_SEC = 4.350639312e17;

export const DUR_NAMES = [
  "GQ",
  "Wave",
  "Tide",
  "Spin",
  "Current",
  "Season",
  "Orbit",
  "Epoch",
  "Era",
  "Age",
  "Eon",
] as const;

export const DUR_EXP = [9, 11, 13, 14, 15, 16, 17, 18, 20, 22, 24];

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
};

export function durationNow(date = new Date()): DurationTick[] {
  const unix = date.getTime() / 1000;
  const sinceBB = BB_SEC + unix;
  return DUR_NAMES.map((name, i) => {
    const seconds = Math.pow(10, DUR_EXP[i]) / HF;
    const value = Math.floor(sinceBB / seconds) % 100;
    return { name, value, seconds };
  });
}

export function quantsSinceBB(date = new Date()) {
  const unix = date.getTime() / 1000;
  const sinceBB = BB_SEC + unix;
  const quant = Math.pow(10, 9) / HF;
  return Math.floor(sinceBB / quant);
}

export function formatQuant(n: number) {
  return n.toLocaleString("en-US");
}

export const HOLIDAYS: Record<number, Record<number, string>> = {
  1: { 1: "New Cycle" },
  3: { 1: "Equinox" },
  5: { 1: "Mid-Year" },
  7: { 1: "Solstice" },
  9: { 40: "Year End" },
};

export const UT_DAY_NAMES = ["Tue", "Wed", "Fri", "Sat", "Sun"] as const;
