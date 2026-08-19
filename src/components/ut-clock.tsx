import { useEffect, useRef } from "react";
import { durationNow, pad2, solarLat } from "@/lib/timekeeping";

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
  const solarH = useRef<SVGGElement>(null);
  const solarM = useRef<SVGGElement>(null);
  const solarS = useRef<SVGGElement>(null);
  const tickHand = useRef<SVGGElement>(null);
  const waveHand = useRef<SVGGElement>(null);
  const gqHand = useRef<SVGGElement>(null);
  const electronRef = useRef<SVGGElement>(null);
  const solarRead = useRef<HTMLSpanElement>(null);
  const latRead = useRef<HTMLSpanElement>(null);
  const durRead = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const frame = () => {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 24) + m / 60;
      const lat = solarLat(now);
      const dur = durationNow(now);
      const gq = dur.find((d) => d.name === "GQ");
      const wave = dur.find((d) => d.name === "Wave");

      solarH.current?.setAttribute("transform", `rotate(${h * 15} ${CX} ${CY})`);
      solarM.current?.setAttribute("transform", `rotate(${m * 6} ${CX} ${CY})`);
      solarS.current?.setAttribute("transform", `rotate(${s * 6} ${CX} ${CY})`);
      tickHand.current?.setAttribute("transform", `rotate(${lat.tickFrac * 360} ${CX} ${CY})`);
      waveHand.current?.setAttribute("transform", `rotate(${(wave?.frac ?? 0) * 360} ${CX} ${CY})`);
      gqHand.current?.setAttribute("transform", `rotate(${(gq?.frac ?? 0) * 360} ${CX} ${CY})`);
      electronRef.current?.setAttribute("transform", `rotate(${(now.getTime() / 40) % 360} ${CX} ${CY})`);

      if (solarRead.current) {
        solarRead.current.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
      }
      if (latRead.current) {
        latRead.current.textContent = `${lat.loop}:${pad2(lat.arc)}:${pad2(lat.tick)}`;
      }
      if (durRead.current) {
        const live = ["Spin", "Tide", "Pulse", "Wave", "GQ"].map((n) => {
          const u = dur.find((d) => d.name === n);
          return pad2(u ? u.value % 100 : 0);
        });
        durRead.current.textContent = live.join(":");
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="ut-stage mx-auto mt-10 max-w-[480px]">
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

        <g ref={waveHand}>
          <line x1={CX} y1={CY} x2={CX} y2="86" className="ut-hand-dur" strokeWidth="2.2" filter="url(#ut-cyan)" />
        </g>
        <g ref={gqHand}>
          <line x1={CX} y1={CY} x2={CX} y2="64" className="ut-hand-gq" strokeWidth="1.2" />
        </g>
        <g ref={tickHand}>
          <line x1={CX} y1={CY + 16} x2={CX} y2="52" className="ut-hand-tick" strokeWidth="1.4" />
        </g>
        <g ref={solarH}>
          <line
            x1={CX}
            y1={CY + 14}
            x2={CX}
            y2="100"
            className="ut-hand-solar"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#ut-ember)"
          />
        </g>
        <g ref={solarM}>
          <line x1={CX} y1={CY + 18} x2={CX} y2="72" className="ut-hand-solar-min" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g ref={solarS}>
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

      <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
        <div className="border border-primary/25 px-4 py-3">
          <div className="text-[10px] tracking-[0.2em] text-primary uppercase">Solar · Earth day</div>
          <div className="font-brand mt-1 text-2xl tracking-[0.08em] text-primary tabular-nums">
            <span ref={solarRead}>--:--:--</span>
          </div>
          <div className="mt-2 text-[10px] tracking-[0.18em] text-primary/80 uppercase">Loop : Arc : Tick</div>
          <div className="font-brand text-xl tracking-[0.12em] text-primary tabular-nums">
            <span ref={latRead}>-:--:--</span>
          </div>
          <p className="mt-1 text-xs leading-snug text-dim">
            10 loops · 1,000 arcs · 100,000 ticks per local day. Tick = 0.864 s. Orange hands.
          </p>
        </div>
        <div className="border border-accent/25 px-4 py-3">
          <div className="text-[10px] tracking-[0.2em] text-accent uppercase">Duration · hydrogen</div>
          <div className="mt-2 text-[10px] tracking-[0.18em] text-accent/80 uppercase">
            Spin : Tide : Pulse : Wave : GQ
          </div>
          <div className="font-brand text-[clamp(18px,4vw,26px)] tracking-[0.06em] text-accent tabular-nums">
            <span ref={durRead}>--:--:--:--:--</span>
          </div>
          <p className="mt-1 text-xs leading-snug text-dim">
            Cascaded remainders. GQ (~0.70 s) and Wave (~70 s) drive the cyan hands. Same count anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}