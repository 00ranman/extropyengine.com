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
  isLeap,
  quantsSinceBB,
  utDate,
  type DurationTick,
} from "@/lib/timekeeping";

export const Route = createFileRoute("/universaltimes")({ component: UniversalTimes });

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

  const groups = [
    { keys: ["Eon", "Age", "Era", "Epoch"], tone: "dim" as const },
    { keys: ["Orbit", "Season", "Current"], tone: "fg" as const },
    { keys: ["Spin", "Tide", "Wave", "GQ"], tone: "accent" as const },
  ];

  return (
    <SiteShell>
      <main className="px-[6vw] py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            to="/"
            className="mb-8 inline-block text-[11px] tracking-[0.22em] text-dim uppercase hover:text-primary"
          >
            ← Extropy Engine
          </Link>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] tracking-[0.08em]">Universal Times</h1>
          <p className="mt-2 text-xs tracking-[0.22em] text-accent uppercase">
            Hydrogen-Anchored Duration Scale
          </p>

          <UtClock />

          <div className="mt-10 flex flex-wrap items-end justify-center gap-x-4 gap-y-6">
            {groups.map((group, gi) => (
              <div key={group.tone} className="flex items-end gap-1">
                {gi > 0 ? <span className="mb-5 px-1 text-2xl text-faint">•</span> : null}
                {group.keys.map((name) => {
                  const tick = ticks.find((t) => t.name === name);
                  return <DurCell key={name} name={name} tick={tick} tone={group.tone} />;
                })}
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] tracking-[0.15em] text-accent uppercase">
            Dual-Scale Timekeeping Display
          </div>
          <div className="mt-4 font-mono text-sm text-accent">
            {formatQuant(quants)}
            <div className="mt-1 text-[10px] tracking-[0.12em] text-faint uppercase">
              Quants Since Big Bang (Universe Age)
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          <section className="border border-accent/20 p-6">
            <div className="mb-2 text-[11px] tracking-[0.28em] text-accent uppercase">Solar Clock</div>
            <div className="font-display text-3xl tracking-[0.06em]">
              {now.toLocaleTimeString(undefined, { hour12: false })}
            </div>
            <p className="mt-3 text-sm text-muted">
              Earth rotation for scheduling and navigation. Duration is measured separately — hydrogen
              emission frequency, powers of ten.
            </p>
            <p className="mt-3 text-xs text-dim">
              {now.toDateString()} · Gregorian overlay
            </p>
          </section>

          <section className="border border-primary/20 p-6">
            <div className="mb-2 text-[11px] tracking-[0.28em] text-primary uppercase">Why two clocks</div>
            <p className="text-sm leading-relaxed text-muted">
              Duration and solar position are different quantities. Hydrogen-anchored duration is
              universal. The solar clock is local. Mixing them is why calendars fight physics.
            </p>
          </section>
        </div>

        <section className="mx-auto mt-10 max-w-5xl border border-accent/15 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl tracking-[0.06em]">Solar Calendar · Y{year}</h2>
            <div className="text-xs tracking-[0.16em] text-dim uppercase">
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
                  m === calMonth
                    ? "bg-accent/15 font-bold text-accent"
                    : "text-dim hover:text-fg"
                }`}
              >
                {m <= 9 ? `M${m}` : "Genesis"}
              </button>
            ))}
          </div>
          <CalendarGrid year={year} month={calMonth} today={today} />
          <p className="mt-4 text-[11px] tracking-[0.1em] text-dim">
            = Transitional holiday · 10 months · 40-day cycles · leap Genesis
          </p>
        </section>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">
          Duration is measured by hydrogen emission frequency. Solar position is Earth's rotation. The
          Hydrogen-Anchored Duration Scale uses powers of 10 in hydrogen oscillations for a universal
          timescale.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-[11px] tracking-[0.18em] uppercase">
          <a
            href="https://github.com/00ranman/xp-timekeeping"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Source on GitHub →
          </a>
          <a
            href="https://www.academia.edu/165180710/Universal_Times_Dual_System_Temporal_Infrastructure_Entropy_Economics_and_the_Post_Calendar_Coordination_Problem"
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-primary"
          >
            Read the paper
          </a>
        </div>
      </main>
    </SiteShell>
  );
}

function DurCell({
  name,
  tick,
  tone,
}: {
  name: string;
  tick?: DurationTick;
  tone: "dim" | "fg" | "accent";
}) {
  const color =
    tone === "accent" ? "text-accent" : tone === "fg" ? "text-fg" : "text-dim";
  return (
    <div className="min-w-[2.4ch] text-center">
      <div className={`font-mono text-xl tabular-nums md:text-3xl ${color}`}>
        {tick ? String(tick.value).padStart(2, "0") : "--"}
      </div>
      <div className={`text-[9px] tracking-[0.14em] uppercase ${color}`}>{name}</div>
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
    <table className="w-full border-collapse font-mono text-xs">
      <thead>
        <tr>
          {UT_DAY_NAMES.map((n) => (
            <th
              key={n}
              className="border-b border-accent/15 px-1 py-1.5 text-center font-normal text-accent"
            >
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
                  className={`px-1 py-2 text-center ${
                    isToday
                      ? "bg-accent/20 font-bold text-accent"
                      : hol
                        ? "text-primary"
                        : "text-muted"
                  }`}
                >
                  {d}
                  {hol ? <span className="block text-[8px] tracking-wider">{hol}</span> : null}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
