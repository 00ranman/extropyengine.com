import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/supporters")({
  component: SupportersPage,
  head: () => ({
    meta: [
      { title: "Supporters · Extropy Engine" },
      {
        name: "description",
        content:
          "The public wall of Extropy Engine supporters, by number only. Every supporter keeps their number. The first 100 are Founding Supporters. Everything here is free either way; the dollar funds the work.",
      },
    ],
  }),
});

function useSupporterCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let live = true;
    fetch("/supporter-count.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (live && d && typeof d.count === "number") setCount(d.count);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  return count;
}

function NumberGrid({ from, to }: { from: number; to: number }) {
  const numbers: number[] = [];
  for (let n = from; n <= to; n += 1) numbers.push(n);
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {numbers.map((n) => (
        <div key={n} className="border border-primary/18 px-4 py-3">
          <div className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">Supporter</div>
          <div className="font-display text-2xl tracking-[0.03em] text-fg">#{n}</div>
        </div>
      ))}
    </div>
  );
}

function Wall({ count }: { count: number }) {
  if (count <= 0) {
    return <p>Nobody is on the wall yet. Number 1 is open.</p>;
  }
  const foundingTop = Math.min(count, 100);
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="font-display text-2xl tracking-[0.04em] text-fg">Founding Supporters</h2>
        <p>The first 100 numbers. When the count passes 100, this section is full and stays full.</p>
        <NumberGrid from={1} to={foundingTop} />
      </section>
      {count > 100 ? (
        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">Supporters</h2>
          <NumberGrid from={101} to={count} />
        </section>
      ) : null}
    </div>
  );
}

function SupportersPage() {
  const count = useSupporterCount();
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20">
        <div className="mb-3 text-[11px] tracking-[0.28em] text-primary uppercase">The Wall</div>
        <h1 className="font-display mb-8 text-[clamp(28px,4vw,46px)] leading-[1.15] tracking-[0.03em]">
          Supporters
        </h1>
        <div className="space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Every supporter gets a number when they come in, in the order they came in, and the number stays
            theirs. No names on this wall. The number is the record.
          </p>
          <p>
            A number is not a perk and it buys nothing. Everything on this site is free whether your number is
            up here or not. The dollar does not gate a single page, paper, or song. It funds the work so the
            work can stay free.
          </p>
          {count !== null ? <Wall count={count} /> : null}
          <p>
            The goal is ten thousand. If you want a number, it is one dollar a month.
          </p>
          <p>
            <Link to="/dollar" className="text-primary hover:underline">
              Get your number →
            </Link>
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
