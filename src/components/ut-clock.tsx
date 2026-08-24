import { useEffect, useRef, type PointerEvent } from "react";
import {
  cycleDay,
  durationBits,
  durationNow,
  formatQuant,
  pad2,
  quantsSinceBB,
  solarLat,
} from "@/lib/timekeeping";

const CX = 200;
const CY = 200;

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

function marks(count: number, r0: number, r1: number, majorEvery: number, cls: string) {
  return Array.from({ length: count }, (_, i) => {
    const deg = (360 / count) * i;
    const major = i % majorEvery === 0;
    const a = polar(major ? r0 : r0 + 3, deg);
    const b = polar(r1, deg);
    return (
      <line
        key={`${cls}-${i}`}
        x1={a.x}
        y1={a.y}
        x2={b.x}
        y2={b.y}
        className={cls}
        strokeWidth={major ? 1.8 : 0.55}
      />
    );
  });
}

type Live = {
  loop: number;
  arc: number;
  tick: number;
  tenths: number;
  stamp: string;
  pulse: number;
  tide: number;
  season: number;
  quant: string;
  cycle: number;
};

type TipCopy = { title: string; value: string; note: string };

function copyFor(key: string, live: Live): TipCopy | null {
  if (key.startsWith("mark-")) {
    const n = Number(key.slice(5));
    return {
      title: `Loop ${n}`,
      value: String(n),
      note: n === 0 ? "Start of the local day." : n === 5 ? "Midday." : "Mark on the solar face. Coordinate, not a duration.",
    };
  }
  switch (key) {
    case "loop":
      return {
        title: "Loop",
        value: String(Math.floor(live.loop)),
        note: "Where you are in the local day. 10 loops. A coordinate.",
      };
    case "arc":
      return {
        title: "Arc",
        value: pad2(Math.floor(live.arc)),
        note: "100 per loop · ~86.4 s on Earth. Still a coordinate.",
      };
    case "tick":
      return {
        title: "Tick",
        value: `${pad2(Math.floor(live.tick))}.${live.tenths}`,
        note: "100 per arc · ~0.864 s on Earth. Closest thing to a second here.",
      };
    case "pulse":
      return {
        title: "Pulse",
        value: live.pulse.toFixed(3).replace(/^0/, "") || ".000",
        note: "Duration. ~70 s. Ten of these is a wave. Same length on every planet.",
      };
    case "tide":
      return {
        title: "Tide",
        value: live.tide.toFixed(3).replace(/^0/, "") || ".000",
        note: "Duration. ~2 hours. Ten waves. Ten of these is a spin.",
      };
    case "season":
      return {
        title: "Season",
        value: `${Math.round(live.season * 100)}%`,
        note: "Orbit progress. ~81 days of hydrogen periods.",
      };
    case "quant":
      return {
        title: "Quant",
        value: live.quant,
        note: "Estimated H-1 periods since cosmological t:0. Universal.",
      };
    case "cycle":
      return {
        title: "Cycle day",
        value: `C${live.cycle}`,
        note: "Optional 5-day week. Planet-local, not physics.",
      };
    case "earth":
      return {
        title: "Planet",
        value: "EARTH",
        note: "Solar clock profile. Loop / Arc / Tick are for this rotation.",
      };
    case "nucleus":
      return {
        title: "Hydrogen-1",
        value: "21 cm",
        note: "The constant. 1,420,405,751.768 Hz. One period is a quant.",
      };
    default:
      return null;
  }
}

export function UtClock() {
  const loopRef = useRef<SVGGElement>(null);
  const arcRef = useRef<SVGGElement>(null);
  const tickRef = useRef<SVGGElement>(null);
  const pulseRef = useRef<SVGGElement>(null);
  const tideRef = useRef<SVGGElement>(null);
  const seasonRef = useRef<SVGGElement>(null);
  const quantRef = useRef<SVGTextElement>(null);
  const cycleRef = useRef<SVGTextElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const qReadRef = useRef<HTMLSpanElement>(null);
  const pulseReadRef = useRef<HTMLDivElement>(null);
  const sayRef = useRef<HTMLSpanElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const tipTitle = useRef<HTMLSpanElement>(null);
  const tipVal = useRef<HTMLSpanElement>(null);
  const tipNote = useRef<HTMLSpanElement>(null);
  const tipKey = useRef<string | null>(null);
  const live = useRef<Live>({
    loop: 0,
    arc: 0,
    tick: 0,
    tenths: 0,
    stamp: "t:-:--:--",
    pulse: 0,
    tide: 0,
    season: 0,
    quant: "—",
    cycle: 1,
  });

  const paintTip = () => {
    const key = tipKey.current;
    const box = tipRef.current;
    if (!key || !box) return;
    const copy = copyFor(key, live.current);
    if (!copy) return;
    if (tipTitle.current) tipTitle.current.textContent = copy.title;
    if (tipVal.current) tipVal.current.textContent = copy.value;
    if (tipNote.current) tipNote.current.textContent = copy.note;
  };

  const placeTip = (clientX: number, clientY: number) => {
    const stage = stageRef.current;
    const box = tipRef.current;
    if (!stage || !box) return;
    const r = stage.getBoundingClientRect();
    let x = clientX - r.left + 12;
    let y = clientY - r.top - 12;
    box.style.display = "block";
    const w = box.offsetWidth;
    const h = box.offsetHeight;
    if (x + w > r.width - 8) x = r.width - w - 8;
    if (x < 8) x = 8;
    if (y - h < 8) y = clientY - r.top + h + 18;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    box.style.transform = "translateY(-100%)";
  };

  const showTip = (key: string, e: PointerEvent) => {
    tipKey.current = key;
    paintTip();
    placeTip(e.clientX, e.clientY);
  };

  const hideTip = () => {
    tipKey.current = null;
    if (tipRef.current) tipRef.current.style.display = "none";
  };

  useEffect(() => {
    let raf = 0;
    const frame = () => {
      const now = new Date();
      const lat = solarLat(now);
      const dur = durationNow(now);
      const tickS = lat.tick + lat.tickRem;
      const arcS = lat.arc + tickS / 100;
      const loopS = lat.loop + arcS / 100;
      const pulse = dur.find((u) => u.name === "Pulse");
      const tide = dur.find((u) => u.name === "Tide");
      const season = dur.find((u) => u.name === "Season");
      const quant = formatQuant(quantsSinceBB(now));
      const tenths = Math.floor(lat.tickRem * 10);
      const cycle = cycleDay(now);

      live.current = {
        loop: loopS,
        arc: arcS,
        tick: tickS,
        tenths,
        stamp: lat.stamp,
        pulse: pulse?.frac ?? 0,
        tide: tide?.frac ?? 0,
        season: season?.frac ?? 0,
        quant,
        cycle,
      };

      loopRef.current?.setAttribute("transform", `rotate(${(loopS / 10) * 360} ${CX} ${CY})`);
      arcRef.current?.setAttribute("transform", `rotate(${(arcS / 100) * 360} ${CX} ${CY})`);
      tickRef.current?.setAttribute("transform", `rotate(${(tickS / 100) * 360} ${CX} ${CY})`);
      pulseRef.current?.setAttribute(
        "transform",
        `rotate(${(pulse?.frac ?? 0) * 360} ${CX} ${CY})`,
      );
      tideRef.current?.setAttribute(
        "transform",
        `rotate(${(tide?.frac ?? 0) * 360} ${CX} ${CY})`,
      );
      seasonRef.current?.setAttribute("transform", `rotate(${(season?.frac ?? 0) * 360})`);

      if (quantRef.current) quantRef.current.textContent = quant;
      if (cycleRef.current) cycleRef.current.textContent = `C${cycle}`;
      if (stampRef.current) stampRef.current.textContent = `${lat.stamp}.${tenths}`;
      if (qReadRef.current) qReadRef.current.textContent = `Q:${quant}`;
      if (pulseReadRef.current) {
        const p = (pulse?.frac ?? 0).toFixed(3).slice(1);
        const t = (tide?.frac ?? 0).toFixed(3).slice(1);
        pulseReadRef.current.textContent = `PULSE ${p}  ·  TIDE ${t}`;
      }
      const bits = durationBits(now);
      if (sayRef.current) sayRef.current.textContent = bits.phrase;
      const fills = [bits.pulseInWave, bits.waveInTide, bits.tideInSpin];
      fills.forEach((n, i) => {
        const bar = barRefs.current[i];
        const num = numRefs.current[i];
        if (bar) bar.style.width = `${Math.min(100, n * 10)}%`;
        if (num) num.textContent = n.toFixed(1);
      });
      if (tipKey.current) paintTip();

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const hit = (key: string, className = "ut-hit") => ({
    className,
    onPointerEnter: (e: PointerEvent) => showTip(key, e),
    onPointerMove: (e: PointerEvent) => {
      if (tipKey.current === key) placeTip(e.clientX, e.clientY);
      else showTip(key, e);
    },
    onPointerLeave: hideTip,
  });

  return (
    <div ref={stageRef} className="ut-stage relative mx-auto mt-10 max-w-[420px]">
      <svg
        viewBox="0 0 400 400"
        className="ut-dial h-auto w-full"
        role="img"
        aria-label="Universal Times solar clock, base-10, hydrogen-anchored"
      >
        <defs>
          <radialGradient id="ut-void" cx="50%" cy="48%" r="58%">
            <stop offset="0%" stopColor="#16120e" />
            <stop offset="70%" stopColor="#090807" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>
          <radialGradient id="ut-core" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#f3e0b8" />
            <stop offset="42%" stopColor="#c9a56a" />
            <stop offset="100%" stopColor="#6b4a22" />
          </radialGradient>
          <filter id="ut-gold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r="190" fill="url(#ut-void)" />
        <circle cx={CX} cy={CY} r="184" className="ut-ring-solar" fill="none" strokeWidth="1.1" />
        <circle cx={CX} cy={CY} r="136" className="ut-ring-gold" fill="none" strokeWidth="0.8" />
        <circle cx={CX} cy={CY} r="92" className="ut-ring-inner" fill="none" strokeWidth="0.5" />

        {marks(100, 182, 174, 10, "ut-tick-arc")}
        {marks(10, 182, 162, 1, "ut-tick-loop")}

        {Array.from({ length: 10 }, (_, i) => {
          const p = polar(150, i * 36);
          return (
            <g key={`L${i}`} {...hit(`mark-${i}`)}>
              <circle cx={p.x} cy={p.y} r="14" fill="transparent" />
              <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="ut-label-loop">
                {i}
              </text>
            </g>
          );
        })}

        <g {...hit("quant")}>
          <rect x="130" y="64" width="140" height="40" fill="transparent" />
          <text x={CX} y="78" textAnchor="middle" className="ut-compass-k">
            QUANT
          </text>
          <text ref={quantRef} x={CX} y="94" textAnchor="middle" className="ut-compass-v">
            —
          </text>
        </g>

        <g transform="translate(322 200)" {...hit("season")}>
          <circle r="22" fill="transparent" />
          <circle r="16" className="ut-ring-gold" fill="none" strokeWidth="0.7" />
          <g ref={seasonRef}>
            <circle cx="0" cy="-16" r="2.4" className="ut-pip-season" />
          </g>
          <text y="28" textAnchor="middle" className="ut-compass-k">
            SEASON
          </text>
        </g>

        <g transform="translate(200 318)" {...hit("earth")}>
          <circle r="22" fill="transparent" />
          <circle r="9" className="ut-ring-solar" fill="none" strokeWidth="1" />
          <ellipse rx="9" ry="3.4" className="ut-ring-solar" fill="none" strokeWidth="0.6" />
          <line x1="0" y1="-9" x2="0" y2="9" className="ut-ring-solar" strokeWidth="0.6" />
          <text y="22" textAnchor="middle" className="ut-compass-k ut-compass-solar">
            EARTH
          </text>
        </g>

        <g transform="translate(78 200)" {...hit("cycle")}>
          <circle r="22" fill="transparent" />
          <text ref={cycleRef} y="-2" textAnchor="middle" className="ut-cycle">
            C1
          </text>
          <text y="16" textAnchor="middle" className="ut-compass-k ut-compass-solar">
            CYCLE
          </text>
        </g>

        <g ref={pulseRef} {...hit("pulse")}>
          <circle cx={CX} cy="64" r="12" fill="transparent" />
          <circle cx={CX} cy="64" r="3.2" className="ut-pip-pulse" filter="url(#ut-gold)" />
        </g>
        <g ref={tideRef} {...hit("tide")}>
          <circle cx={CX} cy="108" r="12" fill="transparent" />
          <circle cx={CX} cy="108" r="4.2" className="ut-pip-tide" filter="url(#ut-gold)" />
        </g>

        <g ref={loopRef} {...hit("loop")}>
          <line x1={CX} y1={CY + 12} x2={CX} y2="102" stroke="transparent" strokeWidth="16" />
          <line
            x1={CX}
            y1={CY + 12}
            x2={CX}
            y2="102"
            className="ut-hand-loop"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </g>
        <g ref={arcRef} {...hit("arc")}>
          <line x1={CX} y1={CY + 16} x2={CX} y2="78" stroke="transparent" strokeWidth="14" />
          <line
            x1={CX}
            y1={CY + 16}
            x2={CX}
            y2="78"
            className="ut-hand-arc"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </g>
        <g ref={tickRef} {...hit("tick")}>
          <line x1={CX} y1={CY + 20} x2={CX} y2="54" stroke="transparent" strokeWidth="12" />
          <line x1={CX} y1={CY + 20} x2={CX} y2="54" className="ut-hand-tick" strokeWidth="1" />
          <circle cx={CX} cy="54" r="2.1" className="ut-hand-tick-tip" />
        </g>

        <g {...hit("nucleus", "ut-nucleus ut-hit")}>
          <circle cx={CX} cy={CY} r="24" fill="transparent" />
          <circle cx={CX} cy={CY} r="15" fill="url(#ut-core)" filter="url(#ut-gold)" />
          <circle cx={CX} cy={CY} r="21" className="ut-nucleus-halo" fill="none" strokeWidth="0.9" />
          <text x={CX} y={CY - 2} textAnchor="middle" dominantBaseline="middle" className="ut-h">
            H
          </text>
          <text x={CX} y={CY + 11} textAnchor="middle" className="ut-h-sub">
            21cm
          </text>
        </g>
      </svg>

      <div ref={tipRef} className="ut-tip">
        <span ref={tipTitle} className="ut-tip-k" />
        <span ref={tipVal} className="ut-tip-v" />
        <span ref={tipNote} className="ut-tip-n" />
      </div>

      <div className="ut-readout">
        <span ref={stampRef} className="ut-solar-read">
          t:-:--:--.-
        </span>
        <span className="ut-sep"> · </span>
        <span ref={qReadRef} className="ut-dur-read">
          Q:—
        </span>
        <span className="ut-sep"> · </span>
        <span className="ut-planet">P:EARTH</span>
      </div>
      <div ref={pulseReadRef} className="ut-pulse-read" />

      <div className="ut-bits">
        <p className="ut-bits-say">
          Say it: “<span ref={sayRef}>—</span>”
        </p>
        {(
          [
            ["Pulse → Wave", "~70 s  ·  ten pulses is a wave"],
            ["Wave → Tide", "~12 min  ·  ten waves is a tide"],
            ["Tide → Spin", "~2 hr  ·  ten tides is a spin"],
          ] as const
        ).map(([label, hint], i) => (
          <div key={label} className="ut-bit">
            <div className="ut-bit-meta">
              <span>{label}</span>
              <span ref={(el) => { numRefs.current[i] = el; }} className="ut-bit-n">
                0.0
              </span>
            </div>
            <div className="ut-bit-track" aria-hidden>
              {Array.from({ length: 10 }, (_, k) => (
                <span key={k} className="ut-bit-cell" />
              ))}
              <div
                ref={(el) => {
                  barRefs.current[i] = el;
                }}
                className="ut-bit-fill"
              />
            </div>
            <p className="ut-bit-hint">{hint}</p>
          </div>
        ))}
        <p className="ut-bits-foot">
          Half is half. Five is halfway to the next word. You already know how to count to ten.
        </p>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] tracking-[0.18em] uppercase text-dim">
        <span>
          <span className="ut-swatch ut-swatch-loop" />
          Loop
          <span className="ut-swatch ut-swatch-arc" />
          Arc
          <span className="ut-swatch ut-swatch-tick" />
          Tick
        </span>
        <span className="ut-gold-text">
          <span className="ut-swatch ut-swatch-pulse" />
          Pulse
          <span className="ut-swatch ut-swatch-tide" />
          Tide
          <span className="ut-swatch ut-swatch-season" />
          Season
        </span>
      </div>
    </div>
  );
}