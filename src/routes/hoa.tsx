import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  hoaAfter,
  hoaCan,
  hoaDoors,
  hoaDownload,
  hoaFb,
  hoaGit,
  hoaLine,
  hoaPage,
  hoaRoles,
  hoaUrls,
  hoaWrap,
} from "@/content/hoa";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/hoa")({
  component: HoaPage,
  head: () => ({
    meta: [
      { title: "Neighborhood MESO — Extropy Engine" },
      {
        name: "description",
        content:
          "Download Docker. Paste one line. Your laptop is a node. HOA jobs run on the Extropy Engine. The DAG starts today.",
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

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">What to download</h2>
      {hoaDownload.map((s) => (
        <section key={s.n} className="space-y-2 pt-2">
          <h3 className="font-display text-xl text-fg">
            <span className="font-mono text-sm tracking-[0.16em] text-primary">{s.n}</span> {s.title}
          </h3>
          <p>{s.body}</p>
          {"href" in s && s.href ? (
            <p>
              <a href={s.href} className="text-primary hover:underline" target="_blank" rel="noreferrer">
                {s.label} →
              </a>
            </p>
          ) : null}
        </section>
      ))}
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">
        {hoaLine}
      </pre>
      <ul className="list-disc space-y-2 pl-5">
        {hoaAfter.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <p className="text-sm text-dim">
        After it comes up, these are on this machine:
      </p>
      <ul className="list-disc space-y-1 pl-5 font-mono text-xs">
        {hoaUrls.map((u) => (
          <li key={u.href}>
            {u.label}: {u.href}
          </li>
        ))}
      </ul>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">What this lets you do — today</h2>
      <dl className="space-y-4">
        {hoaCan.map((row) => (
          <div key={row.t}>
            <dt className="font-mono text-[12px] tracking-[0.08em] text-primary">{row.t}</dt>
            <dd>{row.d}</dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">HOA jobs, on the Engine</h2>
      <div className="overflow-x-auto border border-primary/18">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
              <th className="border-b border-primary/20 px-3 py-2 font-normal">Their list</th>
              <th className="border-b border-primary/20 px-3 py-2 font-normal">The wrapper</th>
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

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Positions, rebranded</h2>
      <p>
        You don’t clone their org chart. You convert the gavel into rules that run themselves.
      </p>
      <dl className="space-y-4">
        {hoaRoles.map((row) => (
          <div key={row.old}>
            <dt className="font-mono text-[12px] tracking-[0.08em] text-primary">{row.old}</dt>
            <dd>{row.now}</dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Two doors</h2>
      <dl className="space-y-4">
        {hoaDoors.map((d) => (
          <div key={d.title}>
            <dt className="font-mono text-[12px] tracking-[0.08em] text-primary">{d.title}</dt>
            <dd>{d.body}</dd>
          </div>
        ))}
      </dl>

      <p>
        Kernel:{" "}
        <a href={hoaGit.repo} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          github.com/00ranman/extropy-engine
        </a>
        {" · "}
        <a href={hoaGit.preset} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          preset
        </a>
        {" · "}
        <Link to="/dfao" className="text-primary hover:underline">
          DFAO
        </Link>
        .
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">The pitch</h2>
      <p>For the group. Copy it. Don’t turn it into a whitepaper.</p>
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
