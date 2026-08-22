import { useEffect, useRef } from "react";
import {
  cycleDay,
  durationNow,
  formatQuant,
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

export function UtClock() {
  const loopRef = useRef<SVGGElement>(null);
  const arcRef = useRef<SVGGElement>(null);
  const tickRef = useRef<SVGGElement>(null);
  const pulseRef = useRef<SVGGElement>(null);
  const electronRef = useRef<SVGGElement>(null);
  const seasonRef = useRef<SVGGElement>(null);
  const quantRef = useRef<SVGTextElement>(null);
  const cycleRef = useRef<SVGTextElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const qReadRef = useRef<HTMLSpanElement>(null);
  const pulseReadRef = useRef<HTMLDivElement>(null);

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
      const season = dur.find((u) => u.name === "Season");

      loopRef.current?.setAttribute("transform", `rotate(${(loopS / 10) * 360} ${CX} ${CY})`);
      arcRef.current?.setAttribute("transform", `rotate(${(arcS / 100) * 360} ${CX} ${CY})`);
      tickRef.current?.setAttribute("transform", `rotate(${(tickS / 100) * 360} ${CX} ${CY})`);
      pulseRef.current?.setAttribute(
        "transform",
        `rotate(${(pulse?.frac ?? 0) * 360} ${CX} ${CY})`,
      );
      electronRef.current?.setAttribute(
        "transform",
        `rotate(${(now.getTime() / 48) % 360} ${CX} ${CY})`,
      );
      seasonRef.current?.setAttribute(
        "transform",
        `rotate(${(season?.frac ?? 0) * 360})`,
      );

      if (quantRef.current) quantRef.current.textContent = formatQuant(quantsSinceBB(now));
      if (cycleRef.current) cycleRef.current.textContent = `C${cycleDay(now)}`;
      if (stampRef.current) {
        const tenths = Math.floor(lat.tickRem * 10);
        stampRef.current.textContent = `${lat.stamp}.${tenths}`;
      }
      if (qReadRef.current) qReadRef.current.textContent = `Q:${formatQuant(quantsSinceBB(now))}`;
      if (pulseReadRef.current) {
        const p = pulse?.frac ?? 0;
        pulseReadRef.current.textContent = `PULSE ${p.toFixed(3).slice(1)}`;
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="ut-stage mx-auto mt-10 max-w-[420px]">
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
            <text
              key={`L${i}`}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="ut-label-loop"
            >
              {i}
            </text>
          );
        })}

        {/* 12 — Quant */}
        <text x={CX} y="78" textAnchor="middle" className="ut-compass-k">
          QUANT
        </text>
        <text ref={quantRef} x={CX} y="94" textAnchor="middle" className="ut-compass-v">
          —
        </text>

        {/* 3 — Season */}
        <g transform="translate(322 200)">
          <circle r="16" className="ut-ring-gold" fill="none" strokeWidth="0.7" />
          <g ref={seasonRef}>
            <circle cx="0" cy="-16" r="2.4" className="ut-gold-fill" />
          </g>
          <text y="28" textAnchor="middle" className="ut-compass-k">
            SEASON
          </text>
        </g>

        {/* 6 — Earth */}
        <g transform="translate(200 318)">
          <circle r="9" className="ut-ring-solar" fill="none" strokeWidth="1" />
          <ellipse rx="9" ry="3.4" className="ut-ring-solar" fill="none" strokeWidth="0.6" />
          <line x1="0" y1="-9" x2="0" y2="9" className="ut-ring-solar" strokeWidth="0.6" />
          <text y="22" textAnchor="middle" className="ut-compass-k">
            EARTH
          </text>
        </g>

        {/* 9 — Cycle day */}
        <g transform="translate(78 200)">
          <text ref={cycleRef} y="-2" textAnchor="middle" className="ut-cycle">
            C1
          </text>
          <text y="16" textAnchor="middle" className="ut-compass-k">
            CYCLE
          </text>
        </g>

        <ellipse
          cx={CX}
          cy={CY}
          rx="58"
          ry="26"
          className="ut-e-path"
          fill="none"
          strokeWidth="0.7"
          transform={`rotate(-22 ${CX} ${CY})`}
        />
        <g ref={electronRef}>
          <circle cx={CX} cy={CY - 58} r="2.6" className="ut-electron" filter="url(#ut-gold)" />
        </g>

        {/* Duration: Pulse pip on the gold ring */}
        <g ref={pulseRef}>
          <circle cx={CX} cy="64" r="3.2" className="ut-gold-fill" filter="url(#ut-gold)" />
        </g>

        <g ref={loopRef}>
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
        <g ref={arcRef}>
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
        <g ref={tickRef}>
          <line x1={CX} y1={CY + 20} x2={CX} y2="54" className="ut-hand-tick" strokeWidth="1" />
          <circle cx={CX} cy="54" r="2.1" className="ut-hand-tick-tip" />
        </g>

        <g className="ut-nucleus">
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
      <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] tracking-[0.18em] uppercase text-dim">
        <span>Silver · Loop / Arc / Tick</span>
        <span className="ut-gold-text">Gold · Pulse / Quant</span>
      </div>
    </div>
  );
}