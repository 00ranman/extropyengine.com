import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Btn } from "@/components/ui-bits";
import { dollarCheckout } from "@/content/dollar";

/**
 * The landing page ladder, in the order a cold visitor can hold it:
 * the gripe, the loop (LoopStrip, in home-shop), the receipt, the wall,
 * the dollar, and the doors down to the machinery. Nothing on this page
 * plays music and nothing here speaks the spec. The full strength
 * version lives one click down, where it always lived.
 */

const sectionShell = "border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.28em] text-primary uppercase">{children}</p>
  );
}

export function LandingHero() {
  return (
    <section className="border-b border-primary/12 px-[8vw] py-16 max-md:px-[6vw] max-md:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Extropy Engine</Kicker>
        <h1 className="font-display mt-3 text-[clamp(28px,5vw,52px)] leading-[1.1] tracking-[0.03em] text-fg">
          Somebody did the work. Nobody wrote it down.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          It happens at every job and every kitchen table. A neighbor gets helped, a shift gets
          covered, a fence gets fixed, and a week later it is like it never happened. No record,
          no standing, and the next time anyone asks what you are worth, you start from zero.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          The Extropy Engine is a public record where finished work gets counted, in the open,
          where anyone can check it. That is the whole idea, and it takes about thirty seconds
          to see how it runs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn href="#loop" primary>
            How it works
          </Btn>
          <Btn href="/dollar">Fund the test</Btn>
        </div>
      </div>
    </section>
  );
}

export function ReceiptBeat() {
  return (
    <section className={sectionShell}>
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>The receipt</Kicker>
        <h2 className="font-display mt-2 text-[clamp(22px,3.4vw,34px)] tracking-[0.03em] text-fg">
          The confirmation is the record
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          When both sides tap done, the confirmation lands on a public record. It is not a
          review, it is not a star rating, and it does not live on one company&apos;s server
          where it can be quietly edited. It is a receipt. It says this work happened, both
          sides signed it, and the loop closed.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Standing comes from how many of those a person has closed. Not from followers, not
          from a profile, not from who vouches for you in private. Anyone can walk the record
          and count for themselves.
        </p>
      </div>
    </section>
  );
}

export function WallBeat() {
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
  return (
    <section className={sectionShell}>
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Already running</Kicker>
        <h2 className="font-display mt-2 text-[clamp(22px,3.4vw,34px)] tracking-[0.03em] text-fg">
          The wall is public, like everything else here
        </h2>
        {count !== null ? (
          <div className="mx-auto mt-6 flex max-w-md flex-wrap items-baseline justify-center gap-x-3 gap-y-1 border border-primary/18 px-5 py-4">
            <span className="font-display text-3xl tracking-[0.03em] text-fg">{count}</span>
            <span className="text-[15px] text-muted">
              {count === 1 ? "supporter is in." : "supporters are in."} The goal is ten thousand.
            </span>
          </div>
        ) : null}
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          The first hundred supporters are the founding supporters, and every one of them sits
          on a public wall as a number, in the order they showed up. No names sold, no tiers,
          no locked door behind the number.
        </p>
        <div className="mt-7">
          <Btn href="/supporters">See the wall</Btn>
        </div>
      </div>
    </section>
  );
}

export function DollarBeat() {
  return (
    <section className={sectionShell}>
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>The ask</Kicker>
        <h2 className="font-display mt-2 text-[clamp(22px,3.4vw,34px)] tracking-[0.03em] text-fg">
          Everything is free. The dollar funds the test.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          The record, the school, the book, the music. None of it sits behind the dollar. It is
          free to anyone who shows up, supporter or not, and it stays that way.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          What the dollar buys is the test itself: whether a public record of finished work can
          hold real weight, out in the open, with real people. Tests are not free to run. A
          dollar a month is the smallest way to fund one.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          This page was built to talk you into that dollar, and the method is on the table,
          because there is only the one move: everything free, the test funded a dollar at a
          time, cancel anytime.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn href={dollarCheckout.monthlyAchUrl} primary external>
            Fund the test: $1 a month
          </Btn>
          <Btn href="/dollar">The whole pitch</Btn>
        </div>
        <p className="mt-5 font-mono text-[11px] tracking-[0.08em] text-dim">
          Bank account sign-up, about a minute. Prefer once a year? The $12 door is on the
          pitch page.
        </p>
      </div>
    </section>
  );
}

export function DeepDoors() {
  const tiles = [
    { label: "The math", href: "/math", note: "What the mint is claiming, line by line", external: false },
    { label: "The build", href: "/build", note: "What exists, what is needed, where it is going", external: false },
    { label: "The book", href: "/book", note: "The field guide, free to read", external: false },
    { label: "The papers", href: "/papers", note: "Charters, codex, field notes", external: false },
    { label: "The music", href: "/music", note: "Lladnaros, on its own page, where it belongs", external: false },
    { label: "The code", href: "https://github.com/00ranman/extropy-engine", note: "The repo. Clone it and you are in it", external: true },
  ];
  return (
    <section className="px-[8vw] py-14 max-md:px-[6vw]">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Downstairs</Kicker>
        <h2 className="font-display mt-2 text-[clamp(22px,3.4vw,34px)] tracking-[0.03em] text-fg">
          For people who want the machinery
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Everything past this point is the full strength version: the formula, the spec, the
          code, the book, the music. None of it is required reading. It is here for the ones
          who want to check the work instead of taking the porch version on faith.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) =>
          t.external ? (
            <a
              key={t.href}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="block border border-primary/18 bg-[rgb(20_12_8_/_0.45)] px-5 py-6 transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <h3 className="font-display text-lg tracking-[0.04em] text-fg">{t.label}</h3>
              <p className="mt-2 text-sm leading-snug text-muted">{t.note}</p>
            </a>
          ) : (
            <Link
              key={t.href}
              to={t.href}
              className="block border border-primary/18 bg-[rgb(20_12_8_/_0.45)] px-5 py-6 transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <h3 className="font-display text-lg tracking-[0.04em] text-fg">{t.label}</h3>
              <p className="mt-2 text-sm leading-snug text-muted">{t.note}</p>
            </Link>
          ),
        )}
      </div>
      <p className="mt-10 text-center text-xs tracking-[0.15em] text-[#666]">
        Built by Randall Gossett. Everything on this site is free.
      </p>
    </section>
  );
}
