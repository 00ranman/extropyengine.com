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
const LOOP_R = 124;
const ARC_R = 92;
const TICK_R = 62;

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return {
    x: Number((CX + r * Math.cos(a)).toFixed(2)),
    y: Number((CY + r * Math.sin(a)).toFixed(2)),
  };
}

export function UtClock() {
  const loopRef = useRef<SVGGElement>(null);
  const arcRef = useRef<SVGGElement>(null);
  const tickRef = useRef<SVGGElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const loopN = useRef<HTMLSpanElement>(null);
  const arcN = useRef<HTMLSpanElement>(null);
  const tickN = useRef<HTMLSpanElement>(null);
  const qRef = useRef<HTMLSpanElement>(null);
  const seasonRef = useRef<HTMLSpanElement>(null);
  const cycleRef = useRef<HTMLSpanElement>(null);
  const nums = useRef<(SVGTextElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    let lastLoop = -1;
    const frame = () => {
      const now = new Date();
      const lat = solarLat(now);
      loopRef.current?.setAttribute("transform", `rotate(${lat.loopFrac * 360} ${CX} ${CY})`);
      arcRef.current?.setAttribute("transform", `rotate(${lat.arcFrac * 360} ${CX} ${CY})`);
      tickRef.current?.setAttribute("transform", `rotate(${lat.tickFrac * 360} ${CX} ${CY})`);
      if (lat.loop !== lastLoop) {
        lastLoop = lat.loop;
        nums.current.forEach((el, i) => el?.setAttribute("data-on", i === lat.loop ? "1" : "0"));
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
    <div className="ut-stage mx-auto mt-8 max-w-[460px]">
      <div className="ut-plaque">
        <span className="ut-plaque-k">Quant · t:0</span>
        <span ref={qRef} className="ut-plaque-v">
          —
        </span>
      </div>

      <div className="ut-case">
        <svg viewBox="0 0 400 400" className="ut-dial" role="img" aria-label="Universal Times solar clock">
          <defs>
            <radialGradient id="ut-void" cx="42%" cy="36%" r="68%">
              <stop offset="0%" stopColor="#24140e" />
              <stop offset="55%" stopColor="#0c0908" />
              <stop offset="100%" stopColor="#060606" />
            </radialGradient>
            <radialGradient id="ut-ember" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffb089" />
              <stop offset="45%" stopColor="#ff5a1f" />
              <stop offset="100%" stopColor="#7a2208" />
            </radialGradient>
            <filter id="ut-glow-ember" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="ut-glow-cyan" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx={CX} cy={CY} r="192" fill="#0a0808" />
          <circle cx={CX} cy={CY} r="186" fill="url(#ut-void)" />
          <circle cx={CX} cy={CY} r="186" fill="none" stroke="rgb(255 90 31 / 0.35)" strokeWidth="1.2" />
          <circle cx={CX} cy={CY} r="148" fill="none" stroke="rgb(34 211 238 / 0.16)" strokeWidth="1" />
          <circle cx={CX} cy={CY} r="108" fill="none" stroke="rgb(243 236 225 / 0.08)" strokeWidth="0.8" />

          {Array.from({ length: 10 }, (_, i) => {
            const a = polar(178, i * 36);
            const b = polar(i === 5 ? 164 : 170, i * 36);
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={i === 5 ? "#f3ece1" : "rgb(255 90 31 / 0.65)"}
                strokeWidth={i === 0 || i === 5 ? 2.2 : 1.1}
              />
            );
          })}

          {Array.from({ length: 10 }, (_, i) => {
            const p = polar(154, i * 36);
            return (
              <text
                key={`n${i}`}
                ref={(el) => {
                  nums.current[i] = el;
                }}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="ut-num"
                data-on="0"
              >
                {i}
              </text>
            );
          })}

          <circle cx={CX} cy={CY} r={LOOP_R} className="ut-orbit ut-orbit-loop" />
          <circle cx={CX} cy={CY} r={ARC_R} className="ut-orbit ut-orbit-arc" />
          <circle cx={CX} cy={CY} r={TICK_R} className="ut-orbit ut-orbit-tick" />

          {/* Loop — ember chevron */}
          <g ref={loopRef}>
            <polygon
              points={`${CX},${CY - LOOP_R - 14} ${CX + 11},${CY - LOOP_R + 6} ${CX},${CY - LOOP_R - 1} ${CX - 11},${CY - LOOP_R + 6}`}
              fill="#ff5a1f"
              filter="url(#ut-glow-ember)"
            />
          </g>

          {/* Arc — cyan diamond */}
          <g ref={arcRef}>
            <polygon
              points={`${CX},${CY - ARC_R - 9} ${CX + 8},${CY - ARC_R} ${CX},${CY - ARC_R + 9} ${CX - 8},${CY - ARC_R}`}
              fill="#22d3ee"
              filter="url(#ut-glow-cyan)"
            />
          </g>

          {/* Tick — ember disc */}
          <g ref={tickRef}>
            <circle cx={CX} cy={CY - TICK_R} r="5" fill="#ffb089" filter="url(#ut-glow-ember)" />
            <circle cx={CX} cy={CY - TICK_R} r="2.2" fill="#fff4ea" />
          </g>

          <circle cx={CX} cy={CY} r="28" fill="url(#ut-ember)" filter="url(#ut-glow-ember)" />
          <circle cx={CX} cy={CY} r="34" className="ut-core-halo" fill="none" />
          <text x={CX} y={CY + 1} textAnchor="middle" dominantBaseline="middle" className="ut-h">
            H
          </text>
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
        <p>Ember chevron is Loop. Cyan diamond is Arc. The small disc is Tick.</p>
      </div>
    </div>
  );
}