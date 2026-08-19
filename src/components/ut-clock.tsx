import { useEffect, useRef } from "react";
import {
  cycleDay,
  dayOfYear,
  daysInYear,
  formatQuant,
  quantsSinceBB,
  solarLat,
} from "@/lib/timekeeping";

const CX = 200;
const CY = 210;
const LOOP_R = 118;
const ARC_R = 92;
const TICK_R = 68;

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return {
    x: Number((CX + r * Math.cos(a)).toFixed(2)),
    y: Number((CY + r * Math.sin(a)).toFixed(2)),
  };
}

function wedge(r0: number, r1: number, a0: number, a1: number) {
  const p0 = polar(r0, a0);
  const p1 = polar(r0, a1);
  const p2 = polar(r1, a1);
  const p3 = polar(r1, a0);
  return `M${p0.x} ${p0.y} A${r0} ${r0} 0 0 1 ${p1.x} ${p1.y} L${p2.x} ${p2.y} A${r1} ${r1} 0 0 0 ${p3.x} ${p3.y} Z`;
}

function circ(r: number) {
  return 2 * Math.PI * r;
}

export function UtClock() {
  const sectors = useRef<(SVGPathElement | null)[]>([]);
  const loopArc = useRef<SVGCircleElement>(null);
  const arcArc = useRef<SVGCircleElement>(null);
  const tickArc = useRef<SVGCircleElement>(null);
  const loopBead = useRef<SVGGElement>(null);
  const arcBead = useRef<SVGGElement>(null);
  const tickBead = useRef<SVGGElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const loopN = useRef<HTMLSpanElement>(null);
  const arcN = useRef<HTMLSpanElement>(null);
  const tickN = useRef<HTMLSpanElement>(null);
  const qRef = useRef<HTMLSpanElement>(null);
  const seasonRef = useRef<HTMLSpanElement>(null);
  const cycleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cL = circ(LOOP_R);
    const cA = circ(ARC_R);
    const cT = circ(TICK_R);
    let raf = 0;
    let lastLoop = -1;
    const frame = () => {
      const now = new Date();
      const lat = solarLat(now);

      if (loopArc.current) loopArc.current.style.strokeDasharray = `${lat.loopFrac * cL} ${cL}`;
      if (arcArc.current) arcArc.current.style.strokeDasharray = `${lat.arcFrac * cA} ${cA}`;
      if (tickArc.current) tickArc.current.style.strokeDasharray = `${lat.tickFrac * cT} ${cT}`;

      loopBead.current?.setAttribute("transform", `rotate(${lat.loopFrac * 360} ${CX} ${CY})`);
      arcBead.current?.setAttribute("transform", `rotate(${lat.arcFrac * 360} ${CX} ${CY})`);
      tickBead.current?.setAttribute("transform", `rotate(${lat.tickFrac * 360} ${CX} ${CY})`);

      if (lat.loop !== lastLoop) {
        lastLoop = lat.loop;
        sectors.current.forEach((el, i) => {
          if (!el) return;
          el.setAttribute("data-on", i === lat.loop ? "1" : "0");
        });
      }

      if (stampRef.current) stampRef.current.textContent = lat.stamp;
      if (loopN.current) loopN.current.textContent = String(lat.loop);
      if (arcN.current) arcN.current.textContent = String(lat.arc).padStart(2, "0");
      if (tickN.current) tickN.current.textContent = String(lat.tick).padStart(2, "0");
      if (qRef.current) qRef.current.textContent = formatQuant(quantsSinceBB(now));
      if (seasonRef.current) {
        seasonRef.current.textContent = `${Math.round((dayOfYear(now) / daysInYear(now.getFullYear())) * 100)}%`;
      }
      if (cycleRef.current) cycleRef.current.textContent = String(cycleDay(now));
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="ut-stage mx-auto mt-10 max-w-[480px]">
      <div className="ut-plaque">
        <span className="ut-plaque-k">Quant · t:0</span>
        <span ref={qRef} className="ut-plaque-v">
          —
        </span>
      </div>

      <svg viewBox="0 0 400 420" className="ut-dial h-auto w-full" role="img" aria-label="Universal Times base-10 solar clock">
        <defs>
          <radialGradient id="ut-void" cx="50%" cy="42%" r="62%">
            <stop offset="0%" stopColor="#2a160c" />
            <stop offset="45%" stopColor="#100c08" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>
          <linearGradient id="ut-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe7a3" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#ff5a1f" />
          </linearGradient>
          <linearGradient id="ut-silver" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3ece1" />
            <stop offset="100%" stopColor="#8a8680" />
          </linearGradient>
          <filter id="ut-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r="188" fill="url(#ut-void)" />

        {Array.from({ length: 10 }, (_, i) => (
          <path
            key={i}
            ref={(el) => {
              sectors.current[i] = el;
            }}
            d={wedge(148, 178, i * 36 + 1.2, (i + 1) * 36 - 1.2)}
            className="ut-sector"
            data-on="0"
          />
        ))}

        {Array.from({ length: 10 }, (_, i) => {
          const p = polar(163, i * 36 + 18);
          return (
            <text
              key={`n${i}`}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="ut-num"
            >
              {i}
            </text>
          );
        })}

        <circle cx={CX} cy={CY} r={LOOP_R} className="ut-track ut-track-loop" />
        <circle cx={CX} cy={CY} r={ARC_R} className="ut-track ut-track-arc" />
        <circle cx={CX} cy={CY} r={TICK_R} className="ut-track ut-track-tick" />

        <circle
          ref={loopArc}
          cx={CX}
          cy={CY}
          r={LOOP_R}
          className="ut-sweep ut-sweep-loop"
          transform={`rotate(-90 ${CX} ${CY})`}
        />
        <circle
          ref={arcArc}
          cx={CX}
          cy={CY}
          r={ARC_R}
          className="ut-sweep ut-sweep-arc"
          transform={`rotate(-90 ${CX} ${CY})`}
        />
        <circle
          ref={tickArc}
          cx={CX}
          cy={CY}
          r={TICK_R}
          className="ut-sweep ut-sweep-tick"
          transform={`rotate(-90 ${CX} ${CY})`}
        />

        <g ref={loopBead}>
          <circle cx={CX} cy={CY - LOOP_R} r="7" className="ut-bead ut-bead-loop" filter="url(#ut-glow)" />
        </g>
        <g ref={arcBead}>
          <circle cx={CX} cy={CY - ARC_R} r="5.2" className="ut-bead ut-bead-arc" filter="url(#ut-glow)" />
        </g>
        <g ref={tickBead}>
          <circle cx={CX} cy={CY - TICK_R} r="3.6" className="ut-bead ut-bead-tick" filter="url(#ut-glow)" />
        </g>

        <g className="ut-core">
          <circle cx={CX} cy={CY} r="36" className="ut-core-halo" />
          <circle cx={CX} cy={CY} r="22" className="ut-core-body" />
          <text x={CX} y={CY - 2} textAnchor="middle" dominantBaseline="middle" className="ut-h">
            H
          </text>
          <text x={CX} y={CY + 12} textAnchor="middle" className="ut-h-sub">
            21cm
          </text>
        </g>
      </svg>

      <div className="ut-compass">
        <div>
          <div className="ut-compass-k">Cycle</div>
          <div className="ut-compass-v">
            D<span ref={cycleRef}>—</span>
          </div>
        </div>
        <div>
          <div className="ut-compass-k">Planet</div>
          <div className="ut-compass-v">EARTH</div>
        </div>
        <div>
          <div className="ut-compass-k">Year</div>
          <div className="ut-compass-v">
            <span ref={seasonRef}>—</span>
          </div>
        </div>
      </div>

      <div className="ut-stamp">
        <div className="ut-stamp-k">Solar coordinates · where you are</div>
        <div className="ut-stamp-v">
          <span ref={stampRef}>t:-:--:--</span>
        </div>
        <div className="ut-chips">
          <span>
            Loop <b ref={loopN}>—</b>
          </span>
          <span>
            Arc <b ref={arcN}>—</b>
          </span>
          <span>
            Tick <b ref={tickN}>—</b>
          </span>
        </div>
        <p>Ten loops. Loop 5 is midday. Beads, not hours.</p>
      </div>
    </div>
  );
}