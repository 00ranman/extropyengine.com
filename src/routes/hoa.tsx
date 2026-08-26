import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  hoaFb,
  hoaLegal,
  hoaPage,
  hoaRun,
  hoaStory,
  hoaWrap,
} from "@/content/hoa";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/hoa")({
  component: HoaPage,
  head: () => ({
    meta: [
      { title: "HOA takeover — Extropy Engine" },
      {
        name: "description",
        content:
          "Take the jobs. Keep the book. Clone the app. Run it on a laptop. Make the HOA irrelevant by doing the work.",
      },
    ],
  }),
});

function HoaPage() {
  const [copied, setCopied] = useState(false);
  async function copyBlurb() {
    await navigator.clipboard.writeText(hoaFb);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <EssayLayout backTo="/#engine" backLabel="Engine" kicker={hoaPage.kicker} title={hoaPage.title}>
      <p>{hoaPage.lead}</p>
      <p className="flex flex-wrap gap-3">
        <Link
          to="/hoa/sunset-oaks"
          className="border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs tracking-[0.12em] text-primary"
        >
          Sunset Oaks →
        </Link>
        <a
          href={hoaRun.app}
          className="border border-fg/20 px-4 py-2 font-mono text-xs tracking-[0.12em] text-dim"
          target="_blank"
          rel="noreferrer"
        >
          neighborhood-app on GitHub →
        </a>
      </p>

      {hoaStory.map((s) => (
        <section key={s.t} className="space-y-2 pt-2">
          <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{s.t}</h2>
          <p>{s.d}</p>
        </section>
      ))}

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Their list, our loops</h2>
      <div className="overflow-x-auto border border-primary/18">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
              <th className="border-b border-primary/20 px-3 py-2 font-normal">What they invoice</th>
              <th className="border-b border-primary/20 px-3 py-2 font-normal">What we run</th>
            </tr>
          </thead>
          <tbody>
            {hoaWrap.map((row) => (
              <tr key={row.hoa}>
                <td className="border-b border-fg/10 px-3 py-3 align-top font-mono text-xs text-primary">
                  {row.hoa}
                </td>
                <td className="border-b border-fg/10 px-3 py-3 align-top">{row.engine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{hoaRun.title}</h2>
      <p>{hoaRun.lead}</p>
      <p className="font-mono text-[11px] tracking-[0.12em] text-primary">TODAY — JUST NODE</p>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">
        {hoaRun.clone}
        {"\n"}
        {hoaRun.light}
      </pre>
      <p>{hoaRun.lightAfter}</p>
      <p className="font-mono text-[11px] tracking-[0.12em] text-primary">FULL ENGINE</p>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">
        {hoaRun.full}
      </pre>
      <p>{hoaRun.fullAfter}</p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{hoaLegal.title}</h2>
      {hoaLegal.body.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      <p className="border border-primary/20 bg-primary/5 px-4 py-3 text-sm">{hoaLegal.dues}</p>

      <p>
        First neighborhood:{" "}
        <Link to="/hoa/sunset-oaks" className="text-primary hover:underline">
          Sunset Oaks
        </Link>
        {" · "}
        <a href={hoaRun.repo} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          github.com/00ranman/extropy-engine
        </a>
        {" · "}
        <Link to="/dfao" className="text-primary hover:underline">
          DFAO
        </Link>
        .
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">The pitch</h2>
      <p>
        <button
          type="button"
          onClick={() => void copyBlurb()}
          className="border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs tracking-[0.12em] text-primary"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </p>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">
        {hoaFb}
      </pre>
    </EssayLayout>
  );
}
