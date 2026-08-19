import { useEffect, useRef } from "react";
import { cycleDay, dayOfYear, daysInYear, formatQuant, quantsSinceBB, solarLat } from "@/lib/timekeeping";

const CX = 200;
const CY = 208;

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: Number((CX + r * Math.cos(a)).toFixed(2)), y: Number((CY + r * Math.sin(a)).toFixed(2)) };
}

export function UtClock() {
  const loopRef = useRef<SVGGElement>(null);
  const arcRef = useRef<SVGGElement>(null);
  const tickRef = useRef<SVGGElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const qRef = useRef<SVGTextElement>(null);
  const seasonRef = useRef<SVGTextElement>(null);
  const cycleRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    let raf = 0;
    const frame = () => {
      const now = new Date();
      const lat = solarLat(now);
      loopRef.current?.setAttribute("transform", `rotate(${lat.loopFrac * 360} ${CX} ${CY})`);
      arcRef.current?.setAttribute("transform", `rotate(${lat.arcFrac * 360} ${CX} ${CY})`);
      tickRef.current?.setAttribute("transform", `rotate(${lat.tickFrac * 360} ${CX} ${CY})`);
      if (stampRef.current) stampRef.current.textContent = lat.stamp;
      if (qRef.current) qRef.current.textContent = `Q ${formatQuant(quantsSinceBB(now))}`;
      if (seasonRef.current) {
        const p = dayOfYear(now) / daysInYear(now.getFullYear());
        seasonRef.current.textContent = `${Math.round(p * 100)}%`;
      }
      if (cycleRef.current) cycleRef.current.textContent = `D${cycleDay(now)}`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="ut-stage mx-auto mt-10 max-w-[460px]">
      <svg viewBox="0 0 400 420" className="ut-dial h-auto w-full" role="img" aria-label="Universal Times solar clock, ten loops">
        <defs>
          <radialGradient id="ut-void" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16120c" />
            <stop offset="70%" stopColor="#0a0908" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>
          <filter id="ut-gold" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r="176" fill="url(#ut-void)" />
        <circle cx={CX} cy={CY} r="174" fill="none" stroke="rgb(212 175 55 / 0.45)" strokeWidth="1.2" />
        <circle cx={CX} cy={CY} r="132" fill="none" stroke="rgb(200 200 200 / 0.18)" strokeWidth="0.8" />

        {Array.from({ length: 10 }, (_, i) => {
          const deg = i * 36;
          const a = polar(168, deg);
          const b = polar(i === 0 || i === 5 ? 148 : 156, deg);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={i === 5 ? "#f3ece1" : "rgb(212 175 55 / 0.75)"}
              strokeWidth={i === 0 || i === 5 ? 2.4 : 1.2}
            />
          );
        })}

        {Array.from({ length: 10 }, (_, i) => {
          const p = polar(136, i * 36);
          return (
            <text
              key={`n${i}`}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={i === 5 ? "#f3ece1" : "#d4af37"}
              fontFamily="Oxanium, sans-serif"
              fontSize="15"
              fontWeight="700"
            >
              {i}
            </text>
          );
        })}

        {/* 12 o'clock — Quant register */}
        <text
          ref={qRef}
          x={CX}
          y="28"
          textAnchor="middle"
          fill="#f3ece1"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          letterSpacing="0.08em"
        >
          Q —
        </text>

        {/* 3 o'clock — season / orbit */}
        <text x="368" y={CY - 8} textAnchor="middle" fill="rgb(243 236 225 / 0.45)" fontSize="8" letterSpacing="0.16em">
          YEAR
        </text>
        <text ref={seasonRef} x="368" y={CY + 8} textAnchor="middle" fill="#d4af37" fontFamily="Oxanium, sans-serif" fontSize="12">
          —
        </text>

        {/* 9 o'clock — 5-day cycle */}
        <text x="32" y={CY - 8} textAnchor="middle" fill="rgb(243 236 225 / 0.45)" fontSize="8" letterSpacing="0.16em">
          CYCLE
        </text>
        <text ref={cycleRef} x="32" y={CY + 8} textAnchor="middle" fill="#d4af37" fontFamily="Oxanium, sans-serif" fontSize="12">
          D—
        </text>

        {/* 6 o'clock — planet */}
        <text x={CX} y="398" textAnchor="middle" fill="rgb(200 200 200 / 0.7)" fontSize="10" letterSpacing="0.28em">
          P:EARTH
        </text>
        <text x={CX} y="384" textAnchor="middle" fill="rgb(243 236 225 / 0.35)" fontSize="8">
          5 = midday
        </text>

        <g ref={loopRef}>
          <line x1={CX} y1={CY + 18} x2={CX} y2="92" stroke="#f3ece1" strokeWidth="4.5" strokeLinecap="round" filter="url(#ut-gold)" />
        </g>
        <g ref={arcRef}>
          <line x1={CX} y1={CY + 16} x2={CX} y2="72" stroke="rgb(200 200 200 / 0.9)" strokeWidth="2.2" strokeLinecap="round" />
        </g>
        <g ref={tickRef}>
          <line x1={CX} y1={CY + 20} x2={CX} y2="58" stroke="#d4af37" strokeWidth="1.2" />
        </g>

        <circle cx={CX} cy={CY} r="18" fill="#1a140c" stroke="#d4af37" strokeWidth="1.2" />
        <text x={CX} y={CY + 1} textAnchor="middle" dominantBaseline="middle" fill="#f3ece1" fontFamily="Oxanium, sans-serif" fontSize="13" fontWeight="800">
          H
        </text>
      </svg>

      <div className="mt-4 border border-[rgb(212_175_55_/_0.25)] px-4 py-4 text-center">
        <div className="text-[10px] tracking-[0.28em] text-[rgb(212_175_55_/_0.8)] uppercase">System 1 · Solar Clock · where you are</div>
        <div className="font-brand mt-2 text-[clamp(28px,6vw,44px)] tracking-[0.08em] text-fg tabular-nums">
          <span ref={stampRef}>t:-:--:--</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-dim">
          t:L:AA:TT — 10 loops, 100 arcs, 100 ticks. Loop 5 is midday. These are coordinates, not
          durations.
        </p>
      </div>
    </div>
  );
}