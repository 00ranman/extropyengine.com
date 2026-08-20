import { useEffect, useRef } from "react";
import {
  cycleDay,
  dayOfYear,
  daysInYear,
  durationNow,
  formatQuant,
  pad2,
  quantsSinceBB,
  solarLat,
} from "@/lib/timekeeping";

const CX = 200;
const CY = 200;
const LOOP_R = 128;
const ARC_R = 104;
const TICK_R = 82;

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return {
    x: Number((CX + r * Math.cos(a)).toFixed(2)),
    y: Number((CY + r * Math.sin(a)).toFixed(2)),
  };
}

function fracOf(dur: { name: string; frac: number }[], name: string) {
  return dur.find((d) => d.name === name)?.frac ?? 0;
}

function valOf(dur: { name: string; value: number }[], name: string) {
  return dur.find((d) => d.name === name)?.value ?? 0;
}

export function UtClock() {
  const loopRef = useRef<SVGGElement>(null);
  const arcRef = useRef<SVGGElement>(null);
  const tickRef = useRef<SVGGElement>(null);
  const spinRef = useRef<SVGGElement>(null);
  const tideRef = useRef<SVGGElement>(null);
  const pulseRef = useRef<SVGGElement>(null);
  const electronRef = useRef<SVGCircleElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const durStampRef = useRef<HTMLSpanElement>(null);
  const loopN = useRef<HTMLSpanElement>(null);
  const arcN = useRef<HTMLSpanElement>(null);
  const stampTick = useRef<HTMLSpanElement>(null);
  const stampTickT = useRef<HTMLSpanElement>(null);
  const durGq = useRef<HTMLSpanElement>(null);
  const durGqT = useRef<HTMLSpanElement>(null);
  const tickN = useRef<HTMLSpanElement>(null);
  const spinN = useRef<HTMLSpanElement>(null);
  const tideN = useRef<HTMLSpanElement>(null);
  const pulseN = useRef<HTMLSpanElement>(null);
  const gqN = useRef<HTMLSpanElement>(null);
  const qRef = useRef<HTMLSpanElement>(null);
  const seasonRef = useRef<HTMLSpanElement>(null);
  const cycleRef = useRef<HTMLSpanElement>(null);
  const nums = useRef<(SVGTextElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    let lastLoop = -1;
    let lastTick = -1;
    let lastGq = -1;
    let skipUntil = 0;
    let skipGqUntil = 0;
    const flip = (el: HTMLElement | null) => {
      if (!el) return;
      el.classList.remove("ut-flip");
      void el.offsetWidth;
      el.classList.add("ut-flip");
    };
    const frame = () => {
      const now = new Date();
      const lat = solarLat(now);
      const dur = durationNow(now);
      loopRef.current?.setAttribute("transform", `rotate(${lat.loopFrac * 360} ${CX} ${CY})`);
      arcRef.current?.setAttribute("transform", `rotate(${lat.arcFrac * 360} ${CX} ${CY})`);
      tickRef.current?.setAttribute("transform", `rotate(${lat.tickFrac * 360} ${CX} ${CY})`);
      spinRef.current?.setAttribute("transform", `rotate(${fracOf(dur, "Spin") * 360} ${CX} ${CY})`);
      tideRef.current?.setAttribute("transform", `rotate(${fracOf(dur, "Tide") * 360} ${CX} ${CY})`);
      pulseRef.current?.setAttribute("transform", `rotate(${fracOf(dur, "Pulse") * 360} ${CX} ${CY})`);

      const t = fracOf(dur, "GQ") * Math.PI * 2;
      const rx = 44;
      const ry = 18;
      const rot = -24 * (Math.PI / 180);
      const x = rx * Math.cos(t);
      const y = ry * Math.sin(t);
      if (electronRef.current) {
        electronRef.current.setAttribute("cx", String(CX + x * Math.cos(rot) - y * Math.sin(rot)));
        electronRef.current.setAttribute("cy", String(CY + x * Math.sin(rot) + y * Math.cos(rot)));
      }

      if (lat.loop !== lastLoop) {
        lastLoop = lat.loop;
        nums.current.forEach((el, i) => el?.setAttribute("data-on", i === lat.loop ? "1" : "0"));
      }

      const gq = valOf(dur, "GQ") % 100;
      const gqTenth = Math.floor(fracOf(dur, "GQ") * 10);
      const tickTenth = Math.floor(lat.tickRem * 10);
      const nowMs = now.getTime();

      let tickShow = lat.tick;
      if (lat.tick !== lastTick) {
        if (Math.random() < 0.006) {
          tickShow = (lat.tick + 1) % 100;
          skipUntil = nowMs + 140;
        }
        lastTick = lat.tick;
        flip(stampTick.current);
        flip(tickN.current);
      } else if (nowMs < skipUntil) {
        tickShow = (lat.tick + 1) % 100;
      }

      let gqShow = gq;
      if (gq !== lastGq) {
        if (Math.random() < 0.006) {
          gqShow = (gq + 1) % 100;
          skipGqUntil = nowMs + 140;
        }
        lastGq = gq;
        flip(durGq.current);
        flip(gqN.current);
      } else if (nowMs < skipGqUntil) {
        gqShow = (gq + 1) % 100;
      }

      if (stampRef.current) stampRef.current.textContent = `t:${lat.loop}:${pad2(lat.arc)}:`;
      if (stampTick.current) stampTick.current.textContent = pad2(tickShow);
      if (stampTickT.current) stampTickT.current.textContent = String(tickTenth);
      if (durStampRef.current) {
        durStampRef.current.textContent = `${pad2(valOf(dur, "Spin") % 100)}:${pad2(valOf(dur, "Tide") % 100)}:${pad2(valOf(dur, "Pulse") % 100)}:`;
      }
      if (durGq.current) durGq.current.textContent = pad2(gqShow);
      if (durGqT.current) durGqT.current.textContent = String(gqTenth);
      if (loopN.current) loopN.current.textContent = String(lat.loop);
      if (arcN.current) arcN.current.textContent = pad2(lat.arc);
      if (tickN.current) tickN.current.textContent = pad2(tickShow);
      if (spinN.current) spinN.current.textContent = pad2(valOf(dur, "Spin") % 100);
      if (tideN.current) tideN.current.textContent = pad2(valOf(dur, "Tide") % 100);
      if (pulseN.current) pulseN.current.textContent = pad2(valOf(dur, "Pulse") % 100);
      if (gqN.current) gqN.current.textContent = pad2(gqShow);
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
    <div className="ut-stage mx-auto mt-8 max-w-[340px]">
      <div className="ut-plaque">
        <span className="ut-plaque-k">Quant · t:0</span>
        <span ref={qRef} className="ut-plaque-v">
          —
        </span>
      </div>

      <div className="ut-case">
        <svg viewBox="0 0 400 400" className="ut-dial" role="img" aria-label="Universal Times dual clock">
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
              <feGaussianBlur stdDeviation="1.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx={CX} cy={CY} r="192" fill="#0a0808" />
          <circle cx={CX} cy={CY} r="186" fill="url(#ut-void)" />
          <circle cx={CX} cy={CY} r="186" fill="none" stroke="rgb(255 90 31 / 0.22)" strokeWidth="0.9" />
          <circle cx={CX} cy={CY} r="146" fill="none" stroke="rgb(140 180 188 / 0.18)" strokeWidth="0.8" />

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
                stroke={i === 5 ? "rgb(243 236 225 / 0.55)" : "rgb(255 90 31 / 0.35)"}
                strokeWidth={i === 0 || i === 5 ? 1.5 : 0.8}
              />
            );
          })}

          {Array.from({ length: 10 }, (_, i) => {
            const p = polar(155, i * 36);
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
          <circle cx={CX} cy={CY} r={ARC_R} className="ut-orbit ut-orbit-loop" />
          <circle cx={CX} cy={CY} r={TICK_R} className="ut-orbit ut-orbit-tick" />

          <g ref={spinRef}>
            <path
              d={`M${CX} ${CY + 6} L${CX - 5} ${CY - 88} Q${CX} ${CY - 104} ${CX + 5} ${CY - 88} Z`}
              fill="rgb(140 180 188 / 0.7)"
            />
          </g>
          <g ref={tideRef}>
            <path
              d={`M${CX - 2} ${CY + 4} L${CX - 2} ${CY - 70} L${CX - 8} ${CY - 86} L${CX} ${CY - 76} L${CX + 8} ${CY - 86} L${CX + 2} ${CY - 70} L${CX + 2} ${CY + 4} Z`}
              fill="rgb(140 180 188 / 0.55)"
            />
          </g>
          <g ref={pulseRef}>
            <polygon
              points={`${CX},${CY - 58} ${CX + 3},${CY - 50} ${CX + 10},${CY - 50} ${CX + 4},${CY - 45} ${CX + 6},${CY - 38} ${CX},${CY - 43} ${CX - 6},${CY - 38} ${CX - 4},${CY - 45} ${CX - 10},${CY - 50} ${CX - 3},${CY - 50}`}
              fill="rgb(180 210 214 / 0.7)"
            />
          </g>

          <g ref={loopRef}>
            <polygon
              points={`${CX},${CY - LOOP_R - 9} ${CX + 7},${CY - LOOP_R + 4} ${CX},${CY - LOOP_R} ${CX - 7},${CY - LOOP_R + 4}`}
              fill="rgb(224 100 50 / 0.85)"
            />
          </g>
          <g ref={arcRef}>
            <polygon
              points={`${CX},${CY - ARC_R - 6} ${CX + 5},${CY - ARC_R} ${CX},${CY - ARC_R + 6} ${CX - 5},${CY - ARC_R}`}
              fill="rgb(243 186 150 / 0.75)"
            />
          </g>
          <g ref={tickRef}>
            <circle cx={CX} cy={CY - TICK_R} r="3.2" fill="rgb(224 100 50 / 0.8)" />
          </g>

          <ellipse
            cx={CX}
            cy={CY}
            rx="44"
            ry="18"
            fill="none"
            stroke="rgb(140 180 188 / 0.35)"
            strokeWidth="0.8"
            strokeDasharray="2 4"
            transform={`rotate(-24 ${CX} ${CY})`}
          />
          <circle ref={electronRef} cx={CX} cy={CY} r="2.2" fill="rgb(180 210 214 / 0.85)" />

          <circle cx={CX} cy={CY} r="16" fill="url(#ut-ember)" />
          <circle cx={CX} cy={CY} r="21" className="ut-core-halo" fill="none" />
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

      <div className="ut-dual">
        <div className="ut-stamp">
          <div className="ut-stamp-k">Solar · where</div>
          <div className="ut-stamp-v">
            <span ref={stampRef}>t:-:--:</span>
            <span ref={stampTick} className="ut-live-unit">
              --
            </span>
            <span className="ut-live-dot">.</span>
            <span ref={stampTickT} className="ut-live-tenth">
              -
            </span>
          </div>
          <div className="ut-chips">
            <span>
              Loop <b ref={loopN}>—</b>
            </span>
            <span>
              Arc <b ref={arcN}>—</b>
            </span>
            <span className="ut-chip-live">
              Tick <b ref={tickN}>—</b>
            </span>
          </div>
        </div>
        <div className="ut-stamp ut-stamp-dur">
          <div className="ut-stamp-k">Duration · how long</div>
          <div className="ut-stamp-v ut-stamp-v-dur">
            <span ref={durStampRef}>--:--:--:</span>
            <span ref={durGq} className="ut-live-unit">
              --
            </span>
            <span className="ut-live-dot">.</span>
            <span ref={durGqT} className="ut-live-tenth">
              -
            </span>
          </div>
          <div className="ut-chips ut-chips-dur">
            <span>
              Spin <b ref={spinN}>—</b>
            </span>
            <span>
              Tide <b ref={tideN}>—</b>
            </span>
            <span>
              Pulse <b ref={pulseN}>—</b>
            </span>
            <span className="ut-chip-live">
              GQ <b ref={gqN}>—</b>
            </span>
          </div>
        </div>
      </div>
      <p className="ut-legend">Ember is where. Steel is how long. The electron is GQ.</p>
    </div>
  );
}