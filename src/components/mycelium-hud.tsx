import { useEffect, useRef, useState } from "react";

type Branch = {
  x: number;
  y: number;
  a: number;
  gen: number;
  life: number;
};

function tick(ctx: CanvasRenderingContext2D, w: number, h: number, rho: number, branches: Branch[]) {
  ctx.fillStyle = "rgba(7,8,6,0.08)";
  ctx.fillRect(0, 0, w, h);
  const n = Math.max(1, Math.floor(4 + rho * 28));
  while (branches.length < n) {
    branches.push({
      x: w * (0.2 + Math.random() * 0.6),
      y: h * 0.92,
      a: -Math.PI / 2 + (Math.random() - 0.5) * 0.8,
      gen: 0,
      life: 40 + Math.random() * 50,
    });
  }
  const next: Branch[] = [];
  for (const b of branches) {
    const step = 2 + rho * 3;
    const nx = b.x + Math.cos(b.a) * step;
    const ny = b.y + Math.sin(b.a) * step;
    ctx.strokeStyle = `rgba(180, 220, 90, ${0.18 + rho * 0.45})`;
    ctx.lineWidth = Math.max(0.4, 2.2 - b.gen * 0.35);
    ctx.beginPath();
    ctx.moveTo(b.x, b.y);
    ctx.lineTo(nx, ny);
    ctx.stroke();
    b.x = nx;
    b.y = ny;
    b.a += (Math.random() - 0.5) * (0.25 + rho * 0.35);
    b.life -= 1;
    if (b.life > 0 && ny > 8 && nx > 8 && nx < w - 8) next.push(b);
    if (Math.random() < 0.04 + rho * 0.08 && b.gen < 5 && next.length < 80) {
      next.push({
        x: nx,
        y: ny,
        a: b.a + (Math.random() > 0.5 ? 0.6 : -0.6),
        gen: b.gen + 1,
        life: 20 + Math.random() * 30,
      });
    }
  }
  branches.length = 0;
  branches.push(...next.slice(-80));
}

export function MyceliumHud() {
  const ref = useRef<HTMLCanvasElement>(null);
  const rhoRef = useRef(0.12);
  const [rho, setRho] = useState(0.12);
  const demo = true;

  useEffect(() => {
    rhoRef.current = rho;
  }, [rho]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const branches: Branch[] = [];
    let frame = 0;
    const loop = () => {
      const w = canvas.width;
      const h = canvas.height;
      tick(ctx, w, h, rhoRef.current, branches);
      frame = requestAnimationFrame(loop);
    };
    const fit = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.max(320, Math.floor(r.width * devicePixelRatio));
      canvas.height = Math.max(200, Math.floor(220 * devicePixelRatio));
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "#070806";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="border border-primary/20 bg-bg">
      <canvas ref={ref} className="block h-56 w-full" aria-label="Mycelium HUD of fiat residual" />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-primary/12 px-3 py-3">
        <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
          ρ {rho.toFixed(3)}
          <span className="ml-2 text-dim">{demo ? "demo index" : "live tills"}</span>
        </p>
        <label className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
          Overlay share
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={rho}
            onChange={(e) => setRho(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
