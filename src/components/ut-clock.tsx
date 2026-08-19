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
const CY = 200;
const LOOP_R = 112;
const ARC_R = 86;
const TICK_R = 62;

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
        sectors.current.forEach((el, i) => el?.setAttribute("data-on", i === lat.loop ? "1" : "0"));
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
    <div className="ut-stage mx-auto mt-8 max-w-[520px]">
      <div className="ut-plaque">
        <span className="ut-plaque-k">Quant · cosmological t:0</span>
        <span ref={qRef} className="ut-plaque-v">
          —
        </span>
      </div>

      <div className="ut-case">
        <svg viewBox="0 0 400 400" className="ut-dial" role="img" aria-label="Universal Times wall clock">
          <defs>
            <radialGradient id="ut-void" cx="38%" cy="32%" r="72%">
              <stop offset="0%" stopColor="#3a2214" />
              <stop offset="28%" stopColor="#140c08" />
              <stop offset="70%" stopColor="#070605" />
              <stop offset="100%" stopColor="#030201" />
            </radialGradient>
            <radialGradient id="ut-bezel" cx="32%" cy="28%" r="70%">
              <stop offset="0%" stopColor="#f3e2b0" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="62%" stopColor="#7a4a18" />
              <stop offset="100%" stopColor="#2a1408" />
            </radialGradient>
            <radialGradient id="ut-well" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0c0806" />
              <stop offset="100%" stopColor="#000" />
            </radialGradient>
            <radialGradient id="ut-cab" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffd089" />
              <stop offset="40%" stopColor="#ff5a1f" />
              <stop offset="100%" stopColor="#4a1206" />
            </radialGradient>
            <linearGradient id="ut-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff4c8" />
              <stop offset="45%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ff5a1f" />
            </linearGradient>
            <linearGradient id="ut-glass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(255 255 255 / 0.18)" />
              <stop offset="38%" stopColor="rgb(255 255 255 / 0)" />
            </linearGradient>
            <filter id="ut-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="ut-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.1" />
            </filter>
          </defs>

          <circle cx={CX} cy={CY} r="198" fill="url(#ut-bezel)" />
          <circle cx={CX} cy={CY} r="184" fill="#0a0705" />
          <circle cx={CX} cy={CY} r="181" fill="url(#ut-void)" />

          {Array.from({ length: 100 }, (_, i) => {
            const deg = i * 3.6;
            const long = i % 10 === 0;
            const a = polar(long ? 181 : 180, deg);
            const b = polar(long ? 172 : 176, deg);
            return (
              <line
                key={`h${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={long ? "#d4af37" : "rgb(212 175 55 / 0.28)"}
                strokeWidth={long ? 1.6 : 0.6}
              />
            );
          })}

          {Array.from({ length: 48 }, (_, i) => {
            const p = polar(175 + (i % 5), (i * 137.5) % 360);
            const s = 0.4 + (i % 3) * 0.25;
            return <circle key={`st${i}`} cx={p.x} cy={p.y} r={s} fill="rgb(243 236 225 / 0.35)" />;
          })}

          {Array.from({ length: 10 }, (_, i) => (
            <path
              key={i}
              ref={(el) => {
                sectors.current[i] = el;
              }}
              d={wedge(138, 168, i * 36 + 1.4, (i + 1) * 36 - 1.4)}
              className="ut-sector"
              data-on="0"
            />
          ))}

          {Array.from({ length: 10 }, (_, i) => {
            const p = polar(153, i * 36 + 18);
            return (
              <text key={`n${i}`} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="ut-num">
                {i}
              </text>
            );
          })}

          <circle cx={CX} cy={CY} r="128" fill="url(#ut-well)" />
          <circle cx={CX} cy={CY} r="128" fill="none" stroke="rgb(0 0 0 / 0.8)" strokeWidth="10" opacity="0.35" />

          <circle cx={CX} cy={CY} r={LOOP_R} className="ut-channel" />
          <circle cx={CX} cy={CY} r={ARC_R} className="ut-channel" />
          <circle cx={CX} cy={CY} r={TICK_R} className="ut-channel" />

          <circle ref={loopArc} cx={CX} cy={CY} r={LOOP_R} className="ut-sweep ut-sweep-loop" transform={`rotate(-90 ${CX} ${CY})`} />
          <circle ref={arcArc} cx={CX} cy={CY} r={ARC_R} className="ut-sweep ut-sweep-arc" transform={`rotate(-90 ${CX} ${CY})`} />
          <circle ref={tickArc} cx={CX} cy={CY} r={TICK_R} className="ut-sweep ut-sweep-tick" transform={`rotate(-90 ${CX} ${CY})`} />

          <g ref={loopBead}>
            <circle cx={CX} cy={CY - LOOP_R} r="9" fill="rgb(212 175 55 / 0.25)" filter="url(#ut-soft)" />
            <circle cx={CX} cy={CY - LOOP_R} r="6.4" fill="url(#ut-gold)" filter="url(#ut-glow)" />
            <circle cx={CX - 1.6} cy={CY - LOOP_R - 2} r="1.8" fill="rgb(255 255 255 / 0.7)" />
          </g>
          <g ref={arcBead}>
            <circle cx={CX} cy={CY - ARC_R} r="7" fill="rgb(243 236 225 / 0.18)" filter="url(#ut-soft)" />
            <circle cx={CX} cy={CY - ARC_R} r="4.8" fill="#f3ece1" filter="url(#ut-glow)" />
            <circle cx={CX - 1.2} cy={CY - ARC_R - 1.6} r="1.3" fill="white" />
          </g>
          <g ref={tickBead}>
            <circle cx={CX} cy={CY - TICK_R} r="6" fill="rgb(255 90 31 / 0.28)" filter="url(#ut-soft)" />
            <circle cx={CX} cy={CY - TICK_R} r="3.8" fill="#ff5a1f" filter="url(#ut-glow)" />
            <circle cx={CX - 1} cy={CY - TICK_R - 1.2} r="1" fill="#ffd7c0" />
          </g>

          <circle cx={CX} cy={CY} r="34" fill="#070504" />
          <circle cx={CX} cy={CY} r="30" fill="url(#ut-cab)" filter="url(#ut-glow)" />
          <circle cx={CX} cy={CY} r="38" className="ut-core-halo" fill="none" />
          <text x={CX} y={CY - 1} textAnchor="middle" dominantBaseline="middle" className="ut-h">
            H
          </text>
          <text x={CX} y={CY + 13} textAnchor="middle" className="ut-h-sub">
            21cm
          </text>

          <path d="M78 86 A150 150 0 0 1 322 78" fill="none" stroke="url(#ut-glass)" strokeWidth="22" strokeLinecap="round" opacity="0.55" />
          <ellipse cx="148" cy="118" rx="70" ry="28" fill="rgb(255 255 255 / 0.04)" transform="rotate(-28 148 118)" />
        </svg>
      </div>

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
        <p>Ten loops in a day. Five is midday. Gold is Loop, bone is Arc, ember is Tick.</p>
      </div>
    </div>
  );
}