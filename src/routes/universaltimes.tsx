import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { UtClock } from "@/components/ut-clock";
import {
  CAL,
  DUR_UNITS,
  HOLIDAYS,
  UT_DAY_NAMES,
  dayOfYear,
  durationNow,
  formatQuant,
  formatSpan,
  isLeap,
  pad2,
  quantsSinceBB,
  solarLat,
  unitSeconds,
  utDate,
} from "@/lib/timekeeping";

export const Route = createFileRoute("/universaltimes")({ component: UniversalTimes });

function UniversalTimes() {
  const [calMonth, setCalMonth] = useState(() =>
    utDate(dayOfYear(new Date()), new Date().getFullYear()).month,
  );
  const [today, setToday] = useState(() => {
    const n = new Date();
    return utDate(dayOfYear(n), n.getFullYear());
  });
  const year = new Date().getFullYear();
  const digits = useRef<Record<string, HTMLSpanElement | null>>({});
  const quantRef = useRef<HTMLSpanElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const frame = () => {
      const now = new Date();
      const lat = solarLat(now);
      const dur = durationNow(now);
      if (stampRef.current) stampRef.current.textContent = lat.stamp;
      const set = (key: string, text: string) => {
        const el = digits.current[key];
        if (el && el.textContent !== text) el.textContent = text;
      };
      set("Loop", String(lat.loop));
      set("Arc", pad2(lat.arc));
      set("Tick", pad2(lat.tick));
      for (const u of dur) set(u.name, u.name === "Eon" ? String(u.value) : pad2(u.value % 100));
      if (quantRef.current) quantRef.current.textContent = `Q: ${formatQuant(quantsSinceBB(now))}`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    const id = window.setInterval(() => {
      const n = new Date();
      setToday(utDate(dayOfYear(n), n.getFullYear()));
    }, 30_000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, []);

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
          <p className="mt-2 text-xs tracking-[0.2em] text-accent uppercase">v4.2 · hydrogen-anchored · three systems</p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Base-10 face. Ten loops in a local day. Three solar hands — Loop, Arc, Tick — tell you
            where you are. The gold pip is Pulse, a duration, the same length on every planet. Hours
            are not on this scale.
          </p>

          <UtClock />

          <section className="mt-12 grid gap-3 sm:grid-cols-3">
            <div className="border border-fg/12 px-4 py-4">
              <div className="text-[10px] tracking-[0.2em] text-dim uppercase">Where</div>
              <div className="mt-1 font-brand text-lg tabular-nums">
                <span ref={stampRef}>t:-:--:--</span>
              </div>
              <p className="mt-1 text-xs text-dim">Solar Clock. Local day coordinates.</p>
            </div>
            <div className="border border-fg/12 px-4 py-4">
              <div className="text-[10px] tracking-[0.2em] text-dim uppercase">How long</div>
              <div className="mt-1 text-sm text-fg">GQ → Eon</div>
              <p className="mt-1 text-xs text-dim">Same length on every planet.</p>
            </div>
            <div className="border border-fg/12 px-4 py-4">
              <div className="text-[10px] tracking-[0.2em] text-dim uppercase">When</div>
              <div className="mt-1 font-brand text-lg tabular-nums">
                <span ref={quantRef}>Q: —</span>
              </div>
              <p className="mt-1 text-xs text-dim">Quants since cosmological t:0.</p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-xl tracking-[0.06em]">System 1 · Solar Clock</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
              Answers “what time is it here?” t:L:AA:TT. Loop 0 is the start of the local day. Loop 5
              is midday. Tick ≈ 0.864 s on Earth. Do not say “in 3 arcs” — arcs are coordinates.
            </p>
            <ScaleRow
              tone="fg"
              keys={["Loop", "Arc", "Tick"]}
              spans={{ Loop: "10 / day · ~2.4 hr", Arc: "100 / loop · 86.4 s", Tick: "100 / arc · 0.864 s" }}
              register={(n, el) => {
                digits.current[n] = el;
              }}
            />
          </section>

          <section className="mt-12">
            <h2 className="font-display text-xl tracking-[0.06em]">System 2 · Universal Duration</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
              Answers “how long?” Powers of the hydrogen-1 period, from a GQ (~0.70 s) out through
              Epoch, Era, Age, and Eon. Cascaded remainders, live. The bars on the clock are the
              mouthful: Pulse, Wave, Tide. Count to ten.
            </p>
            <div className="mt-5 space-y-4">
              <ScaleRow
                tone="accent"
                keys={["GQ", "Pulse", "Wave", "Tide"]}
                register={(n, el) => {
                  digits.current[n] = el;
                }}
              />
              <ScaleRow
                tone="accent"
                keys={["Spin", "Current", "Season", "Epoch"]}
                register={(n, el) => {
                  digits.current[n] = el;
                }}
              />
              <ScaleRow
                tone="dim"
                keys={["Era", "Age", "Eon"]}
                register={(n, el) => {
                  digits.current[n] = el;
                }}
              />
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-xl tracking-[0.06em]">How to say it</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Hours are a costume. They are Earth’s spin wearing a duration hat. Ask a Martian for
              “three hours” and you have already lied — their day is a different length, so their
              hour is too. A pulse is 10<sup>11</sup> hydrogen flips. That does not care which rock
              you are standing on.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim">
              Three questions. Three mouths. Mix them and you get 24, 60, and a calendar that thinks
              it is physics.
            </p>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                <span className="text-fg">What time is it here?</span> Solar Clock.{" "}
                <span className="font-mono text-fg">t:7:42:00</span>. Casual: “seven forty-two.”
                Coordinates. A place on the face.
              </li>
              <li>
                <span className="text-fg">How long will this take?</span> Duration. “About 3 waves.”
                A length. Same length in the Kuiper belt.
              </li>
              <li>
                <span className="text-fg">When exactly?</span> Quant accumulator. Machines. You
                almost never say this out loud.
              </li>
            </ol>

            <div className="mt-8 overflow-x-auto border border-accent/18">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                    <th className="border-b border-accent/20 px-3 py-2 font-normal">Say</th>
                    <th className="border-b border-accent/20 px-3 py-2 font-normal">Means</th>
                    <th className="border-b border-accent/20 px-3 py-2 font-normal">Old habit</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {[
                    ["Give me 3 pulses.", "~3.5 min", "“a couple minutes”"],
                    ["Half a wave.", "~6 min", "“give me five”"],
                    ["That ran 3 waves.", "~35 min", "“half an hour”"],
                    ["I need a tide.", "~2 hr", "“a couple hours”"],
                    ["Back in a spin.", "~20 hr", "“tomorrow-ish”"],
                    ["2 currents.", "~16 days", "“two weeks”"],
                    ["A season.", "~81 days", "“a quarter”"],
                    ["An epoch.", "~2.2 yr", "“a couple years”"],
                  ].map(([say, means, old]) => (
                    <tr key={say}>
                      <td className="border-b border-fg/10 px-3 py-2.5 text-fg">{say}</td>
                      <td className="border-b border-fg/10 px-3 py-2.5 font-mono text-xs text-accent">
                        {means}
                      </td>
                      <td className="border-b border-fg/10 px-3 py-2.5 text-dim">{old}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              Ten of the smaller word is one of the next. Double it, triple it, say five, say half.
              There is no “minute” between pulse and wave on purpose — “4 or 5 pulses” covers five
              minutes, and the gap is 10×, not 60×. GQs are the twitch. Machines count those. You
              don’t.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim">
              Do not say “I’ll be there in 3 arcs.” Arcs are a place on the clock, like saying “I’ll
              be there in 3 o’clock.” Meeting <em>at</em> t:7:30. Arrive <em>in</em> 5 pulses. One is
              a door. The other is a walk.
            </p>
          </section>
        </div>

        <section className="mx-auto mt-14 max-w-3xl border border-fg/10 px-5 py-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="font-display text-xl tracking-[0.06em]">Solar calendar</h2>
              <p className="mt-1 text-sm text-dim">
                Optional 10-month overlay. 40-day cycles · 5-day week. Gregorian {year} still stands.
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
        </section>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-4 text-[11px] tracking-[0.18em] uppercase">
          <a href="/docs/Universal_Times_v4.2.pdf" className="text-primary hover:underline">
            Paper v4.2 (PDF) →
          </a>
          <a
            href="https://github.com/00ranman/xp-timekeeping"
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-primary"
          >
            Source
          </a>
        </div>
      </main>
    </SiteShell>
  );
}

function ScaleRow({
  keys,
  tone,
  spans,
  register,
}: {
  keys: readonly string[];
  tone: "fg" | "accent" | "dim";
  spans?: Record<string, string>;
  register: (name: string, el: HTMLSpanElement | null) => void;
}) {
  const color = tone === "accent" ? "text-accent" : tone === "dim" ? "text-muted" : "text-fg";
  return (
    <div className={`mt-5 border ${tone === "accent" ? "border-accent/20" : "border-fg/12"} px-4 py-4`}>
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        {keys.map((name, i) => (
          <div key={name} className="flex items-end gap-4">
            {i > 0 ? <span className="mb-6 font-mono text-xl text-faint">:</span> : null}
            <div>
              <div className={`font-brand text-[clamp(26px,5vw,40px)] leading-none tabular-nums ${color}`}>
                <span ref={(el) => register(name, el)}>--</span>
              </div>
              <div className="mt-1.5 text-[11px] tracking-[0.16em] text-dim uppercase">{name}</div>
              <div className="text-[10px] text-faint">
                {spans?.[name] ??
                  DUR_UNITS.find((u) => u.name === name)?.talk ??
                  formatSpan(unitSeconds(name))}
              </div>
            </div>
          </div>
        ))}
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