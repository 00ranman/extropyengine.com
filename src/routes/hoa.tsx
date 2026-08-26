import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { EssayLayout } from "@/components/essay-layout";
import { hoaClone, hoaDoors, hoaFb, hoaJobs, hoaNotLegal, hoaPage, hoaSmart, hoaSteps, hoaStory } from "@/content/hoa";

export const Route = createFileRoute("/hoa")({
  component: HoaPage,
  head: () => ({
    meta: [
      { title: "Get rid of the HOA — Extropy Engine" },
      {
        name: "description",
        content:
          "Register like you would for any neighborhood group. Take the HOA’s jobs. Work orders neighbors sign closed. Dissolve them on paper if the vote is there — in practice if it isn’t.",
      },
    ],
  }),
});

function HoaPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hoaFb);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <EssayLayout backTo="/dfao" backLabel="DFAO" kicker={hoaPage.kicker} title={hoaPage.title}>
      <p>{hoaPage.lead}</p>
      {hoaStory.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      <p className="border border-primary/20 bg-primary/5 px-4 py-3 text-sm">{hoaNotLegal}</p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Two doors. You always have the second.</h2>
      <dl className="space-y-4">
        {hoaDoors.map((d) => (
          <div key={d.title}>
            <dt className="font-mono text-[12px] tracking-[0.08em] text-primary">{d.title}</dt>
            <dd>{d.body}</dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Their jobs. We take them.</h2>
      <dl className="space-y-4">
        {hoaJobs.map((row) => (
          <div key={row.job}>
            <dt className="font-mono text-[12px] tracking-[0.08em] text-primary">{row.job}</dt>
            <dd>{row.how}</dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{hoaSmart.title}</h2>
      <p>{hoaSmart.lead}</p>
      {hoaSmart.body.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}

      {hoaSteps.map((s) => (
        <section key={s.n} className="space-y-2 pt-4">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">
            <span className="font-mono text-sm tracking-[0.16em] text-primary">{s.n}</span> {s.title}
          </h2>
          <p>{s.body}</p>
        </section>
      ))}

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{hoaClone.title}</h2>
      <p>{hoaClone.body}</p>
      <p>
        <a href={hoaClone.href} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          github.com/00ranman/extropy-engine →
        </a>
      </p>
      <ul className="list-disc space-y-1 pl-5">
        {hoaClone.docs.map((d) => (
          <li key={d.href}>
            <a href={d.href} className="text-primary hover:underline" target="_blank" rel="noreferrer">
              {d.label}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Longer names for the structure:{" "}
        <Link to="/dfao" className="text-primary hover:underline">
          DFAO
        </Link>
        .
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Facebook post</h2>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-sans text-sm leading-relaxed text-fg">
        {hoaFb}
      </pre>
      <button
        type="button"
        className="mt-3 border border-primary bg-primary/15 px-4 py-2 font-mono text-[12px] tracking-[0.14em] text-primary uppercase hover:bg-primary hover:text-ink"
        onClick={copy}
      >
        {copied ? "Copied" : "Copy the post"}
      </button>
    </EssayLayout>
  );
}
