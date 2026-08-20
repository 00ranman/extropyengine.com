import { useEffect, useRef } from "react";
import { HF } from "@/lib/timekeeping";

const CX = 200;
const CY = 200;

function polar(cx: number, cy: number, r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return {
    x: Number((cx + r * Math.cos(a)).toFixed(2)),
    y: Number((cy + r * Math.sin(a)).toFixed(2)),
  };
}

function ticks(count: number, r0: number, r1: number, every: number, className: string) {
  return Array.from({ length: count }, (_, i) => {
    const deg = (360 / count) * i;
    const a = polar(CX, CY, i % every === 0 ? r0 - 4 : r0, deg);
    const b = polar(CX, CY, r1, deg);
    return (
      <line
        key={`${className}-${i}`}
        x1={a.x}
        y1={a.y}
        x2={b.x}
        y2={b.y}
        className={className}
        strokeWidth={i % every === 0 ? 2 : 0.8}
      />
    );
  });
}

export function UtClock() {
  const solarRef = useRef<SVGGElement>(null);
  const minuteRef = useRef<SVGGElement>(null);
  const secondRef = useRef<SVGGElement>(null);
  const durRef = useRef<SVGGElement>(null);
  const electronRef = useRef<SVGGElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spinSec = 10 ** 14 / HF;
    let raf = 0;
    const frame = () => {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 24) + m / 60;
      const solarDeg = h * 15;
      const minDeg = m * 6;
      const secDeg = s * 6;
      const unix = now.getTime() / 1000;
      const durDeg = ((unix / spinSec) % 1) * 360;
      const eDeg = (now.getTime() / 40) % 360;

      solarRef.current?.setAttribute("transform", `rotate(${solarDeg} ${CX} ${CY})`);
      minuteRef.current?.setAttribute("transform", `rotate(${minDeg} ${CX} ${CY})`);
      secondRef.current?.setAttribute("transform", `rotate(${secDeg} ${CX} ${CY})`);
      durRef.current?.setAttribute("transform", `rotate(${durDeg} ${CX} ${CY})`);
      electronRef.current?.setAttribute("transform", `rotate(${eDeg} ${CX} ${CY})`);

      if (readoutRef.current) {
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        const ss = String(now.getSeconds()).padStart(2, "0");
        const spin = Math.floor(unix / spinSec) % 100;
        readoutRef.current.innerHTML = `<span class="ut-solar-read">${hh}:${mm}:${ss}</span><span class="ut-sep"> · </span><span class="ut-dur-read">SPIN ${String(spin).padStart(2, "0")}</span>`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="ut-stage mx-auto mt-10 max-w-[440px]">
      <svg viewBox="0 0 400 400" className="ut-dial h-auto w-full" role="img" aria-label="Universal Times dual clock">
        <defs>
          <radialGradient id="ut-void" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a0c08" />
            <stop offset="55%" stopColor="#0a0808" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>
          <radialGradient id="ut-core" cx="50%" cy="42%" r="50%">
            <stop offset="0%" stopColor="#ffb089" />
            <stop offset="40%" stopColor="#ff5a1f" />
            <stop offset="100%" stopColor="#7a2208" />
          </radialGradient>
          <filter id="ut-ember" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ut-cyan" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r="188" fill="url(#ut-void)" />
        <circle cx={CX} cy={CY} r="186" className="ut-ring-solar" fill="none" strokeWidth="1.2" />
        <circle cx={CX} cy={CY} r="148" className="ut-ring-dur" fill="none" strokeWidth="1.2" />
        <circle cx={CX} cy={CY} r="108" className="ut-ring-inner" fill="none" strokeWidth="0.6" />

        {ticks(24, 182, 168, 6, "ut-tick-solar")}
        {ticks(60, 182, 176, 5, "ut-tick-solar-min")}
        {ticks(10, 146, 132, 1, "ut-tick-dur")}

        {[0, 6, 12, 18].map((h) => {
          const p = polar(CX, CY, 156, h * 15);
          return (
            <text key={`s${h}`} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="ut-label-solar">
              {String(h).padStart(2, "0")}
            </text>
          );
        })}
        {[0, 2, 5, 7].map((n) => {
          const p = polar(CX, CY, 118, n * 36);
          return (
            <text key={`d${n}`} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="ut-label-dur">
              {n}
            </text>
          );
        })}

        <ellipse
          cx={CX}
          cy={CY}
          rx="78"
          ry="34"
          className="ut-e-path"
          fill="none"
          strokeWidth="0.8"
          transform={`rotate(-24 ${CX} ${CY})`}
        />
        <g ref={electronRef}>
          <circle cx={CX} cy={CY - 78} r="3.4" className="ut-electron" filter="url(#ut-cyan)" />
        </g>

        <g ref={durRef}>
          <line x1={CX} y1={CY} x2={CX} y2="78" className="ut-hand-dur" strokeWidth="2.4" filter="url(#ut-cyan)" />
          <circle cx={CX} cy="78" r="3" className="ut-hand-dur-tip" />
        </g>

        <g ref={solarRef}>
          <line x1={CX} y1={CY + 14} x2={CX} y2="92" className="ut-hand-solar" strokeWidth="4" strokeLinecap="round" filter="url(#ut-ember)" />
        </g>
        <g ref={minuteRef}>
          <line x1={CX} y1={CY + 18} x2={CX} y2="64" className="ut-hand-solar-min" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g ref={secondRef}>
          <line x1={CX} y1={CY + 22} x2={CX} y2="48" className="ut-hand-solar-sec" strokeWidth="1" />
        </g>

        <g className="ut-nucleus">
          <circle cx={CX} cy={CY} r="16" fill="url(#ut-core)" filter="url(#ut-ember)" />
          <circle cx={CX} cy={CY} r="22" className="ut-nucleus-halo" fill="none" strokeWidth="1" />
          <text x={CX} y={CY + 1} textAnchor="middle" dominantBaseline="middle" className="ut-h">
            H
          </text>
        </g>
      </svg>

      <div ref={readoutRef} className="ut-readout" />
      <div className="mt-2 flex justify-center gap-6 text-[10px] tracking-[0.22em] uppercase">
        <span className="text-primary">Ember · Earth spin</span>
        <span className="text-accent">Cyan · Hydrogen duration</span>
      </div>
    </div>
  );
}