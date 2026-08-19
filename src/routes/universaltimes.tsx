import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { UtClock } from "@/components/ut-clock";
import {
  CAL,
  HOLIDAYS,
  UT_DAY_NAMES,
  dayOfYear,
  durationNow,
  formatQuant,
  formatSpan,
  isLeap,
  unitSeconds,
  utDate,
  quantsSinceBB,
  type DurationTick,
} from "@/lib/timekeeping";

export const Route = createFileRoute("/universaltimes")({ component: UniversalTimes });

const SCALE = [
  {
    label: "Deep time",
    hint: "Since the Big Bang, coarsest units",
    keys: ["Eon", "Age", "Era", "Epoch"] as const,
    tone: "dim" as const,
  },
  {
    label: "Local duration",
    hint: "Years → days of hydrogen time",
    keys: ["Orbit", "Season", "Current"] as const,
    tone: "fg" as const,
  },
  {
    label: "Live ticks",
    hint: "Hours → less than a second",
    keys: ["Spin", "Tide", "Wave", "GQ"] as const,
    tone: "accent" as const,
  },
];

function UniversalTimes() {
  const [now, setNow] = useState(() => new Date());
  const [calMonth, setCalMonth] = useState(() => utDate(dayOfYear(new Date()), new Date().getFullYear()).month);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 250);
    return () => window.clearInterval(id);
  }, []);

  const ticks = useMemo(() => durationNow(now), [now]);
  const quants = useMemo(() => quantsSinceBB(now), [now]);
  const year = now.getFullYear();
  const doy = dayOfYear(now);
  const today = utDate(doy, year);

  return (
    <SiteShell>
      <main className="px-[6vw] py-14">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="mb-8 inline-block text-[11px] tracking-[0.22em] text-dim uppercase hover:text-primary"
          >
            ← Extropy Engine
          </Link>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] tracking-[0.08em]">Universal Times</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Two different quantities. <span className="text-primary">Solar</span> is where Earth is
            facing. <span className="text-accent">Duration</span> is how long has passed, counted in
            hydrogen oscillations. They are not the same clock.
          </p>

          <UtClock />

          <section className="mt-14">
            <h2 className="font-display text-xl tracking-[0.06em]">Duration scale</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
              Read left to right, large to small — like hours : minutes : seconds, but powers of ten
              in the hydrogen line. Each pair is 00–99 of that unit.
            </p>
            <div className="mt-6 space-y-5">
              {SCALE.map((row) => (
                <DurationRow
                  key={row.label}
                  label={row.label}
                  hint={row.hint}
                  keys={row.keys}
                  ticks={ticks}
                  tone={row.tone}
                />
              ))}
            </div>
          </section>

          <section className="mt-10 border border-accent/15 px-5 py-5">
            <div className="text-[10px] tracking-[0.22em] text-accent uppercase">Universe age</div>
            <div className="font-brand mt-1 text-2xl tracking-[0.04em] text-accent tabular-nums md:text-3xl">
              {formatQuant(quants)}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-dim">
              Quants since t:0 (Big Bang). One quant = 10<sup>9</sup> hydrogen periods ≈ 0.7 seconds.
            </p>
          </section>

          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-primary/20 px-5 py-5">
              <div className="text-[10px] tracking-[0.22em] text-primary uppercase">Why orange</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Solar position. Useful for waking up, meetings, seasons. Local to this planet. The
                outer ring is a 24-hour Earth day.
              </p>
            </div>
            <div className="border border-accent/20 px-5 py-5">
              <div className="text-[10px] tracking-[0.22em] text-accent uppercase">Why cyan</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Duration. Same count on Earth, Mars, or a server rack. The inner ring is one Spin —
                about 19.5 hours of hydrogen time.
              </p>
            </div>
          </section>
        </div>

        <section className="mx-auto mt-14 max-w-3xl border border-fg/10 px-5 py-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="font-display text-xl tracking-[0.06em]">Solar calendar</h2>
              <p className="mt-1 text-sm text-dim">
                10 months · 40-day cycles · 5-day week. Overlay on Gregorian {year}.
              </p>
            </div>
            <div className="font-mono text-xs tracking-[0.12em] text-accent">
              Month {today.month} · Day {today.day}
            </div>
          </div>
          <div className="mb-4 grid grid-cols-5 gap-1 sm:grid-cols-10">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setCalMonth(m)}
                className={`px-1 py-1.5 font-mono text-[11px] ${
                  m === calMonth ? "bg-accent/15 font-bold text-accent" : "text-dim hover:text-fg"
                }`}
              >
                {m <= 9 ? `M${m}` : "Genesis"}
              </button>
            ))}
          </div>
          <CalendarGrid year={year} month={calMonth} today={today} />
          <p className="mt-4 text-xs text-dim">Orange dates are transitional holidays.</p>
        </section>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-4 text-[11px] tracking-[0.18em] uppercase">
          <a
            href="https://github.com/00ranman/xp-timekeeping"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Source on GitHub →
          </a>
          <a
            href="https://www.academia.edu/170494720/Universal_Times_v4_2"
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-primary"
          >
            Paper v4.2
          </a>
        </div>
      </main>
    </SiteShell>
  );
}

function DurationRow({
  label,
  hint,
  keys,
  ticks,
  tone,
}: {
  label: string;
  hint: string;
  keys: readonly string[];
  ticks: DurationTick[];
  tone: "dim" | "fg" | "accent";
}) {
  const color =
    tone === "accent" ? "text-accent" : tone === "fg" ? "text-fg" : "text-muted";
  const rule = tone === "accent" ? "border-accent/20" : "border-primary/10";
  return (
    <div className={`border ${rule} px-4 py-4 sm:px-5`}>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <div className={`text-[11px] tracking-[0.2em] uppercase ${color}`}>{label}</div>
        <div className="text-xs text-faint">{hint}</div>
      </div>
      <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
        {keys.map((name, i) => {
          const tick = ticks.find((t) => t.name === name);
          return (
            <div key={name} className="flex items-end gap-5">
              {i > 0 ? <span className="mb-6 font-mono text-xl text-faint">:</span> : null}
              <div>
                <div className={`font-brand text-[clamp(28px,5vw,40px)] leading-none tabular-nums ${color}`}>
                  {tick ? String(tick.value).padStart(2, "0") : "--"}
                </div>
                <div className="mt-1.5 text-[11px] tracking-[0.16em] text-dim uppercase">{name}</div>
                <div className="text-[10px] text-faint">{formatSpan(unitSeconds(name as (typeof keys)[number]))}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CalendarGrid({
  year,
  month,
  today,
}: {
  year: number;
  month: number;
  today: { month: number; day: number };
}) {
  const md = month <= 9 ? CAL.dpm : isLeap(year) ? CAL.m10l : CAL.m10n;
  const weeks = Math.ceil(md / CAL.cyc);
  let day = 1;
  const rows: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const row: number[] = [];
    for (let d = 0; d < CAL.cyc; d++) {
      row.push(day <= md ? day : 0);
      day += 1;
    }
    rows.push(row);
  }

  return (
    <table className="w-full border-collapse font-mono text-sm">
      <thead>
        <tr>
          {UT_DAY_NAMES.map((n) => (
            <th key={n} className="border-b border-accent/15 px-1 py-2 text-center font-normal text-accent">
              {n}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((d, j) => {
              if (!d) return <td key={j} />;
              const isToday = month === today.month && d === today.day;
              const hol = HOLIDAYS[month]?.[d];
              return (
                <td
                  key={j}
                  title={hol}
                  className={`px-1 py-2.5 text-center ${
                    isToday ? "bg-accent/20 font-bold text-accent" : hol ? "text-primary" : "text-muted"
                  }`}
                >
                  {d}
                  {hol ? <span className="mt-0.5 block text-[10px] tracking-wider">{hol}</span> : null}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}